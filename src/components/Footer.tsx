import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#07273F] text-[#FAFAF7]/70 border-t border-[#FAFAF7]/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-[1.7] max-w-xs">
            A chartered accountancy practice in Ahmedabad. Available Timely
            Service.
          </p>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-[#1F8FCF] mb-5">
            Explore
          </div>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-[#1F8FCF]">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#1F8FCF]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/consultancy" className="hover:text-[#1F8FCF]">
                Consultancy
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-[#1F8FCF]">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-[#1F8FCF] mb-5">
            Resources
          </div>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/resources#paper" className="hover:text-[#1F8FCF]">
                Paper Requirements
              </Link>
            </li>
            <li>
              <Link href="/consultancy" className="hover:text-[#1F8FCF]">
                Consultancy FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/resources#deadlines"
                className="hover:text-[#1F8FCF]"
              >
                Keep in Mind
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-[#1F8FCF] mb-5">
            Contact
          </div>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="mailto:donga@dongaandco.com"
                className="hover:text-[#1F8FCF]"
              >
                donga@dongaandco.com
              </a>
            </li>
            <li>
              <a href="tel:+919537393949" className="hover:text-[#1F8FCF]">
                +91 95373 93949
              </a>
            </li>
            <li>Sarkhej, Ahmedabad</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#FAFAF7]/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#FAFAF7]/50">
          <span>
            © {new Date().getFullYear()} Donga & Co. All rights reserved.
          </span>
          <span>Crafted with discipline · Ahmedabad, India</span>
        </div>
      </div>
    </footer>
  );
}
