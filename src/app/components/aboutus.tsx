import { LucideCuboid, LucideHandHeart, LucideCheck } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="aboutus" className="bg-main py-16 px-4 md:px-12 lg:px-24 text-black font-inter">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-3 font-staat">ABOUT US</h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Repointing Brickwork is owned and run by Doddy with over 25 years of experience.
          <br />
          We provide a professional brickwork services with a real focus on customer satisfaction.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-7xl mx-auto">
        {/* Profile Image */}
        <div className="w-[300px] md:w-[350px] lg:w-[400px] aspect-square rounded-full overflow-hidden relative shadow-lg">
          <Image
            alt="Doddy"
            src="/me.jpg" // <-- update this to your new hardhat photo if needed
            fill
            sizes="(max-width: 768px) 250px, 350px"
            className="object-cover"
          />
        </div>

        {/* Feature Items */}
        <div className="flex flex-col gap-8 w-full max-w-xl">
          <FeatureItem
            icon={<LucideCuboid className="w-6 h-6 text-red-600" />}
            title="Over 25 years experience"
            description="We provide a professional and reliable service with over 15 years experience in the brickwork and building orangeries."
          />
          <FeatureItem
            icon={<LucideHandHeart className="w-6 h-6 text-red-600" />}
            title="Isle of Wight & surrounding areas"
            description="We are based on the Isle of Wight so all areas of IOW covered, as well as Hampshire and Southampton."
          />
          <FeatureItem
            icon={<LucideCheck className="w-6 h-6 text-red-600" />}
            title="Professional standards"
            description="Work with us involves a carefully planned series of steps, centred around a schedule we stick to and daily communication."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="min-w-[50px] min-h-[50px] rounded-full border border-gray-600 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}
