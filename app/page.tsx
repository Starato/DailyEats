import { Header } from "./Header";
// import { Explore } from "./Explore";
import { Featured } from "./Featured";

export default function Home() {

	return (
		<div className='min-w-full'>
			<Header/>
			<Featured />

			{/* <Explore /> */}

		</div>
		
	);
}
