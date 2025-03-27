import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mypage/$userId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mypage/$userId"!</div>
}
