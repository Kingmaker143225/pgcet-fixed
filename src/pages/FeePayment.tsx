// export default function FeePayment() {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="max-w-7xl mx-auto mt-8 border border-gray-300 bg-[#f8fbf8]">
//         <h2 className="bg-[#4b3f8f] text-white text-center font-bold text-xl py-2">
//           FEE PAYMENT FOR TG ECET - 2026
//         </h2>

//         <form className="p-6 space-y-5">
//           <Field label="Qualifying Examination *">
//             <div className="flex gap-4">
//               <label><input type="radio" name="exam" /> Diploma</label>
//               <label><input type="radio" name="exam" /> B.Sc.(MATHEMATICS)</label>
//             </div>
//           </Field>

//           <Input label="Qualifying Exam Hall Ticket / PIN Number *" placeholder="Enter Qualifying Exam Hall Ticket / PIN Number" />
//           <Select label="Branch Studied at Diploma Level *" />
//           <Select label="Select The Branch for the Entrance TEST *" />
//           <Select label="Year of Passing the Qualifying Exam (Diploma / B.Sc.(Mathematics)) *" />
//           <Input label="Candidate's Name *" placeholder="Enter Candidate's Name" />
//           <Input label="Date of Birth *" placeholder="Enter Date of Birth (dd/mm/yyyy)" />
//           <Input label="Candidate’s/Student’s Mobile Number *" placeholder="Enter Mobile Number" />
//           <Input label="Alternate Mobile Number" placeholder="Enter Alternate Mobile Number" />
//           <Input label="E-Mail ID *" placeholder="Enter E-Mail ID" />

//           <Field label="Category *">
//             <div className="flex flex-wrap gap-2">
//               {["OC", "BC_A", "BC_B", "BC_C", "BC_D", "BC_E", "SC (GROUP-I)", "SC (GROUP-II)", "SC (GROUP-III)", "ST"].map(i => (
//                 <label key={i}><input type="radio" name="category" /> {i}</label>
//               ))}
//             </div>
//           </Field>

//           <Field label="Physically Challenged (PH) *">
//             <div className="flex gap-4">
//               <label><input type="radio" name="ph" /> YES</label>
//               <label><input type="radio" name="ph" /> NO</label>
//             </div>
//           </Field>

//           <Field label="Payment Mode *">
//             <div className="flex flex-wrap gap-3">
//               {["Credit Card", "Debit Card", "Net Banking(OTHERS)", "Net Banking(HDFC/ICICI/SBI/AXIS)"].map(i => (
//                 <label key={i}><input type="radio" name="payment" /> {i}</label>
//               ))}
//             </div>
//           </Field>

//           <div className="border border-red-400 rounded-md p-4 font-semibold">
//             <label className="flex gap-3">
//               <input type="checkbox" />
//               I have carefully gone through the Detailed Notification, Eligibility Criteria and Instruction Booklet.
//             </label>
//           </div>

//           <div className="text-center">
//             <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700">
//               Proceed to Payment
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// function Input({ label, placeholder }: any) {
//   return (
//     <Field label={label}>
//       <input className="w-full max-w-md border rounded-md px-4 py-3" placeholder={placeholder} />
//     </Field>
//   );
// }

// function Select({ label }: any) {
//   return (
//     <Field label={label}>
//       <select className="w-full max-w-md border rounded-md px-4 py-3">
//         <option>--Select--</option>
//       </select>
//     </Field>
//   );
// }

// function Field({ label, children }: any) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] items-center gap-4">
//       <label className="font-semibold">{label}</label>
//       {children}
//     </div>
//   );
// }







// import SiteLayout from "@/components/layout/SiteLayout";
// import PageBanner from "@/components/layout/PageBanner";

// export default function FeePayment() {
//   return (
//     <SiteLayout>
//       <PageBanner
//         title="Fee Payment"
//         crumbs={[{ label: "Fee Payment" }]}
//       />

//       <div className="container mx-auto max-w-7xl py-12 px-4">
//         <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm">
          
//           <h2 className="bg-[#4b3f8f] text-white text-center font-bold text-xl py-2">
//             FEE PAYMENT FOR TG ECET - 2026
//           </h2>

//           <form className="p-6 space-y-5">

