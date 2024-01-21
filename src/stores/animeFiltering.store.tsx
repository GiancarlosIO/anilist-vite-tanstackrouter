import { create } from 'zustand';

type TState = {
  search?: string;
  genres: string[];
  seasonYear?: number;
  season?: string;
  format: string[];
};

type TActions = {
  setSearch(value: string | undefined): void;
  setGenres(genres: string[]): void;
  addGenre(genres: string): void;
  removeGenre(genres: string): void;
  setSeasonYear(year: number | undefined): void;
  setSeason(season: string | undefined): void;
  setFormat(formats: string[]): void;
  addFormat(format: string): void;
  removeFormat(format: string): void;
};

export const useAnimeFileringStore = create<TState & TActions>((set) => {
  return {
    search: undefined,
    genres: [],
    seasonYear: undefined,
    season: undefined,
    format: [],
    setSearch: (search) => set(() => ({ search })),
    setGenres: (genres) => set(() => ({ genres })),
    addGenre: (newGenre) =>
      set((state) => ({ genres: [...state.genres, newGenre] })),
    removeGenre: (newGenre) =>
      set((state) => ({ genres: state.genres.filter((f) => f !== newGenre) })),
    setSeasonYear: (year) => set(() => ({ seasonYear: year })),
    setSeason: (season) => set(() => ({ season })),
    setFormat: (format) => set(() => ({ format })),
    addFormat: (newFormat) =>
      set((state) => ({ format: [...state.format, newFormat] })),
    removeFormat: (newFormat) =>
      set((state) => ({ format: state.format.filter((f) => f !== newFormat) })),
  };
});
