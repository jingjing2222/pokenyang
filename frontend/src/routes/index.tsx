import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="App">
			<div>안녕하세요</div>
		</div>
	);
}
