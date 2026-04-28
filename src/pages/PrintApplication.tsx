export default function PrintApplication() {
  return (
    <PageBox title="PRINT TG ECET - 2026 APPLICATION FORM">
      <div className="grid md:grid-cols-3 gap-10">
        <Input label="Registration Number*" placeholder="Enter Registration Number" />
        <Input label="Payment Reference ID" placeholder="Enter Payment Reference ID" />
        <Input label="Qualifying Examination HallTicket No. *" placeholder="Enter Qualifying Examination Hall Ticket Number" />
        <Input label="Mobile Number *" placeholder="Enter Mobile Number" />
        <Input label="Date of Birth * (dd/mm/yyyy)" placeholder="Select Date of Birth" />
      </div>

      <div className="text-center mt-8">
        <button className="bg-green-600 text-white px-7 py-3 rounded-md">
          Get Application Details
        </button>
      </div>
    </PageBox>
  );
}

function PageBox({ title, children }: any) {
  return (
    <div className="max-w-7xl mx-auto mt-10 border border-gray-300 bg-[#f8fbf8] min-h-[330px]">
      <h2 className="bg-[#4b3f8f] text-white font-bold text-xl px-3 py-1">{title}</h2>
      <div className="p-6">{children}</div>
    </div>
  );
}

function Input({ label, placeholder }: any) {
  return (
    <div>
      <label className="font-semibold block mb-2">{label}</label>
      <input className="w-full border rounded-md px-4 py-3" placeholder={placeholder} />
    </div>
  );
}