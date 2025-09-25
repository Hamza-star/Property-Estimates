"use client";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VirtualBidManagement() {
  return (
    <div className="max-w-screen-xl bg-white mx-auto px-6 lg:px-12 py-12 font-sans flex flex-col lg:flex-row gap-10">
      {/* LEFT SIDE CONTENT */}
      <article className="flex-1 space-y-8">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500">
          <Link href="/">Home » </Link>

          <span className="text-[#EA5501]">Virtual Bid Management</span>
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
          Virtual Bid Management
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Streamline your construction bidding process with our{" "}
          <strong>Virtual Bid Manager (VBM)</strong>. Win more contracts, save
          time, and boost profits with expert proposal creation, bid analysis,
          and subcontractor coordination.
        </p>

        {/* Hero Image */}
        <div className="w-full h-[380px] relative rounded-2xl overflow-hidden shadow">
          <Image
            src="/v.avif"
            alt="Virtual Bid Management"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Key Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Seamless Bidding Process Management
          </h2>
          <p className="text-gray-700 leading-relaxed">
            From compiling subcontractor/vendor contacts to reviewing project
            plans and managing addendums & change orders, our Virtual Bid
            Manager ensures a smooth and efficient bidding process.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What Our Virtual Bid Manager Offers
          </h2>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
            <li>Compile & update subcontractor and vendor lists</li>
            <li>Review plans to shortlist promising projects</li>
            <li>Manage addendums and change orders</li>
            <li>Identify potential suppliers & subcontractors</li>
            <li>Perform SWOT analysis for smarter bids</li>
            <li>Refine strategies using past bid data</li>
          </ul>
        </section>

        {/* Highlight Box */}
        <div className="bg-[#EA5501]/10 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-[#EA5501]">
            Save Upto 30% On Bid Management Expenses
          </h2>
          <p className="text-gray-700 mt-2">
            Get accurate proposals, efficient coordination, and data-driven bid
            strategies tailored for Contractors, Builders, and Developers.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 mt-4 px-5 py-3 bg-[#EA5501] text-white rounded-full hover:bg-[#d14c00] transition"
          >
            Explore Plans <ArrowRight size={16} />
          </Link>
        </div>

        {/* Plans */}
        <section id="plans">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Choose Your Plan
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li>
              <span className="font-semibold">Project Base:</span> Affordable
              per-project/hourly options for single jobs.
            </li>
            <li>
              <span className="font-semibold">Month Base:</span> Package for
              businesses bidding on 3–4 projects monthly.
            </li>
            <li>
              <span className="font-semibold">Dedicated:</span> Full support for
              5–8 projects monthly.
            </li>
          </ul>
        </section>

        {/* Why Choose */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why Choose Us?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Expertise:</span> Specialized bid
              management knowledge to increase success.
            </li>
            <li>
              <span className="font-semibold">Cost-Effective:</span> Access top
              expertise without full-time costs.
            </li>
            <li>
              <span className="font-semibold">Flexible Support:</span> Remote
              help only when you need it.
            </li>
            <li>
              <span className="font-semibold">Time-Saving:</span> Free your time
              to focus on business growth.
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
              Get Started with Virtual Bid Management
            </h3>
            <p className="text-gray-600 mt-1">
              Request a consultation with{" "}
              <span className="font-semibold">30% Off</span> today!
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
