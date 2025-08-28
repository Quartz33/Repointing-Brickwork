import Reviews from "./reviews"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function Hero() {
    return (
        <div className="w-full bg-main overflow-hidden mx-auto py-10 px-4 lg:px-10">
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-10">

                {/* Left Content */}
                <div className="lg:w-1/2 w-full text-center">
                    <h4 className="text-off-red text-sm lg:pt-10 lg:text-lg">Bricklaying Contractors you can count on</h4>
                    <h1 className="font-staatliches text-black  pt-1 text-4xl lg:text-6xl">REPOINTING BRICKWORK</h1>
                    <p className="text-black tracking-wide pt-4 text-base lg:text-1xl font-light font-inter">
                        We specialise in quality brickwork, repointing, and repairs — built to last, and finished with care. Serving homes and businesses with a no-nonsense, honest approach to masonry.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 pt-16">
                        <a href="#contactus">
                        <button className="w-full sm:w-auto text-white lg:text-3xl uppercase tracking-widest font-bold font-barlow bg-[#B72025] py-3 px-6 rounded-lg hover:bg-[#a51e20] transition-colors duration-300">
                            GET IN TOUCH TODAY
                        </button>
                        </a>
                        <button className="lg:text-1xl lg:mt-8 btn btn-outline text-black border-black bg-white hover:bg-gray-300 transition-colors duration-300">
                            VIEW OUR WORK <ChevronRight className="w-4 ml-1" />
                        </button>
                    </div>

                    <div className="mt-6 flex justify-center items-center">
                        <Reviews />
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 lg:ml-20 flex items-center justify-center">
                    <Image
                        alt="work"
                        src="/brick-hero.jpg"
                        width={1000}
                        height={600}
                        className="rounded-lg object-cover w-full sm:w-[500px] md:w-[600px] lg:w-[1200px] xl:w-[1200px]"
                    />
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-black text-center pt-12 max-w-5xl mx-auto">
                <div className="bg-box py-6 rounded-md">
                    <p className="text-3xl text-off-red font-semibold">150+</p>
                    <p className="text-black mt-1">Houses Repointed</p>
                </div>
                <div className="bg-box py-6 rounded-md">
                    <p className="text-3xl text-off-red font-semibold">99%</p>
                    <p className="text-black mt-1">Customer Satisfaction</p>
                </div>
                <div className="bg-box py-6 rounded-md">
                    <p className="text-3xl text-off-red font-semibold">300+</p>
                    <p className="text-black mt-1">Projects Completed</p>
                </div>
                <div className="bg-box py-6 rounded-md">
                    <p className="text-3xl text-off-red font-semibold">25+</p>
                    <p className="text-black mt-1">Years of Experience</p>
                </div>
            </div>
        </div>
    );
}
