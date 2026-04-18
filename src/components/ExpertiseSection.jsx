import ExpertiseCard from "./ExpertiseCard";

const items = [
    {
        index: 1,
        title: "Social strategy",
        subtitle: "Slimme strategie. Sterke start.",
        buttonText: "Meer over social strategie",
        bgClass: "bg-[#f5b4e0]",
    },
    {
        index: 2,
        title: "Content creation",
        subtitle: "Content die opvalt en raakt.",
        buttonText: "Meer over content creatie",
        bgClass: "bg-[#9cf18f]",
        reverse: true,
    },
    {
        index: 3,
        title: "Activation",
        subtitle: "Zichtbaar waar en wanneer het telt.",
        buttonText: "Meer over activatie",
        bgClass: "bg-[#9dd7ff]",
    },
    {
        index: 4,
        title: "Data",
        subtitle: "Inzichten die impact maken.",
        buttonText: "Meer over data",
        bgClass: "bg-[#ff8f66]",
        reverse: true,
    },
];

const ExpertiseSection = () => {
    return (
        <section id="expertises" className="px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-[1400px] space-y-5">
                {items.map((item) => (
                    <ExpertiseCard key={item.index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default ExpertiseSection;