//             <Field label="Qualifying Examination *">
//               <div className="flex gap-4">
//                 <label>
//                   <input type="radio" name="exam" /> Diploma
//                 </label>

//                 <label>
//                   <input type="radio" name="exam" /> B.Sc.(MATHEMATICS)
//                 </label>
//               </div>
//             </Field>

//             <Input
//               label="Qualifying Exam Hall Ticket / PIN Number *"
//               placeholder="Enter Qualifying Exam Hall Ticket / PIN Number"
//             />

//             <Select label="Branch Studied at Diploma Level *" />
//             <Select label="Select The Branch for the Entrance TEST *" />
//             <Select label="Year of Passing the Qualifying Exam (Diploma / B.Sc.(Mathematics)) *" />

//             <Input
//               label="Candidate's Name *"
//               placeholder="Enter Candidate's Name"
//             />

//             <Input
//               label="Date of Birth *"
//               placeholder="Enter Date of Birth (dd/mm/yyyy)"
//             />

//             <Input
//               label="Candidate’s/Student’s Mobile Number *"
//               placeholder="Enter Mobile Number"
//             />

//             <Input
//               label="Alternate Mobile Number"
//               placeholder="Enter Alternate Mobile Number"
//             />

//             <Input
//               label="E-Mail ID *"
//               placeholder="Enter E-Mail ID"
//             />

//             <Field label="Category *">
//               <div className="flex flex-wrap gap-3">
//                 {[
//                   "OC",
//                   "BC_A",
//                   "BC_B",
//                   "BC_C",
//                   "BC_D",
//                   "BC_E",
//                   "SC (GROUP-I)",
//                   "SC (GROUP-II)",
//                   "SC (GROUP-III)",
//                   "ST"
//                 ].map((item) => (
//                   <label key={item}>
//                     <input type="radio" name="category" /> {item}
//                   </label>
//                 ))}
//               </div>
//             </Field>

//             <Field label="Physically Challenged (PH) *">
//               <div className="flex gap-4">
//                 <label>
//                   <input type="radio" name="ph" /> YES
//                 </label>

//                 <label>
//                   <input type="radio" name="ph" /> NO
//                 </label>
//               </div>
//             </Field>

//             <Field label="Payment Mode *">
//               <div className="flex flex-wrap gap-3">
//                 {[
//                   "Credit Card",
//                   "Debit Card",
//                   "Net Banking(OTHERS)",
//                   "Net Banking(HDFC/ICICI/SBI/AXIS)"
//                 ].map((item) => (
//                   <label key={item}>
//                     <input type="radio" name="payment" /> {item}
//                   </label>
//                 ))}
//               </div>
//             </Field>

//             <div className="border border-red-400 rounded-md p-4 font-medium">
//               <label className="flex gap-3 items-start">
//                 <input type="checkbox" className="mt-1" />

//                 <span>
//                   I have carefully gone through the Detailed Notification,
//                   Eligibility Criteria and Instruction Booklet. I am responsible
//                   for the correctness of the above details filled in by me and
//                   the CONVENER, TG ECET - 2026 is not responsible in any way.
//                 </span>
//               </label>
//             </div>

//             <div className="text-center">
//               <button
//                 type="button"
//                 className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"
//               >
//                 Proceed to Payment
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </SiteLayout>
//   );
// }


// function Input({
//   label,
//   placeholder,
// }: {
//   label: string;
//   placeholder: string;
// }) {
//   return (
//     <Field label={label}>
//       <input
//         className="w-full max-w-md border border-gray-300 rounded-md px-4 py-3"
//         placeholder={placeholder}
//       />
//     </Field>
//   );
// }


// function Select({
//   label,
// }: {
//   label: string;
// }) {
//   return (
//     <Field label={label}>
//       <select className="w-full max-w-md border border-gray-300 rounded-md px-4 py-3">
//         <option>--Select--</option>
//       </select>
//     </Field>
//   );
// }


// function Field({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-[390px_1fr] items-center gap-4">
//       <label className="font-semibold text-black">
//         {label}
//       </label>

//       {children}
//     </div>
//   );
// }






// import { useState } from "react";
// import SiteLayout from "@/components/layout/SiteLayout";
// import PageBanner from "@/components/layout/PageBanner";
// import { supabase } from "@/lib/supabaseClient";

