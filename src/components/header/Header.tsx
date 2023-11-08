"use client";

import React, { useRef, useState, useEffect } from "react";
import DarkMode from "./DarkMode";
import logodark from "../../assets/images/logo/logo3.png";
import imgsun from "../../assets/images/icon/sun.png";
import avt from "../../assets/images/avatar/avt-2.jpg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import menus from "@/utils/menu";

const Header = () => {
  const pathname = usePathname();

  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e: any) => {
    const header = document.querySelector(".js-header");
    const scrollTop = window.scrollY;
    scrollTop >= 300
      ? header?.classList.add("is-fixed")
      : header?.classList.remove("is-fixed");
    scrollTop >= 400
      ? header?.classList.add("is-small")
      : header?.classList.remove("is-small");
  };

  const menuLeft = useRef<HTMLElement>(null);
  const btnToggle = useRef<HTMLElement>(null);
  const btnSearch = useRef<HTMLElement>(null);

  const menuToggle = () => {
    menuLeft?.current?.classList?.toggle("active");
    btnToggle?.current?.classList?.toggle("active");
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleOnClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <header id="header_main" className="header_1 js-header" ref={headerRef}>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div id="site-header-inner">
              <div className="wrap-box flex">
                <div id="site-logo" className="clearfix">
                  <div id="site-logo-inner">
                    <Link href="/" rel="home" className="">
                      <Image
                        className="logo-dark"
                        id="logo_header"
                        src={logodark}
                        alt="nft-gaming"
                      />
                      <Image
                        className="logo-light"
                        id="logo_header"
                        src={logodark}
                        alt="nft-gaming"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className="mobile-button"
                  ref={btnToggle as React.RefObject<HTMLDivElement>}
                  onClick={menuToggle}
                >
                  <span></span>
                </div>
                <nav id="main-nav" className="main-nav" ref={menuLeft}>
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((data, index) => (
                      <li key={index} onClick={() => handleOnClick(index)}>
                        <Link
                          className={
                            pathname === data.links
                              ? "active-menu"
                              : "menu-market"
                          }
                          href={data.links}
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="flat-search-btn flex">
                  <div className="sc-btn-top mg-r-12" id="site-header">
                    <Link
                      href="/wallet-connect"
                      className="sc-button header-slider style style-1 wallet fl-button pri-1"
                    >
                      <span>Wallet connect</span>
                    </Link>
                  </div>

                  <div className="admin_active" id="header_admin">
                    <div className="header_avatar">
                      <div className="price">
                        <span>
                          2.45 <strong>ETH</strong>{" "}
                        </span>
                      </div>
                      <Image className="avatar" src={avt} alt="avatar" />
                      <div className="avatar_popup mt-20">
                        <div className="d-flex align-items-center copy-text justify-content-between">
                          <span> 13b9ebda035r178... </span>
                          <Link href="/" className="ml-2">
                            <i className="fal fa-copy"></i>
                          </Link>
                        </div>
                        <div className="d-flex align-items-center mt-10">
                          <Image className="coin" src={imgsun} alt="/" />
                          <div className="info ml-10">
                            <p className="text-sm font-book text-gray-400">
                              Balance
                            </p>
                            <p className="w-full text-sm font-bold text-green-500">
                              16.58 ETH
                            </p>
                          </div>
                        </div>
                        <div className="hr"></div>
                        <div className="links mt-20">
                          <Link href="#">
                            <i className="fab fa-accusoft"></i>{" "}
                            <span> My items</span>
                          </Link>
                          <a className="mt-10" href="/edit-profile">
                            <i className="fas fa-pencil-alt"></i>{" "}
                            <span> Edit Profile</span>
                          </a>
                          <a className="mt-10" href="/login" id="logout">
                            <i className="fal fa-sign-out"></i>{" "}
                            <span> Logout</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DarkMode />
    </header>
  );
};

export default Header;
