import { useNavigate } from "@tanstack/react-router"

export const Footer = () => {
  const navigate = useNavigate()

  const handleLink = (link: string) => {
    navigate({ to: `/${link}` })
  }

  return <footer className="w-[478px] h-[117px] bg-white flex justify-evenly items-center">
    <div>
      <img className="cursor-pointer" src="/images/footbookmark.svg" onClick={() => { handleLink('bookmark') }} />
    </div>
    <div>
      <img className="cursor-pointer" src="/images/home.svg" onClick={() => { handleLink('home') }} />
    </div>
    <div>
      <img className="cursor-pointer" src="/images/mypage.svg" onClick={() => { handleLink('mypage') }} />
    </div>
  </footer>
}
export default Footer