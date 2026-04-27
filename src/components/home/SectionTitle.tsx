export default function SectionTitle({ title, centered = false }: { title: string, centered?: boolean }) {
  return (
    <div className={`mb-8 ${centered ? "text-center flex flex-col items-center" : ""}`}>
      <h2 className="text-3xl font-serif font-bold text-[#06254D] tracking-tight">
        {title}
      </h2>
      <div className={`h-1 w-16 bg-secondary mt-3 rounded-full ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}