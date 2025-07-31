
import Reviews from "./reviews"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function Hero() {
    return (
        <div className="relative w-full bg-main overflow-hidden mx-auto pt-6">
            <h4 className="text-off-red text-center text-sm">Bricklaying Contractors you can count on</h4>
            <h1 className="font-staatliches  text-black text-center pt-1 text-4xl">REPOINTING BRICKWORK</h1>
            <p className="text-center text-black tracking-wide pt-4 text-lg font-light px-4 font-inter">We specialise in quality brickwork, repointing, and repairs — built to last, and finished with care. Serving homes and businesses with a no-nonsense, honest approach to masonry.</p>
            <Image
                alt="work"
                src="/brick-hero.jpg"
                width={900}
                height={500}
                className="object-contain mt-5"
            />
            <div className="flex justify-center mt-6">
                <button
                    className="w-full max-w-xs text-center text-white text-2xl uppercase tracking-widest font-bold font-barlow bg-[#B72025] py-2  rounded-lg hover:bg-[#a51e20] transition-colors duration-300"
                >
                    GET IN TOUCH TODAY
                </button>
            </div>
            <div className="flex justify-center mt-6">
                <button className="btn btn-outline text-black border-black bg-white hover:bg-[#d3d3d3] transition-colors duration-300">
                    VIEW OUR WORK
                    <ChevronRight className="w-2" />
                </button>
            </div>
            <Reviews />
            <div className="grid grid-cols-2 gap-2 text-black text-center pt-12 mx-2">
                <div className="bg-box rounded-l-md text-off-red ">
                    <a className="text-3xl">150+</a>
                    <br />
                    <a className="text-black">House Repointed</a>
                </div>
                <div className="bg-box rounded-l-md text-off-red ">
                    <a className="text-3xl">99%</a>
                    <br />
                    <a className="text-black">Customer Satisfaction</a>
                </div>
                <div className="bg-box rounded-r-md text-off-red ">
                    <a className="text-3xl">300+</a>
                    <br />
                    <a className="text-black">Projects Completed</a>
                </div>
                <div className="bg-box rounded-r-md text-off-red ">
                    <a className="text-3xl">25+</a>
                    <br />
                    <a className="text-black">Years of Experience</a>
                </div>
            </div>
        </div>
    )
}