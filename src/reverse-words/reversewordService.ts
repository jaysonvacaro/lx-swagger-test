import { Reverseword } from "./reverseword";

export class ReversewordService {
  public get(sentence: string): Reverseword {

  	const splittedWords:string[] = sentence.split(" ");

  	const result = splittedWords.map(word => {

  		let splittedWord:string[] = word.split("");
  		let reversedCharacter:string[] = splittedWord
	          .filter(e => !e.match(/^([!,?,\,,\.]+)$/))
	          .reverse();

	    let specCharacterIndexes: Array<any> = this.getSpecCharacterIndexes(splittedWord);

	    return this.insertSpecCharacters(specCharacterIndexes, reversedCharacter);
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

  private insertSpecCharacters(specCharacters: Array<any>, reversedCharacters:string[]) {

  	specCharacters.forEach(item => {
		reversedCharacters.splice(item.index, 0, item.value);
	});

	return reversedCharacters.join("");
  }
}
