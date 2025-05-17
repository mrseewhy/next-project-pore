"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const campaigns = [
  {
    title: "End Child Trafficking Now",
    description:
      "A grassroots campaign raising awareness and pushing policy reforms across vulnerable communities.",
    image: "/images/child.webp",
  },
  {
    title: "Safe Homes for Women",
    description:
      "Partnering with shelters and legal bodies to protect and rehabilitate women survivors.",
    image: "/images/women.webp",
  },
  {
    title: "Rescue & Reintegrate",
    description:
      "Focused on rescuing trafficked children and women, ensuring their psychological and social reintegration.",
    image: "/images/rescue.webp",
  },
  {
    title: "Education for Every Child",
    description:
      "Providing access to education and scholarships for children affected by trafficking.",
    image: "/images/child2.webp",
  },
  {
    title: "Legal Aid & Advocacy",
    description:
      "Offering free legal assistance and advocacy for survivors to seek justice.",
    image: "/images/legalaid.webp",
  },
];

const impactStats = [
  { label: "Years in Advocacy", value: 10 },
  { label: "Cases Resolved", value: 150 },
  { label: "Children Empowered", value: 890 },
];

const testimonials = [
  {
    name: "Maria Santos (Philippines)",
    message:
      "This lawyer's dedication to fighting child trafficking is inspiring. He helped me get justice for my niece and brought hope back to our family.",
    image: "/images/2.webp",
  },
  {
    name: "Leila Hassan (Asia)",
    message:
      "His expertise and compassion are truly remarkable. He rescued my daughter from the clutches of traffickers and ensured the perpetrators were held accountable.",
    image: "/images/3.webp",
  },
  {
    name: "Samantha Brown (Bahamas)",
    message:
      "This lawyer is a true champion for children's rights. He worked tirelessly to protect my son and bring the traffickers to justice.",
    image: "/images/1.webp",
  },
  {
    name: "Ana Moreno (Panama)",
    message:
      "His work in combating child trafficking has changed countless lives. He helped me find my missing child and ensured the traffickers faced the law.",
    image: "/images/4.webp",
  },
  {
    name: "Rukmini Desai (Asia)",
    message:
      "This lawyer's commitment to justice is unwavering. He helped us rescue our children from a trafficking ring and brought the culprits to book.",
    image: "/images/5.webp",
  },
  {
    name: "Lily Jean (Bahamas)",
    message:
      "He is a beacon of hope for victims of child trafficking. His expertise and care helped me navigate the complex legal system and secure justice for my child.",
    image: "/images/6.webp",
  },
];

