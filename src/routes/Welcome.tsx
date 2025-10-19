import { Helmet } from "react-helmet";

import AvatarGif from "@/assets/avatar.gif";
import Stamp1 from "@/assets/stamps/stamp1.gif";
import Stamp2 from "@/assets/stamps/stamp2.jpg";
import Stamp7 from "@/assets/stamps/stamp3.png";
import Stamp4 from "@/assets/stamps/stamp4.jpg";
import Stamp5 from "@/assets/stamps/stamp5.png";
import Stamp6 from "@/assets/stamps/stamp6.gif";
import Stamp3 from "@/assets/stamps/stamp7.gif";
import Stamp8 from "@/assets/stamps/stamp8.png";
import { Code, H1, Link as TextLink } from "@/components/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Welcome = () => {
  return (
    <>
      <Helmet>
        <title>nick's spot | welcome</title>
      </Helmet>
      <Card>
        <CardHeader className="flex items-center">
          <H1 className="animate-pulse text-4xl font-normal tracking-wide text-primary">
            welcome !
          </H1>
        </CardHeader>
        <CardContent>
          <div className="float-left mr-4 block h-fit w-fit overflow-hidden rounded-sm border border-primary">
            <img src={AvatarGif} className="w-[150px]" alt="user avatar GIF" />
          </div>
          <p className="mb-4 leading-relaxed">
            hey there ! i'm nick. i was inspired by all the cool websites over
            on the{" "}
            <TextLink href="https://indieweb.org" className="text-md">
              IndieWeb
            </TextLink>
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
            <img src={Stamp1} alt="stamp 1" />
            <img src={Stamp2} alt="stamp 2" />
            <img src={Stamp3} alt="stamp 3" />
            <img src={Stamp4} alt="stamp 4" />
            <img src={Stamp5} alt="stamp 5" />
            <img src={Stamp6} alt="stamp 6" />
            <img src={Stamp7} alt="stamp 7" />
            <img src={Stamp8} alt="stamp 8" />
            {/* @ts-expect-error Marquee is deprecated, but the custom versions just don't work. */}
          </marquee>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Trackers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2 grid gap-4 sm:grid-cols-3">
            <div>
              <h3 className="mb-2 text-2xl">reading:</h3>
              <Code>acceptance (Southern Reach Series)</Code>
            </div>
            <div>
              <h3 className="mb-2 text-2xl">last watched:</h3>
              <Code>tron: ares</Code>
            </div>
            <div>
              <h3 className="mb-2 text-2xl">last ate at:</h3>
              <Code>chef hong</Code>
            </div>
            <div>
              <h3 className="mb-2 text-2xl">current fav song:</h3>
              <Code>expert in a dying field - the beths</Code>
            </div>
            <div>
              <h3 className="mb-2 text-2xl">new skillz:</h3>
              <Code>barista</Code>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
