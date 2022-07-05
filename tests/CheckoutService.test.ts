import { Checkout } from "../src/services/checkout/Checkout";
import { PricingRule } from "../src/services/pricingRules/PricingRules";
import { initializePricingRules } from "../seeds/pricingRules/addPricingRules";
import { initializeProducts } from "../seeds/products/addProducts";

describe("Checkout Service", () => {
  const pricingRules: PricingRule = initializePricingRules();
  const checkout: Checkout = new Checkout(pricingRules);

  describe("scan", () => {
    it(" should add sku to the map", () => {
      checkout.scan("atv");
      expect(checkout.skuMap.get("atv")).toBe(1);
    });
  });

  describe("total", () => {
    initializeProducts();

    it(" should return the total cart value", () => {
      checkout.scan("atv");
      checkout.scan("ipd");
      checkout.scan("ipd");
      checkout.scan("atv");
      checkout.scan("ipd");
      checkout.scan("ipd");
      checkout.scan("ipd");
      expect(checkout.total()).toBe("2718.95");
    });
  });
});
