import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import fireImg from "../assets/fire.png";

const navItems = [
    { name: "Expertises", href: "#expertises" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolled(currentScrollY > 12);

            if (open) {
                setShowNavbar(true);
                lastScrollY.current = currentScrollY;
                return;
            }

            if (currentScrollY <= 10) {
                setShowNavbar(true);
            } else if (currentScrollY > lastScrollY.current) {
                setShowNavbar(false);
            } else if (currentScrollY < lastScrollY.current) {
                setShowNavbar(true);
            }

            lastScrollY.current = currentScrollY;
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, [open]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-transform duration-300 ease-out md:px-6 md:pt-6 lg:px-10 ${
                    showNavbar ? "translate-y-0" : "-translate-y-[120%]"
                }`}
            >
                <div className="mx-auto">
                    <div
                        className={`flex items-center justify-between gap-4 transition-all duration-300 ${
                            scrolled ? "scale-[0.99]" : "scale-100"
                        }`}
                    >
                        <Link to="/" className="shrink-0">
                            <Logo />
                        </Link>

                        <nav className="hidden lg:flex items-center gap-1 rounded-2xl bg-white px-2 py-2 shadow-sm">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="group relative grid place-items-center overflow-hidden rounded-2xl px-5 py-2.5 text-[1.125em] font-semibold tracking-[-.02em] text-black"
                                    style={{
                                        "--elastic-ease-out":
                                            "linear(0, 0.5737 7.6%, 0.8382 11.87%, 0.9463 14.19%, 1.0292 16.54%, 1.0886 18.97%, 1.1258 21.53%, 1.137 22.97%, 1.1424 24.48%, 1.1423 26.1%, 1.1366 27.86%, 1.1165 31.01%, 1.0507 38.62%, 1.0219 42.57%, 0.9995 46.99%, 0.9872 51.63%, 0.9842 58.77%, 1.0011 81.26%, 1)",
                                        WebkitTapHighlightColor:
                                            "transparent",
                                    }}
                                >
                                    <div
                                        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center translate-y-[900px] transition-transform group-hover:-translate-y-[150px]"
                                        style={{
                                            transitionDuration: "450ms",
                                            transitionTimingFunction:
                                                "var(--elastic-ease-out)",
                                        }}
                                    >
                                        <div className="h-[1000px] w-[1000px] shrink-0 -rotate-45 border-t-[4px] border-orange-500 bg-black"></div>
                                    </div>

                                    <span
                                        className="col-start-1 row-start-1 z-20 block transition-transform group-hover:-translate-y-[200%]"
                                        style={{
                                            transitionDuration: "750ms",
                                            transitionTimingFunction:
                                                "var(--elastic-ease-out)",
                                        }}
                                    >
                                        {item.name}
                                    </span>
                                    <span
                                        className="col-start-1 row-start-1 z-30 block translate-y-[200%] text-white transition-transform group-hover:translate-y-0"
                                        style={{
                                            transitionDuration: "750ms",
                                            transitionTimingFunction:
                                                "var(--elastic-ease-out)",
                                        }}
                                        aria-hidden="true"
                                    >
                                        {item.name}
                                    </span>
                                </a>
                            ))}
                        </nav>

                        <div className="hidden md:flex items-center">
                            <a
                                href="#contact"
                                className="group inline-flex items-center rounded-2xl bg-pink-200 px-2 py-2 text-[18px] font-bold text-black shadow-sm transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-rotate-2 hover:translate-y-[1px] hover:scale-x-[1.04] hover:shadow-md"
                            >
                                <span className="px-5 py-2">
                                    Get Results
                                </span>

                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                                    <img
                                        src={fireImg}
                                        className="h-7 w-7 object-contain"
                                        alt=""
                                    />
                                </span>
                            </a>
                        </div>

                        <button
                            type="button"
                            onClick={() => setOpen((prev) => !prev)}
                            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm lg:hidden"
                            aria-label="Toggle Menu"
                        >
                            <span className="relative block h-5 w-5">
                                <span
                                    className={`absolute left-0 top-[2px] h-[2px] w-5 rounded-full bg-black transition-all duration-300 ${
                                        open ? "top-[9px] rotate-45" : ""
                                    }`}
                                />
                                <span
                                    className={`absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-black transition-all duration-300 ${
                                        open ? "opacity-0" : "opacity-100"
                                    }`}
                                />
                                <span
                                    className={`absolute left-0 top-[16px] h-[2px] w-5 rounded-full bg-black transition-all duration-300 ${
                                        open ? "top-[9px] -rotate-45" : ""
                                    }`}
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu open={open} onClose={() => setOpen(false)} />
        </>
    );
};

export default Navbar;