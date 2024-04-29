export interface Article {
  id: number;
  description: string,
  title: string
}

export interface Media {
  url: string,
  mimetype: string,
  preview_img: string,
  duration: number
}

export interface Audio {
  id: number,
  name: string,
  title: string,
  icon: string,
  media: Media,
  paid: boolean
}