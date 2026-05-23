"use client";

import { Phone, MapPin, Mail, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#f7fbff] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-600">
            Contact Us
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Get In Touch
            <span className="block text-sky-500">With Desi Hut</span>
          </h2>
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Left Info */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sky-500" />
                <span className="font-semibold text-slate-700">
                  +92 300 1234567
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sky-500" />
                <span className="font-semibold text-slate-700">
                  info@desihut.com
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-sky-500" />
                <span className="font-semibold text-slate-700">
                  Hyderabad, Sindh, Pakistan
                </span>
              </div>
            </div>

            <div className="rounded-3xl bg-sky-500 p-6 text-white shadow-xl">
              <h3 className="text-xl font-black">
                Fast WhatsApp Order
              </h3>

              <p className="mt-2 text-sm text-sky-100">
                Direct order via WhatsApp for quick delivery
              </p>

              <a
                href="https://wa.me/923001234567"
                className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-sky-600 transition hover:scale-105"
              >
                Send Message
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-[2.5rem] border border-sky-100 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900">
              Send Message
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              We usually respond within minutes.
            </p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-sky-100 bg-sky-50 px-5 py-4 text-sm outline-none focus:border-sky-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-2xl border border-sky-100 bg-sky-50 px-5 py-4 text-sm outline-none focus:border-sky-400"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-2xl border border-sky-100 bg-sky-50 px-5 py-4 text-sm outline-none focus:border-sky-400"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-4 text-sm font-black text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600"
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
