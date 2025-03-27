import UploadComment from '@/components/home/postid/comment/UploadComment'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/$postId/comment')({
  component: CommentRouteComponent,
})

function CommentRouteComponent() {
  const { postId } = Route.useParams()
  return <UploadComment postId={postId} />
}