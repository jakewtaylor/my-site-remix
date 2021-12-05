export type Track = {
  album_art: string;
  album_name: string;
  artist_name: string;
  track_name: string;
};

type Empty = {};

const hasTrack = (t: Track | Empty): t is Track =>
  t.hasOwnProperty('album_art');

export const loadTrack = async (): Promise<Track | null> => {
  const request = await fetch('https://jaketaylor.co/api/track');
  const res: Track | Empty = await request.json();

  return hasTrack(res) ? res : null;
};
