import girl from '../assets/BrandsLogo/girl.jpg'

const Intro = () => {
    return (
        <section
            id="about"
            className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
        >
            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[220px_520px_1fr] lg:grid-rows-[auto_auto] lg:gap-x-[160px] lg:gap-y-12">
                    <div className="lg:col-span-3">
                        <h2 className="text-[38px] font-semibold leading-[0.92] tracking-[-0.045em] text-black sm:text-[52px] lg:text-[58px]">
                            Wij maken content die
                            opvalt. Die <br /> blijft hangen. Die jouw doelgroep <br />
                            raakt en jouw merk in beweging <br />
                            brengt. Snel, krachtig en energiek.
                        </h2>
                    </div>

                    <div className="flex items-start">
                        <div className="overflow-hidden rounded-[14px] bg-[#e8dcc7]">
                            <img
                                src={girl}
                                alt="Get Hyped team"
                                className="h-[180px] w-[160px] object-cover sm:h-[210px] sm:w-[185px] lg:h-[212px] lg:w-[168px]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-end lg:pb-1">
                        <p className="max-w-[430px] text-[18px] font-semibold leading-[1.18] tracking-[-0.02em] text-black sm:text-[22px] lg:text-[20px]">
                            We stoppen niet bij mooie plaatjes en
                            <br />
                            vette beelden. We maken het meetbaar.
                            <br />
                            Zo weet je precies wat werkt en wat niet.
                            <br />
                            Nooit meer content zonder strategie.
                            <br />
                            Nooit meer content zonder resultaat.
                        </p>

                        <a
                            href="#contact"
                            className="group mt-5 inline-flex h-[28px] w-fit items-center overflow-hidden rounded-[9px] border border-black bg-transparent text-[12px] font-medium text-black transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-3 hover:scale-[1.03]"
                        >
                            <span className="px-3 py-2 leading-none">
                                Leer ons kennen
                            </span>

                            <span className="mr-1 ml-1 flex h-[24px] w-[24px] items-center justify-center rounded-[8px] bg-black text-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-3.5 w-3.5"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m13 5 7 7-7 7" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div className="flex items-end justify-start lg:justify-end lg:pr-6">
                        <button
                            type="button"
                            aria-label="Scroll to next section"
                            onClick={() => {
                                document.getElementById("expertises")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                            className="group flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-black/80 bg-transparent text-[#f15a24] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 hover:-rotate-2"
                        >
                            <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="absolute h-4 w-4 translate-y-0 transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-5"
                                >
                                    <path d="M12 5v14" />
                                    <path d="m19 12-7 7-7-7" />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="absolute h-4 w-4 -translate-y-5 transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0"
                                >
                                    <path d="M12 5v14" />
                                    <path d="m19 12-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;