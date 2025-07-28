import { useState } from "react";

import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { Helmet } from "react-helmet";

import CDGif from "@/assets/cd.gif";
import CDStatic from "@/assets/cd.png";
import { H1, Large, Small } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

interface Song {
  id: number;
  title: string;
  length: string;
}

const songsData: Song[] = [
  { id: 1, title: "Echoes of the Past", length: "3:12" },
  { id: 2, title: "Midnight Synthwave", length: "2:34" },
  { id: 3, title: "Pixelated Dreams", length: "2:52" },
  { id: 4, title: "Glitch in the Matrix", length: "4:01" },
  { id: 5, title: "Circuitry Serenade", length: "3:50" },
  { id: 6, title: "Neon Horizon", length: "3:10" },
];

export const Songs = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsData[0]);

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
        <CardContent className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          <div className="mx-auto flex w-full flex-col justify-center rounded-lg border-2 border-border bg-muted p-6 sm:max-w-[400px]">
            <img
              src={isPlaying ? CDGif : CDStatic}
              alt="Pixel Art CD"
              className="my-4"
            />
            <div className="mb-2 flex flex-col">
              <Large className="text-xl">{currentSong.title}</Large>
              <Small className="text-md text-muted-foreground">
                Conifer Crown
              </Small>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-center gap-2">
              <Button variant="ghost">
                <SkipBack fill="currentColor" />
              </Button>
              <Button
                className="rounded-full bg-foreground"
                onClick={() => setIsPlaying((prevValue) => !prevValue)}
              >
                {isPlaying ? (
                  <Pause fill="currentColor" />
                ) : (
                  <Play fill="currentColor" />
                )}
              </Button>
              <Button variant="ghost">
                <SkipForward fill="currentColor" />
              </Button>
            </div>
          </div>
          <div className="w-full flex-grow md:w-auto">
            <ol className="list-none space-y-2">
              {songsData.map((song) => (
                <li
                  key={song.id}
                  onClick={() => {
                    setCurrentSong(song);
                    setIsPlaying(false);
                  }}
                  className="flex cursor-pointer items-center justify-between rounded-sm border-2 border-foreground bg-muted p-1 transition-all duration-300 hover:scale-[1.02] hover:bg-opacity-90"
                >
                  <div
                    className={`flex flex-1 justify-between bg-foreground px-4 py-2 text-background ${currentSong.id === song.id ? "bg-primary text-primary-foreground" : ""}`}
                  >
                    <div>
                      <Small>1232342</Small>
                      <Small>123</Small>
                    </div>
                    <h3>{song.title}</h3>
                    <h3>{song.length}</h3>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
