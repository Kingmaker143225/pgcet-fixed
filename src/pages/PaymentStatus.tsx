// export default function PaymentStatus() {
//   return (
//     <PageBox title="KNOW YOUR PAYMENT STATUS">
//       <div className="grid md:grid-cols-2 gap-14 max-w-4xl">
//         <Input label="Qualifying Examination Hall Ticket No *" placeholder="Enter Qualifying Examination Hall Ticket No" />
//         <Input label="Mobile Number *" placeholder="Enter Mobile Number" />
//       </div>

//       <div className="text-center mt-8">
//         <button className="bg-green-600 text-white px-7 py-3 rounded-md">
//           Check Payment Status
//         </button>
//       </div>
//     </PageBox>
//   );
// }

// function PageBox({ title, children }: any) {
//   return (
//     <div className="max-w-7xl mx-auto mt-10 border border-gray-300 bg-[#f8fbf8] min-h-[330px]">
//       <h2 className="bg-[#4b3f8f] text-white font-bold text-xl px-3 py-1">{title}</h2>
//       <div className="p-8">{children}</div>
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

// export default function PaymentStatus() {
//   return (
//     <SiteLayout>
//       <PageBanner
//         title="Payment Status"
//         crumbs={[{ label: "Payment Status" }]}
//       />

//       <div className="container mx-auto max-w-7xl py-12 px-4">
//         <PageBox title="KNOW YOUR PAYMENT STATUS">

//           <div className="grid md:grid-cols-2 gap-14 max-w-4xl">
//             <Input
//               label="Qualifying Examination Hall Ticket No *"
//               placeholder="Enter Qualifying Examination Hall Ticket No"
//             />

//             <Input
//               label="Mobile Number *"
//               placeholder="Enter Mobile Number"
//             />
//           </div>

//           <div className="text-center mt-8">
//             <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700">
//               Check Payment Status
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

//       <div className="p-8">
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

export default function PaymentStatus() {
  const [form, setForm] = useState({
    hallTicket: "",
    mobile: "",
  });

  const [payment, setPayment] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPayment(null);

    if (!form.hallTicket || !form.mobile) {
      alert("Please fill all required fields");
      return;
    }

    const { data, error } = await supabase
      .from("fee_payments")
      .select("*")
      .eq("hall_ticket_no", form.hallTicket)
      .eq("mobile_number", form.mobile)
      .maybeSingle();

    if (error || !data) {
      alert("Payment details not found");
      return;
    }

    setPayment(data);
  };

  return (
    <SiteLayout>
      <PageBanner
        title="Payment Status"
        crumbs={[{ label: "Payment Status" }]}
      />

      <div className="container mx-auto max-w-7xl py-12 px-4">
        <PageBox title="KNOW YOUR PAYMENT STATUS">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-14 max-w-4xl">
              <Input
                label="Qualifying Examination Hall Ticket No *"
                name="hallTicket"
                value={form.hallTicket}
                onChange={handleChange}
                placeholder="Enter Qualifying Examination Hall Ticket No"
              />

              <Input
                label="Mobile Number *"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
              />
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"
              >
                Check Payment Status
              </button>
            </div>
          </form>

          {payment && (
            <div className="mt-8 border border-green-400 bg-white rounded-md p-6 max-w-4xl">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Payment Found Successfully
              </h3>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <Detail label="Payment Reference ID" value={payment.payment_reference_id} />
                <Detail label="Payment Status" value={payment.payment_status} />
                <Detail label="Candidate Name" value={payment.candidate_name} />
                <Detail label="Hall Ticket Number" value={payment.hall_ticket_no} />
                <Detail label="Mobile Number" value={payment.mobile_number} />
                <Detail label="Payment Mode" value={payment.payment_mode} />
              </div>
            </div>
          )}
        </PageBox>
      </div>
    </SiteLayout>
  );
}

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

      <div className="p-8">{children}</div>
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