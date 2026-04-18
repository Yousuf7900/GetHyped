const SectionHeading = ({ children, className = "" }) => {
    return (
        <h2 className={`text-[34px] leading-[0.95] font-semibold sm:text-[48px] lg:text-[72px] ${className}`}>
            {children}
        </h2>
    );
};

export default SectionHeading;