import { removeEFromNum } from "./combine-cal.js";
import { addSubSigFigsCheck } from "./dalton-cal.js";
//"3*4(+689*799)78(++7)".match(/^(\+?\-?\d+[\+\/\*\.\- \(\)]{1})+(\+?\*?\-?\d+\)?)$/)

// "3*4(-689*799)78(+9-9)".match(/(?<=\()\+?\-?\d+\+?\-?\/?\*?\.?\d+(?=\))/g)
// (2) ["-689*799", "+9-9"]

// "3*4(-689*799)78(+9-9)".match(/\+?\-?\d+\+?\-?\/?\*?\.?\d+(?=\()/g)
// (2) ["3*4", "78"]
// This concept of reporting the proper number of digits in a measurement or a
// calculation is called significant figures8.
// 1. Any nonzero digit is significant.
// 2. Any zeros between nonzero digits (i.e., embedded zeros) are
// significant.
// 3. Zeros at the end of a number without a decimal point (i.e., trailing
// zeros) are not significant; they serve only to put the significant digits
// in the correct positions. However, zeros at the end of any number with
// a decimal point are significant.
// 4. Zeros at the beginning of a decimal number (i.e., leading zeros) are not
// significant; again, they serve only to put the significant digits in the
// correct positions.

// let reg3=/^(\d+[\+\/\*\.\- \(\)]{1})+\d+$/
// undefined
// "759+9+698.78-5".match(reg3)
// (2) ["759+9+698.78-5", "78-", index: 0, input: "759+9+698.78-5", groups: undefined]
// "759+9+698.78-5ytu".match(reg3)
// null
// "759+9+698.78-5".replace(/(?=\+|\-)/," ")
// "759 +9+698.78-5"
// "759+9+698.78-5".replace(/(?=\+|\-)/g," ")
// "759 +9 +698.78 -5"
//check for leading zeros

// ["759", "+9", "+698.78", "-5"].filter(item=>{!item.startsWith("-")})
// []
// ["759", "+9", "+698.78", "-5"].filter(item=>!item.startsWith("-")?Number(item):0)
// (3) ["759", "+9", "+698.78"]0: "759"1: "+9"2: "+698.78"length: 3__proto__: Array(0)
// ["759", "+9", "+698.78", "-5"].filter(item=>{if(!item.startsWith("-"));return Number(item);});
// (4) ["759", "+9", "+698.78", "-5"]0: "759"1: "+9"2: "+698.78"3: "-5"length: 4__proto__: Array(0)
// ["759", "+9", "+698.78", "-5"].filter(item=>{!item.startsWith("-")})
// []
// ["759", "+9", "+698.78"].map(item=>Number(item))
// (3) [759, 9, 698.78]

//carries out division first in a group of numbers to be multiplied and divided
// function DivisionFirst(stringVar) {
//   //stringVar will be of this form:"75*9*678/5"
//   let stringVarRegex = /^(\d+[\+\/\*\.\- \(\)]{1})+\d+$/;
//   let matchArr = stringVar.match(stringVarRegex);

//   let nextEle;
//   //if matchValue is not null
//   if (matchArr) {
//     //get the string that was matched,which will be like this "75*9*678/5"
//     let matchStr = matchArr[0];
//     //put space between the match str "75 *9 *678 /5"
//     let matchStrWithSpace = matchStr.replace(/(?=\+|\-|\*|\/)/g, " ");
//     //split the matchstr where there is space to something like ["759", "*9", "*698","/54"]
//     let array = matchStrWithSpace.split(" ");

//     for (let index = 0; index < array.length; index++) {
//       let currentEle = array[index];
//       let currentEleValue = currentEle;
//       let currentEleSign = "";

//       //get the sign and value of current element
//       if (
//         currentEle.startsWith("+") ||
//         currentEle.startsWith("-") ||
//         currentEle.startsWith("*") ||
//         currentEle.startsWith("/")
//       ) {
//         currentEleSign = currentEle.charAt(0);
//         currentEleValue = currentEle.slice(1);
//       }

//       //get the next element if it is within range
//       if (index < array.length - 1) {
//         nextEle = array[index + 1];
//       }

//       //remove / from thhe start of the next element
//       //divide the current by the next element
//       if (nextEle.startsWith("/")) {
//         let nextEleValue = nextEle.slice(1);
//         let divValue = Number(currentEleValue) / Number(nextEleValue);
//         //restore the sign of the current element
//         divValue = `${currentEleSign}${divValue}`;
//         //replace the current and next element by the result of the division
//         array.splice(index, 2, divValue);
//       }
//     }
//     return array;
//   }
//   return false;
// }

// function addPlus(array) {
//    //array ["759", "+9", "+698.78", "-5"]
//   // let sign="+";
//    let putPlus = array.map(item=>!item.startsWith("+")||!item.startsWith("-")?"+"+item:item)
// }

//do the multiplication
// function multiplyNum(array) {
//   let resultStr = 1;
//   for (let index = 0; index < array.length; index++) {
//     let currentEle = array[index].toString();
//     if (currentEle.startsWith("*")) {
//       currentEle = currentEle.substring(1);
//     }
//     resultStr *= Number(currentEle);
//   }
//   return resultStr;
// }

