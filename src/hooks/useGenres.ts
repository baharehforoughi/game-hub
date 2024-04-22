import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// Get data from the server:
// const useGenres = () => useData<Genre>("/genres");

//Get data from the genres.ts
//Minimize the impact of these change on the consumers of this hook.
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
