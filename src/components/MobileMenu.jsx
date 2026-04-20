import { Link } from "react-router";
import Logo from "./Logo";
import fireImg from "../assets/fire.png";

const navItems = [
    { name: "Expertises", href: "#expertises" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

const MobileMenu = ({ open, onClose }) => {
    return (
        <div
            className={`fixed inset-0 z-[60] lg:hidden ${
                open ? "pointer-events-auto" : "pointer-events-none"
            }`}
            aria-hidden={!open}
        >
            <div
                className={`absolute inset-0 bg-[#e8a9e7] transition-transform duration-700 ease-[cubic-bezier(0.22,1.22,0.36,1)] ${
                    open ? "translate-y-0" : "-translate-y-[105%]"
                }`}
            >
                <div className="flex h-full flex-col px-5 pb-6 pt-14">
                    <div className="flex items-start justify-between">
                        <Link to="/" onClick={onClose} className="shrink-0">
                            <Logo />
                        </Link>

                        <button
                            type="button"
                            onClick={onClose}
                            className={`grid h-16 w-16 place-items-center rounded-[18px] bg-white shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1.15,0.36,1)] ${
                                open
                                    ? "translate-y-0 rotate-0 scale-100"
                                    : "-translate-y-6 rotate-[-8deg] scale-90"
                            }`}
                            aria-label="Close Menu"
                        >
                            <span className="relative block h-7 w-7">
                                <span className="absolute left-1/2 top-1/2 h-[2.5px] w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-black" />
                                <span className="absolute left-1/2 top-1/2 h-[2.5px] w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-black" />
                            </span>
                        </button>
                    </div>

                    <div className="flex flex-1 flex-col items-center justify-center gap-6">
                        {navItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={onClose}
                                className={`inline-flex min-w-[140px] items-center justify-center rounded-[24px] bg-[#f6f6f4] px-10 py-5 text-[28px] font-semibold leading-none text-black shadow-sm transition-all duration-700 ease-[cubic-bezier(0.22,1.15,0.36,1)] ${
                                    open
                                        ? "translate-y-0 scale-100 opacity-100"
                                        : "-translate-y-12 scale-90 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: open
                                        ? `${120 + index * 70}ms`
                                        : "0ms",
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div
                        className={`flex justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1.15,0.36,1)] ${
                            open
                                ? "translate-y-0 scale-100 opacity-100"
                                : "translate-y-10 scale-95 opacity-0"
                        }`}
                        style={{
                            transitionDelay: open ? "350ms" : "0ms",
                        }}
                    >
                        <a
                            href="#contact"
                            onClick={onClose}
                            className="inline-flex items-center rounded-[24px] bg-black p-2 text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1.15,0.36,1)] active:scale-95"
                        >
                            <span className="px-6 py-3 text-[24px] font-bold">
                                Get Results
                            </span>

                            <span className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-white">
                                <img
                                    src={fireImg}
                                    className="h-8 w-8 object-contain"
                                    alt=""
                                />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;