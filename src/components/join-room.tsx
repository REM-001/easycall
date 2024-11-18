"use client";

import React, { useState} from 'react';
import { useRouter } from 'next/navigation';
import { Video, Users } from "lucide-react";

const JoinRoom = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [roomId, setRoomId] = useState('');

    const generateRoomId = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    const handleCreateNewRoom = () => {
        router.push(`/room/${generateRoomId()}`);
    }

    const handleJoin = (e:React.FormEvent) => {
        e.preventDefault();

        if (username && roomId) {
            router.push(`/room/${roomId}?username=${encodeURIComponent(username)}`);
        }
    }

  return (
    <div className='max-w-md w-full mx-auto'>
        <form onSubmit={handleJoin} className='space-y-6'>
            <div className="username">
                <div className='flex items-center gap-2  mb-2'>
                    <Users className="size-5 text-indigo-400" />
                        <label htmlFor='username' className='text-indigo-400 text-sm'>
                            Your name
                        </label>
                </div>
                <input 
                    id='username'
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Enter your name'
                    className='px-4 h-10 rounedd-md border
                    border-zinc-300 rounded-md focus:outline-none
                    focus:border-indigo-500 w-full'
                />
            </div>
            <div className="room-id">
                <div className='flex items-center gap-2 mb-2'>
                    <Video className="size-5 text-purple-400" />
                    <label htmlFor='roomId' className='text-sm text-purple-400'>
                        Room ID
                    </label>
                </div>
                <input 
                    id='roomId'
                    type="number" 
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    placeholder='Enter room ID'
                    className='px-4 h-10 rounedd-md border
                    border-zinc-300 rounded-md focus:outline-none
                    focus:border-indigo-500 w-full'
                />
            </div>
            <div className='space-y-4'>
                <button type='submit' className='mt-4 w-full px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-indigo-700 text-white
                hover:from-cyan-400 hover:to-indigo-500 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400
                focus:ring-opacity-75 disabled:opacity-50'>
                    Join Room
                </button>
                <button onClick={handleCreateNewRoom} type='button' className='w-full px-4 py-2 rounded-md text-blue-500 hover:text-blue-400
                font-medium cursor-pointer disabled:opacity-50'>
                    or create a new room
                </button>
            </div>
        </form>
    </div>
  )
}

export default JoinRoom