import React from 'react';
import Link  from 'next/link'
import Image from 'next/image';


export const Header = () => {
    
    return (
        <div>
            <div className="bg-stone-900 flex-1 h-20 text-slate-100
                grid grid-cols-[20%_auto_20%]">

                <div className="col-start-1 flex justify-center items-center h-20">
                    <Link href="/" className=" text-white text-4xl font-bold m-4 cursor-pointer select-none">Daily Eats</Link>
                </div>

                <div className="col-start-2 flex justify-center items-center h-20">
                    <input className="h-12 text-slate-900
                    rounded-3xl p-5 w-[75%]
                    border-2 focus:border-yellow-300 focus:outline-none"
                    placeholder="Search for a food here!" autoFocus></input>
                    <Image src='/burger.png' width='24' height='24' alt='search'
                    className='relative right-12 cursor-pointer'/>
                </div>

                <div className="col-start-3 flex justify-center items-center h-20">
                    <Link href="" className="border-2 rounded-3xl
                        m-2 p-3 min-w-24 text-center">
                        Sign in
                    </Link>

                    <Link href="" className="border-2 rounded-3xl m-2 p-3 min-w-24
                        border-yellow-300 text-yellow-300
                        text-center"
                    >
                        Sign up
                    </Link>
                </div>
            </div>

            <div className='flex justify-evenly bg-stone-900
                [&_div]: cursor-pointer [&_div]:text-white p-4 [&_div]:border-b-2 [&_div]:border-yellow-300' >
                <div className='hover:text-yellow-300'>Trending</div>
                <div className='hover:text-yellow-300'>Recipes</div>
                <div className='hover:text-yellow-300'>Occasion</div>
                <div className='hover:text-yellow-300'>Healthy</div>
                <div className='hover:text-yellow-300'>Baking</div>
                <div className='hover:text-yellow-300'>Community</div>
                <div className='hover:text-yellow-300'>Novelty</div>
            </div>

        </div>
  )
}
