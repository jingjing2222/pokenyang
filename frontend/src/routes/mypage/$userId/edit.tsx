import EditForm from '@/components/mypage/edit/EditForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mypage/$userId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  const { userId } = Route.useParams()
  return <EditForm userId={userId} />
}
