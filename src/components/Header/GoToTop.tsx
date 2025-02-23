const GoToTop = () => (
  <div className="fixed bottom-[50px] right-[20px] opacity-70 z-[100]">
    <img
      src="/images/top.png"
      alt="Go to Top"
      width={70}
      height={70}
      className="cursor-pointer"
      onClick={() => window.scrollTo(0, 0)}
    />
  </div>
);

export default GoToTop;
