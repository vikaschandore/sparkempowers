import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const brands = [
  "/images/brand/WellWalla_developed_by_Spark_Empowers.png",
  "/images/brand/Sunirm_Digital_Technology_developed_by_Spark_Empowers.png",
  "/images/brand/Rakesh_Kurra_developed_by_Spark_Empowers.png",
  "/images/brand/Hulara_developed_by_Spark_Empowers.png",
  "/images/brand/Keyfalcon_Solutions_developed_by_Spark_Empowers.png",
  "/images/brand/The_Shunya_Foundation_developed_by_Spark_Empowers.png",
  "/images/brand/WellWalla_developed_by_Spark_Empowers.png",
  "/images/brand/Sunirm_Digital_Technology_developed_by_Spark_Empowers.png",
  "/images/brand/Rakesh_Kurra_developed_by_Spark_Empowers.png",
  "/images/brand/Hulara_developed_by_Spark_Empowers.png",
  "/images/brand/Keyfalcon_Solutions_developed_by_Spark_Empowers.png",
  "/images/brand/The_Shunya_Foundation_developed_by_Spark_Empowers.png",
];

export default function Brand() {
  return (
    <section className="brand-sec sec-ptb bg-green">
      <div className="container">
        <div className="row">
          <div className="innerCustomerSatisfactionWr">
            <div className="sec-content mb-5">
              <h6 class="sec-sub-title">Proven Results. Happy Clients.</h6>
              <h2 className="sec-title">
                Trusted by 270+ Satisfied Clients
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="brand-slider owl-carousel owl-theme">
              <Swiper
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 6,
                  },
                }}
              >
                {brands?.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="item d-flex justify-content-center">
                      <img src={item} alt="brand" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
