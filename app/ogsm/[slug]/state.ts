import { Prisma } from "@prisma/client";
// import { create } from "zustand";

export type OgsmWithIncludes = Prisma.OgsmGetPayload<{
  include: {
    creator: true;
    goals: true;
    strategies: {
      include: {
        dashboard: true;
        actions: true;
      };
    };
  };
}>;

export interface OgsmState {
  ogsm: OgsmWithIncludes | null;
  swapOgsm: (newOgsm: OgsmWithIncludes) => void;
  replaceGoals: (goalContent: string) => void;
}

// export const useOgsmStore = create<OgsmState>((set) => ({
//   ogsm: null,
//   swapOgsm: (newOgsm) => set({ ogsm: newOgsm }),
// }));
