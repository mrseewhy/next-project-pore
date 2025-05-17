"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import TheyTrustUs from "@/components/TheyTrustUs";
import { Users, Gavel, HandHelping, Mail } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
const page = () => {
  const impactStats = [
    { label: "Years in Advocacy", value: 10 },
    { label: "Cases Resolved", value: 150 },
    { label: "Children Empowered", value: 890 },
  ];
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
    <div className="bg-indigo-50">
      <HeroSection />
      <TheyTrustUs />

      {/* Organisation Overview */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        <div className="md:w-1/2 order-2">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4 font-head">
            About Federico & co.
          </h2>
          <p className="text-gray-700 leading-relaxed font-body mb-8">
            Federico & Co is a human rights-focused legal organisation
            advocating against child and women trafficking. With deep roots in
            justice and community support, we provide legal services,
            empowerment programmes, and awareness campaigns that have touched
            hundreds of lives.
          </p>
          <Link
            href="/about"
            className=" font-head px-8 py-3 rounded-3xl bg-indigo-950 text-white font-bold"
          >
            {" "}
            Read more{" "}
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/img.jpeg"
            alt="Federico and Co in action"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* {Impact in numbers} */}

      {/* Impact Statistics */}
      <section className="bg-indigo-100 py-8">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <h2 className="text-3xl text-left font-bold text-indigo-900 mb-12 font-head">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <Users className="mx-auto text-indigo-700 w-8 h-8 mb-2" />
              <p className="text-3xl font-extrabold text-indigo-900 font-head">
                {counts[0]}+
              </p>
              <p className="text-gray-700 font-body text-lg">
                {impactStats[0].label}
              </p>
              <p></p>
            </div>
            <div>
              <Gavel className="mx-auto text-indigo-700 w-8 h-8 mb-2" />
              <p className="text-3xl font-extrabold text-indigo-900">
                {" "}
                {counts[1]}+
              </p>
              <p className="text-gray-700">{impactStats[1].label}</p>
            </div>
            <div>
              <HandHelping className="mx-auto text-indigo-700 w-8 h-8 mb-2" />
              <p className="text-3xl font-extrabold text-indigo-900">
                {" "}
                {counts[2]}+
              </p>
              <p className="text-gray-700">{impactStats[2].label}</p>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do */}
      <section className=" py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2 font-head">
              What We Do
            </h2>
            <p className="text-indigo-700 max-w-2xl mx-auto text-lg font-body">
              From legal representation to empowerment programmes, our work is
              united by one mission — restoring dignity and justice to the lives
              we touch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="/images/legal.webp"
                alt="Legal Aid"
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-indigo-800 mb-2 font-head">
                Legal Aid & Representation
              </h3>
              <p className="text-gray-600 mb-4 font-body">
                We provide free legal representation to victims of trafficking
                and gender-based violence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="/images/advocacy.webp"
                alt="Advocacy"
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-indigo-800 mb-2 font-head">
                Advocacy & Human Rights Campaigns
              </h3>
              <p className="text-gray-600 mb-4 font-body">
                We lead impactful campaigns that raise awareness and drive
                change on key human rights issues.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="/images/support.webp"
                alt="Victim Support"
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-indigo-800 mb-2 font-head">
                Victim Support & Rehabilitation
              </h3>
              <p className="text-gray-600 mb-4 font-body">
                We offer shelter, counselling, and rehabilitation services to
                help survivors rebuild their lives.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 font-head">
            <Link
              href="/services"
              className="inline-block bg-indigo-700 text-white font-semibold px-8 py-3 rounded-3xl hover:bg-indigo-600 transition"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Full Width Indigo Section */}
      <div className="bg-indigo-950 text-white py-24 text-center">
        <h2 className="text-3xl font-bold font-head">
          You Can Make a Difference
        </h2>
        <p className="text-indigo-100 mt-2 mb-12 text-lg font-body max-w-3xl mx-auto">
          Join us in the fight against trafficking—together, we can protect the
          vulnerable, support survivors, and help end this injustice. Your voice
          matters. Stand with us.
        </p>
        <Link
          className=" bg-indigo-200 text-indigo-900 font-lg font-head font-bold px-8 py-3 rounded-3xl"
          href="/get-involved"
        >
          Get Involved
        </Link>
      </div>

      <section className=" py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2 font-head">
              Projects & Advocacy
            </h2>
            <p className="text-indigo-700 max-w-2xl mx-auto text-lg font-body">
              From legal representation to empowerment programmes, our work is
              united by one mission — restoring dignity and justice to the lives
              we touch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="/images/child.webp"
                alt="Legal Aid"
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-indigo-800 mb-2 font-head">
                End Child Trafficking Now
              </h3>
              <p className="text-gray-600 mb-4 font-body">
                A grassroots campaign raising awareness and pushing policy
                reforms across vulnerable communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="/images/women.webp"
                alt="Advocacy"
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-indigo-800 mb-2 font-head">
                Safe Homes for Women
              </h3>
              <p className="text-gray-600 mb-4 font-body">
                Partnering with shelters and legal bodies to protect and
                rehabilitate women survivors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="/images/rescue.webp"
                alt="Victim Support"
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-indigo-800 mb-2 font-head">
                Rescue & Reintegrate
              </h3>
              <p className="text-gray-600 mb-4 font-body">
                Focused on rescuing trafficked children and women, ensuring
                their psychological and social reintegration.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 font-head">
            <Link
              href="/advocacy"
              className="inline-block bg-indigo-700 text-white font-semibold px-8 py-3 rounded-3xl hover:bg-indigo-600 transition"
            >
              Explore Our Advocacy Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}

      <div className=" py-16 relative bg-white">
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
      {/* Contact us */}
      <div className=" py-12">
        <div className="container mx-auto px-4 max-w-6xl ">
          <div className=" p-10 md:p-16 grid md:grid-cols-2 gap-12 place-items-center">
            {/* Contact Form */}
            <div className="w-full">
              <img
                src="/images/contact.webp"
                alt="Contact us"
                className="w-full h-full rounded-2xl"
              />
            </div>

            {/* Contact Info */}
            <div className="text-indigo-950 h-full">
              <h2 className="text-3xl font-bold mb-2 font-head text-indigo-900">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6 font-body">
                We're committed to advocacy and action. Reach out to learn how
                you can support or partner with us.
              </p>

              {/* Email Card */}
              <div className="bg-indigo-100 border-l-4 border-indigo-400 rounded-lg p-4 mb-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Mail className="text-indigo-700" />
                  <span className="text-indigo-900 font-medium font-head">
                    info@federicoandco.com
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-4">
                <SocialIcon href="#" label="X (Twitter)">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.333 3H21L14.75 10.035L22 21H16.75L12.25 14.965L6.999 21H4L10.667 13.535L3 3H8.333L12.417 8.59L18.333 3Z" />
                  </svg>
                </SocialIcon>

                <SocialIcon href="#" label="Facebook">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.26 0-1.65.78-1.65 1.58v1.9h2.8l-.45 2.9h-2.35v7.03C18.34 21.2 22 17.07 22 12.07z" />
                  </svg>
                </SocialIcon>

                <SocialIcon href="#" label="LinkedIn">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5A2.5 2.5 0 107.5 6a2.5 2.5 0 00-2.52-2.5zM3 8.75h4v12.5H3V8.75zm6.75 0h3.75v1.7h.05a4.1 4.1 0 013.7-2c3.95 0 4.67 2.6 4.67 6v6.8h-4v-6c0-1.43-.03-3.27-2-3.27s-2.3 1.56-2.3 3.17v6.1h-4V8.75z" />
                  </svg>
                </SocialIcon>

                <SocialIcon href="#" label="Instagram">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.8a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                  </svg>
                </SocialIcon>

                {/* Cleaner TikTok SVG */}
                <SocialIcon href="#" label="TikTok">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                  >
                    <path d="M232 72a72.1 72.1 0 01-72-72h-32v176a24 24 0 11-24-24 24 24 0 0124 24h32a56 56 0 10-56 56 56.1 56.1 0 0056-56v-88.7A103.4 103.4 0 00232 104z" />
                  </svg>
                </SocialIcon>

                {/* Cleaner YouTube SVG */}
                <SocialIcon href="#" label="YouTube">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.9-42.3-48.6-48.6C456.1 64 288 64 288 64S119.9 64 74.9 75.5C51.2 81.8 32.6 100.4 26.3 124.1 16 169.1 16 256 16 256s0 86.9 10.3 131.9c6.3 23.7 24.9 42.3 48.6 48.6C119.9 448 288 448 288 448s168.1 0 213.1-11.5c23.7-6.3 42.3-24.9 48.6-48.6C560 342.9 560 256 560 256s0-86.9-10.3-131.9zM232 336V176l142 80-142 80z" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable SocialIcon component
function SocialIcon({ href, label, children }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-900 text-indigo-50 hover:bg-indigo-700 transition"
    >
      {children}
    </Link>
  );
}

export default page;
