import LoginForm from "@/components/root/LoginForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="App">
			<LoginForm />
		</div>
	);
}
