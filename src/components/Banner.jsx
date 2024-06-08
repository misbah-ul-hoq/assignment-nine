// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://photos.zillowstatic.com/fp/75dd2a6d525738f43ff86261310c1bc6-p_e.webp"
            className="h-[300px] object-cover select-none"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://photos.zillowstatic.com/fp/e8d51d4916ce005f16e7d4b61c725ba2-p_e.webp"
            className="h-[300px] object-cover select-none"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://photos.zillowstatic.com/fp/adf819b875dcdf818d2dbd5719e99842-p_e.webp"
            className="h-[300px] object-cover select-none"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://photos.zillowstatic.com/fp/761c871d1bc160ac966c431c7f9d279a-p_e.webp"
            className="h-[300px] object-cover select-none"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
