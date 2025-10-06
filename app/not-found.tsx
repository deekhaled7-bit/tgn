"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream">
      <section className="text-center p-6 md:p-10">
        <div className="flex items-center justify-center gap-4 ">
          <Image
            src="/notFound.png"
            alt="Sun"
            width={280}
            height={280}
            className="animate-spin-slow"
            priority
          />
          {/* <span className="font-header-en text-hot-pink text-6xl md:text-7xl">
            404
          </span> */}
        </div>

        <h1 className="font-header-en text-carbon text-3xl md:text-4xl mb-3">
          Page Not Found
        </h1>
        <p className="font-body-en text-carbon/80 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          This page is under construction. Please check back later.
        </p>

        <Link
          href="/en"
          className="inline-block bg-hot-pink text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Go to Home
        </Link>
      </section>
    </main>
  );
}
