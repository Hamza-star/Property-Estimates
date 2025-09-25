"use client";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PreliminaryService() {
  return (
    <div className="max-w-screen-xl mx-auto bg-white px-6 lg:px-12 py-12 font-sans flex flex-col lg:flex-row gap-10">
      {/* LEFT CONTENT */}
      <article className="flex-1 space-y-8">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500">
          <Link href="/">Home » </Link>
          <span className="text-[#EA5501]">Preliminary Estimate Services</span>
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Preliminary Estimate Services
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Build with Confidence – Uncover the True Costs of Your Construction
          Project with Precise Preliminary Estimates!
        </p>

        {/* Hero Image */}
        <div className="w-full h-[380px] relative rounded-2xl overflow-hidden shadow">
          <Image
            src="/p.avif"
            alt="Preliminary Estimate Services"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* What & Why */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What is a Preliminary Cost Estimate and Why Does It Matter?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A preliminary estimate is an approximate cost calculated during the
            conceptual stage of a project. It provides builders, owners, and
            developers with an early understanding of potential costs and helps
            determine feasibility, budgeting, and planning.
          </p>
        </section>

        {/* Highlight Box */}
        <div className="bg-[#EA5501]/10 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-[#EA5501]">
            Unleash Your Project’s Potential – Get 30% Off!
          </h2>
          <p className="text-gray-700 mt-2">
            Fast & accurate preliminary estimates with per-square-foot costs for
            better feasibility, resource allocation, and budget control.
          </p>
          <Link
            href="#quote"
            className="inline-flex items-center gap-2 mt-4 px-5 py-3 bg-[#EA5501] text-white rounded-full hover:bg-[#d14c00] transition"
          >
            Upload Plans Now
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Types of Estimates */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Types of Preliminary Estimates
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">
                Rough Order Magnitude (ROM):
              </span>{" "}
              Early stage, accuracy -50% to +50%.
            </li>
            <li>
              <span className="font-semibold">Ballpark Estimate:</span> Based on
              preliminary drawings, ~20% accuracy.
            </li>
            <li>
              <span className="font-semibold">Budget Estimate:</span> Accuracy
              range -10% to +25%, detailed breakdowns.
            </li>
            <li>
              <span className="font-semibold">Definitive Estimate:</span>{" "}
              Advanced planning stage, accuracy -5% to +15%.
            </li>
          </ul>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Benefits of Preliminary Estimates
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>Effective budget management & loan acquisition</li>
            <li>Helps architects & designers set cost limits</li>
            <li>Reliable material & labor cost forecasts</li>
            <li>Supports collaboration & negotiations</li>
            <li>Client-friendly conceptual estimates</li>
          </ul>
        </section>

        {/* Detailed Breakdown */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Preliminary Estimate Components
          </h2>
          <ol className="list-decimal ml-6 space-y-1 text-gray-700">
            <li>Preliminaries – permits, site prep</li>
            <li>Substructures – footings, foundations</li>
            <li>Superstructures – walls, roofs, windows</li>
            <li>External & Internal Finishes</li>
            <li>Fittings – fixtures, equipment</li>
            <li>Mechanical – HVAC, ductwork</li>
            <li>Plumbing – drains, fixtures</li>
            <li>Electrical – cables, lighting</li>
            <li>Labor & Man Hours</li>
            <li>Contingency – unforeseen changes</li>
            <li>Preliminary Project Schedule</li>
          </ol>
        </section>

        {/* What You Get */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What You Get with Our Preliminary Estimates
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Early-stage cost clarity</li>
            <li>✔ Accurate, data-driven calculations</li>
            <li>✔ Risk identification & mitigation</li>
            <li>✔ Transparent bill of materials</li>
            <li>✔ Collaborative & client-friendly process</li>
          </ul>
        </section>

        {/* CTA */}
        <div
          id="quote"
          className="bg-gray-100 p-6 rounded-xl shadow flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Ready for Reliable Preliminary Estimates?
            </h3>
            <p className="text-gray-600 mt-1">
              Upload your plans & save{" "}
              <span className="font-semibold">30% today</span>.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="px-6 py-3 bg-[#EA5501] text-white rounded-full hover:bg-[#d14c00] transition"
          >
            Request a Quote
          </Link>
        </div>

        {/* Service Areas */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Our Service Areas
          </h2>
          <p className="text-gray-700 mb-4">
            Experience our exceptional preliminary estimating services in the
            USA and Australia:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">Australia</h3>
              <ul className="text-gray-700 text-sm space-y-1 mt-2">
                <li>New South Wales</li>
                <li>Victoria</li>
                <li>Queensland</li>
                <li>Western Australia</li>
                <li>South Australia</li>
                <li>Northern Territory</li>
                <li>Tasmania</li>
                <li>External Territories</li>
                <li>Sydney, Melbourne, Brisbane, Adelaide</li>
                <li>Perth-Fremantle, Darwin, Hobart</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">United States</h3>
              <p className="text-gray-700 text-sm mt-2">
                Providing preliminary estimates across major US states and
                cities.
              </p>
            </div>
          </div>
        </section>
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
