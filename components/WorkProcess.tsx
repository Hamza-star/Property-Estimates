// app/components/WorkProcess.tsx
"use client";

const steps = [
  {
    id: "01",
    title: "PRODUCT RESEARCH",
    description:
      "We craft unique digital experiences. With more years of expertise we design",
  },
  {
    id: "02",
    title: "DESIGN IDEA",
    description:
      "We craft unique digital experiences. With more years of expertise we design",
  },
  {
    id: "03",
    title: "PROFESSIONAL TEAMS",
    description:
      "We craft unique digital experiences. With more years of expertise we design",
  },
  {
    id: "04",
    title: "STYLISTIC FORMULA METHOD",
    description:
      "We craft unique digital experiences. With more years of expertise we design",
  },
];

export default function WorkProcess() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side (Truck Image) */}
        <div className="flex justify-center">
          <img
            src="/process.png" // replace with your truck image
            alt="Work Process"
            className="max-h-[400px] object-contain"
          />
        </div>

        {/* Right side (Steps) */}
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
            Work Process
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
            WORK PROCESS
          </h2>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="relative pl-12">
                {/* Step number */}
                <span className="absolute left-0 top-0 text-4xl font-bold text-gray-200">
                  {step.id}
                </span>

                <h3 className="text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
