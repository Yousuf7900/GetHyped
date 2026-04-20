import girl from "../assets/BrandsLogo/girl.jpg";
import work1 from "../assets/videos/work1.mp4";

const Intro = () => {
    return (
        <section
            id="about"
            className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
        >
            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-[220px_520px_1fr] lg:grid-rows-[auto_auto] lg:gap-x-[160px] lg:gap-y-12">
                    <div className="lg:col-span-3">
                        <h2 className="max-w-[700px] text-[3.1rem] font-semibold leading-[0.92] tracking-[-0.05em] text-black sm:max-w-none sm:text-[52px] lg:text-[58px]">
                            Wij maken content die
                            <br className="hidden sm:block" />
                            opvalt. Die blijft hangen.
                            <br />
                            Die jouw doelgroep
                            <br />
                            raakt en jouw merk in
                            <br />
                            beweging brengt. Snel,
                            <br />
                            krachtig en energiek.
                        </h2>
                    </div>

                    <div className="order-2 flex justify-center lg:order-none lg:items-start lg:justify-start">

                        {/* mobile version */}
                        <div className="w-full max-w-[510px] rotate-[3.5deg] overflow-hidden rounded-[30px] bg-[#e8dcc7] sm:max-w-[560px] lg:hidden">
                            <video
                                src={work1}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="h-[700px] w-full object-cover object-center sm:h-[760px]"
                            />
                        </div>

                        {/* Desktop image */}
                        <div className="hidden overflow-hidden rounded-[14px] bg-[#e8dcc7] lg:block">
                            <img
                                src={girl}
                                alt="Get Hyped team"
                                className="lg:h-[212px] lg:w-[168px] lg:object-cover"
                            />
                        </div>
                    </div>

                    <div className="order-3 flex flex-col justify-end lg:order-none lg:pb-1">
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
                            className="group mt-6 inline-flex w-fit items-center overflow-hidden rounded-[16px] border border-black bg-white text-[14px] font-medium text-black transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-2 hover:scale-[1.02] lg:mt-5 lg:h-[28px] lg:rounded-[9px] lg:bg-transparent lg:text-[12px] hover:lg:-rotate-3 hover:lg:scale-[1.03]"
                        >
                            <span className="px-4 py-3 leading-none lg:px-3 lg:py-2">
                                Leer ons kennen
                            </span>

                            <span className="mr-1 ml-1 flex h-[36px] w-[36px] items-center justify-center rounded-[12px] bg-black text-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] lg:h-[24px] lg:w-[24px] lg:rounded-[8px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 lg:h-3.5 lg:w-3.5"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m13 5 7 7-7 7" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div className="order-4 hidden items-end justify-start lg:flex lg:justify-end lg:pr-6">
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