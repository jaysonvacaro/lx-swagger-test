import {
  Controller,
  Get,
  Query,
  Route,
} from "tsoa";
import { Reverseword } from "./reverseword";
import { ReversewordService } from "./reversewordService";

@Route("reverse-words")
export class ReverseWordsController extends Controller {
  /**
   *
   * @summary Reverses the letters of each word in a sentence
   * 
   * @param {string} words to be reversed
   */
  @Get()
  public async getReversedWords(
    @Query() sentence: string
  ): Promise<Reverseword> {
    return new ReversewordService().get(sentence);
  }
}