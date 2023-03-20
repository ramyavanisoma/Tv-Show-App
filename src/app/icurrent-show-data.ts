export interface ICurrentShowData {
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
  summary: string,
  // rating
  rating:{
    average:number
  },
  //official site
  officialSite:string
}