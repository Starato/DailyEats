'use client'

import { useRouter } from "next/navigation";

type PrimaryButton = {
    name: string,
    route: string,
}

export const PrimaryButton = (props: PrimaryButton) => {
    const router = useRouter();
    
    const handleClick = () => {
        router.push(props.route)
    }
    return(
        <button className="min-w-max max-w-24 m-2 h-10 rounded-3xl
            hover:bg-sky-300 bg-sky-500 min-h-max 
            cursor-pointer font-bold p-2"
            onClick={handleClick}
            >
            { props.name }
        </button>
    );
}