// //do division and muiltiplication
// function multDividNun(stringVar) {
//   //"+75h+9+698.78-5"
//   let reg3 = /^(\d+[\+\/\*\.\- \(\)]{1})+\d+$/;
//   let matchValue = stringVar.match(reg3);
//   if (matchValue) {
//     let matchStr = matchValue[0];
//     let conStr = matchStr.replace(/(?=\+|\-|\*|\/)/g, " ");
//     let array = conStr.split(" ");
//     for (let index = 0; index < array.length; index++) {
//       var currentEle = array[index];
//       if (currentEle.startsWith("*") || currentEle.startsWith("/")) {
//         currentEle = currentEle.slice(1);
//       }
//       if (index != array.length - 1) {
//         let nextEle = array[index + 1];

//         if (nextEle.startsWith("/")) {
//           let nextEleSlice = nextEle.slice(1);
//           let divValue = Number(currentEle) / Number(nextEleSlice);
//           array.splice(index, 2, divValue);
//         }
//       }
//     }
//     return array;
//     // let result = multiplyNum(array);
//     // return result;
//   }
//   return false;
// }

//multiply only
// function multOnly(array) {
//   //"+75h+9+698.78-5"

//   for (let index = 0; index < array.length; index++) {
//     var currentEle = array[index];
//     let currentEleSign = "";
//     if (
//       currentEle.startsWith("*") ||
//       currentEle.startsWith("/") ||
//       currentEle.startsWith("-") ||
//       currentEle.startsWith("+")
//     ) {
//       currentEleSign += currentEle.charAt(0);
//       console.log(currentEleSign, "uuu");
//       currentEle = currentEle.slice(1);
//     }
//     if (index != array.length - 1) {
//       let nextEle = array[index + 1];

//       if (nextEle.startsWith("*")) {
//         let nextEleSlice = nextEle.slice(1);
//         let divValue = Number(currentEle) * Number(nextEleSlice);
//         divValue = currentEleSign + divValue.toString();
//         array.splice(index, 2, divValue);
//       }
//     }
//   }
//   return array;
// }

//mutiply to finish
// function multOnly2(array) {
//   //"+75h+9+698.78-5"

//   for (let index = 0; index < array.length; index++) {
//     var currentEle = array[index].toString();
//     let currentEleSign = "";
//     if (
//       currentEle.startsWith("*") ||
//       currentEle.startsWith("/") ||
//       currentEle.startsWith("-") ||
//       currentEle.startsWith("+")
//     ) {
//       currentEleSign += currentEle.charAt(0);
//       console.log(currentEleSign, "uuu");
//       currentEle = currentEle.slice(1);
//     }
//     if (index != array.length - 1) {
//       let nextEle = array[index + 1];

//       if (nextEle.startsWith("*")) {
//         let nextEleSlice = nextEle.slice(1);
//         let divValue = Number(currentEle) * Number(nextEleSlice);
//         divValue = currentEleSign + divValue.toString();
//         array.splice(index, 2, divValue);
//       }
//     }
//   }
//   array = array.some((item) => item.startsWith("*")) ? multOnly2(array) : array;

//   return array;
// }

//
//check whether the right and left bracket characters are in correct amoumt
function bracketCharsAgree(str) {
  let rightBracketNumber = str.split("(").length - 1;
  let leftBracketNumber = str.split(")").length - 1;
  if (rightBracketNumber === leftBracketNumber) {
    return true;
  }
  return false;
}
//evaluate brackek
function bracketEvaluator(stringVar) {
  //"3*4(+689*799)78(++7)".match(/^(\+?\-?\d+[\+\/\*\.\- \(\)]{1})+(\+?\*?\-?\d+\)?)$/)

  // "3*4(-689*799)78(+9-9)".match(/(?<=\()\+?\-?\d+\+?\-?\/?\*?\.?\d+(?=\))/g)
  // (2) ["-689*799", "+9-9"]

  // "3*4(-689*799)78(+9-9)".match(/\+?\-?\d+\+?\-?\/?\*?\.?\d+(?=\()/g)
  // (2) ["3*4", "78"]
  //"+75h+9+698.78-5"
  stringVar = stringVar.replace(/\s/g, "");
  let reg3 = /^(\+?\-?\d+[\+\/\*\.\- \(\)]{1})+(\+?\*?\-?\d+\)?)$/; //^(\d+[\+\/\*\.\- \(\)]{1})+\d+$/;
  let matchValue = stringVar.match(reg3);
  if (matchValue) {
    //if stringVar does not contain brackeks,don;t process, return the stringVar like that
    if (!stringVar.includes("(") && !stringVar.includes(")")) {
      return stringVar;

      //discard the stringVar if it contains any of the bracket char but they dont agree
    } else if (!bracketCharsAgree(stringVar)) {
      return false;
    } else {
      //brackets are present and in the right number/proportion, then evaluate the bracket

      //braketReg matches any string that is between () chars
      let insideBracketRegex = /(?<=\()\+?\-?\d+\+?\-?\/?\*?\.?\d+(?=\))/g;

      //matches any string that is outside the bracket
      let outsideBracketRegex = match(/\+?\-?\d+\+?\-?\/?\*?\.?\d+(?=\()/g);

      //array of items inside the brackes as in "3*4(-689*799)78(+9-9)"=  ["-689*799", "+9-9"]
      let insideBracketMatchArr = stringVar.match(insideBracketRegex);

      //array of items outside the brackes as in = "3*4(-689*799)78(+9-9)"= ["3*4", "78"]
      let outBraketMatchArr = stringVar.match(outsideBracketRegex);

      //evaluate items inside brackets and join with preceeding items outside the bracket
      let strWithoutBracket = "";
      for (let index = 0; index < array.insideBracketMatchArr; index++) {
        const bracketitem = array[index];
        let leftBraIndex = bracketitem.indexOf(bracketitem.charAt(0) - 1);
        let strBeforeBracket = stringVar.substring(0, leftBraIndex);
        let braketValue = bordMass(bracketitem).toString();
        strWithoutBracket += `${strBeforeBracket}${braketValue}`;
      }
      return braketValue;
    }
  } else {
    return false;
  }
}

