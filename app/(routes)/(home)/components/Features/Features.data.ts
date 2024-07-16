import { HandCoins, Hourglass, MessageCircleQuestion, ShieldCheck } from "lucide-react"
import { FeaturesDataI } from "./Features.types"

export const featuresData : FeaturesDataI[] = [
  {
    icon: Hourglass,
    text: "24 hours delivery",
    delay: .2
  },
  {
    icon: MessageCircleQuestion,
    text: "24/7 technical support",
    delay: .3
  },
  {
    icon: ShieldCheck,
    text: "Premium secure",
    delay: .4
  },
  {
    icon: HandCoins,
    text: "The best price",
    delay: .5
  },
]