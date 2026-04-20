import { useEffect, useMemo, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";

import brand1 from "../assets/BrandsLogo/Brand11.svg";
import brand2 from "../assets/BrandsLogo/Brand12.svg";
import brand3 from "../assets/BrandsLogo/Brand13.svg";
import brand4 from "../assets/BrandsLogo/Brand14.svg";
import brand5 from "../assets/BrandsLogo/Brand15.svg";
import brand6 from "../assets/BrandsLogo/Brand16.svg";
import brand7 from "../assets/BrandsLogo/Brand17.svg";
import brand8 from "../assets/BrandsLogo/Brand18.svg";

const brandItems = [
    { id: 1, name: "Seesing Flex", logo: brand1 },
    { id: 2, name: "Graafschap College", logo: brand2 },
    { id: 3, name: "Fides", logo: brand3 },
    { id: 4, name: "SRHK Ambassadeurs", logo: brand4 },
    { id: 5, name: "KNLTB", logo: brand5 },
    { id: 6, name: "Brand 06", logo: brand6 },
    { id: 7, name: "Brand 07", logo: brand7 },
    { id: 8, name: "Brand 08", logo: brand8 },
];

const DESKTOP_CARD_WIDTH = 380;
const DESKTOP_CARD_HEIGHT = 380;
const DESKTOP_GAP = 20;
const DESKTOP_SAFE_PAD_X = 52;
const DESKTOP_SAFE_PAD_Y = 74;

const MOBILE_CARD_WIDTH = 112;
const MOBILE_CARD_HEIGHT = 112;
const MOBILE_GAP = 10;
const MOBILE_SAFE_PAD_X = 18;
const MOBILE_SAFE_PAD_Y = 28;

const AUTO_SCROLL_SPEED = 0.135;

const NORMAL_TRANSFORM = {
    rotate: 0,
    scale: 1,
};

const PRESS_PATTERN = [
    { rotate: 10, scale: 1.018 },
    { rotate: -10, scale: 1.016 },
    { rotate: -6, scale: 1.01 },
    { rotate: 6, scale: 1.01 },
    { rotate: -8, scale: 1.014 },
];

const buildPressedTransforms = (items) => {
    return items.reduce((acc, item, index) => {
        const pattern = PRESS_PATTERN[index % PRESS_PATTERN.length];
        acc[item.id] = {
            rotate: pattern.rotate,
            scale: pattern.scale,
        };
        return acc;
    }, {});
};

const BrandsSection = () => {
    const trackRef = useRef(null);
    const animationFrameRef = useRef(null);

    const dragState = useRef({
        isPointerDown: false,
        startX: 0,
        startTranslateX: 0,
        currentTranslateX: 0,
    });

    const [isPressed, setIsPressed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [pressedTransforms] = useState(() => buildPressedTransforms(brandItems));

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

    const CARD_WIDTH = isMobile ? MOBILE_CARD_WIDTH : DESKTOP_CARD_WIDTH;
    const CARD_HEIGHT = isMobile ? MOBILE_CARD_HEIGHT : DESKTOP_CARD_HEIGHT;
    const GAP = isMobile ? MOBILE_GAP : DESKTOP_GAP;
    const SAFE_PAD_X = isMobile ? MOBILE_SAFE_PAD_X : DESKTOP_SAFE_PAD_X;
    const SAFE_PAD_Y = isMobile ? MOBILE_SAFE_PAD_Y : DESKTOP_SAFE_PAD_Y;

    const tripledBrands = useMemo(() => {
        return [...brandItems, ...brandItems, ...brandItems];
    }, []);

    const singleSetWidth = useMemo(() => {
        return brandItems.length * CARD_WIDTH + (brandItems.length - 1) * GAP;
    }, [CARD_WIDTH, GAP]);

    const applyTranslate = (value) => {
        const track = trackRef.current;
        if (!track) return;

        let next = value;

        if (next <= -(singleSetWidth * 2)) {
            next += singleSetWidth;
        }

        if (next >= 0) {
            next -= singleSetWidth;
        }

        dragState.current.currentTranslateX = next;
        track.style.transform = `translate3d(${next}px, 0, 0)`;
    };

    useEffect(() => {
        applyTranslate(-singleSetWidth);
    }, [singleSetWidth]);

    useEffect(() => {
        let previousTime = 0;

        const animate = (time) => {
            if (!previousTime) previousTime = time;

            const delta = time - previousTime;
            previousTime = time;

            const autoNext =
                dragState.current.currentTranslateX - delta * AUTO_SCROLL_SPEED;

            applyTranslate(autoNext);

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [singleSetWidth]);

    const handlePointerDownTrack = (clientX) => {
        dragState.current.isPointerDown = true;
        dragState.current.startX = clientX;
        dragState.current.startTranslateX = dragState.current.currentTranslateX;
    };

    const handlePointerMoveTrack = (clientX) => {
        if (!dragState.current.isPointerDown) return;

        const distance = clientX - dragState.current.startX;
        const draggedTranslate = dragState.current.startTranslateX + distance;

        applyTranslate(draggedTranslate);
    };

    const handlePointerUpTrack = () => {
        dragState.current.isPointerDown = false;
        setIsPressed(false);
    };

    useEffect(() => {
        const handleWindowMouseUp = () => {
            handlePointerUpTrack();
        };

        window.addEventListener("mouseup", handleWindowMouseUp);
        window.addEventListener("touchend", handleWindowMouseUp);

        return () => {
            window.removeEventListener("mouseup", handleWindowMouseUp);
            window.removeEventListener("touchend", handleWindowMouseUp);
        };
    }, []);

    return (
        <section className="overflow-hidden px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-[1880px] border-b border-black/10 pb-5">
                <div className="max-w-[560px]">
                    <h2 className="text-[42px] font-semibold leading-[0.95] tracking-[-0.04em] text-black sm:text-[72px] lg:text-[96px]">
                        These brands
                        <br />
                        got hyped.
                    </h2>
                </div>

                <div
                    className="relative mt-8 overflow-hidden sm:mt-12"
                    onMouseDown={(e) => handlePointerDownTrack(e.clientX)}
                    onMouseMove={(e) => handlePointerMoveTrack(e.clientX)}
                    onMouseUp={handlePointerUpTrack}
                    onMouseLeave={(e) => {
                        if (dragState.current.isPointerDown) {
                            handlePointerMoveTrack(e.clientX);
                        }
                    }}
                    onTouchStart={(e) => handlePointerDownTrack(e.touches[0].clientX)}
                    onTouchMove={(e) => handlePointerMoveTrack(e.touches[0].clientX)}
                    onTouchEnd={handlePointerUpTrack}
                >
                    <div
                        className="box-content"
                        style={{
                            paddingTop: `${SAFE_PAD_Y}px`,
                            paddingBottom: `${SAFE_PAD_Y}px`,
                            paddingLeft: `${SAFE_PAD_X}px`,
                            paddingRight: `${SAFE_PAD_X}px`,
                            marginLeft: `-${SAFE_PAD_X}px`,
                            marginRight: `-${SAFE_PAD_X}px`,
                        }}
                    >
                        <div
                            ref={trackRef}
                            className="flex select-none will-change-transform"
                            style={{
                                width: "max-content",
                                gap: `${GAP}px`,
                            }}
                        >
                            {tripledBrands.map((brand, index) => {
                                const pressedTransform =
                                    pressedTransforms[brand.id] || NORMAL_TRANSFORM;

                                const rotate = isPressed ? pressedTransform.rotate : 0;
                                const scale = isPressed ? pressedTransform.scale : 1;

                                return (
                                    <button
                                        key={`${brand.id}-${index}`}
                                        type="button"
                                        onMouseDown={() => setIsPressed(true)}
                                        onMouseUp={() => setIsPressed(false)}
                                        onTouchStart={() => setIsPressed(true)}
                                        onTouchEnd={() => setIsPressed(false)}
                                        className="relative shrink-0 rounded-[18px] border border-black/15 bg-[#f2eee8] transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] sm:rounded-[28px]"
                                        style={{
                                            width: `${CARD_WIDTH}px`,
                                            height: `${CARD_HEIGHT}px`,
                                            transform: `rotate(${rotate}deg) scale(${scale})`,
                                            cursor: "pointer",
                                            transformOrigin: "center center",
                                        }}
                                    >
                                        <div className="flex h-full w-full items-center justify-center px-4 sm:px-10">
                                            <img
                                                src={brand.logo}
                                                alt={brand.name}
                                                draggable="false"
                                                className={`pointer-events-none object-contain ${
                                                    isMobile
                                                        ? "max-h-[34px] max-w-[72%]"
                                                        : "max-h-[92px] max-w-[78%]"
                                                }`}
                                            />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;