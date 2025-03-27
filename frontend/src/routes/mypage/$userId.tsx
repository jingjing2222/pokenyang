import MypageForm from '@/components/mypage/MypageForm'
import { createFileRoute, Outlet, useMatches } from '@tanstack/react-router'

export const Route = createFileRoute('/mypage/$userId')({
  component: RouteComponent,
})

function RouteComponent() {
  const matches = useMatches()

  const isRootRoute = matches.length === 2

  return (
    <>
      {isRootRoute && <MypageForm />}
      {!isRootRoute && <Outlet />}
    </>
  )
}