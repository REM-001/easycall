import JoinRoom from "@/components/join-room";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-800 to-zinc-900">
      <div className="flex flex-col items-center justify-center h-full px-4 gap-10">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-semibold !leading-snug bg-gradient-to-r from-cyan-500 to-indigo-700
          bg-clip-text text-transparent">
            Connect rapidly with Friends using EasyCalls
          </h1>
          <p className="text-white text-base max-w-md mx-auto mt-2">
            Bring your friends closer with effortless video calls.
          </p>
        </div>
        <JoinRoom />
      </div>
        <Link 
          className="signature hover:underline text-zinc-600 mb-4 mx-auto pl-2 group-hover:underline" 
          href="https://github.com/REM-001"
          target="_blank"
        >
         Developed By REM
        </Link>
    </div>
  );
}
