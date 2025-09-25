"use client";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CommercialService() {
  return (
    <div className="max-w-screen-xl bg-white mx-auto px-6 lg:px-12 py-12 font-sans flex flex-col lg:flex-row gap-10">
      {/* LEFT SIDE CONTENT */}
      <article className="flex-1 space-y-8">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500">
          Home »{" "}
          <span className="text-[#EA5501]">Commercial Estimating Services</span>
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
          Commercial Estimating Services
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Empower Your Commercial Building Projects with Affordable Cost
          Estimation and Material Takeoff Solutions with Fast Turnaround Time.
        </p>

        {/* Hero Image */}
        <div className="w-full h-[380px] relative rounded-2xl overflow-hidden shadow">
          <Image
            src="/s4.png"
            alt="Commercial Estimating Services"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Estimating Process */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Efficient and Professional Estimating Process
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our licensed commercial estimators deliver accurate estimates within
            your required timeframe. We specialize in detailed takeoffs,
            ensuring precise material and cost estimates for your commercial
            projects so you never miss a bid date.
          </p>
        </section>

        {/* Highlight Box */}
        <div className="bg-[#EA5501]/10 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-[#EA5501]">
            Save Upto 30% On Estimating Expenses
          </h2>
          <p className="text-gray-700 mt-2">
            Accurate Estimates for Commercial Construction Projects tailored for
            Contractors, Subcontractors, Architects, and Developers.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 mt-4 px-5 py-3 bg-[#EA5501] text-white rounded-full hover:bg-[#d14c00] transition"
          >
            View Sample Estimates
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Services List */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Our Commercial Estimating Services
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li>Accurate Commercial Cost Estimates</li>
            <li>Pre-Construction Final Estimates</li>
            <li>Budget Estimates for Developers</li>
            <li>Design & Architectural Estimations</li>
            <li>Commercial Takeoffs (All CSI Divisions)</li>
            <li>Renovation & Remodeling Estimates</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why Choose Construct Estimates?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Experience & Expertise:</span>{" "}
              Decades of industry knowledge across USA & Australia.
            </li>
            <li>
              <span className="font-semibold">Wide Coverage:</span> Localized
              cost data for accuracy in all regions.
            </li>
            <li>
              <span className="font-semibold">Precision:</span> Detail-oriented
              takeoffs, conceptual & hard bid estimates.
            </li>
            <li>
              <span className="font-semibold">Timely Delivery:</span> Fast
              turnaround within 24–48 hrs.
            </li>
            <li>
              <span className="font-semibold">Collaboration:</span> Working
              closely with architects, contractors & developers.
            </li>
            <li>
              <span className="font-semibold">Quality Control:</span> Advanced
              tools & strict accuracy checks.
            </li>
          </ul>
        </section>

        {/* Portfolio Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Our Portfolio for Commercial Estimates
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We’ve successfully delivered estimates for diverse facilities like
            office buildings, retail spaces, high-rises, restaurants, theaters,
            museums, sports complexes, and even specialized structures like
            police stations and fire stations.
          </p>
        </section>

        {/* CTA Section */}
        <div
          id="quote"
          className="bg-gray-100 p-6 rounded-xl shadow flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Partner with Construct Estimates Today
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
            href="/about"
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
            <Mail size={16} className="text-[#EA5501]" />{" "}
            Info@bennyestimates.com
          </p>
        </div>
      </aside>
    </div>
  );
}
