"use client";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function IndustrialService() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-12 font-sans flex flex-col lg:flex-row gap-10">
      {/* LEFT CONTENT */}
      <article className="flex-1 space-y-8">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500">
          Home »{" "}
          <span className="text-[#EA5501]">Industrial Estimating Services</span>
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Industrial Estimating Services
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Accurate Cost Estimates and Budget Control for Your Industrial
          Projects. Enhance Your Industrial Projects with Accurate Estimating
          Services, Procurement Assistance, and Budget Control at Competitive
          Prices.
        </p>

        {/* Hero Image */}
        <div className="w-full h-[380px] relative rounded-2xl overflow-hidden shadow">
          <Image
            src="/s7.png"
            alt="Industrial Estimating Services"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Highlight Box */}
        <div className="bg-[#EA5501]/10 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-[#EA5501]">
            Get Started Today & Save 30%
          </h2>
          <p className="text-gray-700 mt-2">
            Specialized Industrial Construction Estimating Services for the USA
            and Australia — covering new builds, renovations, and remodeling
            projects.
          </p>
          <Link
            href="#quote"
            className="inline-flex items-center gap-2 mt-4 px-5 py-3 bg-[#EA5501] text-white rounded-full hover:bg-[#d14c00] transition"
          >
            Supercharge Your Estimates
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Services Overview */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Precise Cost Estimates for Effective Project Planning
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our licensed team meticulously analyzes requirements, drawings, and
            specs to determine material quantities, labor, equipment, and
            indirect costs. The result: reliable estimates for better resource
            allocation and budget control.
          </p>
        </section>

        {/* Range of Services */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Our Range of Industrial Estimation Services
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li>Comprehensive Quantity Estimation</li>
            <li>Material Takeoffs for All CSI Divisions</li>
            <li>Bid Evaluation & Management</li>
            <li>Procurement Assistance</li>
            <li>Risk Analysis & Feasibility Studies</li>
            <li>Project Scheduling & Cost Management</li>
            <li>Value Engineering & Quality Assurance</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why Choose Our Industrial Estimates?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Accuracy & Efficiency:</span>{" "}
              Early-stage clarity for loans and budget planning.
            </li>
            <li>
              <span className="font-semibold">Customized Solutions:</span>{" "}
              Tailored to unique industrial projects.
            </li>
            <li>
              <span className="font-semibold">Extensive Portfolio:</span>{" "}
              Supporting contractors across multiple industries.
            </li>
            <li>
              <span className="font-semibold">Specialized Expertise:</span>{" "}
              Structural Steel, Mechanical, Electrical, and more.
            </li>
          </ul>
        </section>

        {/* Specialized Trades */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Specialized Industrial Estimating
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our estimators specialize in Structural Steel, Mechanical, and
            Electrical trades, providing precise breakdowns and reducing waste.
          </p>
          <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
            <li>
              <span className="font-semibold">
                Structural Steel Estimating:
              </span>{" "}
              Beams, channels, plates, connectors, and accessories.
            </li>
            <li>
              <span className="font-semibold">Industrial Mechanical:</span>{" "}
              HVAC, piping, insulation, fireproofing, hydronic systems.
            </li>
            <li>
              <span className="font-semibold">Industrial Electrical:</span> Full
              system components for industrial facilities.
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
              Partner with Us for Professional Industrial Estimates
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