//do division of bodmas
function DividNun(stringVar) {
  //"+75h+9+698.78-5"
  stringVar = stringVar.replace(/\s/g, "");
  let reg3 = /^(\+?\-?\d+[\+\/\*\.\- \(\)]{1})+(\+?\*?\-?\d+\)?)$/; // /^(\d+[\+\/\*\.\- \(\)]{1})+\d+$/;
  let matchValue = stringVar.match(reg3);
  if (matchValue) {
    let matchStr = matchValue[0];
    let conStr = matchStr.replace(/(?=\+|\-|\*|\/)/g, " ");
    let array = conStr.split(" ");
    for (let index = 0; index < array.length; index++) {
      var currentEle = array[index];
      var currEleSign = "";
      if (
        currentEle.startsWith("*") ||
        currentEle.startsWith("/") ||
        currentEle.startsWith("+") ||
        currentEle.startsWith("-")
      ) {
        currEleSign = currentEle.charAt(0);
        currentEle = currentEle.slice(1);
      }
      if (index != array.length - 1) {
        let nextEle = array[index + 1];

        if (nextEle.startsWith("/")) {
          let nextEleSlice = nextEle.slice(1);
          let divValue = Number(currentEle) / Number(nextEleSlice);
          array.splice(index, 2, currEleSign + divValue.toString());
        }
      }
    }
    return array;
  }
}

//do multiplication
function multOnly3(array) {
  //"+75h+9+698.78-5"

  for (let index = 0; index < array.length; index++) {
    var currentEle = array[index];
    let currentEleSign = "";
    if (
      currentEle.startsWith("*") ||
      currentEle.startsWith("/") ||
      currentEle.startsWith("-") ||
      currentEle.startsWith("+")
    ) {
      currentEleSign += currentEle.charAt(0);
      console.log(currentEleSign, "uuu");
      currentEle = currentEle.slice(1);
    }
    if (index != array.length - 1) {
      let nextEle = array[index + 1];

      if (nextEle.startsWith("*")) {
        let nextEleSlice = nextEle.slice(1);
        let divValue = Number(currentEle) * Number(nextEleSlice);
        divValue = currentEleSign + divValue.toString();
        array.splice(index, 2, divValue);
      }
    }
  }
  array = array.some((item) => item.startsWith("*")) ? multOnly3(array) : array;
  return array;
}

//do addition and  subtraction
function AddOrSub(array, operationType = "+") {
  //array ["759", "+9", "+698.78", "-5"]
  let putPlus = array.map((item) =>
    item.startsWith("+") || item.startsWith("-") ? item : "+" + item
  );
  let arrOfStr = putPlus.filter((item) => item.startsWith(operationType));

  if (arrOfStr.length) {
    let arrOfNum = arrOfStr.map((item) => Number(item));
    let addResult = arrOfNum.reduce((acc, currItem) => acc + currItem);
    return addResult;
  }
  return 0;
}

//bring all together
function bordMass(stringVar) {
  //do division first
  let result;
  result = DividNun(stringVar);
  if (result) {
    //do multiplication
    result = multOnly3(result);
    //do addition
    addResult = AddOrSub(result);
    //do subtraction
    subResult = AddOrSub(result, "-");
    let finalResult = addResult + subResult;
    return finalResult;
  }
  let message = "Please check your number and try again";
  return message;
}

// // muiltiplication
// function multOnly(array) {
//   //"+75h+9+698.78-5"
//   let array = conStr.split(" ");
//   for (let index = 0; index < array.length; index++) {
//     var currentEle = array[index];
//     let currentEleSign = "";
//     if (
//       currentEle.startsWith("*") ||
//       currentEle.startsWith("/") ||
//       currentEle.startsWith("-") ||
//       currentEle.startsWith("+")
//     ) {
//       currentEle = currentEle.slice(1);
//       currentEleSign = currentEle.charAt(0);
//     }
//     if (index != array.length - 1) {
//       let nextEle = array[index + 1];

//       if (nextEle.startsWith("*")) {
//         let nextEleSlice = nextEle.slice(1);
//         let divValue = Number(currentEle) * Number(nextEleSlice);
//         divValue += `${currentEleSign}${divValue}`;
//         array.splice(index, 2, divValue);
//       }
//     }
//   }
//   return array;
// }

