"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, UploadCloud } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function GetAQuote() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => setFiles(acceptedFiles),
    maxSize: 128 * 1024 * 1024, // 128MB
  });

  // 🔹 Fake progress simulation jab tak request complete hoti hai
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) return prev + 10; // 90% tak barhega
          return prev;
        });
      }, 400);
    } else {
      setProgress(100); // complete hone par 100%
      const timeout = setTimeout(() => setProgress(0), 800); // thoda delay ke baad reset
      return () => clearTimeout(timeout);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    files.forEach((file) => formData.append("files", file));

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        toast.success("Your request has been sent successfully!");
        form.reset();
        setFiles([]);
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans text-gray-800 -mt-16">
      {/* 🔹 Top Banner */}
      <div className="relative w-full h-92 flex items-center justify-center text-center">
        <img
          src="/contact.jpg"
          alt="Get a Quote"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl font-heading font-bold">Get A Quote</h1>
          <p className="mt-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            » Get A Quote
          </p>
        </div>
      </div>

      {/* 🔹 Intro Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900">
          Get Your Estimation Within 24/48 Hours
        </h2>
        <p className="mt-2 text-[#EA5501] font-medium">
          🎉 Special Limited Time Offer: 30% Off for New Clients!
        </p>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Getting your construction estimate from Construct Estimates is quick
          and easy. Simply fill out the form below with the required fields and
          we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* 🔹 Form + Contact Info */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#EA5501] rounded-2xl p-8 shadow-md space-y-8 text-[#FAFAFA]"
        >
          <h3 className="text-xl font-heading font-semibold">Get Estimate</h3>
          <p className="opacity-90">
            Have a query or need immediate assistance? <br />
            Feel free to reach out to us through any of the following channels:
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="mt-1" size={22} /> Info@bennyestimates.com
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1" size={22} />
              (346) 215-1585 <br /> 0455 843 274
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1" size={22} />
              <span>
                <strong>USA:</strong> 5380 WALZEM RD, SAN ANTONIO, TEXAS, 78218
                <br />
                <strong>Canda:</strong> 5 Simcoe Street S #201 Oshawa ON L1H 8C1
              </span>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1" size={22} /> Mon-Sat: 9 AM – 10 PM
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-8"
        >
          <h3 className="text-xl font-heading font-semibold text-[#EA5501] mb-6">
            Get In Touch
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Grid for first 4 fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" placeholder="Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Your Company</Label>
                <Input id="company" name="company" placeholder="Company" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cell">Your Cell</Label>
                <Input id="cell" name="cell" placeholder="Cell" />
              </div>
            </div>

            {/* Drag & Drop File Upload */}
            <div className="space-y-2">
              <Label>Upload Files (Max 128MB)</Label>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition ${
                  isDragActive
                    ? "border-[#EA5501] bg-orange-50"
                    : "border-gray-300"
                }`}
              >
                <input {...getInputProps()} name="files" />
                <UploadCloud className="text-[#EA5501] mb-2" size={28} />
                {isDragActive ? (
                  <p className="text-[#EA5501]">Drop the files here...</p>
                ) : (
                  <p className="text-gray-600 text-sm">
                    Drag & Drop files here, or click to select
                  </p>
                )}
                {files.length > 0 && (
                  <ul className="mt-3 text-sm text-gray-700">
                    {files.map((file) => (
                      <li key={file.name}>📄 {file.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">Plans URL</Label>
              <Input
                id="url"
                name="url"
                type="url"
                placeholder="www.plansurl.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Textarea
                id="type"
                name="type"
                rows={5}
                placeholder="Full Scope..."
              />
            </div>

            {/* 🔹 Progress Bar */}
            {loading && (
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-[#EA5501] transition-all"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[#EA5501] hover:bg-[#d34700] text-white font-heading font-semibold text-base rounded-lg shadow transition"
            >
              {loading ? "Sending..." : "Submit Estimate Request"}
            </Button>
          </form>
        </motion.div>
      </div>
      <WhyChooseUs />
    </div>
  );
}
