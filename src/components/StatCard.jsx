const StatCard = ({ value, title, subtitle }) => {
    return (
        <div className="rounded-[28px] border border-black/10 bg-white p-5 sm:p-6 lg:p-8">
            <h3 className="text-[40px] font-semibold leading-none sm:text-[48px] lg:text-[64px]">
                {value}
            </h3>
            <p className="mt-3 text-lg font-semibold">{title}</p>
            <p className="mt-1 max-w-[18rem] text-sm leading-6 text-black/65">{subtitle}</p>
            <div className="mt-6 h-28 rounded-[20px] bg-[#ece6dc]" />
        </div>
    );
};

export default StatCard;