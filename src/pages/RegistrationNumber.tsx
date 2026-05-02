// export default function RegistrationNumber() {
//   return (
//     <PageBox title="KNOW YOUR REGISTRATION NUMBER FOR TG ECET-2026">
//       <div className="grid md:grid-cols-4 gap-6">
//         <Input label="Payment Reference ID *" placeholder="Enter Payment Reference ID" />
//         <Input label="Qualifying Examination Hall Ticket No*" placeholder="Enter Qualifying Examination Hall Ticket" />
//         <Input label="Mobile Number *" placeholder="Enter Mobile Number" />
//         <Input label="Date of Birth * (dd/mm/yyyy)" placeholder="Select Date of Birth" />
//       </div>

//       <div className="text-center mt-8">
//         <button className="bg-green-600 text-white px-7 py-3 rounded-md">
//           Submit
//         </button>
//       </div>
//     </PageBox>
//   );
// }

// function PageBox({ title, children }: any) {
//   return (
//     <div className="max-w-7xl mx-auto mt-10 border border-gray-300 bg-[#f8fbf8] min-h-[330px]">
//       <h2 className="bg-[#4b3f8f] text-white font-bold text-xl px-3 py-1">{title}</h2>
//       <div className="p-6">{children}</div>
//     </div>
//   );
// }

// function Input({ label, placeholder }: any) {
//   return (
//     <div>
//       <label className="font-semibold block mb-2">{label}</label>
//       <input className="w-full border rounded-md px-4 py-3" placeholder={placeholder} />
//     </div>
//   );
// }




// import SiteLayout from "@/components/layout/SiteLayout";
// import PageBanner from "@/components/layout/PageBanner";

// export default function RegistrationNumber() {
//   return (
//     <SiteLayout>
//       <PageBanner
//         title="Registration Number"
//         crumbs={[{ label: "Registration Number" }]}
//       />

//       <div className="container mx-auto max-w-7xl py-12 px-4">
//         <PageBox title="KNOW YOUR REGISTRATION NUMBER FOR TG ECET-2026">

//           <div className="grid md:grid-cols-4 gap-6">
//             <Input
//               label="Payment Reference ID *"
//               placeholder="Enter Payment Reference ID"
//             />

//             <Input
//               label="Qualifying Examination Hall Ticket No *"
//               placeholder="Enter Qualifying Examination Hall Ticket"
//             />

//             <Input
//               label="Mobile Number *"
//               placeholder="Enter Mobile Number"
//             />

//             <Input
//               label="Date of Birth * (dd/mm/yyyy)"
//               placeholder="Select Date of Birth"
//             />
//           </div>

//           <div className="text-center mt-8">
//             <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700">
//               Submit
//             </button>
//           </div>

//         </PageBox>
//       </div>

//     </SiteLayout>
//   );
// }


// function PageBox({
//   title,
//   children
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm min-h-[330px]">
//       <h2 className="bg-[#4b3f8f] text-white font-bold text-xl px-4 py-2">
//         {title}
//       </h2>

//       <div className="p-6">
//         {children}
//       </div>
//     </div>
//   );
// }


// function Input({
//   label,
//   placeholder
// }: {
//   label: string;
//   placeholder: string;
// }) {
//   return (
//     <div>
//       <label className="font-semibold block mb-2">
//         {label}
//       </label>

//       <input
//         className="w-full border border-gray-300 rounded-md px-4 py-3"
//         placeholder={placeholder}
//       />
//     </div>
//   );
// }









import { useState } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { supabase } from "@/lib/supabaseClient";

export default function RegistrationNumber() {
  const [form, setForm] = useState({
    paymentRef: "",
    hallTicket: "",
    mobile: "",
    dob: "",
  });

  const [result, setResult] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);

    if (!form.paymentRef || !form.hallTicket || !form.mobile || !form.dob) {
      alert("Please fill all required fields");
      return;
    }

    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .eq("payment_reference_id", form.paymentRef)
      .eq("hall_ticket_no", form.hallTicket)
      .eq("mobile_number", form.mobile)
      .eq("date_of_birth", form.dob)
      .maybeSingle();

    if (error || !data) {
      alert("No registration found with given details");
      return;
    }

    setResult(data);
  };

  return (
    <SiteLayout>
      <PageBanner
        title="Registration Number"
        crumbs={[{ label: "Registration Number" }]}
      />

      <div className="container mx-auto max-w-7xl py-12 px-4">
        <PageBox title="KNOW YOUR REGISTRATION NUMBER FOR TG ECET-2026">

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-4 gap-6">
              <Input
                label="Payment Reference ID *"
                name="paymentRef"
                value={form.paymentRef}
                onChange={handleChange}
                placeholder="Enter Payment Reference ID"
              />

              <Input
                label="Qualifying Examination Hall Ticket No *"
                name="hallTicket"
                value={form.hallTicket}
                onChange={handleChange}
                placeholder="Enter Qualifying Examination Hall Ticket"
              />

              <Input
                label="Mobile Number *"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
              />

              <Input
                label="Date of Birth * (dd/mm/yyyy)"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                placeholder="Select Date of Birth"
              />
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>

          {result && (
            <div className="mt-8 border border-green-400 bg-white p-6 rounded-md max-w-4xl">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Registration Found Successfully
              </h3>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <Detail label="Registration Number" value={result.registration_number} />
                <Detail label="Payment Reference ID" value={result.payment_reference_id} />
                <Detail label="Hall Ticket Number" value={result.hall_ticket_no} />
                <Detail label="Mobile Number" value={result.mobile_number} />
                <Detail label="Date of Birth" value={result.date_of_birth} />
              </div>
            </div>
          )}

        </PageBox>
      </div>
    </SiteLayout>
  );
}

/* ---------- UI Components ---------- */

function PageBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm min-h-[330px]">
      <h2 className="bg-[#4b3f8f] text-white font-bold text-xl px-4 py-2">
        {title}
      </h2>

      <div className="p-6">{children}</div>
    </div>
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
    <div>
      <label className="font-semibold block mb-2">{label}</label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-4 py-3"
        placeholder={placeholder}
      />
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border p-3 rounded-md">
      <p className="font-semibold text-[#06254D]">{label}</p>
      <p>{value}</p>
    </div>
  );
}