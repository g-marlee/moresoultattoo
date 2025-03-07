import Link from "next/link";
export default function Home() {
	return (
		<main>
			<div>Will this work??</div>
			<div>
				<Link href={`portfolio`}>Portfolio</Link>
			</div>
		</main>
	);
}
