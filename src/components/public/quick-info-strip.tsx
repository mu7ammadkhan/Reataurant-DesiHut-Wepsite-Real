"use client";

import { Clock, MapPin, Phone } from "lucide-react";

export default function QuickInfoStrip() {
  return (
    <section className="bg-sky-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 py-6 text-white md:grid-cols-3">
          {/* Item 1 */}
          <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md transition hover:bg-white/15">
            <Clock className="h-5 w-5" />
            <div>
              <p className="text-sm font-semibold">Opening Hours</p>
              <p className="text-xs text-sky-100">12:00 PM - 2:00 AM</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md transition hover:bg-white/15">
            <MapPin className="h-5 w-5" />
            <div>
              <p className="text-sm font-semibold">Location</p>
              <p className="text-xs text-sky-100">Hyderabad, Sindh</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md transition hover:bg-white/15">
            <Phone className="h-5 w-5" />
            <div>
              <p className="text-sm font-semibold">Call Now</p>
              <p className="text-xs text-sky-100">+92 300 1234567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}