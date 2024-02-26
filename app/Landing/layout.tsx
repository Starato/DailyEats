'use client'

import { useRouter } from "next/navigation";
import Header from "../ui/Landing/header";
import { SearchBar } from "../ui/Landing/SearchBar";

export default function landingPageLayout() {
    const router = useRouter();
    return ( 
        <div>
            <Header />
            <SearchBar />
        </div>
    );
}