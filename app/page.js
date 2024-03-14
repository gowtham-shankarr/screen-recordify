import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <main className="min-h-screen container mt-10">
     <div>
      <Image src="/screen-recordify-logo.svg" alt="Vercel Logo" width={180} height={100} />
     </div>
     <div className="hero-section">
      <Image src="/favicon-screen.svg" width={100} height={100}/>
      <h1>
          Create Stunning Screen Recordings in Minutes
      </h1>
      <p className="description">
      Crafting High-Quality Videos as Effortlessly as Capturing a Recorder.
      </p>
      <Link href="/screenrecorder">
  <button className="btn-violet font-semibold text-lg tracking-wider">Try Screen Recorder</button>
</Link>
     </div>
    </main>
  );
}
