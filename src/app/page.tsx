import Advantages from "@/components/Advantages";
import Features from "@/components/Features";
import Home from "@/components/Home";

export default function Page() {
  return (
    <div className="w-[100vw] min-h-screen">
      <Home />
      <Features />
      <Advantages />
    </div>
  );
}
