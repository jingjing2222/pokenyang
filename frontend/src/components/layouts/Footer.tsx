import { useNavigate } from "@tanstack/react-router"
import { useEffect, useState } from "react"

interface UserData {
  userId: string;
  isLoggedIn: boolean;
  loginTime: string;
}

export const Footer = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  const handleLink = (link: string) => {
    if ((link === 'mypage' || link === 'bookmark') && userData) {
      navigate({ to: `/${link}/${userData.userId}` })
    } else {
      navigate({ to: `/${link}` })
    }
  }

  return <footer className="w-[478px] h-[117px] bg-white flex justify-evenly items-center border-t border-[#D9D9D9]">
    <div>
      <img className="cursor-pointer" src="/images/footbookmark.svg" alt="footbookmark" onClick={() => { handleLink('bookmark') }} />
    </div>
    <div>
      <img className="cursor-pointer" src="/images/home.svg" alt="home" onClick={() => { handleLink('home') }} />
    </div>
    <div>
      <img className="cursor-pointer" src="/images/mypage.svg" alt="mypage" onClick={() => { handleLink('mypage') }} />
    </div>
  </footer>
}

export default Footer