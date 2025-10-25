import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import Hero from "./sections/Hero";
import Quote from "./components/Quote";
import ArticlesSection from "./sections/ArticlesSection";
import HeroGif from "./sections/HeroGif";
import Testimonials from "./sections/testomonials/Testimonials";
import Billion from "./sections/Billion";
import Newsletter from "./sections/Newsletter";

export const metadata: Metadata = {
  title: "THE GOOD NEWS",
  description:
    "Join our community of readers sharing positive stories. Access exclusive content, premium articles, and connect with like-minded individuals.",
};

export default function HomePage() {
  // In a real app, this would come from authentication context

  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      {/* <Navigation isLoggedIn={isLoggedIn} userRole={userRole} /> */}
      <main className="">
        {/* <Hero /> */}
        <HeroGif />
        <Quote />
        <ArticlesSection />
        <Testimonials />
        <Billion />
        <Newsletter />

        {/* <HeroSection /> */}
        {/* <FeaturesSection /> */}
      </main>
    </div>
  );
}
