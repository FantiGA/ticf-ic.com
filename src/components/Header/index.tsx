import LocaleSwitcher from "@/components/LocaleSwitcher";

const Header = () => {
  return (
    <>
      <LocaleSwitcher />

      <div className="nav bgw" id="nav">
        <div className="n-left">
          <img
            src="/images/top_logo.png"
            alt="TICF的Logo"
            className="top_logo"
            width={406}
            height={97}
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
        <img src="/images/top.png" alt="Go to Top" width={70} height={70} />
      </div>
    </>
  );
};

export default Header;
