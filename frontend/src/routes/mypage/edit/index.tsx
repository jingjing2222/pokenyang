import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mypage/edit/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mypage/edit/"!</div>
}
