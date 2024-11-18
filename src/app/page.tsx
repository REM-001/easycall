import JoinRoom from "@/components/join-room";

export default function Homepage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-neutral-100 to-white">
      <div className="flex flex-col items-center justify-center h-full px-4 gap-10">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-semibold !leading-snug bg-gradient-to-r from-cyan-500 to-indigo-700
          bg-clip-text text-transparent">
            Connect rapidly with Friends using EasyCalls
          </h1>
          <p className="text-zinc-600 text-base max-w-md mx-auto mt-2">
            Bring your friends closer with effortless video calls.
          </p>
        </div>
        <JoinRoom />
      </div>
    </div>
  );
}
