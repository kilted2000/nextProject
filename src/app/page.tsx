import Image from 'next/image'

export default function Home() {
  return (
   <div className="bg-rose-950 h-screen">
   <h1 className="h-8 italic text-sky-600">
   Halo Next</h1>
   <p className="text-slate-50">Ciamar a tha sibh?</p>
   <Image src="/crests.jpeg" alt="" width={500} height={550}/>
   </div>
  );
}
