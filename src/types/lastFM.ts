export interface LastFmTrack {
  artist: {
    "#text": string;
  };
  name: string;
  album: {
    "#text": string;
  };
  image: Array<{
    "#text": string;
    size: "small" | "medium" | "large" | "extralarge";
  }>;
  date?: {
    // 'nowplaying' tracks might not have a date
    uts: string;
    "#text": string;
  };
  "@attr"?: {
    // For 'nowplaying' tracks
    nowplaying: string;
  };
}

export interface LastFmRecentTracksResponse {
  recenttracks: {
    track: LastFmTrack | LastFmTrack[];
    "@attr": {
      user: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}
