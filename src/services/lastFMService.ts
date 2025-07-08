import { LastFmRecentTracksResponse, LastFmTrack } from "@/types/lastFM";

const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const USERNAME = import.meta.env.VITE_LASTFM_USERNAME;
const BASE_URL = "http://ws.audioscrobbler.com/2.0/";

export const fetchLastTrack = async (): Promise<LastFmTrack | null> => {
  try {
    const params = new URLSearchParams({
      method: "user.getrecenttracks",
      user: USERNAME,
      api_key: API_KEY,
      format: "json",
      limit: "1",
    });

    const response = await fetch(`${BASE_URL}?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: LastFmRecentTracksResponse = await response.json();

    // The API returns 'track' as an array if there are multiple, or a single object if only one.
    // For limit=1, it's usually a single object.
    const track = Array.isArray(data.recenttracks.track)
      ? data.recenttracks.track[0]
      : data.recenttracks.track;

    if (track) {
      return track;
    } else {
      console.warn("No recent track found.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching last track:", error);
    return null;
  }
};
