import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchLastTrack } from "@/services/lastFMService";

import { WaveForm } from "./WaveForm";

export const NowPlaying = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const {
    data: lastTrack,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["lastFmTrack"],
    queryFn: fetchLastTrack,
    refetchInterval: 30000,
  });

  // This is gross but necessary because Tanstack removed their callbacks.
  useEffect(() => {
    if (lastTrack && !isVisible) {
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }

    if (isError && error) {
      console.error("Failed to load current song:", error);
    }
  }, [lastTrack, isError, error, isVisible]);

  if (!lastTrack || isLoading || isError) {
    return null;
  }

  const albumArt = lastTrack?.image.find(
    (img) => img.size === "medium" || img.size === "small",
  );
  const isNowPlaying = lastTrack?.["@attr"]?.nowplaying === "true";

  return (
    <div
      className={`fixed left-1 right-1 flex items-center justify-between rounded-t-lg border-2 border-b-0 border-black bg-white p-2 px-4 transition-transform duration-700 ease-in-out md:left-5 md:clear-right md:max-w-fit md:-translate-x-0 ${isVisible ? "bottom-0 translate-y-0" : "-bottom-full translate-y-full"} `}
    >
      <div className="mr-8 flex flex-col text-black">
        <p className="leading-tight">
          {isNowPlaying ? "Listening to:" : "Last Listened:"}
        </p>
        {isNowPlaying || isFetching ? <WaveForm /> : null}
      </div>
      <div className="flex items-center">
        {albumArt && albumArt["#text"] ? (
          <img
            src={albumArt["#text"]}
            alt={`${lastTrack.album["#text"]} album art`}
            className="mr-2 h-10 w-10 rounded-sm object-cover"
          />
        ) : (
          <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-sm bg-gray-200 text-xs text-gray-500">
            No Art
          </div>
        )}
        <div className="flex flex-col">
          <p className="text-md max-w-[150px] truncate leading-tight text-black">
            {lastTrack.name}
          </p>
          <p className="text-sm leading-tight text-black">
            {lastTrack.artist["#text"]}
          </p>
        </div>
      </div>
    </div>
  );
};
