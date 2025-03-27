import PostForm from '@/components/home/uploadpost/PostForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/uploadpost/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PostForm />
}
