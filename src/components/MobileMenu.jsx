import { Link } from "react-router";

const navItems = [
    { name: "Expertises", href: "#expertises" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

const MobileMenu = ({ open, onClose }) => {
    return (
        <>
            <div
                className={`fixed inset-0 z-40 bg-black/25 transition-opacity duration-300 lg:hidden ${
                    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
            />

            <div
                className={`fixed left-4 right-4 top-24 z-50 rounded-[28px] border border-black/10 bg-[#faf4ec] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-300 lg:hidden ${
                    open
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "-translate-y-4 opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white"
                        >
                            {item.name}
                        </a>
                    ))}

                    <Link
                        to="/"
                        onClick={onClose}
                        className="mt-2 inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                        Get Results
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;