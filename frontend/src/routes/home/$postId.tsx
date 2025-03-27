import PostIdForm from '@/components/home/postid/PostIdForm'
import { createFileRoute, Outlet, useRouterState } from '@tanstack/react-router'

export const Route = createFileRoute('/home/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams()
  const router = useRouterState()
  const isExactMatch = router.location.pathname === `/home/${postId}`

  return (
    <div>
      {isExactMatch ? <PostIdForm postId={postId} /> : null}
      <Outlet />
    </div>
  )
}