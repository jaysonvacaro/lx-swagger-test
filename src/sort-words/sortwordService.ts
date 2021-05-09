import { Sortword } from "./sortword";

export class SortwordService {
  public get(sentence: string): Sortword {

  	const splittedWords:string[] = sentence.split(" ");

  	const result = splittedWords.map(word => {

  		let splittedWord:string[] = word.split("");
  		let sortedChars:string[] = splittedWord
	          .filter(e => !e.match(/^([!,?,\,,\.]+)$/))
	          .sort(function (a, b) {
	              return a.toLowerCase().localeCompare(b.toLowerCase());
	          });

	    let specCharacterIndexes: Array<any> = this.getSpecCharacterIndexes(splittedWord);

	    console.log(sortedChars);
	    console.log(specCharacterIndexes);

	    return this.insertSpecCharacters(specCharacterIndexes, sortedChars);
  	});

  	sentence = result.join("");

    return {
    	sentence
    };
  }

  private getSpecCharacterIndexes(splittedWord: string[]) {
  	
  	let specChar: Array<Object> = [];
    
    splittedWord.forEach((a, i) => {
		if(a.match(/^([!,?,\,,\.]+)$/)) {
			specChar.push({ index: i, value: a });
		} 
    });

    return specChar;
  }

  private insertSpecCharacters(specCharacters: Array<any>, sortedCharacters:string[]) {

  	specCharacters.forEach(item => {
		sortedCharacters.splice(item.index, 0, item.value);
	});

	return sortedCharacters.join("");
  }
}
