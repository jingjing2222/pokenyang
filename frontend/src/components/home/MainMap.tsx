import { useRef } from "react";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import {
  Map as KakaoMap,
  MapMarker,
  useKakaoLoader,
} from "react-kakao-maps-sdk";
import { useNavigate } from "@tanstack/react-router";
import { mockData } from "@/mocks/mockData";

const geolocationOptions = {
  enableHighAccuracy: false,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export const MainMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAOMAP_KEY,
  });

  const { location } = useGeoLocation(geolocationOptions);

  const handleUpload = () => {
    navigate({ to: '/home/uploadpost' });
  };

  const handleMovePost = (postId: number) => {
    navigate({ to: `/home/${postId}` });
  };

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: '100vh' }} ref={mapContainerRef}>

        {/* 지도 */}
        <KakaoMap
          center={{ lat: location.latitude, lng: location.longitude }}
          style={{ width: "100%", height: "100%" }}
          level={3}
        >

          {/* 업로드 버튼 */}
          <img onClick={handleUpload}
            className="absolute bottom-10 right-2 z-70 cursor-pointer"
            src="/images/uploadpost.svg" />

          {/* 마커 찍는 부분 */}
          {mockData.map((item) => (
            <MapMarker
              key={item.postId}
              onClick={() => handleMovePost(item.postId)}
              image={{
                src: "/images/marker.jpg",
                size: {
                  width: 30,
                  height: 30,
                },
              }}
              position={{
                lat: item.position.lat,
                lng: item.position.lng
              }}
            />
          ))}
        </KakaoMap>
      </div>
    </div>
  );
};