import { useEffect, useState } from "react";

import { fetchLastTrack } from "@/services/lastFMService";
import { LastFmTrack } from "@/types/lastFM";

import { WaveForm } from "./WaveForm";

export const NowPlaying = () => {
  const [lastTrack, setLastTrack] = useState<LastFmTrack | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const getTrack = async () => {
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        const track = await fetchLastTrack();
        setLastTrack(track);
      } catch (err) {
        setError("Failed to load current song.");
        console.error(err);
      } finally {
        setLoading(false);
        // Once data is loaded (or an error occurs), trigger visibility.
        // We add a small delay to ensure the component is rendered
        // before the transition class is applied.
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }
    };

    getTrack();

    // Refresh the track periodically.
    // Last.fm API has rate limits, so don't query too frequently.
    const interval = setInterval(getTrack, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading || error || !lastTrack) {
    return null;
  }

  const albumArt = lastTrack.image.find(
    (img) => img.size === "medium" || img.size === "small",
  );
  const isNowPlaying = lastTrack["@attr"]?.nowplaying === "true";

  return (
    <div
      className={`fixed left-1 right-1 flex items-center justify-between rounded-t-lg border-2 border-b-0 border-black bg-white p-2 px-4 transition-transform duration-700 ease-in-out md:left-5 md:clear-right md:max-w-fit md:-translate-x-0 ${isVisible ? "bottom-0 translate-y-0" : "-bottom-full translate-y-full"} `}
    >
      <div className="mr-8 flex flex-col text-black">
        <p className="leading-tight">
          {isNowPlaying ? "Listening to:" : "Last Listened:"}
        </p>
        <WaveForm />
      </div>
      <div className="flex items-center">
        {" "}
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
