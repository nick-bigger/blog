import { Link } from "react-router-dom";

import Avatar from "@/assets/avatar.png";
import Stamp1 from "@/assets/stamps/stamp1.gif";
import Stamp2 from "@/assets/stamps/stamp2.jpg";
import Stamp7 from "@/assets/stamps/stamp3.png";
import Stamp4 from "@/assets/stamps/stamp4.jpg";
import Stamp5 from "@/assets/stamps/stamp5.png";
import Stamp6 from "@/assets/stamps/stamp6.gif";
import Stamp3 from "@/assets/stamps/stamp7.gif";
import Stamp8 from "@/assets/stamps/stamp8.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Welcome = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>welcome !</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="float-left mr-4 block h-fit w-fit border border-primary">
            <img src={Avatar} className="w-[96px]" />
          </div>
          <p className="leading-relaxed">
            hey there ! i'm nick. i was inspired by all the cool websites over
            on the{" "}
            <a className="underline" href="https://indieweb.org">
              IndieWeb
            </a>{" "}
            , so i decided to make this website to be my own little slice of the
            internet. i want this mostly to be a place for fun, and also
            somewhere to put all the random things i've created.
          </p>
          <p className="mb-4 leading-relaxed">
            more specifically, this website is a place for me to dump content
            without the pressure of any of it needing to be good.
          </p>
          <p className="mb-4 leading-relaxed">
            here, i am allowed to be bad at stuff :)
          </p>
          <p className="mb-4 leading-relaxed">
            this way, i get to make a repo of my content without fear; you get
            to enjoy the process; and, together, we can work through our fear of
            being bad as really it's just getting in the way of us being good.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>My Stamp Collection</CardTitle>
        </CardHeader>
        <CardContent>
          {/* @ts-expect-error Marquee is deprecated, but the custom versions just don't work. */}
          <marquee className="flex h-[50px] gap-2 md:min-h-[60px]">
            <img src={Stamp1} />
            <img src={Stamp2} />
            <img src={Stamp3} />
            <img src={Stamp4} />
            <img src={Stamp5} />
            <img src={Stamp6} />
            <img src={Stamp7} />
            <img src={Stamp8} />
            {/* @ts-expect-error Marquee is deprecated, but the custom versions just don't work. */}
          </marquee>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>A Little About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-2xl">me:</h3>
              <ul className="ml-4 list-disc">
                <li>name: nick</li>
                <li>birthday: 9/2</li>
                <li>sign: virgo</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-2xl">favorites:</h3>
              <ul className="ml-4 list-disc">
                <li>food: ramen</li>
                <li>color: green</li>
                <li>reading books</li>
                <li>trying new restauraunts</li>
                <li>skateboarding</li>
              </ul>
            </div>
          </div>
          <h3 className="mb-2 mt-4 text-2xl">fun facts:</h3>
          <ul className="mb-4 ml-4 list-disc">
            <li>i almost died from a trip to the water park</li>
            <li>i pierced my tongue to win a race</li>
            <li>test</li>
          </ul>
          <Link to="about">
            <p className="animate-color-wave">→ click here to learn more !</p>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};
