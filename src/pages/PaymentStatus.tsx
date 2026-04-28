export default function PaymentStatus() {
  return (
    <PageBox title="KNOW YOUR PAYMENT STATUS">
      <div className="grid md:grid-cols-2 gap-14 max-w-4xl">
        <Input label="Qualifying Examination Hall Ticket No *" placeholder="Enter Qualifying Examination Hall Ticket No" />
        <Input label="Mobile Number *" placeholder="Enter Mobile Number" />
      </div>

      <div className="text-center mt-8">
        <button className="bg-green-600 text-white px-7 py-3 rounded-md">
          Check Payment Status
        </button>
      </div>
    </PageBox>
  );
}

function PageBox({ title, children }: any) {
  return (
    <div className="max-w-7xl mx-auto mt-10 border border-gray-300 bg-[#f8fbf8] min-h-[330px]">
      <h2 className="bg-[#4b3f8f] text-white font-bold text-xl px-3 py-1">{title}</h2>
      <div className="p-8">{children}</div>
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