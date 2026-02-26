export interface Genre {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  pivot: {
    movie_id: number;
    genre_id: number;
  };
}
