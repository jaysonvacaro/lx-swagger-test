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
   * Retrieves the details of an existing user.
   * Supply the unique user ID from either and receive corresponding user details.
   */
  @Get()
  public async getSortedWords(
    @Query() sentence: string
  ): Promise<Sortword> {
    return new SortwordService().get(sentence);
  }
}
