import PostForm from '@/components/home/uploadpost/uploadPostForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/uploadpost/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PostForm />
}
