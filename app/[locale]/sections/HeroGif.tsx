import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

const HeroGif = () => {
  const locale = useLocale();

  // Determine GIF source based on locale
  const gifSrc = locale === "ar" ? "wiigGifar.gif" : "wiigGifen.gif";

  return (
    <div className="relative flex md:pt-[10vh] flex-col justify-center items-center overflow-hidden bg-cream h-[100vh] md:min-h-[100vh]">
      <div className="relative w-[90vw] h-[70vh] md:w-[80vw] md:h-[80vw]">
        {/* Mobile GIF */}
        <Image
          src={`/wiig/mobile/${gifSrc}`}
          alt="Hero"
          fill
          className="aspect-auto md:hidden"
          priority
        />
        {/* Desktop GIF */}
        <Image
          src={`/wiig/desktop/${gifSrc}`}
          alt="Hero"
          fill
          className="aspect-auto hidden md:block"
          priority
        />
      </div>
    </div>
  );
};

export default HeroGif;