// export default function FeePayment() {
//   const [form, setForm] = useState({
//     qualifyingExam: "",
//     hallTicketNo: "",
//     branchDiploma: "",
//     branchEntrance: "",
//     passingYear: "",
//     candidateName: "",
//     dob: "",
//     mobile: "",
//     alternateMobile: "",
//     email: "",
//     category: "",
//     phStatus: "",
//     paymentMode: "",
//     declaration: false,
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;

//     if (type === "checkbox") {
//       const checked = (e.target as HTMLInputElement).checked;
//       setForm((prev) => ({ ...prev, [name]: checked }));
//     } else {
//       setForm((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (
//       !form.qualifyingExam ||
//       !form.hallTicketNo ||
//       !form.candidateName ||
//       !form.dob ||
//       !form.mobile ||
//       !form.email ||
//       !form.category ||
//       !form.phStatus ||
//       !form.paymentMode ||
//       !form.declaration
//     ) {
//       alert("Please fill all required fields");
//       return;
//     }

//     const paymentRef = "TGECET" + Date.now();

//     const { error } = await supabase.from("fee_payments").insert([
//       {
//         payment_reference_id: paymentRef,
//         qualifying_exam: form.qualifyingExam,
//         hall_ticket_no: form.hallTicketNo,
//         branch_diploma: form.branchDiploma,
//         branch_entrance: form.branchEntrance,
//         passing_year: form.passingYear,
//         candidate_name: form.candidateName,
//         date_of_birth: form.dob,
//         mobile_number: form.mobile,
//         alternate_mobile: form.alternateMobile,
//         email: form.email,
//         category: form.category,
//         ph_status: form.phStatus,
//         payment_mode: form.paymentMode,
//         payment_status: "PAID",
//       },
//     ]);

//     if (error) {
//       alert("Error: " + error.message);
//       return;
//     }

//     alert("Payment Successful!\nYour Payment Reference ID: " + paymentRef);
//   };

//   return (
//     <SiteLayout>
//       <PageBanner title="Fee Payment" crumbs={[{ label: "Fee Payment" }]} />

//       <div className="container mx-auto max-w-7xl py-12 px-4">
//         <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm">
//           <h2 className="bg-[#4b3f8f] text-white text-center font-bold text-xl py-2">
//             FEE PAYMENT FOR TG ECET - 2026
//           </h2>

//           <form onSubmit={handleSubmit} className="p-6 space-y-5">

//             {/* Qualifying Exam */}
//             <Field label="Qualifying Examination *">
//               <div className="flex gap-4">
//                 <label>
//                   <input type="radio" name="qualifyingExam" value="Diploma" onChange={handleChange}/> Diploma
//                 </label>

//                 <label>
//                   <input type="radio" name="qualifyingExam" value="B.Sc.(MATHEMATICS)" onChange={handleChange}/> B.Sc.(MATHEMATICS)
//                 </label>
//               </div>
//             </Field>

//             <Input label="Qualifying Exam Hall Ticket / PIN Number *" name="hallTicketNo" value={form.hallTicketNo} onChange={handleChange} />

//             <Select label="Branch Studied at Diploma Level *" name="branchDiploma" onChange={handleChange} />
//             <Select label="Select The Branch for the Entrance TEST *" name="branchEntrance" onChange={handleChange} />
//             <Select label="Year of Passing the Qualifying Exam *" name="passingYear" onChange={handleChange} />

//             <Input label="Candidate's Name *" name="candidateName" value={form.candidateName} onChange={handleChange} />
//             <Input label="Date of Birth *" name="dob" value={form.dob} onChange={handleChange} />
//             <Input label="Mobile Number *" name="mobile" value={form.mobile} onChange={handleChange} />
//             <Input label="Alternate Mobile Number" name="alternateMobile" value={form.alternateMobile} onChange={handleChange} />
//             <Input label="E-Mail ID *" name="email" value={form.email} onChange={handleChange} />

//             {/* Category */}
//             <Field label="Category *">
//               <div className="flex flex-wrap gap-3">
//                 {["OC","BC_A","BC_B","BC_C","BC_D","BC_E","SC_I","SC_II","SC_III","ST"].map((item) => (
//                   <label key={item}>
//                     <input type="radio" name="category" value={item} onChange={handleChange}/> {item}
//                   </label>
//                 ))}
//               </div>
//             </Field>

