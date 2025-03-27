import PostIdForm from '@/components/home/postid/postIdForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PostIdForm />
}