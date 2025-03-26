import { MainMap } from "@/components/main/MainMap";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/main/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <MainMap />;
}
