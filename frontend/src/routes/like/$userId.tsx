import BookmarkForm from '@/components/like/LikeForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/like/$userId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { userId } = Route.useParams()

  return <BookmarkForm userId={userId} />
}
