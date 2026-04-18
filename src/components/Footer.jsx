import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { StickerLogo } from "./ContactSection";

const IconCircle = ({ children, href = "#" }) => (
    <a
        href={href}
        className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white text-[18px] text-black transition-transform duration-300 hover:-translate-y-1"
    >
        {children}
    </a>
);

const Footer = () => {
    return (
        <footer className="relative pb-0">
            <div className="relative overflow-visible rounded-t-[36px]">
                <div
                    className="absolute inset-0 z-0 rounded-t-[36px] bg-[#e4ddd2]"
                    style={{
                        clipPath: "polygon(0 78%, 100% 18%, 100% 100%, 0 100%)",
                    }}
                />

                <div className="absolute right-[7%] top-[-68px] z-30 hidden h-[126px] w-[126px] items-center justify-center rounded-full bg-[#e9a8ea] md:flex">
                    <span className="relative z-10 -rotate-[8deg] text-[52px] font-black italic leading-none text-black">
                        GH
                    </span>

                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                        <defs>
                            <path
                                id="circlePath"
                                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                            />
                        </defs>
                        <text
                            className="fill-black text-[7.3px] font-bold uppercase"
                            style={{ letterSpacing: "1.2px" }}
                        >
                            <textPath href="#circlePath" startOffset="0%">
                                GET RESULTS • GET HYPED • GET NOTICED • GET RESULTS •
                            </textPath>
                        </text>
                    </svg>
                </div>

                <div className="relative z-10 px-4 pb-8 pt-28 sm:px-6 lg:px-10 lg:pb-10">
                    <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_1.85fr]">
                        <div className="flex items-end justify-start">
                            <StickerLogo className="w-[220px] md:w-[285px] lg:w-[360px]" />
                        </div>

                        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                            <div>
                                <div className="flex flex-wrap gap-3">
                                    {["Expertises", "Work", "About", "Contact"].map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase()}`}
                                            className="rounded-[14px] bg-white px-5 py-3 text-[16px] font-semibold text-black transition-colors duration-300 hover:bg-black hover:text-white"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-10 flex flex-wrap items-center gap-4 md:gap-5">
                                    <p className="text-[20px] font-semibold text-black">Follow us</p>

                                    <div className="flex items-center gap-3">
                                        <IconCircle href="#">
                                            <FaLinkedinIn />
                                        </IconCircle>
                                        <IconCircle href="#">
                                            <SiTiktok />
                                        </IconCircle>
                                        <IconCircle href="#">
                                            <FaInstagram />
                                        </IconCircle>
                                        <IconCircle href="#">
                                            <FaYoutube />
                                        </IconCircle>
                                    </div>
                                </div>

                                <div className="mt-12 flex flex-col gap-3 text-[14px] font-medium text-black/55 sm:flex-row sm:items-center sm:justify-between sm:pr-8">
                                    <p>© 2025 Get Hyped</p>
                                    <p>© Design by Dylan</p>
                                </div>
                            </div>

                            <div className="grid gap-7 text-black">
                                <div>
                                    <h3 className="text-[20px] font-semibold">Contact</h3>
                                    <div className="mt-2 space-y-1 text-[16px] font-medium leading-[1.45] text-black/75">
                                        <a href="mailto:info@gethyped.nl" className="block hover:underline">
                                            info@gethyped.nl
                                        </a>
                                        <a href="tel:+31615337496" className="block hover:underline">
                                            +31 6 1533 7496
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-[20px] font-semibold">Adres</h3>
                                    <div className="mt-2 text-[16px] font-medium leading-[1.45] text-black/75">
                                        <p>Beltrumsestraat 6,</p>
                                        <p>7141 AL Groenlo</p>
                                    </div>
                                </div>

                                <a
                                    href="/"
                                    className="pt-1 text-[14px] font-medium text-black/55 transition-colors hover:text-black"
                                >
                                    Privacyvoorwaarden
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;