export interface BookType {
  cover: string;
  description: string;
  index: number;
  number: number;
  originalTitle: string;
  pages: number;
  releaseDate: string;
  title: string;
}

export interface Character {
  fullName: string
  nickname: string
  hogwartsHouse: string
  interpretedBy: string
  children: string[]
  image: string
  birthdate: string
}

export interface House {
  house: string
  emoji: string
  founder: string
  colors: string[]
  animal: string
}

export interface Spell {
  spell: string
  use: string
}