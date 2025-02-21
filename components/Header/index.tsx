"use client";
import Image from "next/image";

const Header = () => {
  return (
    <>
      {/* 导航 */}
      <div className="drop visible opacity withBG bgw">
        <div className="option active placeholder" data-value="placeholder">
          中文简体
        </div>
        <div className="option option_topnone" data-value="wow">
          <a href="index2.html">日本語</a>
        </div>
        <div className="option option_topnone" data-value="wow">
          <a href="index3.html">English</a>
        </div>
      </div>

      <div className="nav bgw" id="nav">
        <div className="n-left">
          <Image
            src="/images/top_logo.png"
            alt="TICF的Logo"
            className="top_logo"
          />
        </div>

        <div className="n-r">
          <div className="three col">
            <div className="hamburger" id="hamburger-1">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
            <p className="nav-text">MENU</p>
          </div>
        </div>
      </div>

      {/* 菜单显示\隐藏 */}
      <div className="cd animated">
        <ul>
          <li id="top">我们的使命</li>
          <li id="about">我们的异象</li>
          <li id="menu">我们的核心价值观</li>
          <li id="statement">我们的信仰声明</li>
          <li id="access">礼拝信息</li>
          <li id="contact">联系方式</li>
        </ul>
      </div>

      {/* button TOP */}
      <div className="nav-top">
        <Image src="/images/top.png" alt="TICF的Top" />
      </div>
    </>
  );
};

export default Header;
