import { useState } from "react";
import work1 from "../assets/videos/work1.mp4";
import work2 from "../assets/videos/work2.mp4";

const Hero = () => {
    const [activeCard, setActiveCard] = useState(null);

    const getCardClasses = (cardId, baseClass, activeClass, siblingClass) => {
        if (activeCard === null) return baseClass;
        if (activeCard === cardId) return activeClass;
        return siblingClass;
    };

    return (
        <>
            <section className="px-4 pb-10 pt-32 sm:px-6 sm:pt-36 lg:px-10 lg:pb-0 lg:pt-50">
                <div className="mx-auto w-full">
                    <h1 className="w-full text-6xl font-semibold leading-[0.9] tracking-tight text-black/90 sm:text-7xl md:text-8xl lg:text-9xl">
                        Get Hyped.
                        <br /> Noticed.
                        <br /> Results.
                    </h1>

                    <p className="mt-10 text-lg font-semibold leading-[1.35] text-black/85 sm:text-xl lg:text-4xl">
                        Klaar met gokken op content
                        <br />
                        die niets oplevert?
                    </p>
                </div>
            </section>

            <section className="overflow-hidden px-4 sm:px-6 lg:px-10">
                <div className="mx-auto py-12 lg:py-16">
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0">
                        
                        {/* CARD 1 - Increased to h-[500px] and lg:h-[600px] */}
                        <div
                            onMouseEnter={() => setActiveCard(1)}
                            onMouseLeave={() => setActiveCard(null)}
                            className={`relative z-[1] flex h-[500px] flex-col justify-between rounded-[34px] bg-sky-500 p-6 shadow-sm transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-7 lg:h-[600px] lg:px-9 lg:py-8 ${getCardClasses(
                                1,
                                "lg:translate-x-[18px] lg:translate-y-[10px] lg:-rotate-[6deg] lg:scale-100",
                                "lg:z-20 lg:translate-x-[6px] lg:translate-y-0 lg:rotate-0 lg:scale-[1.015]",
                                "lg:translate-y-[12px] lg:-rotate-[7.5deg] lg:scale-[0.992]"
                            )}`}
                        >
                            <h3 className="text-5xl font-black leading-none text-black sm:text-6xl lg:text-[5.2rem]">
                                10M+
                            </h3>

                            <div>
                                <p className="text-2xl font-semibold leading-tight text-black lg:text-[3rem]">
                                    Organische views
                                </p>
                                <div className="mt-3 h-px w-full bg-black/45" />
                                <p className="mt-4 text-lg text-black/85 lg:text-[1.05rem]">
                                    Groei door slimme content
                                </p>
                            </div>
                        </div>

                        {/* CARD 2 - Increased to h-[500px] and lg:h-[600px] */}
                        <div
                            onMouseEnter={() => setActiveCard(2)}
                            onMouseLeave={() => setActiveCard(null)}
                            className={`relative z-[2] h-[500px] overflow-hidden rounded-[34px] bg-neutral-100 shadow-sm transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:h-[600px] ${getCardClasses(
                                2,
                                "lg:translate-x-[-10px] lg:translate-y-[22px] lg:-rotate-[1.5deg] lg:scale-100",
                                "lg:z-20 lg:translate-x-0 lg:translate-y-0 lg:rotate-0 lg:scale-[1.015]",
                                "lg:translate-y-[12px] lg:rotate-[1deg] lg:scale-[1.008]"
                            )}`}
                        >
                            <video
                                src={work1}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* CARD 3 - Increased to h-[500px] and lg:h-[600px] */}
                        <div
                            onMouseEnter={() => setActiveCard(3)}
                            onMouseLeave={() => setActiveCard(null)}
                            className={`relative z-[3] hidden h-[500px] flex-col justify-between rounded-[34px] bg-emerald-400 px-9 py-8 shadow-sm transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:flex lg:h-[600px] ${getCardClasses(
                                3,
                                "lg:translate-x-[-28px] lg:translate-y-[36px] lg:rotate-[-5.3deg] lg:scale-100",
                                "lg:z-20 lg:translate-x-0 lg:translate-y-0 lg:rotate-0 lg:scale-[1.015]",
                                "lg:translate-y-[8px] lg:rotate-[-6.4deg] lg:scale-[0.992]"
                            )}`}
                        >
                            <h3 className="text-5xl font-black leading-none text-black sm:text-6xl lg:text-[5rem]">
                                30+
                            </h3>

                            <div>
                                <p className="text-2xl font-semibold leading-tight text-black lg:text-[2.55rem]">
                                    Merken geholpen
                                </p>
                                <div className="mt-3 h-px w-full bg-black/45" />
                                <p className="mt-4 text-lg text-black/85 lg:text-[1.05rem]">
                                    Van start-up tot multinational
                                </p>
                            </div>
                        </div>

                        {/* CARD 4 - Increased to h-[500px] and lg:h-[600px] */}
                        <div
                            onMouseEnter={() => setActiveCard(4)}
                            onMouseLeave={() => setActiveCard(null)}
                            className={`relative z-[4] hidden h-[500px] overflow-hidden rounded-[34px] bg-neutral-200 shadow-sm transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:block lg:h-[600px] ${getCardClasses(
                                4,
                                "lg:translate-x-[-46px] lg:translate-y-[4px] lg:rotate-[8deg] lg:scale-100",
                                "lg:z-20 lg:translate-x-[-4px] lg:translate-y-0 lg:rotate-0 lg:scale-[1.015]",
                                "lg:translate-y-[10px] lg:rotate-[9.5deg] lg:scale-[1.008]"
                            )}`}
                        >
                            <video
                                src={work2}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;