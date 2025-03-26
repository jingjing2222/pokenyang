import { useState, useRef } from "react";
import { defaultLocation, useGeoLocation } from "@/hooks/useGeoLocation";
import {
  Map as KakaoMap,
  MapMarker,
  useKakaoLoader,
} from "react-kakao-maps-sdk";
import { Modal } from "@/components/main/Modal";

const geolocationOptions = {
  enableHighAccuracy: false,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export const MainMap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);

  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAOMAP_KEY,
  });

  const { location } = useGeoLocation(geolocationOptions);

  const handleMarkerClick = () => {
    setSelectedLocation(location);
    setIsModalOpen(true);
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

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          location={selectedLocation}
        />
      </div>
    </div>
  );
};