"use client";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ResidentialService() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-12 font-sans flex flex-col lg:flex-row gap-10">
      {/* LEFT SIDE CONTENT */}
      <article className="flex-1 space-y-8">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500">
          Home »{" "}
          <span className="text-[#EA5501]">
            Residential Estimating Services
          </span>
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
          Residential Estimating Services
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Empower Your Residential Building Projects with Affordable Cost
          Estimation and Material Takeoff Solutions with Fast Turnaround Time.
        </p>

        <div className="w-full h-[380px] relative rounded-2xl overflow-hidden shadow">
          <Image
            src="/s5.png"
            alt="Residential Estimating Services"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Sections */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Our Residential Estimating Portfolio
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We have provided comprehensive estimates for diverse residential
            projects, including general contractors, developers, and notable
            projects. Our expertise extends to:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
            <li>Sitework and Concrete</li>
            <li>Plumbing Fixtures & Mechanical Installations</li>
            <li>Drywall, Framing, Paint, and Wallcovering</li>
            <li>Labor Costs and Man-Hours</li>
            <li>Electrical Installations and More</li>
          </ul>
        </section>

        {/* Highlight Box */}
        <div className="bg-[#EA5501]/10 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-[#EA5501]">
            Save Upto 30% On Estimating Expenses
          </h2>
          <p className="text-gray-700 mt-2">
            Accurate Estimates for Residential Construction Projects tailored
            for Homeowners, Architects, Contractors, Builders, Lenders, and
            Investors.
          </p>
          <Link
            href="#quote"
            className="inline-flex items-center gap-2 mt-4 px-5 py-3 bg-[#EA5501] text-white rounded-full hover:bg-[#d14c00] transition"
          >
            View Our Sample Estimates
            <ArrowRight size={16} />
          </Link>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Accurate and Efficient Material Quantification
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We meticulously quantify materials using proper units like volume,
            length, area, and number. For example, lumber supply is quantified
            in EA (each) with complete details of beams, studs, joists, and
            rafters.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Precise Estimation with Industry-Leading Tools
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use Bluebeam, Planswift, RS Means, Xactimate, FastPIPE, Trimble,
            and more to ensure accuracy and efficiency.
          </p>
        </section>

        {/* Services List */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Our Residential Estimating Services
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li>Residential Construction Estimating</li>
            <li>Multi-Family Residential Estimating</li>
            <li>Preliminary Estimates and Budget</li>
            <li>Residential Design and Architectural Estimates</li>
            <li>Home Estimating Services</li>
            <li>Residential Remodeling & Renovation Estimates</li>
          </ul>
        </section>

        {/* Why Choose */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why Choose Us?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">
                Accurate and Detailed Estimates:
              </span>{" "}
              Clear financial breakdowns including labor, materials, and
              permits.
            </li>
            <li>
              <span className="font-semibold">Comprehensive Approach:</span>{" "}
              Covers both new construction and remodeling.
            </li>
            <li>
              <span className="font-semibold">Collaboration:</span> We work
              closely with architects and contractors.
            </li>
            <li>
              <span className="font-semibold">Timely Delivery:</span> Fast
              turnaround within 24–48 hrs.
            </li>
            <li>
              <span className="font-semibold">Transparency:</span> Competitive
              and honest pricing.
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <div
          id="quote"
          className="bg-gray-100 p-6 rounded-xl shadow flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Get Started with Construct Estimates Today
            </h3>
            <p className="text-gray-600 mt-1">
              Request a quote with{" "}
              <span className="font-semibold">30% Off</span> now!
            </p>
          </div>
          <Link
            href="/contact-us"
            className="px-6 py-3 bg-[#EA5501] text-white rounded-full hover:bg-[#d14c00] transition"
          >
            Request a Quote
          </Link>
        </div>
      </article>

      {/* RIGHT SIDEBAR */}
      <aside className="w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-24 space-y-6">
        {/* Portfolio */}
        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Explore Our Portfolio
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Explore our diverse portfolio to gain an understanding of our
            project exposure.
          </p>
          <Link
            href="/portfolio"
            className="px-4 py-2 bg-[#EA5501] text-white rounded-full text-sm"
          >
            View Portfolio
          </Link>
        </div>

        {/* Services List */}
        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Our Services</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Cost Estimating</li>
            <li>Construction Takeoff</li>
            <li>Quantity Takeoff Services</li>
            <li>Residential Estimating</li>
            <li>Commercial Estimating</li>
            <li>Industrial Estimating</li>
            <li>Preliminary Estimates</li>
            <li>Estimating Consultant</li>
            <li>Construction Estimator Sydney</li>
            <li>Building Estimator Melbourne</li>
            <li>Virtual Bid Management</li>
          </ul>
        </div>

        {/* CTA */}
        {/* <div className="bg-[#EA5501]/10 shadow p-6 rounded-xl text-center">
          <h3 className="text-lg font-bold text-gray-900">
            Experience the Difference
          </h3>
          <p className="text-gray-700 mt-2">Get Estimate At 30% OFF</p>
          <p className="text-sm text-gray-600 mt-1">
            Turnaround Time: 24-48 hrs!
          </p>
          <div className="mt-4">
            <Link
              href="/contact-us"
              className="px-5 py-3 bg-[#EA5501] text-white rounded-full hover:bg-[#d14c00]"
            >
              Get Estimate Now
            </Link>
          </div>
        </div> */}

        {/* Contact Info */}
        <div className="bg-white shadow p-6 rounded-xl text-sm space-y-2">
          <p className="flex items-center gap-2">
            <Phone size={16} className="text-[#EA5501]" /> (737) 273-3314 (US)
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} className="text-[#EA5501]" /> (048) 862-0354 (AUS)
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} className="text-[#EA5501]" />{" "}
            info@constructestimates.com
          </p>
        </div>
      </aside>
    </div>
  );
}
