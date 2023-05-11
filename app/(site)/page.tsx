
import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <main 
      className="bg-slate-100 min-w-full min-h-[100vh] flex flex-col justify-center items-center"
    >
      <div 
        className="sm:mx-auto max-w-md"
      >
        <Image 
          alt="Logo"
          src={"/logo-mine.png"}
          width={150}
          height={150}
        />
      </div>      
      <h2
          className="mt-2 font-semibold text-3xl text-black"
        >
          Sign into your account
        </h2>
        <AuthForm />
    </main>
  )
}