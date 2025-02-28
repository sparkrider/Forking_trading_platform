import Link from "next/link";
import banner from "@/assets/banner.jpg";

export const Banner = () => {
  return (
    <section
      className="relative sm:h-[700px] h-[400px] bg-center bg-cover"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="container h-full sm:pt-[140px] pt-[80px]">
        <div className="sm:text-center">
          <div className="font-bold sm:text-[80px] text-[40px] text-white sm:leading-[90px] leading-[46px] sm:mb-[16px] mb-[14px]">
            PARADIGM PROTOCOL
          </div>
          <div className="sm:text-[40px] text-[20px] text-[#E6E6E6] sm:mb-[40px] mb-[32px]">
            Paradigm, your trade, your future!
          </div>
          <div className="flex sm:justify-center sm:gap-[18px] gap-[12px]">
            <Link
              href="#"
              className="bg-[#19D4E1] hover:bg-[#3ac2cc] text-[#1A1A1A] sm:text-[20px] text-[14px] rounded-full sm:px-[40px] sm:py-[18px] px-[25px] py-[12px] [box-shadow:0px_2px_8px_0px_rgba(0,0,0,0.25)]"
            >
              Start Trading
            </Link>
            <Link
              href="#"
              className="bg-[#E2E1E140] hover:bg-[#E2E1E160] text-white sm:text-[20px] text-[14px] rounded-full sm:px-[40px] sm:py-[18px] px-[25px] py-[12px]"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
