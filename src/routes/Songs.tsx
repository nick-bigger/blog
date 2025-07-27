import { Helmet } from "react-helmet";

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
        <title>nick's website | songs</title>
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
        <CardContent className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <p>no songs yet !!</p>
        </CardContent>
      </Card>
    </div>
  );
};
