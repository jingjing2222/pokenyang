import { useNavigate, useRouter } from "@tanstack/react-router"
import { useEffect, useState } from "react"

interface UserData {
  userId: string;
  isLoggedIn: boolean;
  loginTime: string;
}

export const Footer = () => {
  const navigate = useNavigate()
  const router = useRouter()
  const [userData, setUserData] = useState<UserData | null>(null)

  // 현재 경로 가져오기
  const currentPath = router.state.location.pathname

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  const handleLink = (link: string) => {
    if ((link === 'mypage' || link === 'like') && userData) {
      navigate({ to: `/${link}/${userData.userId}` })
    } else {
      navigate({ to: `/${link}` })
    }
  }

  const getImageSrc = (type: string) => {
    switch (type) {
      case 'like':
        return currentPath.includes('/like') ? "/images/selectedlike.svg" : "/images/like.svg";
      case 'home':
        return currentPath === '/home' ? "/images/selectedhome.svg" : "/images/home.svg";
      case 'mypage':
        return currentPath.includes('/mypage') ? "/images/selectedmypage.svg" : "/images/mypage.svg";
      default:
        return `/images/${type}.svg`;
    }
  }

  return <footer className="w-[478px] h-[117px] bg-white flex justify-evenly items-center border-t border-[#D9D9D9]">
    <div>
      <img className="cursor-pointer" src={getImageSrc('like')} alt="footlike" onClick={() => { handleLink('like') }} />
    </div>
    <div>
      <img className="cursor-pointer" src={getImageSrc('home')} alt="home" onClick={() => { handleLink('home') }} />
    </div>
    <div>
      <img className="cursor-pointer" src={getImageSrc('mypage')} alt="mypage" onClick={() => { handleLink('mypage') }} />
    </div>
  </footer>
}

export default Footer