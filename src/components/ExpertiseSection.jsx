import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import vid1 from "../assets/videos/work1.mp4";
import vid2 from "../assets/videos/work2.mp4";
import vid3 from "../assets/videos/work3.mp4";
import vid4 from "../assets/videos/work3.mp4";

gsap.registerPlugin(ScrollTrigger);

const items = [
    {
        index: "01",
        title: "Social strategy",
        subtitle: "Slimme strategie. Sterke start.",
        description:
            "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
        buttonText: "Meer over social strategie",
        bg: "#f3f1ed",
        media: vid1,
        imageBorder: "#ff5a1f",
        imageTilt: "-rotate-[2deg]",
        badgeClass: "bg-[#d9d3c8] text-black",
    },
    {
        index: "02",
        title: "Content creation",
        subtitle: "Content die opvalt en raakt.",
        description:
            "Van concept tot creatie maken we content die jouw merk laat leven. Fris, sterk en afgestemd op de mensen die je wilt bereiken.",
        buttonText: "Meer over content creatie",
        bg: "#e6a8e7",
        media: vid2,
        imageBorder: "#ffffff",
        imageTilt: "rotate-[2deg]",
        badgeClass: "bg-white text-black",
    },
    {
        index: "03",
        title: "Activation",
        subtitle: "Zichtbaar waar en wanneer het telt.",
        description:
            "De juiste content verdient het om gezien te worden. We verspreiden je content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen op het juiste moment.",
        buttonText: "Meer over activatie",
        bg: "#42c88d",
        media: vid3,
        imageBorder: "#ffffff",
        imageTilt: "rotate-[2deg]",
        badgeClass: "bg-white text-black",
    },
    {
        index: "04",
        title: "Data",
        subtitle: "Inzichten die impact maken.",
        description:
            "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij zodat je content steeds beter presteert.",
        buttonText: "Meer over data",
        bg: "#1f8cf0",
        media: vid4,
        imageBorder: "#ffffff",
        imageTilt: "rotate-[2deg]",
        badgeClass: "bg-white text-black",
    },
];

const ExpertiseSection = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const panels = gsap.utils.toArray(".expertise-panel");
            const panelsToAnimate = [...panels];
            panelsToAnimate.pop();

            panelsToAnimate.forEach((panel) => {
                const innerPanel = panel.querySelector(".expertise-inner");
                const panelHeight = innerPanel.offsetHeight;
                const windowHeight = window.innerHeight;
                const difference = panelHeight - windowHeight;

                const fakeScrollRatio =
                    difference > 0
                        ? difference / (difference + windowHeight)
                        : 0;

                if (fakeScrollRatio) {
                    panel.style.marginBottom =
                        panelHeight * fakeScrollRatio + "px";
                }

                gsap.set(panel, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    transformOrigin: "85% 20%",
                    force3D: true,
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: panel,
                        start: "bottom bottom",
                        end: () =>
                            fakeScrollRatio
                                ? `+=${innerPanel.offsetHeight}`
                                : "bottom top",
                        pin: true,
                        pinSpacing: false,
                        scrub: true,
                        invalidateOnRefresh: true,
                        onLeaveBack: () => {
                            gsap.set(panel, {
                                x: 0,
                                y: 0,
                                xPercent: 0,
                                yPercent: 0,
                                rotate: 0,
                                scale: 1,
                                opacity: 1,
                                clearProps: "transform",
                            });
                        },
                    },
                });

                if (fakeScrollRatio) {
                    tl.to(innerPanel, {
                        yPercent: -100,
                        y: window.innerHeight,
                        duration: 1 / (1 - fakeScrollRatio) - 1,
                        ease: "none",
                    });
                }

                tl.fromTo(
                    panel,
                    {
                        scale: 1,
                        opacity: 1,
                        rotate: 0,
                        x: 0,
                        y: 0,
                        transformOrigin: "85% 20%",
                    },
                    {
                        scale: 0.92,
                        opacity: 0.82,
                        rotate: 2.5,
                        x: 10,
                        y: -8,
                        duration: 0.82,
                        ease: "none",
                    }
                ).to(panel, {
                    scale: 0.88,
                    opacity: 0.08,
                    rotate: 3.5,
                    x: 16,
                    y: -12,
                    duration: 0.18,
                    ease: "none",
                });
            });

            ScrollTrigger.refresh();
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="expertises"
            ref={wrapperRef}
            className=" px-4 py-10 sm:px-6 lg:px-10 lg:py-16"
        >
            <div className="mx-auto max-w-[1600px]">
                <div className="slides-wrapper space-y-0">
                    {items.map((item) => (
                        <section
                            key={item.index}
                            className="expertise-panel relative flex h-screen w-full overflow-hidden rounded-[34px]"
                            style={{ backgroundColor: item.bg }}
                        >
                            <div className="expertise-content w-full">
                                <div className="expertise-inner flex min-h-screen flex-col px-5 pb-8 pt-5 sm:px-8 sm:pb-10 sm:pt-6 lg:px-14 lg:pb-14 lg:pt-8">
                                    <div className="relative">
                                        <span
                                            className={`inline-flex rounded-[10px] px-3 py-2 text-[14px] font-semibold leading-none sm:text-[15px] ${item.badgeClass}`}
                                        >
                                            Expertise
                                        </span>

                                        <div className="pointer-events-none absolute right-0 top-0 text-[68px] font-semibold leading-none tracking-[-0.06em] text-white/35 sm:text-[94px] lg:text-[118px]">
                                            {item.index}
                                        </div>
                                    </div>

                                    <h2 className="mt-5 max-w-[1050px] text-[50px] font-semibold leading-[0.88] tracking-[-0.06em] text-black sm:text-[74px] lg:text-[106px]">
                                        {item.title}
                                    </h2>

                                    <div className="mt-14 grid flex-1 gap-10 lg:mt-[180px] lg:grid-cols-[460px_minmax(0,1fr)] lg:items-end">
                                        <div className="max-w-[500px]">
                                            <h3 className="text-[28px] font-extrabold leading-[1.04] tracking-[-0.035em] text-black sm:text-[34px] lg:text-[38px]">
                                                {item.subtitle}
                                            </h3>

                                            <p className="mt-5 text-[18px] leading-[1.18] tracking-[-0.02em] text-black/85 sm:text-[19px] lg:text-[18px]">
                                                {item.description}
                                            </p>

                                            <a
                                                href="#contact"
                                                className="group mt-7 inline-flex origin-center items-center rounded-[18px] border border-black bg-white px-[4px] py-[4px] pl-4 text-[14px] font-semibold text-black transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-3 hover:scale-[1.045]"
                                            >
                                                <span className="leading-none">
                                                    {item.buttonText}
                                                </span>

                                                <span className="ml-2 flex h-[38px] w-[38px] items-center justify-center rounded-2xl bg-black text-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="h-4 w-4"
                                                    >
                                                        <path d="M5 12h14" />
                                                        <path d="m13 5 7 7-7 7" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>

                                        <div className="hidden lg:flex lg:items-end lg:justify-end">
                                            <div
                                                className={`overflow-hidden rounded-[28px] border-[6px] ${item.imageTilt}`}
                                                style={{
                                                    borderColor: item.imageBorder,
                                                }}
                                            >
                                                <video
                                                    src={item.media}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    preload="auto"
                                                    className="h-[385px] w-[340px] object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;