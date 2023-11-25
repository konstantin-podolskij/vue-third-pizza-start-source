import doughSizes from "@/common/data/doughSizes";
import sauces from "@/common/data/sauces";
import sizes from "@/common/data/sizes";
import ingredients from "@/common/data/ingredients";

export const normalizeDough = (dough) => {
  return {
    ...dough,
    value: doughSizes[dough.id],
  };
};

export const normalizeSauces = (sauce) => {
  return {
    ...sauce,
    value: sauces[sauce.id],
  };
};

export const normalizeSizes = (size) => {
  return {
    ...size,
    value: sizes[size.id],
  };
};

export const normalizeIngredients = (ingredient) => {
  return {
    ...ingredient,
    value: ingredients[ingredient.id],
  };
};
