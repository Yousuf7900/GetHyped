import { useRef } from "react";

import workVideo1 from "../assets/videos/work1.mp4";
import workVideo2 from "../assets/videos/work2.mp4";
import workVideo3 from "../assets/videos/work3.mp4";
import { FaArrowRight } from "react-icons/fa";

const works = [
    {
        id: 1,
        brand: "Bullit",
        title: "Van nul naar vol,\nbinnen 3 weken",
        video: workVideo1,
        accent: "#ff5a1f",
        overlayBg: "#ff5a1f",
        wrapperClassName: "lg:pt-[130px]",
    },
    {
        id: 2,
        brand: "Roasta",
        title: "Zacht in smaak,\nsterk in beeld",
        video: workVideo2,
        accent: "#1f8cff",
        overlayBg: "#1f8cff",
        wrapperClassName: "lg:pt-[76px]",
    },
    {
        id: 3,
        brand: "Loco",
        title: "Content die écht\nsmaakt (en raakt)",
        video: workVideo3,
        accent: "#35c58b",
        overlayBg: "#35c58b",
        wrapperClassName: "lg:pt-[18px]",
    },
];

const WorkCard = ({ work }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = async () => {
        if (!videoRef.current) return;

        try {
            videoRef.current.currentTime = 0;
            await videoRef.current.play();
        } catch {
            // ignore autoplay issues
        }
    };

    const handleMouseLeave = () => {
        if (!videoRef.current) return;
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    return (
        <article
            className="group relative w-full overflow-hidden rounded-[30px] border-[4px] bg-white transition-all duration-300 ease-out hover:-rotate-[0.9deg] hover:-translate-y-[4px] hover:shadow-[0_18px_36px_rgba(0,0,0,0.10)]"
            style={{
                borderColor: work.accent,
                height: "clamp(410px, 34vw, 525px)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <video
                ref={videoRef}
                src={work.video}
                muted
                playsInline
                loop
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/14 via-black/0 to-transparent" />

            <div
                className="absolute inset-x-3 bottom-3 rounded-[18px] px-5 pb-5 pt-5 text-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] sm:inset-x-4 sm:bottom-4"
                style={{ backgroundColor: work.overlayBg }}
            >
                <div className="absolute right-4 top-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition-transform duration-300 ease-out group-hover:translate-x-[4px] group-hover:-translate-y-[4px]">
                        <span className="text-base leading-none">↗</span>
                    </div>
                </div>

                <h3 className="max-w-[82%] whitespace-pre-line text-[19px] font-semibold leading-[1.02] sm:text-[20px]">
                    {work.title}
                </h3>

                <div className="mt-4">
                    <span className="inline-flex rounded-[9px] bg-white/20 px-3 py-1.5 text-[13px] font-semibold text-white backdrop-blur-sm">
                        {work.brand}
                    </span>
                </div>
            </div>
        </article>
    );
};

const WorkSection = () => {
    return (
        <section
            id="work"
            className="bg-[#f2eee8] px-4 py-14 sm:px-6 lg:px-10 lg:py-20"
        >
            <div className="mx-auto max-w-[1520px]">
                <div className="grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-20 xl:grid-cols-[450px_minmax(0,1fr)] xl:gap-24">
                    <div className="max-w-[420px] pt-1">
                        <h2 className="text-[60px] font-semibold leading-[0.9] tracking-[-0.055em] text-black sm:text-[78px] lg:text-[92px] xl:text-[102px]">
                            Content
                            dat <br /> scoort.
                        </h2>

                        <p className="mt-5 max-w-[335px] text-[18px] font-semibold leading-[1.2] text-black sm:text-[20px] lg:text-[21px]">
                            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
                        </p>

                        <a
                            href="#contact"
                            className="group mt-7 inline-flex origin-center items-center gap-2 rounded-[14px] border border-black px-4 py-2.5 text-[14px] font-medium text-black transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-3 hover:scale-[1.02]"
                        >
                            <span>Bekijk al ons werk</span>

                            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-black text-sm text-white transition-all duration-300 ">
                                <FaArrowRight />
                            </span>
                        </a>
                    </div>

                    <div className="grid items-start gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 xl:gap-x-14">
                        {works.map((work) => (
                            <div key={work.id} className={work.wrapperClassName}>
                                <WorkCard work={work} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;