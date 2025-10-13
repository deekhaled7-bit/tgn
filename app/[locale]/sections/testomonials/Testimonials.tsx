"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { TestimonialCard } from "./TestomonialsCard";

const testimonials = [
  {
    text: "دا جوود نيوز كانت حقيقي هي شعاع النور كده في وقت الحظر انا بجد كنت بستنى كل بوست!! مبسوطة جداً انك بدأتيها و مبسوطة بوجودك دايماً ذُمتي ناجحة و مؤثرة يا مريوم! ❤",
    direction: "right",
  },
  {
    text: "تقريبا اول مرة اسمع لايف كامل , حقيقي حقيقي بجد حاجة جميلة وشخصية مريم مبهجة بطريقة تخليك عايز تطلع السما 😂 والأجمل من ده كله اني شايف انك درستي اعلام عادي وبتقدمي محتوى جميل وبعيد خالص عن الفكرة النمطية المنتشرة عن الإعلام ف مجتمعنا : the good news اسم ع مسمى فعلا بجد عاش جدا وخليتوا اليوم جميل 👏 👏 👏",
    direction: "right",
  },
  {
    text: "انا حابة اقولك ان السنة دي ماكانتش احسن حاجة بالنسبالي ولكن كل مرة كنت بفكر a-give up كنت بفتح فيديو من بتوعك ويحس ان لسة في امل ❤",
    direction: "right",
  },
  {
    text: "Hii, I know that most probably you won't see this but I wanted to thank you for your efforts to spread good news and positive vibes, daymaan befre2 to hear some good news in the middle of the countless stressing news out there, so thankk youu so muchhhh ❤ ❤ ❤ ❤ ❤ ❤",
    direction: "left",
  },
];
const mobTestimonials = [
  {
    text: "دا جوود نيوز كانت حقيقي هي شعاع النور كده في وقت الحظر انا بجد كنت بستنى كل بوست!! مبسوطة جداً انك بدأتيها و مبسوطة بوجودك دايماً ذُمتي ناجحة و مؤثرة يا مريوم! ❤",
    direction: "left",
  },
  {
    text: "تقريبا اول مرة اسمع لايف كامل , حقيقي حقيقي بجد حاجة جميلة وشخصية مريم مبهجة بطريقة تخليك عايز تطلع السما 😂 والأجمل من ده كله اني شايف انك درستي اعلام عادي وبتقدمي محتوى جميل وبعيد خالص عن الفكرة النمطية المنتشرة عن الإعلام ف مجتمعنا : the good news اسم ع مسمى فعلا بجد عاش جدا وخليتوا اليوم جميل 👏 👏 👏",
    direction: "right",
  },
  {
    text: "انا حابة اقولك ان السنة دي ماكانتش احسن حاجة بالنسبالي ولكن كل مرة كنت بفكر a-give up كنت بفتح فيديو من بتوعك ويحس ان لسة في امل ❤",
    direction: "left",
  },
  {
    text: "Hii, I know that most probably you won't see this but I wanted to thank you for your efforts to spread good news and positive vibes, daymaan befre2 to hear some good news in the middle of the countless stressing news out there, so thankk youu so muchhhh ❤ ❤ ❤ ❤ ❤ ❤",
    direction: "left",
  },
];

