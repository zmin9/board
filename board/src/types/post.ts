export interface PostType {
  time: number,
  title: string,
  content: string,
  name: string,
  email: string
}

export interface PostTypeWithId extends PostType {
  id: string;
}
