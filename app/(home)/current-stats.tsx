export const CurrentStats = () => {
  return (
    <section className="py-[40px] sm:mb-[50px] mb-[40px]">
      <div className="container">
        <div className="text-center font-medium sm:text-[36px] text-[24px] bg-[linear-gradient(90deg,#19D4E1_0%,#E9D8F4_100%)] text-transparent bg-clip-text mb-[40px]">
          CURRENT STATS
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-0 gap-[20px]">
          <div className="flex flex-col items-center sm:gap-[20px] gap-[12px]">
            <div className="font-bold sm:text-[40px] text-[32px] sm: leading-[36px]">
              $111,449,7077
            </div>
            <div className="sm:text-[28px] text-[18px] text-[#B3B3B3] sm:leading-[32px] leading-[20px]">
              Total Volume
            </div>
          </div>
          <div className="flex flex-col items-center sm:gap-[20px] gap-[12px]">
            <div className="font-bold sm:text-[40px] text-[32px] sm: leading-[36px]">
              17k+
            </div>
            <div className="sm:text-[28px] text-[18px] text-[#B3B3B3] sm:leading-[32px] leading-[20px]">
              Total Transactions
            </div>
          </div>
          <div className="flex flex-col items-center sm:gap-[20px] gap-[12px]">
            <div className="font-bold sm:text-[40px] text-[32px] sm: leading-[36px]">
              6k+
            </div>
            <div className="sm:text-[28px] text-[18px] text-[#B3B3B3] sm:leading-[32px] leading-[20px]">
              Active Users
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
