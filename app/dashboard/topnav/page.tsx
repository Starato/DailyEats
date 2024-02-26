'use client'

import Link from "next/link";

export const TopNav = () => {
    return(
        <div className="bg-sky-400 p-5 h-full w-screen m-auto
            grid grid-cols-[10%_70%_auto] gap-5">
            <span className="font-bold text-xl col-start-1">FOODIEZ</span>
            <input className="col-start-2 max-w-full mx-40 p-3 rounded-md"
                placeholder="type something in here!" />
            <div className="col-start-3 block justify-center self-center">
                <Link href='/discover'>Discover</Link>
                <Link href='/settings'>Settings</Link>
                <Link href='/profile'>Profile</Link>

            </div>
        </div>
    );
}
