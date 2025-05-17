import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const involvementOptions = [
  {
    title: "Volunteer Your Time",
    description:
      "Join our field or remote teams and contribute to legal aid, survivor support, campaigns, and more. Your time can change lives.",
    image: "/images/time.webp",
  },
  {
    title: "Make a Donation",
    description:
      "Support our legal work, rehabilitation programmes, and education drives. Every contribution brings us closer to justice.",
    image: "/images/donate.webp",
  },
  {
    title: "Partner with Us",
    description:
      "Whether you’re a law firm, NGO, or brand — let’s collaborate to create impact together. We’re stronger as a network.",
    image: "/images/partner.webp",
  },
  {
    title: "Sponsor a Survivor",
    description:
      "Help cover the cost of schooling, therapy, or shelter for a survivor of trafficking. Create meaningful change.",
    image: "/images/sponsor.webp",
  },
  {
    title: "Share Our Message",
    description:
      "Amplify our mission. Follow, share, and spread awareness on trafficking and human rights across your network.",
    image: "/images/share.webp",
  },
];

const page = () => {
  return (
    <div>
      <PageHeader
        title="Get Involved"
        subtitle="You can make a difference in the fight against trafficking."
      />
      <section className="py-12 bg-indigo-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Intro Paragraph */}
          <p className="border-l-8 border-indigo-700 bg-white p-6 rounded-md shadow-sm text-gray-700 text-lg  mt-8 mx-auto mb-12 font-body">
            Every step forward in the fight against trafficking is powered by
            people like you — volunteers, donors, and advocates who believe in
            justice and dignity for all.
          </p>

          {/* Involvement Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {involvementOptions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-900 mb-2 font-head">
                    {item.title}
                  </h3>
                  <p className="text-gray-700  font-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
        </div>
      </section>
      <div className="bg-indigo-700 text-white py-12 px-6  text-center">
        <h2 className="text-2xl font-bold mb-4 font-head">
          Ready to make an impact?
        </h2>
        <p className="mb-6 text-indigo-100 font-body text-lg">
          Let’s take action together — reach out today and help us transform
          lives.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-indigo-800 font-semibold px-8 py-3 rounded-3xl shadow hover:bg-indigo-100 transition font-head"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default page;
