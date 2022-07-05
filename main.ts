import { initializePricingRules } from "./seeds/pricingRules/addPricingRules";
import { initializeProducts } from "./seeds/products/addProducts";

initializeProducts();
const pricingRules = initializePricingRules();