//   let currentEleValue;
//   let currentEleSign;

//   //get the sign and value of current element
//   if (
//     currentEle.startsWith("+") ||
//     currentEle.startsWith("-") ||
//     currentEle.startsWith("*") ||
//     currentEle.startsWith("/")
//   ) {
//     currentEleValue = currentEle.slice(1);
//     currentEleSign = currentEle.charAt(0);
//   } else {
//     currentEleValue = currentEle.slice(1);
//     currentEleSign = currentEle.charAt(0);
//   }

//   //get the next element if it is within range
//   if (index < array.length - 1) {
//     nextEle = array[index + 1];
//   }

//   //remove / from thhe start of the next element
//   //divide the current by the next element
//   if (nextEle.startsWith("*")) {
//     let nextEleValue = nextEle.slice(1);
//     let divValue = Number(currentEleValue) * Number(nextEleValue);
//     //restore the sign of the current element
//     divValue = `${currentEleSign}${divValue}`;
//     //replace the current and next element by the result of the division
//     array.splice(index, 2, divValue);
//   }
//

function checkTrailingZeros(numString) {
  if (numString.endsWith("0")) {
    return trimString(numString, "0")[2];
  }
  return false;
}

//check whether a number contain zero between non zero digits
function inbetweenZeroChecker(numString) {
  //remove traing zeros if any
  let nontrailingZeroString = trimString(numString, "0")[1];
  //check for the inbetween zeros
  let resultArr = nontrailingZeroString.match(/["0"]+/g);
  if (resultArr) {
    return resultArr.join("").length;
  }

  return false;
}

//to check if a number contains any of the non zero digits 1,2,3,4,5,6,7,9
//return the length/number of non zero digit present in the number or false if no non zero present
//The number to be checked must be passed to the function as a string
function nonZeroDigitChecker(numString) {
  let resultArr = numString.match(/[1-9]+/g);
  if (resultArr) {
    return resultArr.join("").length;
  }
  return false;
}

//get number of significant figures in a number plus work statement
function getSigFigPlusStatement(numString, trimString) {
  if (numString.includes(",")) {
    numString = numString.replace(",", "");
  }
  //numString = numString.replace(",", "");
  let numOfSigFigs;
  let statementSumary = "";
  let statementDetails = ``;
  let numPattern = /(0?)(\.?)(0*)(\d*)(\.?)(\d*)/i;
  let matchNum = numString.match(numPattern);
  if (matchNum) {
    if (matchNum[2] === ".") {
      numOfSigFigs = matchNum[4].length; //number contains decimal point and leading zeros e.g 0.7678,0.00545,0.766776
      statementSumary += `${numString} has ${numOfSigFigs} significant figures<br>`;
      statementDetails += statementSumary + `Reason:<br>`;
      //check for non zero digit
      if (nonZeroDigitChecker(matchNum[4])) {
        statementDetails += `All none zero digits are significant.<br>
        The number has ${nonZeroDigitChecker(
          matchNum[4]
        )} none zero digit.<br>`;
      }
      //check for leading zeros
      if (matchNum[1] !== "" || matchNum[3] !== "") {
        statementDetails += `Any leading or beginning zeros are not significant.<br>
        Leading or beginning zeros are zeros before the first non zero digit.<br>
         The number has ${
           matchNum[1].length + matchNum[3].length
         } leading zeros<br>`;
      }

      //check for inbetween zeros
      if (inbetweenZeroChecker(matchNum[4])) {
        statementDetails += `Zeros between non zero digits are significant<br> The number has ${inbetweenZeroChecker(
          matchNum[4]
        )} zeros between non zero digits.<br>`;
      }
      //check trailing zeros
      if (checkTrailingZeros(matchNum[4])) {
        statementDetails += `All trailing zeros in a number with decimal point are significant.<br>
         The number has ${checkTrailingZeros(matchNum[4])} trailing zeros.<br>`;
      }
    } else if (matchNum[2] === "" && matchNum[5] != ".") {
      numOfSigFigs = trimString(matchNum[4], "0")[0]; //number contains no decimal point may have trailing zeros and sandwiched zeros 45,40000,67,4400078 etc
      statementSumary += `${numString} has ${numOfSigFigs} significant figures.<br>`;
      statementDetails += statementSumary + `Reason:<br>`;
      //check for non zero digit
      if (nonZeroDigitChecker(matchNum[4])) {
        statementDetails += `All none zero digits are significant.<br>
        The number has ${nonZeroDigitChecker(
          matchNum[4]
        )} none zero digit and no decimal point.<br>`;
      }
      //check for inbetween zeros
      if (inbetweenZeroChecker(matchNum[4])) {
        statementDetails += `Zeros between non zero digits are significant<br> The number has ${inbetweenZeroChecker(
          matchNum[4]
        )} zeros between non zero digits.<br>`;
      }
      //check trailing zeros
      if (checkTrailingZeros(matchNum[4])) {
        statementDetails += `All trailing zeros in a number without decimal point are not significant.<br>
       The number has ${checkTrailingZeros(matchNum[4])} trailing zeros.<br>`;
      }
    } else if (matchNum[5] === ".") {
      numOfSigFigs = matchNum[4].length + matchNum[6].length; // #number has decimal point but no leading zeros e.g 45.78900,6.434,
      statementSumary += `${numString} has ${numOfSigFigs} significant figures.<br>`;
      statementDetails += statementSumary + `Reason:<br>`;
      //check for non zero digit
      if (nonZeroDigitChecker(matchNum[4] + matchNum[6])) {
        statementDetails += `All none zero digits are significant.<br>
        The number has ${nonZeroDigitChecker(
          matchNum[4] + matchNum[6]
        )} none zero digit and decimal point.<br>`;
      }
      //check for inbetween zeros
      if (inbetweenZeroChecker(matchNum[4] + matchNum[6])) {
        statementDetails += `Zeros between non zero digits are significant<br> The number has ${inbetweenZeroChecker(
          matchNum[4] + matchNum[6]
        )} zeros between non zero digits.<br>`;
      }

      //check trailing zeros
      if (checkTrailingZeros(matchNum[4] + matchNum[6])) {
        statementDetails += `All trailing zeros in a number with decimal point are significant.<br>
     The number has ${checkTrailingZeros(
       matchNum[4] + matchNum[6]
     )} trailing zeros.<br>`;
      }
    }
    return [numOfSigFigs, statementSumary, statementDetails];
  }
  return false;
}