export default function page() {
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    // Animation will complete in exactly 5 seconds
    const ANIMATION_DURATION = 5000; // 5 seconds in milliseconds
    const FRAME_RATE = 60; // Updates per second
    const TOTAL_FRAMES = (ANIMATION_DURATION / 1000) * FRAME_RATE;

    let frame = 0;

    const interval = setInterval(() => {
      frame++;

      setCounts(
        impactStats.map((stat) => {
          // Calculate progress as a percentage (0 to 1)
          const progress = frame / TOTAL_FRAMES;

          // Use easeOutQuad easing function for smoother animation at the end
          const easedProgress = 1 - Math.pow(1 - progress, 2);

          // Calculate current value based on progress
          return Math.min(Math.floor(stat.value * easedProgress), stat.value);
        })
      );

      // Stop the animation when complete
      if (frame >= TOTAL_FRAMES) {
        clearInterval(interval);
        // Ensure final values are exact
        setCounts(impactStats.map((stat) => stat.value));
      }
    }, 1000 / FRAME_RATE);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50">
      {/* Page Header */}
      <PageHeader
        title="Advocacy"
        subtitle="Fighting child and women trafficking through impactful campaigns and legal reform."
      />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Intro Paragraph with left border */}
        <p className="border-l-8 border-indigo-700 bg-white p-6 rounded-md shadow-sm text-gray-700 text-lg  mx-auto mt-20 font-body">
          Our advocacy efforts are united by one goal: to protect, uplift, and
          empower vulnerable children and women. Every campaign is rooted in
          justice and driven by empathy.
        </p>
      </div>

      {/* Campaign Cards */}
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-3 max-w-6xl">
        {campaigns.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-900 mb-2 font-head">
                {item.title}
              </h3>
              <p className=" text-gray-600 font-body">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Impact Stats */}
      <div className="bg-indigo-100 py-16">
        <h2 className="text-3xl font-bold text-indigo-900 mb-12 font-head text-center">
          Our Impact in Numbers
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-6xl">
          {impactStats.map((item, i) => (
            <div key={i} className="p-6">
              <div className="text-4xl font-bold text-indigo-800 font-head">
                {counts[i]}+
              </div>
              <div className="mt-2 text-gray-700 font-medium font-body text-lg">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Indigo Section */}
      <div className="bg-indigo-950 text-white py-24 text-center">
        <h2 className="text-3xl font-bold font-head">
          Empowering Lives Every Day
        </h2>
        <p className="text-indigo-100 mt-2 mb-12 text-lg font-body">
          Join us in changing the story for women and children in need.
        </p>
        <Link
          className=" bg-indigo-200 text-indigo-900 font-lg font-head font-bold px-8 py-3 rounded-3xl"
          href="/contact"
        >
          Contact us
        </Link>
      </div>

      {/* Testimonials */}

      <div className=" py-16 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-indigo-900 font-head">
            What They're Saying
          </h2>

          {/* Custom navigation styles */}
          <style jsx global>{`
            .testimonial-container {
              position: relative;
              padding-bottom: 50px; /* Space for pagination below */
            }

            .custom-swiper-container {
              padding: 0 40px; /* Make room for arrows */
              position: relative;
            }

            .swiper-button-next,
            .swiper-button-prev {
              color: #4338ca; /* Indigo color */
              top: 50%;
              transform: translateY(-50%);
              z-index: 10;
            }

            .swiper-button-next {
              right: 0;
            }

            .swiper-button-prev {
              left: 0;
            }

            /* Move pagination completely outside */
            .custom-pagination {
              width: 100%;
              display: flex;
              justify-content: center;
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
            }

            .custom-pagination .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              margin: 0 5px;
              background: #d1d5db;
              opacity: 1;
              cursor: pointer;
            }

            .custom-pagination .swiper-pagination-bullet-active {
              background: #4338ca; /* Indigo color */
            }
          `}</style>

          <div className="testimonial-container">
            <div className="custom-swiper-container">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={false} /* Disable built-in pagination */
                autoplay={{ delay: 5000 }}
                loop
                spaceBetween={20}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="mySwiper"
                onSwiper={(swiper) => {
                  // After swiper initialization, connect custom pagination
                  if (typeof window !== "undefined") {
                    const bullets =
                      document.querySelector(".custom-pagination");
                    if (bullets) {
                      // Create pagination bullets based on slide count
                      const bulletCount = testimonials.length;
                      bullets.innerHTML = "";

                      for (let i = 0; i < bulletCount; i++) {
                        const bullet = document.createElement("span");
                        bullet.className = "swiper-pagination-bullet";
                        bullet.addEventListener("click", () => {
                          swiper.slideToLoop(i);
                        });
                        bullets.appendChild(bullet);
                      }

                      // Update active bullet on slide change
                      swiper.on("slideChange", () => {
                        const activeBullets = bullets.querySelectorAll(
                          ".swiper-pagination-bullet"
                        );
                        activeBullets.forEach((b, idx) => {
                          if (idx === swiper.realIndex) {
                            b.classList.add("swiper-pagination-bullet-active");
                          } else {
                            b.classList.remove(
                              "swiper-pagination-bullet-active"
                            );
                          }
                        });
                      });

                      // Set initial active bullet
                      const firstBullet = bullets.querySelector(
                        ".swiper-pagination-bullet"
                      );
                      if (firstBullet) {
                        firstBullet.classList.add(
                          "swiper-pagination-bullet-active"
                        );
                      }
                    }
                  }
                }}
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg h-full flex flex-col items-center text-center border-t-4 border-b-4 border-indigo-700">
                      <p className="italic  mb-6 font-body">"{item.message}"</p>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover mt-auto mb-2"
                      />
                      <div className="text-sm font-semibold text-indigo-800">
                        {item.name}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom navigation arrows */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>

            {/* Custom pagination completely outside the slider */}
            <div className="custom-pagination"></div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4 font-head">
            Join Us in Making a Difference
          </h2>
          <p className="mb-8 text-indigo-100 text-lg font-body">
            Whether you want to volunteer, donate, or collaborate, your support
            helps save lives and empower futures.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-indigo-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition font-head"
            >
              Contact Us
            </Link>
            <Link
              href="/get-involved"
              className="bg-indigo-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-indigo-700 transition font-head"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
