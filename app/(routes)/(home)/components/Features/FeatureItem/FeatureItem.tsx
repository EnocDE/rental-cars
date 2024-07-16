import Reveal from "@/components/shared/Reveal/Reveal";
import { FeaturesDataI } from "../Features.types";

interface FeatureItemProps {
  feature: FeaturesDataI;
}

export default function FeatureItem(props: FeatureItemProps) {
  const { feature } = props;
  const { delay, icon: Icon, text } = feature;
  return (
    <Reveal
      position="right"
      delay={delay}
      className="flex flex-col items-center p-6 rounded-xl"
    >
      <div className="flex justify-center bg-slate-100 mb-4 p-4 rounded-full w-fit">
        <Icon className="w-8 h-8" />
      </div>
      <p className="text-center">{text}</p>
    </Reveal>
  );
}
