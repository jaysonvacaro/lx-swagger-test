import {
  Controller,
  Get,
  Query,
  Route,
} from "tsoa";
import { Sortword } from "./sortword";
import { SortwordService } from "./sortwordService";

@Route("sort-words")
export class SortWordsController extends Controller {
  /**
   *
   * @summary Sorts the letters of each word in a sentence.
   * 
   * @param {string} words to be sort
   */
  @Get()
  public async getSortedWords(
    @Query() sentence: string
  ): Promise<Sortword> {
    return new SortwordService().get(sentence);
  }
}