let sigFigInstruction = `Follow the steps below to transform a number to your desired number of significant figures.<br>
(1) identify the number of significant figures in the original number.<br>
(2) The number of significant figures you want to end up with is well known to you.<br>
(3) if the number of significant figures in the original number will be greater than  number of sigfig  in the new number.<br>
(4) Remove  digits one after the other from the end of the original number until you get to your desired number of sigfigs<br>
(5) The number of digits to be remove will be equal to the difference between (1) and (2) above.<br>
(6) Take note of the first digit that will be removed, if this digit is greater than or equal to five,increase the digit in front of it by one.<br>
(7) if the removed digits from a number occured after the decimal point, the space  occupied by them is removed as well.<br>
(8) However if the removed digit occured before a decimal point,the space occupied by them is replaced by zeros<br>
(9) For numbers written in scientific notation, only the coefficient is used to determine the number of sigfigs.<br><br>
(10)  if the number of significant figures in the original number will be less than  number of sigfig  in the new number.<br>
(11) Right pad the original number by zeros.<br>
(13) The number of zeros to add will be equal to the difference between (1) and (2). <br>
(12) You may have to write a number in scientific notation  before you can achieve your desired number of sigfigs.<br>
`;

//change a number to the indicated number of significant figures plus work statement
function changeNumToGivenSigFigPlusStatement(numString, trimString) {
  if (numString.includes(",")) {
    numString = numString.replace(",", "");
  }
  //numString = numString.replace(",", "");
  let numOfSigFigs;
  let statementSumary = "";
  let statementDetails = "";

  statementDetails = "";

  let numStringArr = numString.split("=");
  numString = numStringArr[0];
  let numStringWithoutDot = numString.replace(".", "");
  let newSigFigNum = Number(numStringArr[1]);
  let newNumString = Number(numString).toPrecision(newSigFigNum);
  newNumString = `${removeEFromNum(newNumString.toString())} `;
  let numPattern = /(0?)(\.?)(0*)(\d*)(\.?)(\d*)/i;
  let matchNum = numString.match(numPattern);
  if (matchNum) {
    if (matchNum[2] === ".") {
      numOfSigFigs = matchNum[4].length; //number contains decimal point and leading zeros e.g 0.7678,0.00545,0.766776
      statementSumary += `${numString} in ${numOfSigFigs} -------> round to ${newNumString} in ${newSigFigNum} significant figures<br>`;
      let sigfigsDiff = numOfSigFigs - newSigFigNum;
      if (numOfSigFigs > newSigFigNum) {
        let droppedDigit = numString.slice(-sigfigsDiff);
        let firstDropped = droppedDigit.charAt(0);
        //let digitInFront = numString.charAt(-(sigfigsDiff + 1));
        let digitInFront = numStringWithoutDot.slice(
          -(sigfigsDiff + 1),
          -sigfigsDiff
        );

        let digitsToStay = numString.slice(0, -sigfigsDiff);
        let formatedNumStr = `${digitsToStay}<span style="color:red">|</span>${droppedDigit}`;
        console.log(digitInFront, "######!!!");

        statementDetails += `${numString} has ${numOfSigFigs} significant figures and is to be rounded to ${newSigFigNum} significant figures.<br>
        So the number of significant figures in the new number will be less than the number of significant figures in the original number.<br>
        Therefore, ${sigfigsDiff} digit/digits(${droppedDigit}) will be removed/dropped from the end of the original number(${formatedNumStr}).<br>`;
        if (Number(firstDropped) >= 5) {
          statementDetails += ` The first digit to be dropped ${firstDropped} is greater than or equal to five, so the digit in front(${digitInFront}) is increased by one.<br>
          Since all the dropped  digit/digits are after the decimal point, the space which the dropped digit occupied are not replaced by zeros.<br>
          Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}.<br>`;
        } else {
          statementDetails += `The first digit to be dropped(${firstDropped}) is less than five, so the digit in front${digitInFront} is not increased by one<br>
          Since all the  dropped  digit/digits are after the decimal point, the space which the dropped digit/digits occupied are not replaced by zeros.<br>
          Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}<br>`;
        }
      } else if (numOfSigFigs < newSigFigNum) {
        statementDetails += `${numString} has ${numOfSigFigs} significant figures and is to be rounded to ${newSigFigNum} significant figures.<br>
        So the number of significant figures in the new number will be more than the number of significant figures in the original number.<br>
        Therefore, the original number will be right padded with zero/zeros.<br>
        The number of zero/zeros to be added will be equal to the difference in the number of significant figures between the old and new number.<br>
        This difference is ${Math.abs(sigfigsDiff)}.<br>
        Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}.<br>`;
      } else {
        //the number of significant figures in the original number is equal to the number of sigfig in the new number
        statementDetails += `${numString} has ${numOfSigFigs} significant figures and is to be rounded to ${newSigFigNum} significant figures.<br>
        So the number of significant figures in the new number will be equal to the number of significant figures in the original number.<br>
        Therefore, the original number will not be altered.<br>
        Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}<br>`;
      }
    } else if (matchNum[2] === "" && matchNum[5] != ".") {
      numOfSigFigs = trimString(matchNum[4], "0")[0]; //number contains no decimal point may have trailing zeros and sandwiched zeros 45,40000,67,4400078 etc
      statementSumary += `${numString} in ${numOfSigFigs} -------> ${newNumString} to ${newSigFigNum} significant figures<br>`;
      let sigfigsDiff = numOfSigFigs - newSigFigNum;
      if (numOfSigFigs > newSigFigNum) {
        let droppedDigit = numString.slice(-sigfigsDiff);
        let firstDropped = droppedDigit.charAt(0);
        //let digitInFront = numString.charAt(-(sigfigsDiff + 1));
        let digitInFront = numStringWithoutDot.slice(
          -(sigfigsDiff + 1),
          -sigfigsDiff
        );

        let digitsToStay = numString.slice(0, -sigfigsDiff);
        let formatedNumStr = `${digitsToStay}<span style="color:red">|</span>${droppedDigit}`;
        console.log(digitInFront, "######!!!");

        statementDetails += `${numString} has ${numOfSigFigs} significant figures and is to be rounded to ${newSigFigNum} significant figures.<br>
        So the number of significant figures in the new number will be less than the number of significant figures in the original number.<br>
        Therefore, ${sigfigsDiff} digit/digits(${droppedDigit}) will be removed/dropped from the end of the original number(${formatedNumStr}).<br>
        Since all the dropped digit/digits are before any decimal point, the spaces they occupy will be replaced by zero.`;
        if (Number(firstDropped) >= 5) {
          statementDetails += ` The first digit to be dropped ${firstDropped} is greater than or equal to five, so the digit in front(${digitInFront}) is increased by one.<br>
          The new number may have to be written in scientific notation to make the number of significant figures  clearer.<br>
        Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}.<br>`;
        } else {
          statementDetails += `The first digit to be dropped(${firstDropped}) is less than five, so the digit in front(${digitInFront}) is not increased by one<br>
          The new number may have to be written in scientific notation to make the number of significant figures  clearer.<br>
       
          Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}<br>`;
        }
      } else if (numOfSigFigs < newSigFigNum) {
        statementDetails += `${numString} has ${numOfSigFigs} significant figures and is to be rounded to ${newSigFigNum} significant figures.<br>
        So the number of significant figures in the new number will be more than the number of significant figures in the original number.<br>
        Therefore,a decimal will be introduced at the end of the original number followed by right padding with zero/zeros.<br>
        The number of zero/zeros to be added will be equal to the difference in the number of significant figures between the old and new number.<br>
        This difference is ${Math.abs(sigfigsDiff)}.<br>
        Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}.<br>`;
      } else {
        //the number of significant figures in the original number is equal to the number of sigfig in the new number
        statementDetails += `${numString} has ${numOfSigFigs} significant figures and is to be rounded to ${newSigFigNum} significant figures.<br>
        So the number of significant figures in the new number will be equal to the number of significant figures in the original number.<br>
        Therefore, the original number will not be altered.<br>
        Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}<br>`;
      }
    } else if (matchNum[5] === ".") {
      numOfSigFigs = matchNum[4].length + matchNum[6].length; // #number has decimal point but no leading zeros e.g 45.78900,6.434,
      //numOfSigFigs = matchNum[4].length; //number contains decimal point and leading zeros e.g 0.7678,0.00545,0.766776
      // roundSum += `${numString} in ${numOfSigFigs} -------> rounded to ${newNumString} in ${newSigFigNum} significant figures`;
      statementSumary += `${numString} in ${numOfSigFigs} -------> ${newNumString} to ${newSigFigNum} significant figures.<br>`;
      //length of digit after the decimal point
      let lenOfDigitAfterDeci = matchNum[6].length;
      let lenOfDigitBeforeDeci = matchNum[4].length;
      // number to be rounded down/precision to decrease
      // the new number will have lesser number of sigfig than the old number
      let sigfigsDiff = numOfSigFigs - newSigFigNum;
      if (numOfSigFigs > newSigFigNum) {
        //dropped digits
        let droppedDigit = numStringWithoutDot.slice(-sigfigsDiff);
        //first char of the digits to be removed
        let firstDropped = droppedDigit.charAt(0);
        //the char in front of the first char to be removed
        let digitInFront = numStringWithoutDot.slice(
          -(sigfigsDiff + 1),
          -sigfigsDiff
        );
        let digitsToStay = numString.slice(0, -sigfigsDiff);
        let formatedNumStr = `${digitsToStay}<span style="color:red">|</span>${droppedDigit}`;
        console.log(digitInFront, "######!!!");

        statementDetails += `${numString} has ${numOfSigFigs} significant figures and is to be rounded to ${newSigFigNum} significant figures.<br>
        So the number of significant figures in the new number will be less than the number of significant figures in the original number.<br>
        Therefore, ${sigfigsDiff} digit/digits(${droppedDigit}) will be removed/dropped from the end of the original number ${formatedNumStr}.<br>`;
        //if the first dropped digit is greater than  five.
        if (Number(firstDropped) >= 5) {
          statementDetails += `The first digit to be dropped(${firstDropped}) is greater than or equal to five, so the digit in front (${digitInFront}) is increased by one.<br>`;
          //in this case we are dropping digits after the decimal point
          //the number of digits to be dropped is less than the number of digits after the decimal point
          if (sigfigsDiff <= lenOfDigitAfterDeci) {
            statementDetails += `Since all the dropped  digit/digits  is/are after the decimal point, the space which the dropped digit occupied are not replaced by zeros.<br>
          Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}.<br>`;
          } else {
            //number of digits to be droped is more than the number of digits after the decimal point
            let digitBeforeDeciToBeDropped = sigfigsDiff - lenOfDigitAfterDeci;
            statementDetails += `In this case, we are dropping  digit before and after the decimal point. ${sigfigsDiff} digits will be dropped after the decimal point and the space which the dropped digit occupied are not replaced by zeros.<br>
           ${digitBeforeDeciToBeDropped} digits will be dropped before the decimal point and the space they occupy replaced by zero.<br>
          Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}.<br>`;
          }
        } else {
          //the first digit to dropped is less than five
          statementDetails += `The first digit to be dropped is ${firstDropped} and is less than 5.<br>The digit in front of the first digit to be cut off is ${digitInFront}. Therefore this digit will not be increased by one<br>`;
          if (sigfigsDiff <= lenOfDigitAfterDeci) {
            statementDetails += `Since  all  dropped digit are after the decimal point, the space which the dropped digit occupied are not replaced by zeros.<br>
          Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}.<br>`;
          } else {
            let digitBeforeDeciToBeDropped = sigfigsDiff - lenOfDigitAfterDeci;
            statementDetails += `In this case, we are dropping  digit before and after the decimal point.${sigfigsDiff} will be dropped after the decimal point and the space which the dropped digit occupied are not replaced by zeros.<br>
           ${digitBeforeDeciToBeDropped} will be dropped before the decimal point and the space they occupy replaced by zero.<br>
          Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}.<br>`;
          }
        }
      } else if (numOfSigFigs < newSigFigNum) {
        //you are increasing the precision of the new number
        //the number of sigfig in the new number is greater than the number of sigfig in the original number
        statementDetails += `${numString} has ${numOfSigFigs} and is to be rounded to ${newSigFigNum} significant figures.<br>
        So the number of significant figures in the new number will be more than the number of significant figures in the original number.<br>
        Therefore, the original number will be right padded with zero/zeros.<br>
        How many zero/zeros do we need then?<br>
        The number of zero/zeros to be added will be equal to the difference in the number of significant figures  between the old and new number.<br>
        This difference and therefore the number of zero/zeros is (${Math.abs(
          sigfigsDiff
        )})<br>
        Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}<br>`;
      } else {
        //the number of significant figures in the original number is equal to the number of sigfig in the new number
        statementDetails += `${numString} has ${numOfSigFigs} significant figures and is to be rounded to ${newSigFigNum} significant figures.<br>
        So the number of significant figures in the new number will be equal to the number of significant figures in the original number.<br>
        Therefore, the original number will not be altered.<br>
        Therefore ${numString} to ${newSigFigNum} significant figures is ${newNumString}<br>`;
      }
    }
    return [newNumString, statementSumary, statementDetails];
  }
  return false;
}

