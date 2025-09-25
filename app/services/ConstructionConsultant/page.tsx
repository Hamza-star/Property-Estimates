"use client";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ConstructionConsultant() {
  return (
    <div className="max-w-screen-xl mx-auto px-6  bg-white lg:px-12 py-12 font-sans flex flex-col lg:flex-row gap-10">
      {/* LEFT CONTENT */}
      <article className="flex-1 space-y-8">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500">
          <Link href="/">Home » </Link>
          <span className="text-[#EA5501]">
            Construction Estimating Consultant
          </span>
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
          Construction Estimating Consultant
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Maximize Your Bids and Minimize Your Worries with Industry-Leading
          Construction Estimating Consultants.
        </p>

        {/* Hero Image */}
        <div className="w-full h-[380px] relative rounded-2xl overflow-hidden shadow">
          <Image
            src="/c.avif"
            alt="Construction Estimating Consultant"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Revolutionize Your Estimation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Are you tired of endless struggles and missed opportunities in the
            bidding process? It’s time to unlock your true potential with our
            top-notch Estimating Consultant Services. At Construct Estimates, we
            help you outperform the competition and generate more leads!
          </p>
        </section>

        {/* Services Overview */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Expert Guidance for Developers, Contractors, Architects, and Owners
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our skilled estimating consultants provide accurate budgeting,
            detailed document estimates, bid documentation preparation, cost
            management, and more. Whether you’re a contractor, developer, or
            architect—we’ve got you covered.
          </p>
        </section>

        {/* Highlight Box */}
        <div className="bg-[#EA5501]/10 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-[#EA5501]">
            Act Now & Get 30% Off
          </h2>
          <p className="text-gray-700 mt-2">
            Beat the competition and generate more leads with our expert
            estimator consultants.
          </p>
          <Link
            href="#quote"
            className="inline-flex items-center gap-2 mt-4 px-5 py-3 bg-[#EA5501] text-white rounded-full hover:bg-[#d14c00] transition"
          >
            Get Free Consultation <ArrowRight size={16} />
          </Link>
        </div>

        {/* Key Services */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Our Estimating Consultant Services
          </h2>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
            <li>Bidding Assistance</li>
            <li>Feasibility Studies</li>
            <li>Litigation Assistance</li>
            <li>Pre-construction & Change Order Management</li>
            <li>Project Cost Management</li>
            <li>CPM Scheduling Services</li>
          </ul>
        </section>

        {/* Industries */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Serving Various Sectors and Trades
          </h2>
          <p className="text-gray-700 leading-relaxed">
            From residential to civil, we cover all CSI divisions including
            concrete, masonry, HVAC, plumbing, sitework, and more.
          </p>
        </section>

        {/* Who Benefits */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Who Can Benefit?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>Real Estate Developers</li>
            <li>General Contractors</li>
            <li>Homeowners</li>
            <li>Architects / Designers</li>
            <li>Subcontractors & Vendors</li>
          </ul>
        </section>

        {/* CTA */}
        <div
          id="quote"
          className="bg-gray-100 p-6 rounded-xl shadow flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Ready to Take Your Business to New Heights?
            </h3>
            <p className="text-gray-600 mt-1">
              Contact us today & unlock{" "}
              <span className="font-semibold">30% Off</span> consulting
              services.
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
            <Link href="/">
              <li className="hover:text-[#EA5501] mb-2">Cost Estimating</li>
            </Link>

            <Link href="/">
              <li className="hover:text-[#EA5501] mb-2">
                Construction Takeoff
              </li>
            </Link>

            <Link href="/">
              <li className="hover:text-[#EA5501] mb-2">
                Quantity Takeoff Services
              </li>
            </Link>

            <Link href="/">
              <li className="hover:text-[#EA5501] mb-2">
                Residential Estimating
              </li>
            </Link>

            <Link href="/">
              <li className="hover:text-[#EA5501] mb-2">
                Commercial Estimating
              </li>
            </Link>

            <Link href="/">
              <li className="hover:text-[#EA5501] mb-2">
                Industrial Estimating
              </li>
            </Link>

            <Link href="/">
              <li className="hover:text-[#EA5501] mb-2">
                Preliminary Estimates
              </li>
            </Link>

            <Link href="/">
              <li className="hover:text-[#EA5501] mb-2">
                Estimating Consultant
              </li>
            </Link>

            <Link href="/">
              <li className="hover:text-[#EA5501] mb-2">
                Construction Estimator Sydney
              </li>
            </Link>

            <Link href="/">
              <li className="hover:text-[#EA5501] mb-2">
                Building Estimator Melbourne
              </li>
            </Link>

            <Link href="/">
              <li className="hover:text-[#EA5501] mb-2">
                Virtual Bid Management
              </li>
            </Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="bg-white shadow p-6 rounded-xl text-sm space-y-2">
          <p className="flex items-center gap-2">
            <Phone size={16} className="text-[#EA5501]" /> (289) 801 7224
            (CANDA)
          </p>
          <p className="flex items-center gap-2">
            {/* <Phone size={16} className="text-[#EA5501]" /> (048) 862-0354 (AUS) */}
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} className="text-[#EA5501]" />{" "}
            Info@bennyestimates.com
          </p>
        </div>
      </aside>
    </div>
  );
}
