"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import logo from "@/assets/logo.png";
import headphone from "@/assets/headphone.png";
import global from "@/assets/global.png";
import down from "@/assets/arrow-down-small.png";
import hamburger from "@/assets/hamburger-white.png";
import close from "@/assets/close.png";
import upGreen from "@/assets/up-green.png";
import downRed from "@/assets/down-red.png";
import currency1 from "@/assets/currency1.png";
import currency2 from "@/assets/currency2.png";
import currency3 from "@/assets/currency3.png";
import currency4 from "@/assets/currency4.png";
import currency5 from "@/assets/currency5.png";
import currency6 from "@/assets/currency6.png";
import cp from "@/assets/cp.png";
import arrowRight from "@/assets/arrow-right.png";

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="relative w-full z-40 bg-[#0B1719] text-white h-[100px] [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="container h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex sm:gap-[50px] gap-[18px]">
            <button
              className="sm:hidden block"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Image src={hamburger} alt=""></Image>
            </button>
            <Link href="/">
              <Image src={logo} height={40} alt="" />
            </Link>
            <nav className="sm:flex hidden items-center gap-[20px] text-[18px]">
              <div className="group relative cursor-pointer hover:underline underline-offset-[3px] decoration-[#19D4E1]">
                <Link
                  href="/futures"
                  className={pathname === "/futures" ? "text-[#19D4E1]" : ""}
                >
                  Futures
                </Link>
                <div className="absolute group-hover:visible invisible w-[334px] pt-[36px]">
                  <div className="bg-[#052B2E] [box-shadow:0px_3px_24px_0px_rgba(0,0,0,0.25)]">
                    <div className="text-[#CCCCCC] text-[14px] px-[15px] pt-[10px] pb-[18px] grid grid-cols-3">
                      <div>Symbol</div>
                      <div>Mark Price</div>
                      <div>24h Change</div>
                    </div>
                    <div className="px-[15px]">
                      <div className="h-[1px] bg-[#999999]"></div>
                    </div>
                    <div className="flex flex-col text-[16px]">
                      <div className="px-[15px] py-[18px] grid grid-cols-3 hover:bg-[#213f46]">
                        <div>BTCUSD</div>
                        <div>$96,418.41</div>
                        <div className="flex items-center gap-[6px] text-[#FF3B30]">
                          <Image
                            src={downRed}
                            alt=""
                            width={9.7}
                            height={7}
                            className="mt-[3px]"
                          ></Image>
                          -0.086%
                        </div>
                      </div>
                      <div className="px-[15px] py-[18px] grid grid-cols-3 hover:bg-[#213f46]">
                        <div>ETHUSD</div>
                        <div>$2,792.13</div>
                        <div className="flex items-center gap-[6px] text-[#34C759]">
                          <Image
                            src={upGreen}
                            alt=""
                            width={9.7}
                            height={7}
                            className="mt-[3px]"
                          ></Image>
                          3.92%
                        </div>
                      </div>
                      <div className="px-[15px] py-[18px] grid grid-cols-3 hover:bg-[#213f46]">
                        <div>BNBUSDT</div>
                        <div>$666.01</div>
                        <div className="flex items-center gap-[6px] text-[#34C759]">
                          <Image
                            src={upGreen}
                            alt=""
                            width={9.7}
                            height={7}
                            className="mt-[3px]"
                          ></Image>
                          1.61%
                        </div>
                      </div>
                      <div className="px-[15px] py-[18px] grid grid-cols-3 hover:bg-[#213f46]">
                        <div>SOLUSDT</div>
                        <div>$171.3</div>
                        <div className="flex items-center gap-[6px] text-[#34C759]">
                          <Image
                            src={upGreen}
                            alt=""
                            width={9.7}
                            height={7}
                            className="mt-[3px]"
                          ></Image>
                          0.27%
                        </div>
                      </div>
                      <div className="px-[15px] py-[18px] grid grid-cols-3 hover:bg-[#213f46]">
                        <div>DOGEUSDT</div>
                        <div>$0.2453</div>
                        <div className="flex items-center gap-[6px] text-[#34C759]">
                          <Image
                            src={upGreen}
                            alt=""
                            width={9.7}
                            height={7}
                            className="mt-[3px]"
                          ></Image>
                          0.38%
                        </div>
                      </div>
                      <div className="px-[15px] py-[18px] grid grid-cols-3 hover:bg-[#213f46]">
                        <div>TONUSDT</div>
                        <div>$3.755</div>
                        <div className="flex items-center gap-[6px] text-[#34C759]">
                          <Image
                            src={upGreen}
                            alt=""
                            width={9.7}
                            height={7}
                            className="mt-[3px]"
                          ></Image>
                          3.59%
                        </div>
                      </div>
                      <div className="px-[15px] py-[18px] grid grid-cols-3 hover:bg-[#213f46]">
                        <div>SHIBUSDT</div>
                        <div>$0.00001</div>
                        <div className="flex items-center gap-[6px] text-[#34C759]">
                          <Image
                            src={upGreen}
                            alt=""
                            width={9.7}
                            height={7}
                            className="mt-[3px]"
                          ></Image>
                          2.76%
                        </div>
                      </div>
                      <div className="px-[15px] py-[18px] grid grid-cols-3 hover:bg-[#213f46]">
                        <div>SUIUSDT</div>
                        <div>$3.387</div>
                        <div className="flex items-center gap-[6px] text-[#34C759]">
                          <Image
                            src={upGreen}
                            alt=""
                            width={9.7}
                            height={7}
                            className="mt-[3px]"
                          ></Image>
                          1.42%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative cursor-pointer hover:underline underline-offset-[3px] decoration-[#19D4E1]">
                <Link
                  href="/options"
                  className={pathname === "/options" ? "text-[#19D4E1]" : ""}
                >
                  Options
                </Link>
                <div className="absolute group-hover:visible invisible w-[340px] pt-[36px]">
                  <div className="bg-[#052B2E] px-[48px] py-[40px] [box-shadow:0px_3px_24px_0px_rgba(0,0,0,0.25)]">
                    <div className="flex flex-col gap-[20px]">
                      <div className="flex justify-between">
                        <Link href="#">
                          <div className="flex justify-center items-center gap-[14px] text-[16px] font-medium rounded-[4px] hover:bg-[#083E42] px-[20px] py-[10px]">
                            <Image src={currency1} alt=""></Image>
                            BTC
                          </div>
                        </Link>
                        <div className="flex flex-col justify-between gap-[12px] text-[15px] text-[#999999] font-medium">
                          <div className="flex items-center gap-[2px]">
                            30000
                            <Image
                              src={cp}
                              width={31.5}
                              height={16.4}
                              alt=""
                            ></Image>
                          </div>
                          <div className="flex items-center gap-[2px]">
                            30000
                            <Image
                              src={cp}
                              width={31.5}
                              height={16.4}
                              alt=""
                            ></Image>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Link href="#">
                          <div className="flex justify-center items-center gap-[14px] text-[16px] font-medium rounded-[4px] hover:bg-[#083E42] px-[20px] py-[10px]">
                            <Image src={currency2} alt=""></Image>
                            BTC
                          </div>
                        </Link>
                        <div className="flex flex-col justify-between gap-[12px] text-[15px] text-[#999999] font-medium">
                          <div className="flex items-center gap-[2px]">
                            30000
                            <Image
                              src={cp}
                              width={31.5}
                              height={16.4}
                              alt=""
                            ></Image>
                          </div>
                          <div className="flex items-center gap-[2px]">
                            30000
                            <Image
                              src={cp}
                              width={31.5}
                              height={16.4}
                              alt=""
                            ></Image>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Link href="#">
                          <div className="flex justify-center items-center gap-[14px] text-[16px] font-medium rounded-[4px] hover:bg-[#083E42] px-[20px] py-[10px]">
                            <Image src={currency3} alt=""></Image>
                            BTC
                          </div>
                        </Link>
                        <div className="flex flex-col justify-between gap-[12px] text-[15px] text-[#999999] font-medium">
                          <div className="flex items-center gap-[2px]">
                            30000
                            <Image
                              src={cp}
                              width={31.5}
                              height={16.4}
                              alt=""
                            ></Image>
                          </div>
                          <div className="flex items-center gap-[2px]">
                            30000
                            <Image
                              src={cp}
                              width={31.5}
                              height={16.4}
                              alt=""
                            ></Image>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Link href="#">
                          <div className="flex justify-center items-center gap-[14px] text-[16px] font-medium rounded-[4px] hover:bg-[#083E42] px-[20px] py-[10px]">
                            <Image src={currency4} alt=""></Image>
                            BTC
                          </div>
                        </Link>
                        <div className="flex flex-col justify-between gap-[12px] text-[15px] text-[#999999] font-medium">
                          <div className="flex items-center gap-[2px]">
                            30000
                            <Image
                              src={cp}
                              width={31.5}
                              height={16.4}
                              alt=""
                            ></Image>
                          </div>
                          <div className="flex items-center gap-[2px]">
                            30000
                            <Image
                              src={cp}
                              width={31.5}
                              height={16.4}
                              alt=""
                            ></Image>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Link href="#">
                          <div className="flex justify-center items-center gap-[14px] text-[16px] font-medium rounded-[4px] hover:bg-[#083E42] px-[20px] py-[10px]">
                            <Image src={currency5} alt=""></Image>
                            BTC
                          </div>
                        </Link>
                        <div className="flex flex-col justify-between gap-[12px] text-[15px] text-[#999999] font-medium">
                          <div className="flex items-center gap-[2px]">
                            30000
                            <Image
                              src={cp}
                              width={31.5}
                              height={16.4}
                              alt=""
                            ></Image>
                          </div>
                          <div className="flex items-center gap-[2px]">
                            30000
                            <Image
                              src={cp}
                              width={31.5}
                              height={16.4}
                              alt=""
                            ></Image>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Link href="#">
                          <div className="flex justify-center items-center gap-[14px] text-[16px] font-medium rounded-[4px] hover:bg-[#083E42] px-[20px] py-[10px]">
                            <Image src={currency6} alt=""></Image>
                            BTC
                          </div>
                        </Link>
                        <div className="flex flex-col justify-between gap-[12px] text-[15px] text-[#999999] font-medium">
                          <div className="flex items-center gap-[2px]">
                            30000
                            <Image
                              src={cp}
                              width={31.5}
                              height={16.4}
                              alt=""
                            ></Image>
                          </div>
                          <div className="flex items-center gap-[2px]">
                            30000
                            <Image
                              src={cp}
                              width={31.5}
                              height={16.4}
                              alt=""
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="hover:underline underline-offset-[3px] decoration-[#19D4E1]"
              >
                Powers
              </Link>
              <Link
                href="#"
                className="hover:underline underline-offset-[3px] decoration-[#19D4E1]"
              >
                Gamma
              </Link>
              <Link
                href="#"
                className="hover:underline underline-offset-[3px] decoration-[#19D4E1]"
              >
                Pools
              </Link>
              <Link
                href="#"
                className="hover:underline underline-offset-[3px] decoration-[#19D4E1]"
              >
                <div className="flex items-center gap-[5px]">
                  Docs
                  <Image src={down} alt=""></Image>
                </div>
              </Link>
              <Link
                href="#"
                className="hover:underline underline-offset-[3px] decoration-[#19D4E1]"
              >
                <div className="flex items-center gap-[5px]">
                  <div className="w-[8px] h-[8px] bg-[#00E100] rounded-full mt-[2px]"></div>
                  More
                  <Image src={down} alt=""></Image>
                </div>
              </Link>
            </nav>
          </div>
          <div className="flex justify-end sm:gap-[16px] gap-[12px]">
            <Link href="#">
              <Image
                src={headphone}
                className="sm:h-[36px] sm:w-[36px] w-[28px] h-[28px]"
                alt=""
              />
            </Link>
            <Link href="#">
              <Image
                src={global}
                className="sm:h-[36px] sm:w-[36px] w-[28px] h-[28px]"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "fixed w-screen h-screen left-0 top-0 z-50 transition-all duration-150 ease-in-out bg-[#0B1719] px-[20px] py-[34px]",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-[43px]">
          <Link href="/">
            <Image src={logo} height={40} alt="" />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <Image src={close} alt=""></Image>
          </button>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Link href="/futures" className="p-[10px]">
            <div className="flex justify-between items-center">
              <div className="text-[18px]">Futures</div>
              <div>
                <Image src={arrowRight} alt=""></Image>
              </div>
            </div>
          </Link>
          <Link href="/options" className="p-[10px]">
            <div className="flex justify-between items-center">
              <div className="text-[18px]">Options</div>
              <div>
                <Image src={arrowRight} alt=""></Image>
              </div>
            </div>
          </Link>
          <Link href="#" className="p-[10px]">
            <div className="flex justify-between items-center">
              <div className="text-[18px]">Powers</div>
              <div>
                <Image src={arrowRight} alt=""></Image>
              </div>
            </div>
          </Link>
          <Link href="#" className="p-[10px]">
            <div className="flex justify-between items-center">
              <div className="text-[18px]">Gamma</div>
              <div>
                <Image src={arrowRight} alt=""></Image>
              </div>
            </div>
          </Link>
          <Link href="#" className="p-[10px]">
            <div className="flex justify-between items-center">
              <div className="text-[18px]">Pools</div>
              <div>
                <Image src={arrowRight} alt=""></Image>
              </div>
            </div>
          </Link>
          <Link href="#" className="p-[10px]">
            <div className="flex justify-between items-center">
              <div className="text-[18px]">Docs</div>
              <div>
                <Image src={arrowRight} alt=""></Image>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
