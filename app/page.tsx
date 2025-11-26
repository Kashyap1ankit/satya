import PersonalCard from "@/components/personal-card";
import PricingPage from "@/components/pricing";
import ShinnyButton from "@/components/shinny-button";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen min-h-screen overflow-x-hidden">
      {/* <PersonalCard /> */}
      {/* <ShinnyButton /> */}
      <PricingPage />
    </div>
  );
}
