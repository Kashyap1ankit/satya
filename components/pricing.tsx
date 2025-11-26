import { brig, inter, manrope } from "@/lib/font";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChartBubble02Icon,
  CheckmarkSquare01Icon,
  Notification03Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";

export default function PricingPage() {
  return (
    <div className="bg-[#F8F7F4] w-full min-h-screen flex flex-col justify-center items-center gap-y-8 pb-12 pt-12">
      <div className="border border-neutral-400/20 rounded-full w-fit px-2 py-1 flex flex-row justify-between gap-x-2 items-center">
        <div className="w-1 h-1 bg-orange-600 rounded-full ring-3 ring-orange-800/50" />
        <p className={`${inter.className} text-xs`}>Pricing</p>
      </div>

      <p
        className={`${manrope.className} text-5xl font-semibold w-1/3 text-center`}
      >
        Flexible pricing plans for{" "}
        <span className="italic text-black/70">every need</span>
      </p>

      <p className={`${manrope.className} text-md font-semibold text-gray-600`}>
        Choose the plan that fits your needs. All plans include Kodo credits and
        AI features.
      </p>

      <div className="grid grid-cols-3 gap-x-8">
        <Template />
        <Template scale={true} />
        <Template />
      </div>
    </div>
  );
}

function Template({ scale = false }: { scale?: boolean }) {
  return (
    <div
      className={`bg-white rounded-3xl p-4 flex flex-col gap-y-6 min-w-[400px] ${
        scale ? "scale-110 shadow-sm" : ""
      }`}
    >
      <div className="flex flex-row justify-between items-center">
        <HugeiconsIcon
          icon={ChartBubble02Icon}
          stroke="1"
          color="white"
          fill="white"
          size={36}
          className="p-1 rounded-md bg-orange-400 border"
        />

        <p
          className={`${manrope.className} font-medium text-xs rounded-full border border-orange-700  text-orange-700 bg-orange-200/60 px-4 py-1`}
        >
          Most Popular
        </p>
      </div>

      <div className="flex flex-col gap-y-2">
        <p className={`${manrope.className} font-bold text-2xl`}>Starter</p>

        <p className={`${manrope.className} font-medium text-sm text-gray-500`}>
          Start with basic and free version
        </p>
      </div>

      <div className="flex flex-col gap-y-1">
        <div className="flex flex-row items-end justify-start gap-x-2">
          <p className={`${brig.className} font-bold text-4xl`}>$0</p>
          <p
            className={`${manrope.className} font-medium text-sm text-gray-500`}
          >
            /mo
          </p>
        </div>

        <p className={`${manrope.className} font-normal text-xs text-gray-400`}>
          Pause and cancel any time
        </p>
      </div>

      <div className="bg-[#F8F7F4] rounded-3xl p-4 border border-neutral-100 inset-shadow-sm inset-shadow-black/10 flex flex-col gap-y-2">
        {[
          "30 Kodo credits/month",
          "3 AI image generations/month",
          "3 Magic Editor uses/month",
          "3 projects",
        ].map((e, i) => {
          return (
            <div
              key={i}
              className="flex flex-row justify-start gap-x-2 items-center"
            >
              <HugeiconsIcon
                icon={CheckmarkSquare01Icon}
                stroke="1"
                color="white"
                fill="orange"
                size={16}
              />
              <p className={`${manrope.className} text-md`}>{e}</p>
            </div>
          );
        })}
      </div>

      <Button
        size={"lg"}
        className="bg-orange-400 rounded-full inset-shadow-sm inset-shadow-white/50 "
      >
        <p className={`${manrope.className} text-md font-bold text-white`}>
          Upgrade Plan
        </p>
      </Button>
    </div>
  );
}
