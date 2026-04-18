import SectionHeading from "./SectionHeading";
import StatCard from "./StatCard";

const Hero = () => {
    return (

        <>
            <section className="px-4 pt-32 pb-10 sm:px-6 sm:pt-36 lg:px-10 lg:pt-50">
                <div className="mx-auto w-full">
                    <h1 className="w-full text-6xl font-semibold leading-[0.9] tracking-tight text-black/90 sm:text-7xl md:text-8xl lg:text-9xl">
                        Get Hyped.
                        Get <br /> Noticed.
                        Get Results.
                    </h1>

                    <p className="mt-10 text-lg font-semibold leading-[1.35] text-black/85 sm:text-xl lg:text-4xl">
                        Klaar met gokken op content
                        <br />
                        die niets oplevert?
                    </p>
                </div>
            </section>

            <section className="px-4 pb-10 sm:px-6 lg:px-10">
                <div className="mx-auto">
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">


                        <div className="group min-h-[220px] rounded-[28px] bg-sky-500 p-6 transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-2 hover:-translate-y-6 hover:-rotate-12 hover:scale-[1.05] sm:p-7 lg:min-h-[280px] lg:-rotate-6 lg:hover:-translate-x-4">
                            <h3 className="text-5xl font-black leading-none text-black sm:text-6xl lg:text-7xl">
                                10M+
                            </h3>
                            <div className="mt-28 lg:mt-36">
                                <p className="text-2xl font-semibold leading-tight text-black lg:text-[2.2rem]">
                                    Organische views
                                </p>
                                <div className="mt-2 h-px w-full bg-black/50" />
                                <p className="mt-3 text-lg text-black/80 lg:text-[1.05rem]">
                                    Groei door slimme content
                                </p>
                            </div>
                        </div>


                        <div className="group min-h-[220px] overflow-hidden rounded-[28px] bg-neutral-100 transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:translate-x-1 hover:-translate-y-8 hover:rotate-3 hover:scale-[1.05] lg:min-h-[280px] lg:rotate-3">
                            <img
                                src="/your-image.jpg"
                                alt="Card visual"
                                className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                            />
                        </div>


                        <div className="group hidden min-h-[280px] rounded-[28px] bg-emerald-400 p-6 transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-1 hover:-translate-y-7 hover:-rotate-3 hover:scale-[1.05] sm:p-7 lg:block lg:-rotate-2">
                            <h3 className="text-5xl font-black leading-none text-black sm:text-6xl lg:text-7xl">
                                30+
                            </h3>
                            <div className="mt-28 lg:mt-36">
                                <p className="text-2xl font-semibold leading-tight text-black lg:text-[2.2rem]">
                                    Merken geholpen
                                </p>
                                <div className="mt-2 h-px w-full bg-black/50" />
                                <p className="mt-3 text-lg text-black/80 lg:text-[1.05rem]">
                                    Van start-up tot multinational
                                </p>
                            </div>
                        </div>


                        <div className="group hidden min-h-[280px] overflow-hidden rounded-[28px] bg-neutral-200 transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:translate-x-4 hover:-translate-y-6 hover:rotate-12 hover:scale-[1.05] lg:block lg:rotate-6">
                            <img
                                src="/your-second-image.jpg"
                                alt="Card visual"
                                className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>

    );
};

export default Hero;