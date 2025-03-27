import PostIdForm from '@/components/home/postid/PostIdForm'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/home/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams()

  return (
    <div>
      <PostIdForm postId={postId} />
      <Outlet />
    </div>
  )
}