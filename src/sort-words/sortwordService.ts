import { Sortword } from "./sortword";

export type SortwordParams = Pick<Sortword, "sentence">;

export class SortwordService {
  public get(sentence: string): Sortword {

  	sentence = "Append String";





    return {
    	sentence
    };
  }
}
