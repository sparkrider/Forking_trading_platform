import Image from "next/image";
import chain1 from "@/assets/chain1.png";
import chain2 from "@/assets/chain2.png";
import chain3 from "@/assets/chain3.png";
import chain4 from "@/assets/chain4.png";
import chain5 from "@/assets/chain5.png";
import chain6 from "@/assets/chain6.png";
import chain7 from "@/assets/chain7.png";
import chain8 from "@/assets/chain8.png";
import chain9 from "@/assets/chain9.png";

export const SupportedChains = () => {
  return (
    <section>
      <div className="container">
        <div className="sm:mb-[102px] mb-[40px]">
          <div className="text-center font-medium sm:text-[36px] text-[24px] bg-[linear-gradient(90deg,#19D4E1_0%,#E9D8F4_100%)] text-transparent bg-clip-text mb-[20px]">
            Supported Chains
          </div>
          <div className="text-center sm:text-[24px] text-[16px] text-[#B3B3B3]">
            Trade Seamlessly Across Multiple Blockchains
          </div>
        </div>
        <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[20px]">
          <div className="flex justify-center items-center sm:py-[37px] py-[21px]">
            <div>
              <div className="sm:w-[180px] sm:h-[180px] w-[107px] h-[107px] sm:mb-[24px] mb-[14px]">
                <Image src={chain1} alt=""></Image>
              </div>
              <div className="sm:text-[30px] text-[18px] text-center">
                Arbitrum
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:py-[37px] py-[21px]">
            <div>
              <div className="sm:w-[180px] sm:h-[180px] w-[107px] h-[107px] sm:mb-[24px] mb-[14px]">
                <Image src={chain2} alt=""></Image>
              </div>
              <div className="sm:text-[30px] text-[18px] text-center">
                Linea
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:py-[37px] py-[21px]">
            <div>
              <div className="sm:w-[180px] sm:h-[180px] w-[107px] h-[107px] sm:mb-[24px] mb-[14px]">
                <Image src={chain3} alt=""></Image>
              </div>
              <div className="sm:text-[30px] text-[18px] text-center">
                Scroll
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:py-[37px] py-[21px]">
            <div>
              <div className="sm:w-[180px] sm:h-[180px] w-[107px] h-[107px] sm:mb-[24px] mb-[14px]">
                <Image src={chain4} alt=""></Image>
              </div>
              <div className="sm:text-[30px] text-[18px] text-center">
                Polygon zkEVM
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:py-[37px] py-[21px]">
            <div>
              <div className="sm:w-[180px] sm:h-[180px] w-[107px] h-[107px] sm:mb-[24px] mb-[14px]">
                <Image src={chain5} alt=""></Image>
              </div>
              <div className="sm:text-[30px] text-[18px] text-center">
                Manta Pacific
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:py-[37px] py-[21px]">
            <div>
              <div className="sm:w-[180px] sm:h-[180px] w-[107px] h-[107px] sm:mb-[24px] mb-[14px]">
                <Image src={chain6} alt=""></Image>
              </div>
              <div className="sm:text-[30px] text-[18px] text-center">
                BNB Chain
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:py-[37px] py-[21px]">
            <div>
              <div className="sm:w-[180px] sm:h-[180px] w-[107px] h-[107px] sm:mb-[24px] mb-[14px]">
                <Image src={chain7} alt=""></Image>
              </div>
              <div className="sm:text-[30px] text-[18px] text-center">
                Blast
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:py-[37px] py-[21px]">
            <div>
              <div className="sm:w-[180px] sm:h-[180px] w-[107px] h-[107px] sm:mb-[24px] mb-[14px]">
                <Image src={chain8} alt=""></Image>
              </div>
              <div className="sm:text-[30px] text-[18px] text-center">
                Taiko
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:py-[37px] py-[21px]">
            <div>
              <div className="sm:w-[180px] sm:h-[180px] w-[107px] h-[107px] sm:mb-[24px] mb-[14px]">
                <Image src={chain9} alt=""></Image>
              </div>
              <div className="sm:text-[30px] text-[18px] text-center">Base</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
