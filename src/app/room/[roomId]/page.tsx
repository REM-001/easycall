"use client";

import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

const VideoCall = dynamic(() => import('@/components/video-call'), {
 ssr: false
});

const RoomPage = () => {
 const params = useParams();
 const roomId = params.roomId as string;

 if (!roomId) {
   return (
     <div className='h-screen flex items-center justify-center'>
       <div className="text-center">
         <h1 className='text-2xl font-semibold'>
           Room ID is required!
         </h1>
       </div>
     </div>
   );
 }

 return <VideoCall roomId={roomId} />;
};

export default RoomPage;