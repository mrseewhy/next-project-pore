"use client";

import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const partners = [
  {
    name: "UNICEF",
    logo: "/images/unicef.webp",
  },
  {
    name: "Save the Children",
    logo: "/images/save.webp",
  },
  {
    name: "Global Rights",
    logo: "/images/global.webp",
  },
  {
    name: "World Vision",
    logo: "/images/world.webp",
  },
  {
    name: "Plan International",
    logo: "/images/plan.webp",
  },
  {
    name: "Women’s Aid",
    logo: "/images/women1.webp",
  },
  {
    name: "Hope for Kids",
    logo: "/images/hope.webp",
  },
  {
    name: "Child Safe",
    logo: "/images/childsafe.webp",
  },
];

export default function page() {
  return (
    <div>
      <PageHeader
        title="Our Partners"
        subtitle="We collaborate with like-minded organisations to create lasting impact in the fight against child and women trafficking."
      />

      <section className="bg-indigo-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-head text-indigo-900">
            Stronger Together
          </h2>
          <p className=" text-lg font-body">
            Our partners help us reach farther, respond faster, and advocate
            louder. Their support powers real change in vulnerable communities.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white shadow-sm hover:shadow-md rounded-xl p-4 transition-all duration-300 text-center border border-indigo-100 hover:border-indigo-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 mx-auto mb-3 object-contain"
              />
              <p className="text-sm  text-gray-700 font-semibold font-head">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-600 text-white text-center py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 font-head">Partner with Us</h2>
          <p className="text-lg mb-8 font-body">
            Let’s create impact together. We welcome collaborations,
            sponsorships, and joint campaigns with organisations that share our
            mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-indigo-950 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition font-head"
            >
              Contact Us
            </Link>
            <Link
              href="/get-involved"
              className="bg-indigo-950 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-900 transition font-head"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
