import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/home/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = useParams({ from: '/home/$postId' })
  return <div>Hello "/home/{postId}"!</div>
}