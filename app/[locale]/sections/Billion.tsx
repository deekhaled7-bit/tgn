"use client";
import React, { useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";

// URLs for news items - expanded to 16 items

const Billion = () => {
  const t = useTranslations("billion");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the first few items and append them to the end for seamless looping
    const scrollHeight = scrollContainer.scrollHeight / 2;

    const scrollAnimation = () => {
      if (!scrollContainer) return;

      if (scrollContainer.scrollTop >= scrollHeight) {
        // Reset scroll position to start when we've scrolled through the original items
        scrollContainer.scrollTop = 0;
      } else {
        // Scroll up by 1px
        scrollContainer.scrollTop += 1;
      }
    };

    // Set up the animation interval with reduced frequency for better performance
    const animationInterval = setInterval(scrollAnimation, 50);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  // Generate news items from translations (or use placeholders if translations are missing)
  // const generateNewsItems = () => {
  //   return Array.from({ length: 16 }, (_, i) => ({
  //     id: i + 1,
  //     url: newsUrls[i % newsUrls.length],
  //     imageUrl: `/assets/TGN_ELEMENTS_PNG-${38 + i}.png`,
  //     flex: i + 1, // Cycle through available images
  //   }));
  // };

  const newsItems = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DMLE6RlTjNZ/",
      imageUrl: `/ourGoodNews/aswan.png`,
      flex: 5,
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DNigRWMMM-D/",
      imageUrl: `/ourGoodNews/bread.png`,
      flex: 4,
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DNQU6lTNidI/",
      imageUrl: `/ourGoodNews/socks.png`,
      flex: 6,
    },
    {
      id: 4,
      url: "https://www.instagram.com/reel/DOdRHAQjMgs/",
      imageUrl: `/ourGoodNews/blind.png`,
      flex: 5,
    },

    {
      id: 5,
      url: "https://www.instagram.com/thegoodnews.me/reel/DPTbIfcjAAg/",
      imageUrl: `/ourGoodNews/luxor.png`,
      flex: 6,
    },
    {
      id: 6,
      url: "https://www.instagram.com/p/DPESkeXDLDQ/?img_index=1",
      imageUrl: `/ourGoodNews/genz.png`,
      flex: 1,
    },
    {
      id: 7,
      url: "https://www.instagram.com/p/DO6rbfRjGNQ/",
      imageUrl: `/ourGoodNews/france.png`,
      flex: 5,
    },

    {
      id: 8,
      url: "https://www.instagram.com/p/DOvKT_eiOCt/",
      imageUrl: `/ourGoodNews/strange.png`,
      flex: 3,
    },
    {
      id: 11,
      url: "https://www.instagram.com/p/DM5oZiesAfL/",
      imageUrl: `/ourGoodNews/cars.png`,
      flex: 5,
    },
  ];

  // Function to determine height class based on item ID
  const getHeightClass = (id: number) => {
    // Assign different height classes based on item ID
    switch (id % 7) {
      case 0:
        return "h-[150px]"; // Small
      case 1:
        return "h-[200px]"; // Medium-small
      case 2:
        return "h-[250px]"; // Medium
      case 3:
        return "h-[300px]"; // Medium-large
      case 4:
        return "h-[350px]";
      case 5:
        return "h-[450px]"; // Large
      case 6:
        return "h-[600px]"; // Large
      default:
        return "h-[200px]";
    }
  };

  // Define the type for news items
  type NewsItem = {
    id: number;
    url: string;
    imageUrl: string;
    flex: number;
  };

  // Distribute items into columns based on screen size
  const distributeItemsIntoColumns = () => {
    // Create arrays for each column with proper typing
    const columns: {
      xs: NewsItem[][];
      sm: NewsItem[][];
      md: NewsItem[][];
      lg: NewsItem[][];
    } = {
      xs: [newsItems], // 1 column for xs
      sm: [[] as NewsItem[], [] as NewsItem[]], // 2 columns for sm
      md: [[] as NewsItem[], [] as NewsItem[], [] as NewsItem[]], // 3 columns for md
      lg: [
        [] as NewsItem[],
        [] as NewsItem[],
        [] as NewsItem[],
        [] as NewsItem[],
      ], // 4 columns for lg
    };

    // Distribute items into columns
    newsItems.forEach((item, index) => {
      // For small screens (2 columns)
      columns.sm[index % 2].push(item);

      // For medium screens (3 columns)
      columns.md[index % 3].push(item);

      // For large screens (4 columns)
      columns.lg[index % 4].push(item);
    });

    return columns;
  };

  const columns = distributeItemsIntoColumns();

  return (
    <section className="py-16 bg-cream lg:px-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-5xl font-bold mb-10 text-center ${
            isRTL ? "font-arabic-header" : "font-english-header"
          }`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {t("title")}
        </motion.h2>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="h-[600px] overflow-y-scroll scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            willChange: "scroll-position",
          }}
        >
          <div className="block md:hidden">
            {/* 2 column layout for sm screens */}
            <div className="flex gap-4">
              {columns.sm.map((column, colIndex) => (
                <div key={colIndex} className="flex-1 flex flex-col gap-4">
                  {column.map((item: any) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      className={`w-full relative bg-gray-100 border border-gray-300 rounded-lg overflow-hidden transition-transform duration-150 ${getHeightClass(
                        item.flex
                      )}`}
                    >
                      <img
                        src={item.imageUrl}
                        alt={`News item ${item.id}`}
                        className="w-full h-full object-cove absolute inset-0"
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block ">
            {/* 3 column layout for md screens */}
            <div className="flex gap-4">
              {columns.md.map((column, colIndex) => (
                <div key={colIndex} className="flex-1 flex flex-col gap-4">
                  {column.map((item: any) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      className={`w-full relative bg-gray-100 border border-gray-300 rounded-lg overflow-hidden transition-transform duration-150 ${getHeightClass(
                        item.flex
                      )}`}
                    >
                      <img
                        src={item.imageUrl}
                        alt={`News item ${item.id}`}
                        className="w-full h-full object-cove absolute inset-0"
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 4 column layout for lg screens */}
          {/* <div className="hidden lg:block">
            <div className="flex gap-4">
              {columns.lg.map((column, colIndex) => (
                <div key={colIndex} className="flex-1 flex flex-col gap-4">
                  {column.map((item: any) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      className={`w-full bg-gray-100 border border-gray-300 rounded-lg overflow-hidden transition-transform duration-150 ${getHeightClass(
                        item.flex
                      )}`}
                    >
                      <img
                        src={item.imageUrl}
                        alt={`News item ${item.id}`}
                        className="w-full h-full object-cove absolute inset-0"
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div> */}

          {/* Duplicated items for seamless scrolling */}
          {/* 1 column layout for xs screens (duplicated) */}
          {/* <div className="block sm:hidden mt-4">
            <div className="flex flex-col gap-4">
              {newsItems.map((item) => (
                <Link
                  key={`dup-${item.id}`}
                  href={item.url}
                  className={`w-full bg-gray-100 border border-gray-300 rounded-lg overflow-hidden transition-transform duration-150 ${getHeightClass(
                    item.flex
                  )}`}
                >
                  <img
                    src={item.imageUrl}
                    alt={`News item ${item.id}`}
                    className="w-full h-full object-cove absolute inset-0"
                  />
                </Link>
              ))}
            </div>
          </div> */}

          <div className=" md:hidden mt-4">
            {/* 2 column layout for sm screens (duplicated) */}
            <div className="flex gap-4">
              {columns.sm.map((column, colIndex) => (
                <div
                  key={`dup-${colIndex}`}
                  className="flex-1 flex flex-col gap-4"
                >
                  {column.map((item: any) => (
                    <Link
                      key={`dup-${item.id}`}
                      href={item.url}
                      className={`w-full relative bg-gray-100 border border-gray-300 rounded-lg overflow-hidden transition-transform duration-150  ${getHeightClass(
                        item.flex
                      )}`}
                    >
                      {/* <div className="h-[200px] bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Image {item.id}</span>
                      </div> */}
                      <img
                        src={item.imageUrl}
                        alt={`News item ${item.id}`}
                        className="w-full h-full object-cove"
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block  mt-4">
            {/* 3 column layout for md screens (duplicated) */}
            <div className="flex gap-4">
              {columns.md.map((column, colIndex) => (
                <div
                  key={`dup-${colIndex}`}
                  className="flex-1 flex flex-col gap-4"
                >
                  {column.map((item: any) => (
                    <Link
                      key={`dup-${item.id}`}
                      href={item.url}
                      className={`w-full relative bg-gray-100 border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${getHeightClass(
                        item.flex
                      )}`}
                    >
                      <img
                        src={item.imageUrl}
                        alt={`News item ${item.id}`}
                        className="w-full h-full object-cove"
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 4 column layout for lg screens (duplicated) */}
          {/* <div className="hidden lg:block mt-4">
            <div className="flex gap-4">
              {columns.lg.map((column, colIndex) => (
                <div
                  key={`dup-${colIndex}`}
                  className="flex-1 flex flex-col gap-4"
                >
                  {column.map((item: any) => (
                    <Link
                      key={`dup-${item.id}`}
                      href={item.url}
                      className={`w-full bg-gray-100 border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${getHeightClass(
                        item.flex
                      )}`}
                    >
                      <img
                        src={item.imageUrl}
                        alt={`News item ${item.id}`}
                        className="w-full h-[200px] object-cove"
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Billion;
