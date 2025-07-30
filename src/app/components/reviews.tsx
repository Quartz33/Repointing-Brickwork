import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'

export default function Reviews() {
    return (
        <div className="flex items-center gap-6 bg-transparent pt-8">
            {/* Profile avatars */}
            <div className="flex -space-x-3 md:-space-x-4">
                {[
                    '/1.svg',
                    '/2.svg',
                    '/3.svg',
                    '/4.svg',
                    '/5.svg',
                    '/6.svg',
                ].map((src, i) => (
                    <div key={i} className="relative w-9 h-9 md:w-11 md:h-11 rounded-full">
                        <Image
                            src={src}
                            alt={`Customer ${i + 1}`}
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Stars and text */}
            <div className="flex flex-col items-start justify-center">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 md:w-6 md:h-6" />
                    ))}
                </div>
                <span className="text-black text-sm md:text-base font-poppins whitespace-nowrap mt-1 font-semibold">
                    Loved by 50+ customers
                </span>
            </div>
        </div>
    )
}