//             {/* PH */}
//             <Field label="Physically Challenged (PH) *">
//               <div className="flex gap-4">
//                 <label>
//                   <input type="radio" name="phStatus" value="YES" onChange={handleChange}/> YES
//                 </label>
//                 <label>
//                   <input type="radio" name="phStatus" value="NO" onChange={handleChange}/> NO
//                 </label>
//               </div>
//             </Field>

//             {/* Payment Mode */}
//             <Field label="Payment Mode *">
//               <div className="flex flex-wrap gap-3">
//                 {["Credit Card","Debit Card","Net Banking","UPI"].map((item) => (
//                   <label key={item}>
//                     <input type="radio" name="paymentMode" value={item} onChange={handleChange}/> {item}
//                   </label>
//                 ))}
//               </div>
//             </Field>

//             {/* Declaration */}
//             <div className="border border-red-400 rounded-md p-4 font-medium">
//               <label className="flex gap-3 items-start">
//                 <input type="checkbox" name="declaration" onChange={handleChange} />
//                 <span>
//                   I agree that all details are correct.
//                 </span>
//               </label>
//             </div>

//             <div className="text-center">
//               <button type="submit" className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700">
//                 Proceed to Payment
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </SiteLayout>
//   );
// }

// /* ---------- Reusable Components ---------- */

// function Input({ label, name, value, onChange }: any) {
//   return (
//     <Field label={label}>
//       <input
//         name={name}
//         value={value}
//         onChange={onChange}
//         className="w-full max-w-md border border-gray-300 rounded-md px-4 py-3"
//       />
//     </Field>
//   );
// }

// function Select({ label, name, onChange }: any) {
//   return (
//     <Field label={label}>
//       <select
//         name={name}
//         onChange={onChange}
//         className="w-full max-w-md border border-gray-300 rounded-md px-4 py-3"
//       >
//         <option value="">--Select--</option>
//         <option value="CSE">CSE</option>
//         <option value="ECE">ECE</option>
//         <option value="EEE">EEE</option>
//         <option value="MECH">MECH</option>
//         <option value="CIVIL">CIVIL</option>
//       </select>
//     </Field>
//   );
// }

// function Field({ label, children }: any) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-[390px_1fr] items-center gap-4">
//       <label className="font-semibold text-black">{label}</label>
//       {children}
//     </div>
//   );
// }









// import { useState } from "react";
// import SiteLayout from "@/components/layout/SiteLayout";
// import PageBanner from "@/components/layout/PageBanner";
// import { supabase } from "@/lib/supabaseClient";

// const diplomaBranches = ["CSE", "ECE", "EEE", "MECH", "CIVIL"];
// const bscBranches = ["B.Sc. Mathematics"];

// const diplomaEntranceBranches = ["CSE", "ECE", "EEE", "MECH", "CIVIL"];
// const bscEntranceBranches = ["Mathematics"];

// const passingYears = ["2026", "2025", "2024", "2023", "2022", "2021", "2020"];

// export default function FeePayment() {
//   const [form, setForm] = useState({
//     qualifyingExam: "",
//     hallTicketNo: "",
//     branchDiploma: "",
//     branchEntrance: "",
//     passingYear: "",
//     candidateName: "",
//     dob: "",
//     mobile: "",
//     alternateMobile: "",
//     email: "",
//     category: "",
//     phStatus: "",
//     paymentMode: "",
//     declaration: false,
//   });

//   const branchOptions =
//     form.qualifyingExam === "B.Sc.(MATHEMATICS)" ? bscBranches : diplomaBranches;

//   const entranceOptions =
//     form.qualifyingExam === "B.Sc.(MATHEMATICS)"
//       ? bscEntranceBranches
//       : diplomaEntranceBranches;

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;

//     if (type === "checkbox") {
//       const checked = (e.target as HTMLInputElement).checked;
//       setForm((prev) => ({ ...prev, [name]: checked }));
//       return;
//     }

//     if (name === "qualifyingExam") {
//       setForm((prev) => ({
//         ...prev,
//         qualifyingExam: value,
//         branchDiploma: "",
//         branchEntrance: "",
//         passingYear: "",
//       }));
//       return;
//     }

