import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";

const works = [
    {
        title: "Bullit",
        subtitle: "Van nul naar vol, binnen 3 weken",
    },
    {
        title: "Roasta",
        subtitle: "Zacht in smaak, sterk in beeld",
    },
    {
        title: "Loco",
        subtitle: "Content die écht smaakt (en raakt)",
    },
];

const WorkSection = () => {
    return (
        <section id="work" className="px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <SectionLabel>Work</SectionLabel>
                        <SectionHeading>
                            Content dat
                            <br />
                            scoort.
                        </SectionHeading>
                    </div>

                    <p className="max-w-[560px] text-base leading-7 text-black/72 sm:text-lg">
                        Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
                    </p>
                </div>

                <a
                    href="#contact"
                    className="mt-8 inline-flex rounded-full border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                    Bekijk al ons werk
                </a>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                    {works.map((work) => (
                        <article
                            key={work.title}
                            className="overflow-hidden rounded-[30px] border border-black/10 bg-white"
                        >
                            <div className="h-[290px] bg-[#e9e2d8]" />
                            <div className="p-6">
                                <p className="text-sm text-black/55">{work.subtitle}</p>
                                <h3 className="mt-2 text-[28px] font-semibold">{work.title}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkSection;