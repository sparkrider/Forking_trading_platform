import Image from "next/image";
import derivative1 from "@/assets/derivative1.png";
import derivative2 from "@/assets/derivative2.png";
import derivative3 from "@/assets/derivative3.png";
import derivative4 from "@/assets/derivative4.png";

export const TradeDerivatives = () => {
  return (
    <section className="sm:mb-[90px] mb-[40px]">
      <div className="container">
        <div className="sm:mb-[40px] mb-[38px]">
          <div className="text-center font-medium sm:text-[36px] text-[24px] bg-[linear-gradient(90deg,#19D4E1_0%,#E9D8F4_100%)] text-transparent bg-clip-text mb-[20px]">
            TRADE DERIVATIVES
          </div>
          <div className="text-center sm:text-[24px] text-[16px] text-[#B3B3B3]">
            Explore Our Derivative Markets
          </div>
        </div>
        <div className="sm:block flex justify-center sm:py-[50px] py-[40px] border border-[#ccc] sm:rounded-[12px] rounded-[10px]">
          <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-0 gap-[40px] sm:max-w-full max-w-[226px]">
            <div className="flex flex-col items-center">
              <div className="sm:mb-[30px] mb-[26px] sm:w-[100px] w-[60px]">
                <Image src={derivative1} width={100} height={100} alt="" />
              </div>
              <div className="sm:text-[36px] text-[18px] font-medium">
                Futures
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="sm:mb-[30px] mb-[26px] sm:w-[100px] w-[60px]">
                <Image src={derivative2} width={100} height={100} alt="" />
              </div>
              <div className="sm:text-[36px] text-[18px] font-medium">
                Options
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="sm:mb-[30px] mb-[26px] sm:w-[100px] w-[60px]">
                <Image src={derivative3} width={100} height={100} alt="" />
              </div>
              <div className="sm:text-[36px] text-[18px] font-medium">
                Powers
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="sm:mb-[30px] mb-[26px] sm:w-[100px] w-[60px]">
                <Image src={derivative4} width={100} height={100} alt="" />
              </div>
              <div className="sm:text-[36px] text-[18px] font-medium">
                Gamma
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
