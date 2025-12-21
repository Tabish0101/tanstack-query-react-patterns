import type { 
    BookType, 
    Character, 
    House, 
    Language, 
    Spell 
} from "../../types/global.types";
import { fetcher } from "../../utils/apiClients";


async function fetchBooks(lang?: Language) {
    return fetcher<BookType[]>('books', lang);
}

async function fetchCharacters(lang?: Language) {
    return fetcher<Character[]>('characters', lang);
}

async function fetchHouses(lang?: Language) {
    return fetcher<House[]>('houses', lang);
}

async function fetchSpells(lang?: Language) {
    return fetcher<Spell[]>('spells', lang);
}


export { 
    fetchBooks,
    fetchCharacters,
    fetchHouses,
    fetchSpells
 }