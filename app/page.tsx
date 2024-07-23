import { Header } from "./ui/Header/Header";
import { Featured } from "./Featured";

export default function Home() {

	return (
		<div className='min-w-full'>
			<Header/>
			<Featured />
		</div>
		
	);
}
