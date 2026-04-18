import SectionLabel from "./SectionLabel";

const Intro = () => {
    return (
        <section id="about" className="px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
            <div className="mx-auto grid max-w-[1400px] gap-8 rounded-[36px] bg-white p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
                <div className="rounded-[28px] bg-[#ece6dc] min-h-[280px]" />

                <div className="flex flex-col justify-between">
                    <div>
                        <SectionLabel>About</SectionLabel>

                        <p className="max-w-[760px] text-[24px] leading-[1.15] font-medium sm:text-[30px] lg:text-[44px]">
                            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
                        </p>

                        <p className="mt-6 max-w-[650px] text-base leading-7 text-black/70 sm:text-lg">
                            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="mt-8 inline-flex w-fit items-center rounded-full border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                        Leer ons kennen
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Intro;