const Testimonials = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("testimonials");
  const isRTL = locale === "ar";
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for each card (tweak values for desired effect)
  const leftY1 = useTransform(scrollYProgress, [-0.1, 0.3], [-250, 50]);
  const leftY2 = useTransform(scrollYProgress, [-0.1, 0.4], [-200, 50]);
  const leftY3 = useTransform(scrollYProgress, [0, 0.45], [-180, 0]);
  const rightY1 = useTransform(scrollYProgress, [-0.1, 0.3], [250, -50]);
  const rightY2 = useTransform(scrollYProgress, [-0.1, 0.4], [200, -50]);
  const rightY3 = useTransform(scrollYProgress, [0, 0.45], [180, 0]);

  const paragraphOpacities = [
    useTransform(scrollYProgress, [0, 0.3], [0.4, 1]),
    useTransform(scrollYProgress, [0, 0.4], [0.3, 1]),
    useTransform(scrollYProgress, [0, 0.45], [0.3, 1]),
  ];
  return (
    <section
      ref={sectionRef}
      className={`relative w-full flex min-h-[75vh] md:min-h-[100vh] h-auto flex-col items-center md:justify-center justify-end py-16 bg-cream ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      {/* <div className="flex md:hidden gap-4 w-full max-w-full mx-auto overflow-x-auto  py-8 scrollbar-hide snap-x snap-mandatory">
        {mobTestimonials.slice(0, 2).map((t, i) => (
          <div key={i} className="">
            <TestimonialCard {...t} index={i} />
          </div>
        ))}
      </div> */}
      <div className="flex  flex-col h-full md:justify-center justify-end items-center md:mb-8">
        <h2
          className={`text-carbon tracking-normal text-3xl md:text-5xl max-w-lg font-bold text-center  ${
            isRTL ? "font-arabic-header" : "font-english-header"
          }`}
        >
          <strong>{t("title")}</strong>
        </h2>
        <div className="flex md:hidden gap-4 w-[98vw] mx-auto overflow-x-auto pt-16  scrollbar-hide snap-x snap-mandatory">
          {mobTestimonials.slice(0, 4).map((t, i) => (
            <div key={i} className="">
              <TestimonialCard {...t} index={i + 2} />
            </div>
          ))}
        </div>
        <img
          src="/mounir/TGN_ELEMENTS_PNG-08.png"
          alt="The Good News"
          className="w-64 h-64 object-contain "
        />
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-carbon/90 text-base font-medium ${
              isRTL ? "font-arabic-body" : "font-english-body"
            }`}
          >
            {t("trustedBy")}
          </span>
        </div>

        {/* <p
          className={`text-lg text-carbon/90 text-center max-w-xl ${
            isRTL ? "font-arabic-body" : "font-english-body"
          }`}
        >
          Subscribe now and be a part of your favorite community.
        </p> */}
      </div>

      <div className="w-full flex justify-center">
        {/* Cards left with parallax */}
        <div
          className="hidden md:flex flex-col gap-6 absolute left-3 top-8 h-full justify-center items-start"
          style={{ width: "320px" }}
        >
          <motion.div style={{ x: leftY1, opacity: paragraphOpacities[0] }}>
            <TestimonialCard {...testimonials[0]} index={0} />
          </motion.div>
          <motion.div style={{ x: leftY2, opacity: paragraphOpacities[1] }}>
            <TestimonialCard {...testimonials[1]} index={1} />
          </motion.div>
          {/* <motion.div style={{ x: leftY3, opacity: paragraphOpacities[2] }}>
            <TestimonialCard {...testimonials[2]} index={2} />
          </motion.div> */}
        </div>
        {/* Cards right with parallax */}
        <div
          className="hidden md:flex flex-col gap-6 absolute right-3 top-10 h-full justify-center items-end"
          style={{ width: "320px" }}
        >
          <motion.div style={{ x: rightY1, opacity: paragraphOpacities[0] }}>
            <TestimonialCard {...testimonials[2]} index={2} />
          </motion.div>
          <motion.div style={{ x: rightY2, opacity: paragraphOpacities[1] }}>
            <TestimonialCard {...testimonials[3]} index={3} />
          </motion.div>
          {/* <motion.div style={{ x: rightY3, opacity: paragraphOpacities[2] }}>
            <TestimonialCard {...testimonials[5]} index={5} />
          </motion.div> */}
        </div>
        {/* Center content for mobile */}

        {/* Center button */}
        {/* <div className="flex flex-col items-center justify-center z-10">
          <button
            onClick={() =>
              router.push("/subscription/687396821b4da119eb1c13fe")
            }
            className={`mt-8 hover:bg-hot-pink/90 bg-hot-pink text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transition ${
              isRTL ? "font-arabic-body" : "font-english-body"
            }`}
          >
            Subscribe Now
          </button>

        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
