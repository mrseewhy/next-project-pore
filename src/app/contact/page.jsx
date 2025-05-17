import ContactPage from "@/components/ContactPage";
import PageHeader from "@/components/PageHeader";

const page = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We are here to help — reach out with your inquiries or support."
      />
      <ContactPage />
    </div>
  );
};

export default page;
