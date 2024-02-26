'use client'

import { PrimaryButton } from "../ui/Buttons/PrimaryButton";

export default function SignIn() {
    return(
        <div className="bg-slate-100 w-screen
            h-screen flex justify-center items-center">
            <div className="">
                <input type="text" placeholder="asdfasdf" />
                <PrimaryButton name="Login" route=""/>
            </div>
        </div>
    );
}