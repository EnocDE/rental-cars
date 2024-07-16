import FeatureItem from "./FeatureItem/FeatureItem";
import { featuresData } from "./Features.data";

export default function Features() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="p-6">
        <h3 className="font-bold text-4xl lg:text-6xl">Main features</h3>
        <p className="mt-5 lg:mt-10 lg:mb-16 max-w-lg text-xl">
          We are all about our clients conform and safety. That&apos;s why we
          provide the best service you can imagine.
        </p>
      </div>
      <div className="gap-5 grid grid-cols-2 lg:grid-cols-4">
        {featuresData.map((feature) => (
          <FeatureItem key={feature.text} feature={feature} />
        ))}
      </div>
    </div>
  );
}
