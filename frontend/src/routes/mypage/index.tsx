import MypageForm from '@/components/mypage/MypageForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mypage/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MypageForm />
}
