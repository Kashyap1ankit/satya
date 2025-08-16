import {
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  Inter,
} from "next/font/google";

export const brig = Bricolage_Grotesque({
  weight: ["600"],
  subsets: ["vietnamese"],
});

export const plus = Plus_Jakarta_Sans({
  weight: ["500"],
  subsets: ["cyrillic-ext"],
});

export const inter = Inter({
  weight: ["500"],
  subsets: ["greek"],
});
