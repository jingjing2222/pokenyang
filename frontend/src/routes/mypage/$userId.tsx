import MypageForm from '@/components/mypage/MypageForm'
import { createFileRoute, Outlet, useRouterState } from '@tanstack/react-router'

export const Route = createFileRoute('/mypage/$userId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { userId } = Route.useParams()
  const router = useRouterState()
  const isExactMatch = router.location.pathname === `/home/${userId}`
  return <div>
    {isExactMatch ? <MypageForm  /> : null}
    <Outlet />
  </div>
}