const services = [
  {
    title: "Legal Aid & Representation",
    description:
      "We offer comprehensive legal services to survivors of human trafficking and exploitation. From case evaluation to courtroom representation, we ensure that victims have access to justice and a fair legal process.",
    image: "/images/legal.webp",
  },
  {
    title: "Advocacy & Human Rights Campaigns",
    description:
      "We drive policy change and raise awareness on the rights of children and women. Through advocacy, media, and community mobilisation, we amplify voices that matter.",
    image: "/images/advocacy.webp",
  },
  {
    title: "Victim Support & Rehabilitation",
    description:
      "We provide trauma-informed care and long-term reintegration for survivors. Our services include counselling, shelter, and support for rebuilding lives.",
    image: "/images/support.webp",
  },
  {
    title: "Community Education & Awareness",
    description:
      "We educate communities about trafficking, exploitation, and human rights through outreach programmes, workshops, and campaigns.",
    image: "/images/education.webp",
  },
  {
    title: "Policy Advisory & Consultancy",
    description:
      "We work with institutions to build better laws and systems for protecting the vulnerable. Our team advises on human rights policies, anti-trafficking law, and more.",
    image: "/images/policy.webp",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-12 bg-indigo-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Intro Paragraph with left border */}
          <p className="border-l-8 border-indigo-700 bg-white p-6 rounded-md shadow-sm text-gray-700 text-lg  mx-auto mt-8 mb-12 font-body ">
            Our work is centred on justice, protection, and rehabilitation.
            Every service we offer is rooted in our mission to fight against
            child and women trafficking while restoring dignity to survivors and
            strengthening communities.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-900 mb-2 font-head">
                    {service.title}
                  </h3>
                  <p className="text-gray-700  font-body ">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
