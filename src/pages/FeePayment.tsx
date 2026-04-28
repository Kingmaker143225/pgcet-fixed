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







import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

export default function FeePayment() {
  return (
    <SiteLayout>
      <PageBanner
        title="Fee Payment"
        crumbs={[{ label: "Fee Payment" }]}
      />

      <div className="container mx-auto max-w-7xl py-12 px-4">
        <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm">
          
          <h2 className="bg-[#4b3f8f] text-white text-center font-bold text-xl py-2">
            FEE PAYMENT FOR TG ECET - 2026
          </h2>

          <form className="p-6 space-y-5">

            <Field label="Qualifying Examination *">
              <div className="flex gap-4">
                <label>
                  <input type="radio" name="exam" /> Diploma
                </label>

                <label>
                  <input type="radio" name="exam" /> B.Sc.(MATHEMATICS)
                </label>
              </div>
            </Field>

            <Input
              label="Qualifying Exam Hall Ticket / PIN Number *"
              placeholder="Enter Qualifying Exam Hall Ticket / PIN Number"
            />

            <Select label="Branch Studied at Diploma Level *" />
            <Select label="Select The Branch for the Entrance TEST *" />
            <Select label="Year of Passing the Qualifying Exam (Diploma / B.Sc.(Mathematics)) *" />

            <Input
              label="Candidate's Name *"
              placeholder="Enter Candidate's Name"
            />

            <Input
              label="Date of Birth *"
              placeholder="Enter Date of Birth (dd/mm/yyyy)"
            />

            <Input
              label="Candidate’s/Student’s Mobile Number *"
              placeholder="Enter Mobile Number"
            />

            <Input
              label="Alternate Mobile Number"
              placeholder="Enter Alternate Mobile Number"
            />

            <Input
              label="E-Mail ID *"
              placeholder="Enter E-Mail ID"
            />

            <Field label="Category *">
              <div className="flex flex-wrap gap-3">
                {[
                  "OC",
                  "BC_A",
                  "BC_B",
                  "BC_C",
                  "BC_D",
                  "BC_E",
                  "SC (GROUP-I)",
                  "SC (GROUP-II)",
                  "SC (GROUP-III)",
                  "ST"
                ].map((item) => (
                  <label key={item}>
                    <input type="radio" name="category" /> {item}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Physically Challenged (PH) *">
              <div className="flex gap-4">
                <label>
                  <input type="radio" name="ph" /> YES
                </label>

                <label>
                  <input type="radio" name="ph" /> NO
                </label>
              </div>
            </Field>

            <Field label="Payment Mode *">
              <div className="flex flex-wrap gap-3">
                {[
                  "Credit Card",
                  "Debit Card",
                  "Net Banking(OTHERS)",
                  "Net Banking(HDFC/ICICI/SBI/AXIS)"
                ].map((item) => (
                  <label key={item}>
                    <input type="radio" name="payment" /> {item}
                  </label>
                ))}
              </div>
            </Field>

            <div className="border border-red-400 rounded-md p-4 font-medium">
              <label className="flex gap-3 items-start">
                <input type="checkbox" className="mt-1" />

                <span>
                  I have carefully gone through the Detailed Notification,
                  Eligibility Criteria and Instruction Booklet. I am responsible
                  for the correctness of the above details filled in by me and
                  the CONVENER, TG ECET - 2026 is not responsible in any way.
                </span>
              </label>
            </div>

            <div className="text-center">
              <button
                type="button"
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
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <Field label={label}>
      <input
        className="w-full max-w-md border border-gray-300 rounded-md px-4 py-3"
        placeholder={placeholder}
      />
    </Field>
  );
}


function Select({
  label,
}: {
  label: string;
}) {
  return (
    <Field label={label}>
      <select className="w-full max-w-md border border-gray-300 rounded-md px-4 py-3">
        <option>--Select--</option>
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
      <label className="font-semibold text-black">
        {label}
      </label>

      {children}
    </div>
  );
}