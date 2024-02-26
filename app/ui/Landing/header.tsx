'use client'

import { useRouter } from 'next/navigation';

import { PrimaryButton } from "../Buttons/PrimaryButton";
import { PrimaryButtonOutlined } from "../Buttons/PrimaryButtonOutlined";

export default function Header() {
    const router = useRouter();

    return(
        <div className="grid grid-cols-[20%_auto_10%_10%] bg-slate-300 h-full p-1">
            <span className="col-start-2 text-center self-center">Foodiez</span>
            <PrimaryButtonOutlined 
                name="Sign in"
                route="/sign-in" />
            <PrimaryButton name="Sign up" route=""/>
        </div>
    );
}