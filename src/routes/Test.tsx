import React from "react";

import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { Poem } from "@/components/Poem";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Test = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <div className="flex">
        <div className="flex flex-col gap-16 py-24 pl-16">
          <div className="flex gap-24">
            <button
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
              className={`font-mono ${!api?.canScrollPrev() ? "cursor-default text-gray-500" : "cursor-pointer text-black"}`}
            >
              PREV
            </button>
            <button
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
              className={`font-mono ${!api?.canScrollNext() ? "cursor-default text-gray-500" : "cursor-pointer text-black"}`}
            >
              NEXT
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {[1, 2, 3].map((item, idx) => (
              <div
                className={`${current === idx + 1 ? "opacity-100" : "opacity-40"}`}
                key={idx}
              >
                <svg height="10" width="10" xmlns="http://www.w3.org/2000/svg">
                  <circle r="5" cx="5" cy="5" fill="grey" />
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <Carousel
            orientation="vertical"
            setApi={setApi}
            plugins={[
              WheelGesturesPlugin({
                forceWheelAxis: "y",
                target: document.documentElement,
              }),
            ]}
          >
            <CarouselContent className="-mt-1 h-screen">
              <CarouselItem className="pt-1">
                <Poem>
                  <p className="pb-32 font-mono uppercase">her</p>
                  <p>
                    i refuse to negotiate with the universe on less than certain
                    terms
                  </p>
                  <p>i reject a connection that is less than perfect</p>
                  <p>i will not be rocked by forces explained</p>
                  <p className="normal-case italic">
                    my heart will beat for Her or cease entirely
                  </p>
                </Poem>
              </CarouselItem>
              <CarouselItem className="pt-1">
                <Poem>
                  <p className="pb-32 font-mono uppercase">
                    i can't make you stay
                  </p>
                  <p>i can't make you stay</p>
                  <p>but</p>
                  <p>i will make life so achingly beautiful</p>
                  <p>that you could never bear to leave it</p>
                </Poem>
              </CarouselItem>
              <CarouselItem className="pt-1">
                <Poem>
                  <p className="pb-32 font-mono uppercase">in my dreams</p>
                  <p>in my dreams, we kiss</p>
                  <p>it seems a day is too short</p>
                  <p>to taste you fully</p>
                </Poem>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center">
        <p className="font-mono text-2xl italic">fin</p>
      </div>
    </div>
  );
};
