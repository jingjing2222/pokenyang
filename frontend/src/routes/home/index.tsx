import { MainMap } from '@/components/home/MainMap';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MainMap />;

}
