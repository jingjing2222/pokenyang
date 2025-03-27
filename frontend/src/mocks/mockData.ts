export type PostMockData={
  post_id:number,
  position:{lat:number,lng:number},
  title:string,
  content:string,
  date:string,
  author:string,
  image:string[],
  author_image:string,
  comment:[{comment_id:number,comment:string,create_at:string,user_name:string,user_id:string,post_id:number},]
}

export const mockData=[
  {
    postId:1,
    position:{lat:37.54539128571646,lng:126.95254478706569}
  }
]


export const postMockData:PostMockData[]=[{
  post_id:1,
  position:{lat:37.54539128571646,lng:126.95254478706569},
  title:'프론트원 냥이',
  content:'작성내용은 쏼라 얼쩔~',
  date:'2024.06.22 PM 12:30',
  author:'김아삭김아삭',
  image:['/images/excat.png'],
  author_image:'/images/userimage.svg',
  comment:[{comment_id:1,comment:'wow~',create_at:'2024.06.22 PM 12:30',user_name:'김아삭',user_id:'김아삭김아삭',post_id:1},]
}
]