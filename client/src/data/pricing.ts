import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
  {
    name: "Basic",
    price: 29,
    period: "month",
    features: [
      "50 AI thumbnails/month",
      "Basic Templates",
      "Standard Resolution",
      "No Watermark",
      "Email Support",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    price: 79,
    period: "month",
    features: [
      "Unlimited AI Thumbnails",
      "Premium Templates",
      "4k Resolution",
      "A/B Testing tools",
      "Priority Support",
      "Custom Fonts",
      "Brand kit Analysis",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    period: "month",
    features: [
      "Everything in pro",
      "API Access",
      "Team Collaboration",
      "Custom Branding",
      "Dedicated Account Manager",
    ],
    mostPopular: false,
  },
];
