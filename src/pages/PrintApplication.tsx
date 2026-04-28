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



import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

export default function PrintApplication() {
  return (
    <SiteLayout>
      <PageBanner
        title="Print Application"
        crumbs={[{ label: "Print Application" }]}
      />

      <div className="container mx-auto max-w-7xl py-12 px-4">
        <PageBox title="PRINT TG ECET - 2026 APPLICATION FORM">

          <div className="grid md:grid-cols-3 gap-8">
            <Input
              label="Registration Number *"
              placeholder="Enter Registration Number"
            />

            <Input
              label="Payment Reference ID"
              placeholder="Enter Payment Reference ID"
            />

            <Input
              label="Qualifying Examination HallTicket No. *"
              placeholder="Enter Qualifying Examination Hall Ticket Number"
            />

            <Input
              label="Mobile Number *"
              placeholder="Enter Mobile Number"
            />

            <Input
              label="Date of Birth * (dd/mm/yyyy)"
              placeholder="Select Date of Birth"
            />
          </div>

          <div className="text-center mt-8">
            <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700">
              Get Application Details
            </button>
          </div>

        </PageBox>
      </div>
    </SiteLayout>
  );
}


function PageBox({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm min-h-[330px]">
      <h2 className="bg-[#4b3f8f] text-white font-bold text-xl px-4 py-2">
        {title}
      </h2>

      <div className="p-6">
        {children}
      </div>
    </div>
  );
}


function Input({
  label,
  placeholder
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="font-semibold block mb-2">
        {label}
      </label>

      <input
        className="w-full border border-gray-300 rounded-md px-4 py-3"
        placeholder={placeholder}
      />
    </div>
  );
}