//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (
//       !form.qualifyingExam ||
//       !form.hallTicketNo ||
//       !form.branchDiploma ||
//       !form.branchEntrance ||
//       !form.passingYear ||
//       !form.candidateName ||
//       !form.dob ||
//       !form.mobile ||
//       !form.email ||
//       !form.category ||
//       !form.phStatus ||
//       !form.paymentMode ||
//       !form.declaration
//     ) {
//       alert("Please fill all required fields");
//       return;
//     }

//     const paymentRef = "TGECET" + Date.now();

//     const { error } = await supabase.from("fee_payments").insert([
//       {
//         payment_reference_id: paymentRef,
//         qualifying_exam: form.qualifyingExam,
//         hall_ticket_no: form.hallTicketNo,
//         branch_diploma: form.branchDiploma,
//         branch_entrance: form.branchEntrance,
//         passing_year: form.passingYear,
//         candidate_name: form.candidateName,
//         date_of_birth: form.dob,
//         mobile_number: form.mobile,
//         alternate_mobile: form.alternateMobile,
//         email: form.email,
//         category: form.category,
//         ph_status: form.phStatus,
//         payment_mode: form.paymentMode,
//         payment_status: "PAID",
//       },
//     ]);

//     if (error) {
//       alert("Error: " + error.message);
//       return;
//     }

//     // alert("Payment Successful!\nYour Payment Reference ID: " + paymentRef);
//     // store step1 data for step2 auto-fill
// sessionStorage.setItem(
//   "verifiedPaymentData",
//   JSON.stringify({
//     paymentRef: paymentRef,
//     hallTicket: form.hallTicketNo,
//     mobile: form.mobile,
//     dob: form.dob,
//   })
// );

// // show success + redirect
// alert("Payment Successful!\nYour Payment Reference ID: " + paymentRef);

// // go to step 2
// window.location.href = "/application-form";
//   };

//   return (
//     <SiteLayout>
//       <PageBanner title="Fee Payment" crumbs={[{ label: "Fee Payment" }]} />

//       <div className="container mx-auto max-w-7xl py-12 px-4">
//         <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm">
//           <h2 className="bg-[#4b3f8f] text-white text-center font-bold text-xl py-2">
//             FEE PAYMENT FOR TG ECET - 2026
//           </h2>

//           <form onSubmit={handleSubmit} className="p-6 space-y-5">
//             <Field label="Qualifying Examination *">
//               <div className="flex flex-wrap gap-6">
//                 <label className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="qualifyingExam"
//                     value="Diploma"
//                     checked={form.qualifyingExam === "Diploma"}
//                     onChange={handleChange}
//                   />
//                   Diploma
//                 </label>

//                 <label className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="qualifyingExam"
//                     value="B.Sc.(MATHEMATICS)"
//                     checked={form.qualifyingExam === "B.Sc.(MATHEMATICS)"}
//                     onChange={handleChange}
//                   />
//                   B.Sc.(MATHEMATICS)
//                 </label>
//               </div>
//             </Field>

//             <Input
//               label="Qualifying Exam Hall Ticket / PIN Number *"
//               name="hallTicketNo"
//               value={form.hallTicketNo}
//               onChange={handleChange}
//               placeholder="Enter Qualifying Exam Hall Ticket / PIN Number"
//             />

//             <Select
//               label={
//                 form.qualifyingExam === "B.Sc.(MATHEMATICS)"
//                   ? "Branch Studied at B.Sc Level *"
//                   : "Branch Studied at Diploma Level *"
//               }
//               name="branchDiploma"
//               value={form.branchDiploma}
//               onChange={handleChange}
//               options={branchOptions}
//             />

//             <Select
//               label="Select The Branch for the Entrance TEST *"
//               name="branchEntrance"
//               value={form.branchEntrance}
//               onChange={handleChange}
//               options={entranceOptions}
//             />

//             <Select
//               label="Year of Passing the Qualifying Exam *"
//               name="passingYear"
//               value={form.passingYear}
//               onChange={handleChange}
//               options={passingYears}
//             />

//             <Input
//               label="Candidate's Name *"
//               name="candidateName"
//               value={form.candidateName}
//               onChange={handleChange}
//               placeholder="Enter Candidate's Name"
//             />

