import { useState, useEffect } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { CheckCircle2, Clock, XCircle, AlertCircle, ChevronLeft, ChevronRight, BookmarkPlus, Play } from "lucide-react";
import { branches } from "@/data/branches";
import { mockQuestions } from "@/data/mockQuestions";

type TestState = 'pick' | 'instructions' | 'live' | 'submitConfirm' | 'result';
type AnswerState = 'unanswered' | 'answered' | 'marked';

export default function MockTest() {
  const [state, setState] = useState<TestState>('pick');
  const [branch, setBranch] = useState("");
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  
  // Test Session State
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [status, setStatus] = useState<Record<number, AnswerState>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 mins in seconds
  
  // Submit dialog
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    let timer: any;
    if (state === 'live' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            handleFinalSubmit();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [state, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const startTest = () => {
    const branchQs = mockQuestions.find(mq => mq.branch === branch)?.questions || [];
    if (branchQs.length === 0) {
      alert("No questions available for this branch yet.");
      return;
    }
    setQuestions(branchQs);
    setAnswers({});
    setStatus({});
    setCurrentQ(0);
    setTimeLeft(600);
    setState('live');
  };

  const handleAnswer = (val: string) => {
    setAnswers(prev => ({ ...prev, [currentQ]: parseInt(val) }));
  };

  const handleSaveNext = () => {
    if (answers[currentQ] !== undefined) {
      setStatus(prev => ({ ...prev, [currentQ]: 'answered' }));
    }
    if (currentQ < questions.length - 1) setCurrentQ(q => q + 1);
  };

  const handleMarkReview = () => {
    setStatus(prev => ({ ...prev, [currentQ]: 'marked' }));
    if (currentQ < questions.length - 1) setCurrentQ(q => q + 1);
  };

  const handleFinalSubmit = () => {
    setShowConfirm(false);
    setState('result');
  };

  const getScore = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctIndex) score++;
    });
    return score;
  };

  const renderPick = () => (
    <div className="max-w-md mx-auto py-16">
      <Card>
        <CardHeader>
          <CardTitle>Select Branch for Mock Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Select onValueChange={setBranch} value={branch}>
            <SelectTrigger><SelectValue placeholder="Select a branch" /></SelectTrigger>
            <SelectContent>
              {mockQuestions.map(mq => {
                const b = branches.find(br => br.code === mq.branch);
                return <SelectItem key={mq.branch} value={mq.branch}>{b?.code} - {b?.name}</SelectItem>;
              })}
            </SelectContent>
          </Select>
          <Button onClick={() => setState('instructions')} disabled={!branch} className="w-full">
            Proceed to Instructions
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderInstructions = () => (
    <div className="max-w-3xl mx-auto py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-primary font-serif">General Instructions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
            <li>Total duration of the mock test is 10 minutes.</li>
            <li>The clock will be set at the server. The countdown timer in the top right corner will display the remaining time available for you to complete the examination.</li>
            <li>When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
            <li>The Question Palette displayed on the right side of screen will show the status of each question.</li>
            <li>You can click on the "&gt;" arrow to navigate to the next question.</li>
            <li>Click on "Save & Next" to save your answer for the current question and then go to the next question.</li>
            <li>Click on "Mark for Review" to flag the question for later review.</li>
          </ul>
          <div className="flex justify-end gap-4 pt-4 border-t">
            <Button variant="outline" onClick={() => setState('pick')}>Cancel</Button>
            <Button onClick={startTest} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8">
              <Play className="w-4 h-4 mr-2" /> Start Test
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderLive = () => {
    const q = questions[currentQ];
    
    return (
      <div className="max-w-6xl mx-auto py-6 grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)] min-h-[600px]">
        {/* Main Panel */}
        <div className="lg:col-span-3 flex flex-col border bg-card rounded-xl shadow-sm overflow-hidden">
          <div className="bg-muted px-6 py-4 border-b flex justify-between items-center">
            <h2 className="font-bold text-lg">Question {currentQ + 1} of {questions.length}</h2>
            <div className={`flex items-center font-mono font-bold text-lg px-3 py-1 rounded border ${timeLeft < 60 ? 'bg-red-100 text-red-700 border-red-200' : 'bg-background'}`}>
              <Clock className="w-5 h-5 mr-2" /> {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="p-6 flex-1 overflow-y-auto">
            <h3 className="text-xl font-medium mb-8 leading-relaxed">{q.question}</h3>
            <RadioGroup value={answers[currentQ]?.toString()} onValueChange={handleAnswer} className="space-y-4">
              {q.options.map((opt: string, i: number) => (
                <div key={i} className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors ${answers[currentQ] === i ? 'bg-primary/5 border-primary shadow-sm' : 'hover:bg-muted/50'}`}>
                  <RadioGroupItem value={i.toString()} id={`opt-${i}`} />
                  <Label htmlFor={`opt-${i}`} className="flex-1 cursor-pointer text-base font-normal">{opt}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="bg-muted/50 p-4 border-t flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setCurrentQ(q => Math.max(0, q - 1))} disabled={currentQ === 0}>
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
              </Button>
              <Button variant="outline" onClick={handleMarkReview} className="border-yellow-500 text-yellow-700 hover:bg-yellow-50">
                <BookmarkPlus className="w-4 h-4 mr-1" /> Mark for Review
              </Button>
            </div>
            <div className="flex gap-2">
              {currentQ < questions.length - 1 ? (
                <Button onClick={handleSaveNext} className="bg-primary px-8">Save & Next <ChevronRight className="w-4 h-4 ml-1" /></Button>
              ) : (
                <Button onClick={() => setShowConfirm(true)} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">Submit Test</Button>
              )}
            </div>
          </div>
        </div>

        {/* Right Palette */}
        <div className="flex flex-col border bg-card rounded-xl shadow-sm overflow-hidden">
          <div className="bg-primary text-primary-foreground p-4 text-center font-bold">Question Palette</div>
          <div className="p-4 flex-1">
            <div className="grid grid-cols-4 gap-2 mb-6">
              {questions.map((_, i) => {
                const s = status[i];
                let bg = "bg-muted text-muted-foreground border-muted-foreground/30";
                if (s === 'answered') bg = "bg-green-500 text-white border-green-600";
                if (s === 'marked') bg = "bg-yellow-500 text-white border-yellow-600";
                if (currentQ === i) bg += " ring-2 ring-offset-2 ring-primary";
                
                return (
                  <button 
                    key={i} 
                    onClick={() => setCurrentQ(i)}
                    className={`h-10 rounded-md font-bold text-sm border flex items-center justify-center transition-all ${bg}`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            
            <div className="space-y-2 text-xs border-t pt-4">
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-green-500"></div> Answered</div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-yellow-500"></div> Marked for Review</div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-muted border border-muted-foreground/30"></div> Not Visited / Unanswered</div>
            </div>
          </div>
          <div className="p-4 border-t bg-muted/30">
            <Button onClick={() => setShowConfirm(true)} variant="destructive" className="w-full">End Test</Button>
          </div>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const score = getScore();
    const total = questions.length;
    const answeredCount = Object.keys(answers).length;
    
    return (
      <div className="max-w-4xl mx-auto py-12 space-y-8">
        <Card className="border-t-4 border-t-primary shadow-lg overflow-hidden">
          <div className="bg-primary/5 py-8 text-center border-b">
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Test Completed</h2>
            <p className="text-muted-foreground">Here is your performance summary for {branch} Mock Test</p>
          </div>
          <CardContent className="p-8">
            <div className="grid sm:grid-cols-4 gap-6 text-center mb-10">
              <div className="bg-card border rounded-xl p-4 shadow-sm">
                <div className="text-sm font-semibold text-muted-foreground uppercase mb-1">Score</div>
                <div className="text-4xl font-bold text-primary">{score}<span className="text-lg text-muted-foreground">/{total}</span></div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
                <div className="text-sm font-semibold text-green-700 uppercase mb-1">Correct</div>
                <div className="text-4xl font-bold text-green-600">{score}</div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm">
                <div className="text-sm font-semibold text-red-700 uppercase mb-1">Incorrect</div>
                <div className="text-4xl font-bold text-red-600">{answeredCount - score}</div>
              </div>
              <div className="bg-muted border rounded-xl p-4 shadow-sm">
                <div className="text-sm font-semibold text-muted-foreground uppercase mb-1">Unattempted</div>
                <div className="text-4xl font-bold text-muted-foreground">{total - answeredCount}</div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6 border-b pb-2">Detailed Review</h3>
            <div className="space-y-6">
              {questions.map((q, i) => {
                const userAns = answers[i];
                const isCorrect = userAns === q.correctIndex;
                const isSkipped = userAns === undefined;

                return (
                  <div key={i} className="border rounded-lg p-5 bg-muted/10">
                    <div className="flex gap-3 mb-4">
                      <div className="mt-1">
                        {isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : 
                         isSkipped ? <AlertCircle className="w-5 h-5 text-gray-400" /> : 
                         <XCircle className="w-5 h-5 text-red-500" />}
                      </div>
                      <div>
                        <span className="font-bold text-sm text-muted-foreground mb-1 block">Question {i + 1}</span>
                        <p className="font-medium">{q.question}</p>
                      </div>
                    </div>
                    
                    <div className="pl-8 space-y-2 mb-4">
                      {q.options.map((opt: string, optIdx: number) => {
                        let rowClass = "p-3 rounded border text-sm flex justify-between items-center bg-card";
                        let badge = null;
                        
                        if (optIdx === q.correctIndex) {
                          rowClass = "p-3 rounded border-green-500 bg-green-50 text-green-900 font-medium flex justify-between items-center";
                          badge = <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">Correct Answer</Badge>;
                        } else if (optIdx === userAns) {
                          rowClass = "p-3 rounded border-red-500 bg-red-50 text-red-900 flex justify-between items-center";
                          badge = <Badge variant="outline" className="bg-red-100 text-red-700 border-red-300">Your Selection</Badge>;
                        }

                        return (
                          <div key={optIdx} className={rowClass}>
                            <span>{opt}</span>
                            {badge}
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="pl-8 text-sm text-muted-foreground bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <span className="font-semibold text-primary block mb-1">Explanation:</span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              <Button onClick={() => setState('pick')} size="lg">Take Another Test</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <SiteLayout>
      <PageBanner title="Practice Mock Test" crumbs={[{ label: "Mock Test" }]} />
      <div className="min-h-[calc(100vh-300px)] bg-muted/20 pb-12">
        {state === 'pick' && renderPick()}
        {state === 'instructions' && renderInstructions()}
        {state === 'live' && renderLive()}
        {state === 'result' && renderResult()}
      </div>

      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Mock Test?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to submit your test? You will not be able to change your answers after submission.
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="bg-muted p-2 rounded">Answered: <span className="font-bold text-green-600">{Object.keys(answers).length}</span></div>
                <div className="bg-muted p-2 rounded">Unattempted: <span className="font-bold text-gray-600">{questions.length - Object.keys(answers).length}</span></div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Resume Test</AlertDialogCancel>
            <AlertDialogAction onClick={handleFinalSubmit} className="bg-primary text-primary-foreground">Yes, Submit</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SiteLayout>
  );
}

// Ensure Badge is available for the result view
function Badge({ children, className, variant = "default" }: any) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
      {children}
    </span>
  );
}