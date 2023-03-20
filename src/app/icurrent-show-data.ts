export interface ICurrentShow {
  // name
  name: string,
  // language
  language: string,
  // genres
  genres: Array<string>,
  // image
  image: {
    medium: string,
  }
  // summary
  summary: string
}