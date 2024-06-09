import Advantages from "@/components/Advantages";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return (
    <div className="w-[100vw] min-h-screen">
      <Home />
      <Features />
      <Advantages />
      <Testimonials />
      <Faq />
      <Banner />
      <Footer />
    </div>
  );
}
