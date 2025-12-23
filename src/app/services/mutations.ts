import { useMutation } from "@tanstack/react-query";
import { fetchBooks } from "./hattyPotter.api";

function useBooksMutation() {
  return useMutation({
    mutationFn: fetchBooks,
    onError(error, variables, onMutateResult, context) {},
    onMutate() {},
    onSettled(data, error, variables, onMutateResult, context) {},
  });
}

export { useBooksMutation };
