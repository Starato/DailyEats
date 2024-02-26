'use client'

import { Sidenav } from "./sidenav/page";
import { TopNav } from "./topnav/page";

export default function Dashboard() {
    return(
        <div>
            <TopNav />
            <Sidenav />
        </div>
    );
}