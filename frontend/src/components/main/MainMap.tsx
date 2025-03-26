import { useRef } from "react";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import {
  Map as KakaoMap,
  MapMarker,
  useKakaoLoader,
} from "react-kakao-maps-sdk";

const geolocationOptions = {
  enableHighAccuracy: false,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export const MainMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAOMAP_KEY,
  });

  const { location } = useGeoLocation(geolocationOptions);

  const handleMarkerClick = () => {
    console.log('zz')
  };

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: '100vh' }} ref={mapContainerRef}>
        <KakaoMap
          center={{ lat: location.latitude, lng: location.longitude }}
          style={{ width: "100%", height: "100%" }}
          level={3}
        >
          <MapMarker
            onClick={handleMarkerClick}
            image={{
              src: "/images/marker.jpg",
              size: {
                width: 30,
                height: 30,
              },
            }}
            position={{
              lat: location.latitude,
              lng: location.longitude
            }}
          />
        </KakaoMap>

      </div>
    </div>
  );
};