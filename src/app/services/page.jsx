import ServicesPage from "@/components/ServicesPage";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Empowering lives through justice, support, and advocacy"
      />
      <ServicesPage />
      <section className="bg-indigo-200 text-indigo-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 font-head">
            Need help or want to work with us?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-indigo-700 font-body text-lg">
            Whether you're seeking legal assistance, want to support our
            advocacy, or collaborate with our mission — we’d love to hear from
            you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-indigo-900 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-800 transition-colors font-head"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