//             <Input
//               label="Date of Birth *"
//               name="dob"
//               value={form.dob}
//               onChange={handleChange}
//               placeholder="Enter Date of Birth (dd/mm/yyyy)"
//             />

//             <Input
//               label="Mobile Number *"
//               name="mobile"
//               value={form.mobile}
//               onChange={handleChange}
//               placeholder="Enter Mobile Number"
//             />

//             <Input
//               label="Alternate Mobile Number"
//               name="alternateMobile"
//               value={form.alternateMobile}
//               onChange={handleChange}
//               placeholder="Enter Alternate Mobile Number"
//             />

//             <Input
//               label="E-Mail ID *"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Enter E-Mail ID"
//             />

//             <Field label="Category *">
//               <div className="flex flex-wrap gap-4">
//                 {[
//                   "OC",
//                   "BC_A",
//                   "BC_B",
//                   "BC_C",
//                   "BC_D",
//                   "BC_E",
//                   "SC_I",
//                   "SC_II",
//                   "SC_III",
//                   "ST",
//                 ].map((item) => (
//                   <label key={item} className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="category"
//                       value={item}
//                       checked={form.category === item}
//                       onChange={handleChange}
//                     />
//                     {item}
//                   </label>
//                 ))}
//               </div>
//             </Field>

//             <Field label="Physically Challenged (PH) *">
//               <div className="flex gap-6">
//                 <label className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="phStatus"
//                     value="YES"
//                     checked={form.phStatus === "YES"}
//                     onChange={handleChange}
//                   />
//                   YES
//                 </label>

//                 <label className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="phStatus"
//                     value="NO"
//                     checked={form.phStatus === "NO"}
//                     onChange={handleChange}
//                   />
//                   NO
//                 </label>
//               </div>
//             </Field>

//             <Field label="Payment Mode *">
//               <div className="flex flex-wrap gap-4">
//                 {["Credit Card", "Debit Card", "Net Banking", "UPI"].map(
//                   (item) => (
//                     <label key={item} className="flex items-center gap-2">
//                       <input
//                         type="radio"
//                         name="paymentMode"
//                         value={item}
//                         checked={form.paymentMode === item}
//                         onChange={handleChange}
//                       />
//                       {item}
//                     </label>
//                   )
//                 )}
//               </div>
//             </Field>

//             <div className="border border-red-400 rounded-md p-4 font-medium">
//               <label className="flex gap-3 items-start">
//                 <input
//                   type="checkbox"
//                   name="declaration"
//                   checked={form.declaration}
//                   onChange={handleChange}
//                   className="mt-1"
//                 />
//                 <span>I agree that all details are correct.</span>
//               </label>
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"
//               >
//                 Proceed to Payment
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </SiteLayout>
//   );
// }

// function Input({
//   label,
//   name,
//   value,
//   onChange,
//   placeholder,
// }: {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder: string;
// }) {
//   return (
//     <Field label={label}>
//       <input
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full max-w-md border border-gray-300 rounded-md px-4 py-3"
//       />
//     </Field>
//   );
// }

// function Select({
//   label,
//   name,
//   value,
//   onChange,
//   options,
// }: {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   options: string[];
// }) {
//   return (
//     <Field label={label}>
//       <select
//         name={name}
//         value={value}
//         onChange={onChange}
//         className="w-full max-w-md border border-gray-300 rounded-md px-4 py-3"
//       >
//         <option value="">--Select--</option>
//         {options.map((item) => (
//           <option key={item} value={item}>
//             {item}
//           </option>
//         ))}
//       </select>
//     </Field>
//   );
// }

// function Field({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-[390px_1fr] items-center gap-4">
//       <label className="font-semibold text-black">{label}</label>
//       {children}
//     </div>
//   );
// }











import { useState } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { supabase } from "@/lib/supabaseClient";

const diplomaBranches = ["CSE", "ECE", "EEE", "MECH", "CIVIL"];
const bscBranches = ["B.Sc. Mathematics"];

const diplomaEntranceBranches = ["CSE", "ECE", "EEE", "MECH", "CIVIL"];
const bscEntranceBranches = ["Mathematics"];

const passingYears = ["2026", "2025", "2024", "2023", "2022", "2021", "2020"];

