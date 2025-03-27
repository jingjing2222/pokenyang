import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/halloffame/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/halloffame/"!</div>
}