//sumarise sigfig result
function sigMain(array, trimString, userChoice) {
  let statementSumary = "";
  let statementDetails = "";
  let arrResult;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    arrResult = getSigFigPlusStatement(element, trimString);
    if (userChoice === "cal-sigfig") {
      arrResult = changeNumToGivenSigFigPlusStatement(element, trimString);
    }

    if (arrResult) {
      statementSumary += `(${index + 1}) ${arrResult[1]}`;
      statementDetails += `<br>(${index + 1}) ${arrResult[2]}`;
    } else {
      statementSumary += `(${
        index + 1
      }) ${element} not processed. Reason: incompatible number,please check the number and try again<br>`;
      statementDetails += `<br>(${
        index + 1
      }) ${element} not processed. Reason: incompatible number,please check the number and try again<br>`;
    }
  }
  return [statementSumary, statementDetails];
}

//get number of significant figures
function getSigFig(numString, trimString) {
  let numOfSigFigs;
  let numPattern = /(0?)(\.?)(0*)(\d*)(\.?)(\d*)/i;
  let matchNum = numString.match(numPattern);
  if (matchNum) {
    if (matchNum[2] === ".") {
      numOfSigFigs = matchNum[4].length; //number contains decimal point and leading zeros e.g 0.7678,0.00545,0.766776
    } else if (matchNum[2] === "" && matchNum[5] != ".") {
      numOfSigFigs = trimString(matchNum[4], "0")[0]; //number contains no decimal point may have trailing zeros and sandwiched zeros 45,40000,67,4400078 etc

      //numOfSigFigs = matchNum[4].replace(/\(d+)(0*)/)[1].length;
    } else if (matchNum[5] === ".") {
      numOfSigFigs = matchNum[4].length + matchNum[6].length; // #number has decimal point but no leading zeros e.g 45.78900,6.434,
    }
    return numOfSigFigs;
  }
  return false;
}
//right-trim string:remove specified letter from end of string
function trimString(str, letter) {
  let trailingZeroCounter = 0;
  while (str.endsWith(letter)) {
    str = str.substring(0, str.length - 1);
    trailingZeroCounter += 1;
  }
  return [str.length, str, trailingZeroCounter];
}
//find the number with the lest significant figures
function getMinValueOfArray(args) {
  let min = Math.min(...args);
  return min;
}
//calculate number of sigfigs of numbers and puts them in an array then
//finds the minimum
function formArrayOfSigFigs(getSigFig, getMinValueOfArray, ...arg) {
  let sigFigsArray = arg.map((element) =>
    getSigFig(element.toString(), trimString)
  );
  let min = getMinValueOfArray(sigFigsArray);
  return min;
}

