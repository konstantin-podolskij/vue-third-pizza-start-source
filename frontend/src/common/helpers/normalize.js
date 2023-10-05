import doughSizes from "@/common/data/doughSizes";

export const normalizeDough = (dough) => {
  return {
    ...dough,
    value: doughSizes[dough.id],
  };
};
