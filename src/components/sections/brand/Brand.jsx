import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const brands = [
  "/images/brand/website-logo1.jpg",
  "/images/brand/website-logo2.jpg",
  "/images/brand/website-logo3.jpg",
  "/images/brand/website-logo4.jpg",
  "/images/brand/website-logo5.jpg",
  "/images/brand/website-logo6.jpg",
  "/images/brand/website-logo7.jpg",
  "/images/brand/website-logo8.jpg",
  "/images/brand/website-logo9.jpg",
  "/images/brand/website-logo10.jpg",
  "/images/brand/website-logo12.jpg",
  "/images/brand/website-logo13.jpg",
  "/images/brand/website-logo14.jpg",
  "/images/brand/website-logo15.jpg",
  "/images/brand/website-logo16.jpg",
  "/images/brand/website-logo18.jpg",
  "/images/brand/website-logo19.jpg",
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
