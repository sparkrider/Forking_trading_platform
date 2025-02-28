import Image from "next/image";
import backedByDesktop from "@/assets/backed-by-desktop.png";
import backedByMobile from "@/assets/backed-by-mobile.png";

export const BackedBy = () => {
  return (
    <section className="sm:mb-[60px] mb-[50px]">
      <div className="container">
        <div className="sm:mb-[40px] mb-[40px]">
          <div className="text-center font-medium sm:text-[36px] text-[24px] bg-[linear-gradient(90deg,#19D4E1_0%,#E9D8F4_100%)] text-transparent bg-clip-text mb-[20px]">
            BACKED BY
          </div>
          <div className="text-center sm:text-[24px] text-[16px] text-[#B3B3B3]">
            Trusted by Leading Investors & Institutions
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={backedByDesktop}
            width={765}
            height={169}
            alt=""
            className="sm:block hidden"
          ></Image>
          <Image
            src={backedByMobile}
            width={256}
            height={525}
            alt=""
            className="sm:hidden block"
          ></Image>
        </div>
      </div>
    </section>
  );
};
