'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";

export const Sidenav = () => {
    const router = useRouter();

    return(
        <div className="block bg-red-400 w-48 absolute top-0 h-full">
            <p>This is the sidenav</p>
            <div className="my-3 mx-1 bg-slate-100">
                <Link href='/favorites'>Favorites</Link>
            </div>
            <div className="my-3 mx-1 bg-slate-100">
                <Link href='/meal-plan'>Meal Plan</Link>
            </div>
            <div className="my-3 mx-1 bg-slate-100">
                <Link href='/tracker'>Calorie Tracker</Link>
            </div>
            <div className="my-3 mx-1 bg-slate-100">
                <Link href='/goal'>Goal</Link>
            </div>
            <div className="my-3 mx-1 bg-slate-100">
                <Link href='/grocery'>Grocery List</Link>
            </div>
            <div className="my-3 mx-1 bg-slate-100">
                <Link href='/conversion'>Unit Conversion</Link>
            </div>

        </div>
    );
}