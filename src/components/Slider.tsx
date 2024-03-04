import { useState } from 'react'


const sliderItems = [
    {
        imgUrl: "../../public/images/causes.jpg",
        active: false,
    },
    {
        imgUrl: "../../public/images/bottom_bg_2.png",
        active: true,
    },
    {
        imgUrl: "../../public/images/cause_details.jpg",
        active: false,
    },

]

export const Slider = () => {
    const [sliderCount, setSliderCount] = useState(0);

    const handleAddCount = () => {
        setSliderCount(c => c === sliderItems.length - 1 ? 0 : c + 1)
    }

    const handleSubstract = () => {
        setSliderCount(c => c === 0 ? sliderItems.length - 1 : c - 1)
    }

    return (
        <div id="controls-carousel" className="relative w-full" data-carousel="static">
            <div className="relative  overflow-hidden rounded-lg md:h-[500px]">
                {
                    sliderItems.map((item, index) =>
                        <div key={index} className={`duration-700 ease-in-out ${sliderCount === index ? "" : "hidden"}`} data-carousel-item={item.active}>
                            <img src={item.imgUrl} alt="slider image" />
                        </div>
                    )
                }
            </div>
            <button type="button" onClick={handleSubstract} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only" >Previous</span>
                </span>
            </button>
            <button type="button" onClick={handleAddCount} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

    )
}
