export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[32px] bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">Contact</p>
        <h1 className="mt-2 text-4xl font-black text-[#1F2937]">Parlez-nous</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[24px] bg-[#F8F5E9] p-5">
            <p className="text-lg font-bold text-[#14532D]">Téléphone</p>
            <p className="mt-2 text-[#1F2937]/70">+221 78 9 5732 49</p>
          </div>
          <div className="rounded-[24px] bg-[#F8F5E9] p-5">
            <p className="text-lg font-bold text-[#14532D]">Email</p>
            <p className="mt-2 text-[#1F2937]/70">thiawhabib99@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
