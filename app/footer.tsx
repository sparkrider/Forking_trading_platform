import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import footerTopBorderDesktop from "@/assets/footer-top-border-desktop.png";
import footerTopBorderMobile from "@/assets/footer-top-border-mobile.png";
import discord from "@/assets/discord.png";
import telegram from "@/assets/telegram.png";
import twitter from "@/assets/twitter.png";
import github from "@/assets/github.png";
import medium from "@/assets/medium.png";

export const Footer = () => {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src={footerTopBorderDesktop}
          alt=""
          className="sm:block hidden"
        ></Image>
        <Image
          src={footerTopBorderMobile}
          alt=""
          className="sm:hidden block"
        ></Image>
      </div>
      <footer className="w-full sm:pt-[40px] pt-[40px] bg-[#0B1719]">
        <div className="container">
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-[40px] justify-between items-center sm:text-[20px] text-[16px] text-[#999999]">
            <Link href="/">
              <Image src={logo} height={40} alt="" />
            </Link>
            <nav className="flex sm:gap-[70px] gap-[20px]">
              <Link href="#">Terms of Service</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Support</Link>
            </nav>
            <nav className="flex items-center gap-[25px]">
              <Link href="#">Join Us</Link>
              <div className="flex sm:gap-[15px] gap-[1.5px] items-center">
                <Link href="#">
                  <Image
                    src={discord}
                    alt=""
                    width={28.4}
                    height={22.7}
                    className="sm:scale-100 scale-75"
                  ></Image>
                </Link>
                <Link href="#">
                  <Image
                    src={telegram}
                    alt=""
                    width={25}
                    height={21}
                    className="sm:scale-100 scale-75"
                  ></Image>
                </Link>
                <Link href="#">
                  <Image
                    src={twitter}
                    alt=""
                    width={27}
                    height={22}
                    className="sm:scale-100 scale-75"
                  ></Image>
                </Link>
                <Link href="#">
                  <Image
                    src={github}
                    alt=""
                    width={23.6}
                    height={23.6}
                    className="sm:scale-100 scale-75"
                  ></Image>
                </Link>
                <Link href="#">
                  <Image
                    src={medium}
                    alt=""
                    width={26}
                    height={26}
                    className="sm:scale-100 scale-75"
                  ></Image>
                </Link>
              </div>
            </nav>
          </div>
          <div className="sm:text-[16px] text-[14px] sm:py-[24px] py-[22px] text-center text-[#B3B3B3] sm:mt-[50px] mt-[20px]">
            © 2025 Paradigm. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};
