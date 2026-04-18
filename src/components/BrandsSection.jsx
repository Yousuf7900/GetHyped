import SectionHeading from "./SectionHeading";
import SectionLabel from "./SectionLabel";

const brands = [
    "Brand 01",
    "Brand 02",
    "Brand 03",
    "Brand 04",
    "Brand 05",
    "Brand 06",
    "Brand 07",
    "Brand 08",
    "Brand 09",
    "Brand 10",
    "Brand 11",
];

const BrandsSection = () => {
    return (
        <section className="px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
            <div className="mx-auto rounded-[36px] bg-white p-6 sm:p-8 lg:p-10">
                <SectionLabel>Brands</SectionLabel>
                <SectionHeading className="max-w-[760px]">
                    These brands
                    <br />
                    got hyped.
                </SectionHeading>

                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {brands.map((brand) => (
                        <div
                            key={brand}
                            className="flex h-24 items-center justify-center rounded-[22px] border border-black/10 bg-[#faf4ec] text-sm font-semibold text-black/55"
                        >
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;