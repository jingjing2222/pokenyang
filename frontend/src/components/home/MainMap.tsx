import { useEffect, useRef, useState } from "react";
import { useGeoLocation, type ILocation } from "@/hooks/useGeoLocation";
import {
  Map as KakaoMap,
  MapMarker,
  useKakaoLoader,
} from "react-kakao-maps-sdk";
import { useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchUserPosts } from "@/api/api";

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

  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchUserPosts,
  });

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
    console.log(center);
  };

  const postsWithLocation = posts?.filter(post =>
    post.lat !== null && post.lng !== null
  ) || [];

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

          {/* 현재 위치 마커 */}
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

          {/* 게시물 마커 */}
          {!isLoading && postsWithLocation.map((post) => (
            <MapMarker
              key={post.id}
              onClick={() => handleMovePost(post.id)}
              image={{
                src: "/images/marker.svg",
                size: {
                  width: 50,
                  height: 50,
                },
              }}
              position={{
                lat: post.lat as number,
                lng: post.lng as number
              }}
            />
          ))}
        </KakaoMap>

        {/* 로딩 인디케이터 */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-20">
            <div className="text-[#F291D0] text-lg">지도 정보를 불러오는 중...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainMap;