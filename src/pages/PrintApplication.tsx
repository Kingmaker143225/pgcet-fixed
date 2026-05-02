// export default function PrintApplication() {
//   return (
//     <PageBox title="PRINT TG ECET - 2026 APPLICATION FORM">
//       <div className="grid md:grid-cols-3 gap-10">
//         <Input label="Registration Number*" placeholder="Enter Registration Number" />
//         <Input label="Payment Reference ID" placeholder="Enter Payment Reference ID" />
//         <Input label="Qualifying Examination HallTicket No. *" placeholder="Enter Qualifying Examination Hall Ticket Number" />
//         <Input label="Mobile Number *" placeholder="Enter Mobile Number" />
//         <Input label="Date of Birth * (dd/mm/yyyy)" placeholder="Select Date of Birth" />
//       </div>

//       <div className="text-center mt-8">
//         <button className="bg-green-600 text-white px-7 py-3 rounded-md">
//           Get Application Details
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

// export default function PrintApplication() {
//   return (
//     <SiteLayout>
//       <PageBanner
//         title="Print Application"
//         crumbs={[{ label: "Print Application" }]}
//       />

//       <div className="container mx-auto max-w-7xl py-12 px-4">
//         <PageBox title="PRINT TG ECET - 2026 APPLICATION FORM">

//           <div className="grid md:grid-cols-3 gap-8">
//             <Input
//               label="Registration Number *"
//               placeholder="Enter Registration Number"
//             />

//             <Input
//               label="Payment Reference ID"
//               placeholder="Enter Payment Reference ID"
//             />

//             <Input
//               label="Qualifying Examination HallTicket No. *"
//               placeholder="Enter Qualifying Examination Hall Ticket Number"
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
//               Get Application Details
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

