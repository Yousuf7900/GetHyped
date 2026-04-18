import { useRef, useState } from "react";
import { GoMail } from "react-icons/go";
import fireImg from "../assets/fire.png";
import Footer from "./Footer";

export const StickerLogo = ({ className = "" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 208 84"
            fill="none"
            className={className}
        >
            <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596 -1.60491 207.793 7.04266 207.793 18.4049" fill="#FAF4EC" />
            <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="black" />
            <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="white" />
            <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="white" />
            <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="white" />
            <path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="white" />
            <path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z" fill="white" />
            <path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="black" />
            <path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="black" />
            <path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="black" />
        </svg>
    );
};

const ContactSection = () => {
    const interactiveRef = useRef(null);
    const lastSpawnRef = useRef(0);
    const idRef = useRef(0);
    const [stickers, setStickers] = useState([]);

    const spawnSticker = (clientX, clientY) => {
        const now = Date.now();
        if (now - lastSpawnRef.current < 900) return;
        lastSpawnRef.current = now;

        const rect = interactiveRef.current?.getBoundingClientRect();
        if (!rect) return;

        const id = idRef.current++;
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const item = {
            id,
            x,
            y,
            rotate: Math.random() * 16 - 8,
            scale: 0.86 + Math.random() * 0.18,
            visible: true,
        };

        setStickers((prev) => [...prev, item]);

        setTimeout(() => {
            setStickers((prev) =>
                prev.map((s) => (s.id === id ? { ...s, visible: false } : s))
            );
        }, 3200);

        setTimeout(() => {
            setStickers((prev) => prev.filter((s) => s.id !== id));
        }, 4000);
    };

    return (
        <section
            id="contact"
            ref={interactiveRef}
            onMouseMove={(e) => spawnSticker(e.clientX, e.clientY)}
            className="relative overflow-hidden bg-[#faf4ec] px-4 pt-[110px] sm:px-6 lg:px-10 lg:pt-[90px]"
        >
            {stickers.map((item) => (
                <div
                    key={item.id}
                    className="pointer-events-none absolute z-[5] transition-all duration-700 ease-out"
                    style={{
                        left: item.x,
                        top: item.y,
                        opacity: item.visible ? 1 : 0,
                        transform: `translate(-50%, -50%) rotate(${item.rotate}deg) scale(${item.scale}) ${item.visible ? "" : "translateY(-24px)"}`,
                    }}
                >
                    <StickerLogo className="w-[150px] drop-shadow-[0_14px_22px_rgba(0,0,0,0.08)] md:w-[185px]" />
                </div>
            ))}

            <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-[1720px] flex-col items-center text-center">
                <h2 className="max-w-[1100px] text-[60px] font-semibold leading-[0.9] tracking-[-0.05em] text-black sm:text-[84px] lg:text-[126px]">
                    Let&apos;s Get Hyped!
                </h2>

                <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:gap-[14px]">
                    <a
                        href="mailto:info@gethyped.nl"
                        className="inline-flex h-[52px] items-center rounded-[18px] border border-black/35 bg-transparent pl-5 pr-[6px] text-[17px] font-semibold text-black transition-colors duration-300 hover:bg-white/60"
                    >
                        <span>Mail ons direct</span>
                        <span className="ml-3 flex h-[40px] w-[40px] items-center justify-center rounded-[13px] bg-black text-[18px] text-white">
                            <GoMail />
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex h-[52px] items-center rounded-[18px] bg-[#ff6423] pl-5 pr-[6px] text-[17px] font-semibold text-white transition-transform duration-300 hover:-translate-y-[1px]"
                    >
                        <span>Get Results</span>
                        <span className="ml-3 flex h-[40px] w-[40px] items-center justify-center rounded-[13px] bg-white">
                            <img src={fireImg} className="h-5 w-5 object-contain" alt="" />
                        </span>
                    </a>
                </div>

                <div className="mt-auto w-full pt-16">
                    <Footer />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;