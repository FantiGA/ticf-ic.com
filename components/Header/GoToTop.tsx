import Image from "next/image";

export const GoToTop = () => (
  <div className="fixed bottom-[50px] right-[20px] opacity-70 z-[100]">
    <Image
      src="/images/top.png"
      alt="Go to Top"
      width={70}
      height={70}
      className="cursor-pointer"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    />
  </div>
);
