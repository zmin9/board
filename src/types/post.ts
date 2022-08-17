export interface PostType {
  time: number,
  title: string,
  content: string,
  email: string
}

export interface PostTypeWithId extends PostType {
  id: string;
}
