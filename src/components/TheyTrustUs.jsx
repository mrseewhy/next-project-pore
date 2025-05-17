import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

// Dummy logo URLs — replace with your actual logos
const logos = [
  "/images/unicef.webp",
  "/images/save.webp",
  "/images/global.webp",
  "/images/world.webp",
  "/images/plan.webp",
  "/images/women1.webp",
  "/images/hope.webp",
  "/images/childsafe.webp",
];

export default function TheyTrustUs() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-indigo-900 mb-10 font-head">
          They Trust Us
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={1000}
            grabCursor={true}
            className="swiper-container"
          >
            {logos.map((logo, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="max-h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
