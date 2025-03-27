import MyActivityForm from '@/components/mypage/myactivity/MyActivityForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mypage/$userId/activity')({
  component: RouteComponent,
})

function RouteComponent() {
  const { userId } = Route.useParams()
  return <MyActivityForm userId={userId} />
}
