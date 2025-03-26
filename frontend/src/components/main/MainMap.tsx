import {
  Map as KakaoMap,
  MapMarker,
  useKakaoLoader,
} from "react-kakao-maps-sdk";

export const MainMap = () => {
  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAOMAP_KEY,
  });

  return (
    <KakaoMap
      center={{ lat: 33.450701, lng: 126.570667 }}
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
