import { useState } from "react";

import { AccordionItem } from "@radix-ui/react-accordion";
import {
  Maximize2,
  Minimize2,
  Pause,
  Play,
  Share,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";

import CDGif from "@/assets/cd.gif";
import CDStatic from "@/assets/cd.png";
import { H1, H4, Large, P, Small } from "@/components/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { songs } from "@/data/songs";

export const Songs = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [lyricsExpanded, setLyricsExpanded] = useState(false);

  const getStableTranslateX = (id: number) => {
    const seed = id * 73; // Multiply by a prime number for better distribution.
    const offset = (seed % 21) - 10; // Result will be between -10 and +10.
    return offset;
  };

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
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="yes">
              <AccordionTrigger className="mb-4 rounded-sm border-2 border-border bg-muted p-4">
                Change the song
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-grow flex-col justify-between">
                  <ol className="list-none space-y-1">
                    {songs.map((song) => (
                      <li
                        key={song.id}
                        onClick={() => {
                          setCurrentSong(song);
                          setIsPlaying(false);
                        }}
                        className="flex cursor-pointer items-center justify-between rounded-sm border-2 border-foreground bg-muted p-1 transition-all duration-300"
                      >
                        <div
                          className={`flex flex-1 justify-between bg-foreground px-4 py-2 text-background ${currentSong.id === song.id ? "bg-primary text-primary-foreground" : ""}`}
                        >
                          <h3>{song.title}</h3>
                          <h3>3:12</h3>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex flex-wrap items-start gap-4">
            <div className="flex max-w-[400px] flex-1 flex-col justify-center rounded-sm border-2 border-border bg-muted p-6">
              <div className="mb-4 flex items-center justify-between">
                <H4 className="tracking-normal">CD Player</H4>
              </div>
              <img
                src={isPlaying ? CDGif : CDStatic}
                alt="Pixel Art CD"
                className="mx-auto my-4 mb-8 max-w-[300px]"
              />
              <div className="mb-2 flex flex-col">
                <Large className="text-xl">{currentSong.title}</Large>
                <Small className="text-md text-muted-foreground">
                  Conifer Crown
                </Small>
              </div>
              <hr className="mb-4" />
              <div className="flex justify-center gap-2">
                <Button variant="ghost" className="h-14 w-14 rounded-full p-0">
                  <SkipBack fill="currentColor" />
                </Button>
                <Button
                  className="h-14 w-14 rounded-full bg-foreground p-0"
                  onClick={() => setIsPlaying((prevValue) => !prevValue)}
                >
                  {isPlaying ? (
                    <Pause fill="currentColor" />
                  ) : (
                    <Play fill="currentColor" />
                  )}
                </Button>
                <Button variant="ghost" className="h-14 w-14 rounded-full p-0">
                  <SkipForward fill="currentColor" />
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col rounded-sm border-2 border-border bg-muted p-6 sm:min-w-[400px]">
              <div className="mb-8 flex items-center justify-between">
                <H4 className="tracking-normal">Lyrics</H4>
                <div className="flex gap-2 align-middle">
                  <Button
                    onClick={async () => {
                      const shareData = {
                        title: currentSong.title,
                        text: currentSong.lyrics,
                        url: "https://conifercrown.com/#/songs",
                      };

                      await navigator.share(shareData);
                    }}
                    variant="secondary"
                    size="icon"
                    className="size-8 rounded-full"
                  >
                    <Share className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => setLyricsExpanded((prevValue) => !prevValue)}
                    variant="secondary"
                    size="icon"
                    className="size-8 rounded-full"
                  >
                    {lyricsExpanded ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div
                className={
                  lyricsExpanded ? "" : "max-h-[400px] overflow-scroll"
                }
              >
                <Markdown
                  components={{
                    p(props) {
                      return (
                        <P
                          className="mb-4 whitespace-pre-wrap text-xl"
                          {...props}
                        />
                      );
                    },
                  }}
                >
                  {currentSong.lyrics}
                </Markdown>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
