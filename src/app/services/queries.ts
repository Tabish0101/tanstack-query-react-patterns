import { useQuery } from "@tanstack/react-query";
import {
  fetchBooks,
  fetchCharacters,
  fetchHouses,
  fetchSpells,
} from "./hattyPotter.api";

function useBooks() {
  return useQuery({
    queryKey: ["books"],
    queryFn: () => fetchBooks(),
    refetchOnWindowFocus: false,
  });
}

function useCharacters() {
  return useQuery({
    queryKey: ["characters"],
    queryFn: () => fetchCharacters(),
    refetchOnWindowFocus: false,
  });
}

function useHouses() {
  return useQuery({
    queryKey: ["houses"],
    queryFn: () => fetchHouses(),
  });
}

function useSpells() {
  return useQuery({
    queryKey: ["spells"],
    queryFn: () => fetchSpells(),
  });
}

export { useBooks, useCharacters, useHouses, useSpells };
