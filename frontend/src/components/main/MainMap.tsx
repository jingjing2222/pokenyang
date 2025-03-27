import { useGeoLocation } from "@/hooks/useGeoLocation";
import {
  Map as KakaoMap,
  MapMarker,
  useKakaoLoader,
} from "react-kakao-maps-sdk";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
}

export const MainMap = () => {
  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAOMAP_KEY,
  });

  const { location } = useGeoLocation(geolocationOptions)
  
  return (
    <KakaoMap
    center={{ lat: location?.latitude || 33.450701, lng: location?.longitude || 126.570667 }}
      style={{ width: "1000px", height: "600px" }}
      level={3}
    >
      <MapMarker
        onClick={() => console.log("안녕하세요")}
        image={{
          src: "/images/marker.jpg",
          size: {
            width: 30,
            height: 30,
          },
        }}
        position={{
          lat: 33.450701,
          lng: 126.570667,
        }}
      />
    </KakaoMap>
  );
};
