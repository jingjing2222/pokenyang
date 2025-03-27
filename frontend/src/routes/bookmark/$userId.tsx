import BookmarkForm from '@/components/bookmark/BookmarkForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bookmark/$userId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { userId } = Route.useParams()

  return <BookmarkForm userId={userId} />
}
