import Link  from 'next/link'

export const Header = () => {
    
    return (
        <div className="bg-stone-900 flex-1 h-20 text-slate-100
            grid grid-cols-[20%_auto_20%]">

            <div className="col-start-1 flex justify-center items-center h-20">
                <h2 className=" text-yellow-300 text-4xl font-bold m-4">Daily Eats</h2>
            </div>

            <div className="col-start-2 flex justify-center items-center h-20">
                <input className="h-12 text-slate-900
                rounded-3xl p-5
                border-2 focus:border-yellow-300 focus:outline-none"
                placeholder="Phoooooooooooood" autoFocus></input>
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
  )
}
