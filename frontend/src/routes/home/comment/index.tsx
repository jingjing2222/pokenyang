import UploadComment from '@/components/home/uploadcomment/UploadComment'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/comment/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <UploadComment />
}