export default function FeePayment() {
  const [form, setForm] = useState({
    qualifyingExam: "",
    hallTicketNo: "",
    branchDiploma: "",
    branchEntrance: "",
    passingYear: "",
    candidateName: "",
    dob: "",
    mobile: "",
    alternateMobile: "",
    email: "",
    category: "",
    phStatus: "",
    paymentMode: "",
    declaration: false,
  });

  const branchOptions =
    form.qualifyingExam === "B.Sc.(MATHEMATICS)"
      ? bscBranches
      : diplomaBranches;

  const entranceOptions =
    form.qualifyingExam === "B.Sc.(MATHEMATICS)"
      ? bscEntranceBranches
      : diplomaEntranceBranches;

  const formatDOB = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 8);

    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 4) {
      return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
    }

    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4)}`;
  };

  const isValidMobile = (mobile: string) => /^[6-9]\d{9}$/.test(mobile);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidDOB = (dob: string) => {
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = dob.match(regex);

  if (!match) return false;

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);

  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;
  if (year < 1950 || year > 2026) return false;

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    if (name === "dob") {
      setForm((prev) => ({ ...prev, dob: formatDOB(value) }));
      return;
    }

    if (name === "mobile" || name === "alternateMobile") {
      setForm((prev) => ({
        ...prev,
        [name]: value.replace(/\D/g, "").slice(0, 10),
      }));
      return;
    }

    if (name === "qualifyingExam") {
      setForm((prev) => ({
        ...prev,
        qualifyingExam: value,
        branchDiploma: "",
        branchEntrance: "",
        passingYear: "",
      }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.qualifyingExam ||
      !form.hallTicketNo ||
      !form.branchDiploma ||
      !form.branchEntrance ||
      !form.passingYear ||
      !form.candidateName ||
      !form.dob ||
      !form.mobile ||
      !form.email ||
      !form.category ||
      !form.phStatus ||
      !form.paymentMode ||
      !form.declaration
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (!isValidDOB(form.dob)) {
      alert("Please enter Date of Birth in dd/mm/yyyy format");
      return;
    }

    if (!isValidMobile(form.mobile)) {
      alert("Mobile number must be exactly 10 digits and start with 6, 7, 8, or 9");
      return;
    }

    if (form.alternateMobile && !isValidMobile(form.alternateMobile)) {
      alert(
        "Alternate mobile number must be exactly 10 digits and start with 6, 7, 8, or 9"
      );
      return;
    }

    if (!isValidEmail(form.email)) {
      alert("Please enter a valid email address");
      return;
    }

    const paymentRef = "TGECET" + Date.now();

    const { error } = await supabase.from("fee_payments").insert([
      {
        payment_reference_id: paymentRef,
        qualifying_exam: form.qualifyingExam,
        hall_ticket_no: form.hallTicketNo,
        branch_diploma: form.branchDiploma,
        branch_entrance: form.branchEntrance,
        passing_year: form.passingYear,
        candidate_name: form.candidateName,
        date_of_birth: form.dob,
        mobile_number: form.mobile,
        alternate_mobile: form.alternateMobile,
        email: form.email,
        category: form.category,
        ph_status: form.phStatus,
        payment_mode: form.paymentMode,
        payment_status: "PAID",
      },
    ]);

    if (error) {
      alert("Error: " + error.message);
      return;
    }

    sessionStorage.setItem(
      "verifiedPaymentData",
      JSON.stringify({
        paymentRef,
        hallTicket: form.hallTicketNo,
        mobile: form.mobile,
        dob: form.dob,
      })
    );

sessionStorage.setItem(
  "verifiedPaymentData",
  JSON.stringify({
    paymentRef,
    hallTicket: form.hallTicketNo,
    mobile: form.mobile,
    dob: form.dob,
  })
);

// save for next step
sessionStorage.setItem(
  "verifiedPaymentData",
  JSON.stringify({
    paymentRef,
    hallTicket: form.hallTicketNo,
    mobile: form.mobile,
    dob: form.dob,
  })
);

// auto copy
await navigator.clipboard.writeText(paymentRef);

// manual copy popup
prompt(
  "Payment Successful!\n\nCopy your Payment Reference ID:",
  paymentRef
);

// redirect
window.location.href = "/application-form";
  };

  return (
    <SiteLayout>
      <PageBanner title="Fee Payment" crumbs={[{ label: "Fee Payment" }]} />

      <div className="container mx-auto max-w-7xl py-12 px-4">
        <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm">
          <h2 className="bg-[#4b3f8f] text-white text-center font-bold text-xl py-2">
            FEE PAYMENT FOR TG ECET - 2026
          </h2>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <Field label="Qualifying Examination *">
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="qualifyingExam"
                    value="Diploma"
                    checked={form.qualifyingExam === "Diploma"}
                    onChange={handleChange}
                  />
                  Diploma
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="qualifyingExam"
                    value="B.Sc.(MATHEMATICS)"
                    checked={form.qualifyingExam === "B.Sc.(MATHEMATICS)"}
                    onChange={handleChange}
                  />
                  B.Sc.(MATHEMATICS)
                </label>
              </div>
            </Field>

            <Input
              label="Qualifying Exam Hall Ticket / PIN Number *"
              name="hallTicketNo"
              value={form.hallTicketNo}
              onChange={handleChange}
              placeholder="Enter Qualifying Exam Hall Ticket / PIN Number"
            />

            <Select
              label={
                form.qualifyingExam === "B.Sc.(MATHEMATICS)"
                  ? "Branch Studied at B.Sc Level *"
                  : "Branch Studied at Diploma Level *"
              }
              name="branchDiploma"
              value={form.branchDiploma}
              onChange={handleChange}
              options={branchOptions}
            />

            <Select
              label="Select The Branch for the Entrance TEST *"
              name="branchEntrance"
              value={form.branchEntrance}
              onChange={handleChange}
              options={entranceOptions}
            />

            <Select
              label="Year of Passing the Qualifying Exam *"
              name="passingYear"
              value={form.passingYear}
              onChange={handleChange}
              options={passingYears}
            />

            <Input
              label="Candidate's Name *"
              name="candidateName"
              value={form.candidateName}
              onChange={handleChange}
              placeholder="Enter Candidate's Name"
            />

            <Input
              label="Date of Birth *"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              placeholder="dd/mm/yyyy"
            />

            <Input
              label="Mobile Number *"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter 10 digit mobile number"
            />

            <Input
              label="Alternate Mobile Number"
              name="alternateMobile"
              value={form.alternateMobile}
              onChange={handleChange}
              placeholder="Enter 10 digit alternate mobile number"
            />

            <Input
              label="E-Mail ID *"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />

            <Field label="Category *">
              <div className="flex flex-wrap gap-4">
                {[
                  "OC",
                  "BC_A",
                  "BC_B",
                  "BC_C",
                  "BC_D",
                  "BC_E",
                  "SC_I",
                  "SC_II",
                  "SC_III",
                  "ST",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="category"
                      value={item}
                      checked={form.category === item}
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Physically Challenged (PH) *">
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="phStatus"
                    value="YES"
                    checked={form.phStatus === "YES"}
                    onChange={handleChange}
                  />
                  YES
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="phStatus"
                    value="NO"
                    checked={form.phStatus === "NO"}
                    onChange={handleChange}
                  />
                  NO
                </label>
              </div>
            </Field>

            <Field label="Payment Mode *">
              <div className="flex flex-wrap gap-4">
                {["Credit Card", "Debit Card", "Net Banking", "UPI"].map(
                  (item) => (
                    <label key={item} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMode"
                        value={item}
                        checked={form.paymentMode === item}
                        onChange={handleChange}
                      />
                      {item}
                    </label>
                  )
                )}
              </div>
            </Field>

            <div className="border border-red-400 rounded-md p-4 font-medium">
              <label className="flex gap-3 items-start">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={form.declaration}
                  onChange={handleChange}
                  className="mt-1"
                />
                <span>
                  I agree that all details are correct.
                </span>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </SiteLayout>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <Field label={label}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full max-w-md border border-gray-300 rounded-md px-4 py-3"
      />
    </Field>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <Field label={label}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full max-w-md border border-gray-300 rounded-md px-4 py-3"
      >
        <option value="">--Select--</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </Field>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[390px_1fr] items-center gap-4">
      <label className="font-semibold text-black">{label}</label>
      {children}
    </div>
  );
}