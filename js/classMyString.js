'use strict';

class MyString {
    constructor(str) {
        this.str = str;
    }
    reverse() {
        return this.str.split('').reverse().join('');
    }
    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str) {
        let arrOfWords = str.split(' ');
        const resultArr = [];
        for (let i = 0; i < arrOfWords.length; i++) {
            let letters = arrOfWords[i].split('');
            letters[0] = letters[0].toUpperCase();  
            resultArr.push(letters.join(''));
        }
      return  resultArr.join(' ');
    }
}

let firstString = new MyString('абвгде');
console.log(firstString.reverse());
console.log(firstString.ucFirst('eryuyuiutyt'));
console.log(firstString.ucWords('aueueu aiddu acncnc'));
