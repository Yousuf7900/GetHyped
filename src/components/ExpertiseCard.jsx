const ExpertiseCard = ({ index, title, subtitle, buttonText, bgClass, reverse = false }) => {
    return (
        <article
            className={`grid gap-6 rounded-[36px] p-6 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10 ${bgClass}`}
        >
            <div className={`${reverse ? "lg:order-2" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                    Expertise
                </p>

                <div className="mt-5 flex items-center gap-4">
                    <span className="text-sm font-semibold text-black/55">
                        {String(index).padStart(2, "0")}
                    </span>
                    <h3 className="text-[34px] font-semibold leading-none sm:text-[42px] lg:text-[56px]">
                        {title}
                    </h3>
                </div>

                <p className="mt-6 max-w-[520px] text-xl leading-8 font-medium sm:text-2xl lg:text-[32px] lg:leading-[1.15]">
                    {subtitle}
                </p>

                <a
                    href="#contact"
                    className="mt-8 inline-flex rounded-full border border-black px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                >
                    {buttonText}
                </a>
            </div>

            <div className={`min-h-[300px] rounded-[28px] bg-white/40 ${reverse ? "lg:order-1" : ""}`} />
        </article>
    );
};

export default ExpertiseCard;