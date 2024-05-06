import { useSearchParams } from "next/navigation"

export default function Panel() {
	const page = useSearchParams().get('page');

	return (
		<div id='panel'>

		</div>
	)
}
