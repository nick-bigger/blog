import { Helmet } from "react-helmet";

import CD from "@/assets/cd.png";
import { H1 } from "@/components/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export const Songs = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Helmet>
        <title>nick's spot | songs</title>
      </Helmet>
      <Card className="border-none">
        <CardHeader>
          <H1 className="text-3xl font-normal uppercase tracking-normal text-primary lg:text-3xl">
            Songs
          </H1>
          <CardDescription>
            lyrics for songs that i've written. hopefully i can figure out how
            to attach the audio at some point !
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-10">
          <div className="flex h-[300px] w-[300px] items-center justify-center rounded-md bg-muted">
            <img src={CD} className="h-[250px] w-[250px]" />
          </div>
          <ol>
            <li className="text-xl">1. song 1</li>
            <li className="text-xl">2. song 2</li>
            <li className="text-xl">3. song 3</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};
