import { LucideCuboid, LucideHandHeart, LucideCheck } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="aboutus"
      className="bg-main py-16 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 font-inter text-black"
    >
      <div className="text-center mb-16 px-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-staat">
          ABOUT US
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
          Repointing Brickwork is owned and run by Doddy with over 25 years of experience.
          <br />
          We provide professional brickwork services with a real focus on customer satisfaction.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24 max-w-7xl mx-auto px-2">
        {/* Profile Image */}
        <div className="w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 aspect-square rounded-full overflow-hidden relative shadow-lg shrink-0">
          <Image
            alt="Doddy"
            src="/me.jpg"
            fill
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 400px"
            className="object-cover"
          />
        </div>

        {/* Features */}
        <div className="flex flex-col gap-8 w-full max-w-2xl mt-6 lg:mt-0">
          <FeatureItem
            icon={<LucideCuboid className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-red-600" />}
            title="Over 25 years experience"
            description="We provide a professional and reliable service with over 25 years of experience in brickwork and orangeries."
          />
          <FeatureItem
            icon={<LucideHandHeart className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-red-600" />}
            title="Isle of Wight & surrounding areas"
            description="Based on the Isle of Wight, we cover all areas of the island as well as Hampshire and Southampton."
          />
          <FeatureItem
            icon={<LucideCheck className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-red-600" />}
            title="Professional standards"
            description="We follow a well-structured plan, with clear scheduling and daily communication for full transparency."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full border border-gray-600 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1">
          {title}
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}