function addSubtractSigFigMain(array) {
  statementSumary = "";
  statementDetails = "";
  for (let index = 0; index < array.length; index++) {
    const eleStr = array[index];
    let inputAnsArr = eleStr.split(/\+|\-|\=/g);
    let lastEle = inputAnsArr.pop();
    lastEle = Number(lastEle);

    const [
      AnsNum,
      statementArr,
      minDeciValue,
      numWithTheNumOfDeci,
    ] = addSubSigFigsCheck(lastEle, ...inputAnsArr);
    statementSumary += `(${index + 1}) ${eleStr.substring(
      0,
      eleStr.indexOf("=")
    )} = ${AnsNum} to ${minDeciValue} decimal places.<br>`;
    console.log(statementSumary, "+++----");
    console.log(statementArr, "^^^^");
    statementDetails += `${statementSumary}.<br>
    Why was the answer rounded to ${minDeciValue} decimal places.<br>Reason:<br>
    In calculations involving addition and subtraction,
    the answer will have the same number of decimal as the input/inputs with the least number of decimal places.<br><br>
    ${statementArr.join(
      "\n"
    )} <br>Therefore, the answer will have the same number of decimal places as ${numWithTheNumOfDeci}`;
  }
  return [statementSumary, statementDetails];
}

function multiDividSigFigMain(array) {
  statementSumary = "";
  statementDetails = "";
  for (let index = 0; index < array.length; index++) {
    const eleStr = array[index];
    let inputAnsArr = eleStr.split(/\*|\/|\=/g);
    let lastEle = inputAnsArr.pop();
    lastEle = Number(lastEle);

    let minSigFig = formArrayOfSigFigs(
      getSigFig,
      getMinValueOfArray,
      ...inputAnsArr
    );
    let ansNumResult = lastEle.toPrecision(minSigFig);
    statementSumary += `(${
      index + 1
    })  ${eleStr} --------> calculator result.<br>`;
    statementSumary += `(${index + 1}) ${eleStr.substring(
      0,
      eleStr.indexOf("=")
    )} = ${ansNumResult} to ${minSigFig} significant figures.<br>`;
    // console.log(statementSumary, "+++----");
    // console.log(statementArr, "^^^^");
    let inputWithLeastSigFig = inputAnsArr.filter(
      (item) => getSigFig(item.toString(), trimString) === minSigFig
    );
    let statementArr = inputAnsArr.map(
      (item) =>
        `${item} has  ${getSigFig(
          item.toString(),
          trimString
        )} significant figure/figures.<br>`
    );
    statementDetails += `${statementSumary}.<br>
    Why was the answer rounded to ${minSigFig} significant figures.<br>Reason:<br>
    In calculations involving multiplication and division,
    the answer will have the same number of significant figures as the input/inputs with the least number of significant figures.<br><br>
    ${statementArr.join(
      "\n"
    )} <br>Therefore, the answer will have the same number of significant figures as ${inputWithLeastSigFig.join(
      " or "
    )}`;
  }
  return [statementSumary, statementDetails];
}

export {
  formArrayOfSigFigs,
  getSigFig,
  getMinValueOfArray,
  trimString,
  sigMain,
  addSubtractSigFigMain,
  multiDividSigFigMain,
};
