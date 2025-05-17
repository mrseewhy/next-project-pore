import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white py-8 font-head">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo / Title */}
          <div className="text-2xl font-bold ">
            <Link href="/">Federico & Co.</Link>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/services" className="hover:text-yellow-400">
              Services
            </Link>
            <Link href="/advocacy" className="hover:text-yellow-400">
              Advocacy
            </Link>
            <Link href="/get-involved" className="hover:text-yellow-400">
              Get Involved
            </Link>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </div>
        </div>

        <hr className="my-6 border-indigo-800" />

        <p className="text-sm text-center text-indigo-100">
          © {new Date().getFullYear()} Federico & Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
