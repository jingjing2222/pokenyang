import { useEffect, useRef, useState } from "react";
import { useGeoLocation, type ILocation } from "@/hooks/useGeoLocation";
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

  const [center, setCenter] = useState<ILocation>({
    lat: 33.450701,
    lng: 126.570667
  });

  const [isPanto, setIsPanto] = useState<boolean>(false);
  const [shouldRefreshLocation, setShouldRefreshLocation] = useState<boolean>(false);

  const navigate = useNavigate();

  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAOMAP_KEY,
  });

  const { location } = useGeoLocation(geolocationOptions);

  useEffect(() => {
    if (location.lat !== 0 && location.lng !== 0) {
      setCenter(location);
    }
  }, [location.lat, location.lng]);

  useEffect(() => {
    if (shouldRefreshLocation) {
      const getCurrentPosition = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const newLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              setCenter(newLocation);
              setIsPanto(true);
              setShouldRefreshLocation(false);
            },

          );
        }
      };

      getCurrentPosition();
    }
  }, [shouldRefreshLocation]);

  const handleUpload = () => {
    navigate({ to: '/home/uploadpost' });
  };

  const handleMovePost = (postId: number) => {
    navigate({ to: `/home/${postId}` });
  };

  const handleMoveCenter = () => {
    setShouldRefreshLocation(true);
    console.log(center)
  };

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 117px)' }} ref={mapContainerRef}>
        {/* 지도 */}
        <KakaoMap
          center={center}
          isPanto={isPanto}
          style={{ width: "100%", height: "100%" }}
          level={3}
          onCenterChanged={() => setIsPanto(false)}
        >

          {/* 자기 위치 이동 버튼 */}
          <div className="absolute bottom-24 right-2 z-10 w-12 h-12">
            <img
              onClick={handleMoveCenter}
              className="cursor-pointer w-12 h-12"
              src="/images/mylocation.svg"
              alt="내 위치로 이동"
            />
          </div>

          {/* 업로드 버튼 */}
          <div className="absolute bottom-10 right-2 z-10 w-12 h-12">
            <img
              onClick={handleUpload}
              className="cursor-pointer w-12 h-12"
              src="/images/uploadpost.svg"
              alt="게시물 업로드"
            />
          </div>
          <MapMarker
            image={{
              src: "/images/currentmarker.svg",
              size: {
                width: 30,
                height: 30,
              },
            }}
            position={{
              lat: location.lat,
              lng: location.lng
            }}
          />
          {/* 마커 찍는 부분 */}
          {mockData.map((item) => (
            <MapMarker
              key={item.postId}
              onClick={() => handleMovePost(item.postId)}
              image={{
                src: "/images/marker.svg",
                size: {
                  width: 50,
                  height: 50,
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