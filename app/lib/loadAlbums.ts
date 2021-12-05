import { shuffle } from './shuffle';

export type Album = {
  name: string;
  artist: string;
  link: string;
  image: string;
};

export type AlbumsResponse = {
  current_page: number;
  last_page: number;
  data: Album[];
  total: number;
};

export const loadAlbums = async (page = 1): Promise<AlbumsResponse> => {
  const request = await fetch(`https://jaketaylor.co/api/albums?page=${page}`);
  const res: AlbumsResponse = await request.json();

  return res;
};

export const loadAllAlbums = async (): Promise<Album[]> => {
  const firstPage = await loadAlbums(1);
  const albums = firstPage.data;

  for (let i = 2; i <= firstPage.last_page; i++) {
    const nextPage = await loadAlbums(i);

    albums.push(...nextPage.data);
  }

  return shuffle(albums);
};
