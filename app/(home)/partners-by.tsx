import Image from "next/image";
import partnersByDesktop from "@/assets/partners-by-desktop.png";
import partnersByMobile from "@/assets/partners-by-mobile.png";

export const PartnersBy = () => {
  return (
    <section className="sm:mb-[100px] mb-[17px]">
      <div className="container">
        <div className="sm:mb-[40px] mb-[40px]">
          <div className="text-center font-medium sm:text-[36px] text-[24px] bg-[linear-gradient(90deg,#19D4E1_0%,#E9D8F4_100%)] text-transparent bg-clip-text mb-[20px]">
            PARTNERS BY
          </div>
          <div className="text-center sm:text-[24px] text-[16px] text-[#B3B3B3]">
            Strategic Partnerships for a Stronger Ecosystem
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={partnersByDesktop}
            width={667}
            height={97}
            alt=""
            className="sm:block hidden"
          ></Image>
          <Image
            src={partnersByMobile}
            width={246}
            height={317}
            alt=""
            className="sm:hidden block"
          ></Image>
        </div>
      </div>
    </section>
  );
};