export default function PrintApplication() {
  const [form, setForm] = useState({
    registrationNumber: "",
    paymentRef: "",
    hallTicket: "",
    mobile: "",
    dob: "",
  });

  const [application, setApplication] = useState<any>(null);
  const [payment, setPayment] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApplication(null);
    setPayment(null);

    if (
      !form.registrationNumber ||
      !form.paymentRef ||
      !form.hallTicket ||
      !form.mobile ||
      !form.dob
    ) {
      alert("Please fill all required fields");
      return;
    }

    const { data: appData, error: appError } = await supabase
      .from("applications")
      .select("*")
      .eq("registration_number", form.registrationNumber)
      .eq("payment_reference_id", form.paymentRef)
      .eq("hall_ticket_no", form.hallTicket)
      .eq("mobile_number", form.mobile)
      .eq("date_of_birth", form.dob)
      .maybeSingle();

    if (appError || !appData) {
      alert("Application details not found");
      return;
    }

    const { data: paymentData } = await supabase
      .from("fee_payments")
      .select("*")
      .eq("payment_reference_id", form.paymentRef)
      .maybeSingle();

    setApplication(appData);
    setPayment(paymentData);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <SiteLayout>
      <div className="print:hidden">
        <PageBanner
          title="Print Application"
          crumbs={[{ label: "Print Application" }]}
        />

        <div className="container mx-auto max-w-7xl py-12 px-4">
          <PageBox title="PRINT TG ECET - 2026 APPLICATION FORM">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-3 gap-8">
                <Input
                  label="Registration Number *"
                  name="registrationNumber"
                  value={form.registrationNumber}
                  onChange={handleChange}
                  placeholder="Enter Registration Number"
                />

                <Input
                  label="Payment Reference ID *"
                  name="paymentRef"
                  value={form.paymentRef}
                  onChange={handleChange}
                  placeholder="Enter Payment Reference ID"
                />

                <Input
                  label="Qualifying Examination HallTicket No. *"
                  name="hallTicket"
                  value={form.hallTicket}
                  onChange={handleChange}
                  placeholder="Enter Hall Ticket Number"
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
                  placeholder="Enter Date of Birth"
                />
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"
                >
                  Get Application Details
                </button>
              </div>
            </form>
          </PageBox>
        </div>
      </div>

      {application && (
        <>
          {/* <div className="print:hidden text-center mb-8"> */}
          <div className="print:hidden text-center mb-2">
            <button
              onClick={handlePrint}
              className="bg-[#06254D] text-white px-8 py-3 rounded-md hover:opacity-90"
            >
              Print / Download PDF
            </button>
          </div>

          {/* <div className="print-area max-w-5xl mx-auto bg-white border-2 border-black p-5 text-[12px] mb-12"> */}
          {/* <div className="print-area no-break max-w-4xl mx-auto bg-white border border-black p-3 text-[11px] mb-6 leading-tight"> */}
          {/* <div className="print-area max-w-4xl mx-auto bg-white border border-black p-2 text-[11px] mb-4 mt-0"> */}
          <div className="print-area bg-white text-[10px] leading-tight">
            {/* <div className="text-center border-b-2 border-black pb-2 mb-2"> */}
            <div className="text-center border-b border-black pb-1 mb-1 leading-tight">
              {/* <h1 className="text-2xl font-bold"> */}
              {/* <h1 className="text-lg font-bold leading-tight"> */}
              <h1 className="text-lg font-bold leading-tight">
                TG ECET (WP) - 2026 APPLICATION FORM
              </h1>
              {/* <p className="font-semibold"> */}
              <p className="text-xs font-semibold">
                Telangana Common Entrance Test - 2026
              </p>
            </div>

            <div className="flex justify-between border-b border-black py-1 mb-3">
              <p>
                <b>Registration No:</b> {application.registration_number}
              </p>
              <p>
                <b>Payment Ref ID:</b> {application.payment_reference_id}
              </p>
            </div>

            {/* <div className="grid grid-cols-[1fr_155px] gap-4"> */}
            <div className="grid grid-cols-[1fr_140px] gap-2 no-break">
              <div>
                <SectionTitle title="1. Personal Information" />
                <Table>
                  <Row label="Candidate Name" value={application.candidate_name} />
                  <Row label="Father Name" value={application.father_name} />
                  <Row label="Mother Name" value={application.mother_name} />
                  <Row label="Date of Birth" value={application.date_of_birth} />
                  <Row label="Gender" value={application.gender} />
                  <Row label="Hall Ticket Number" value={application.hall_ticket_no} />
                  <Row label="Mobile Number" value={application.mobile_number} />
                  <Row label="Alternate Mobile" value={application.alternate_mobile} />
                  <Row label="Email ID" value={application.email} />
                </Table>
              </div>

              <div className="border border-black p-2 text-center">
                <p className="font-bold mb-2">Candidate Photo</p>
                {application.photo_url ? (
                  <img
                    src={application.photo_url}
                    alt="Candidate"
                    className="w-24 h-28 object-cover mx-auto border border-black"
                  />
                ) : (
                  <div className="w-24 h-28 border border-black mx-auto flex items-center justify-center">
                    No Photo
                  </div>
                )}

                <p className="font-bold mt-4 mb-2">Signature</p>
                {application.signature_url ? (
                  <img
                    src={application.signature_url}
                    alt="Signature"
                    className="w-32 h-12 object-contain mx-auto border border-black"
                  />
                ) : (
                  <div className="w-32 h-12 border border-black mx-auto flex items-center justify-center">
                    No Sign
                  </div>
                )}
              </div>
            </div>

            <SectionTitle title="2. Reservation Information" />
            <div className="grid grid-cols-2 gap-3">
              <Table>
                <Row label="Category" value={application.category} />
                <Row label="PH Status" value={application.ph_status} />
              </Table>
              <Table>
                <Row label="Local Area Status" value={application.local_area} />
                <Row label="Payment Status" value={payment?.payment_status || "PAID"} />
              </Table>
            </div>

            <SectionTitle title="3. Academic Details" />
            <Table>
              <Row label="Diploma Branch" value={application.branch_diploma} />
              <Row label="Entrance Test Branch" value={application.branch_entrance} />
              <Row label="Passing Year" value={application.passing_year} />
              <Row label="Marks Percentage" value={application.marks_percentage} />
            </Table>

            <SectionTitle title="4. Payment Information" />
            <Table>
              <Row label="Payment Reference ID" value={application.payment_reference_id} />
              <Row label="Payment Mode" value={payment?.payment_mode} />
              <Row label="Payment Status" value={payment?.payment_status || "PAID"} />
              <Row label="Submitted Date" value={new Date(application.created_at).toLocaleString()} />
            </Table>

            {/* <div className="grid grid-cols-2 gap-3 mt-3"> */}
            <div className="grid grid-cols-2 gap-2 mt-2 no-break">
              <div>
                <SectionTitle title="5. Address for Communication" />
                <Table>
                  <Row label="Address" value={application.address} />
                  <Row label="District" value={application.district} />
                  <Row label="State" value={application.state} />
                  <Row label="Pincode" value={application.pincode} />
                </Table>
              </div>

              <div>
                <SectionTitle title="6. Permanent Address" />
                <Table>
                  <Row label="Address" value={application.permanent_address} />
                  <Row label="District" value={application.permanent_district} />
                  <Row label="State" value={application.permanent_state} />
                  <Row label="Pincode" value={application.permanent_pincode} />
                </Table>
              </div>
            </div>

            <div className="border border-black p-3 mt-4">
              <p className="font-bold mb-1">Declaration:</p>
              <p>
                I declare that the details furnished above are true and correct
                to the best of my knowledge. I am responsible for the correctness
                of the information submitted.
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-10 mt-8"> */}
            <div className="grid grid-cols-2 gap-6 mt-4 no-break">
              <div>
                <p>Date: {new Date().toLocaleDateString()}</p>
                <p>Place: __________________________</p>
              </div>

              <div className="text-center">
                {application.signature_url && (
                  <img
                    src={application.signature_url}
                    alt="Signature"
                    className="w-36 h-12 object-contain mx-auto"
                  />
                )}
                <p className="border-t border-black pt-1 mt-2">
                  Candidate Signature
                </p>
              </div>
            </div>
          </div>
        </>
      )}
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

function SectionTitle({ title }: { title: string }) {
  return (
    <h3 className="bg-gray-200 text-black font-bold px-2 py-1 border border-black mt-3">
      {title}
    </h3>
  );
}

function Table({ children }: { children: React.ReactNode }) {
  return <div className="border-l border-r border-black">{children}</div>;
}

function Row({ label, value }: { label: string; value: any }) {
  return (
    // <div className="grid grid-cols-[180px_1fr] border-b border-black min-h-[28px]">
    <div className="grid grid-cols-[150px_1fr] border-b border-black min-h-[22px]">
      <div className="border-r border-black px-2 py-1 font-semibold">
        {label}
      </div>
      <div className="px-2 py-1">{value || "-"}</div>
    </div>
  );
}