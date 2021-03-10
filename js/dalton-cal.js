import {
  formArrayOfSigFigs,
  getSigFig,
  getMinValueOfArray,
  trimString,
} from "./sigfigs.js";
import {
  queryAnswer,
  thinkAboutStr,
  drawVar,
  drawVarUnits,
  drawVarGen,
  //drawVarUnits,
  drawVarUnitsGen,
  removeEFromNum,
  queryAnswerAvogadro,
  thinkAboutStrGen,
  thinkAboutStrDalton,
} from "./combine-cal.js";

// function removeEFromNum(numStr) {
//   if (numStr.indexOf("e+") > -1) {
//     let matchRegex = /(\d+\.?\d*)\s*e\+(\d+)/i; // 2e+1 string
//     let matchArray = numStr.match(matchRegex);

//returns a number obtained from addition 0r subtraction to the correct number of decimal places.
//usage: to ensure that addition and subtraction are rounded to correct number of decimal places
//accepts  the numbers that was added or subtracted and the answer to operation as arguments
//returns answer to correct,statement of numbers and their decimal and the min decimal
function addSubSigFigsCheck(AnsNum, ...arg) {
  let numOfDeciArr = [];
  let statementArr = [];
  arg.forEach((item) => {
    console.log(item, "jjjj");
    item = item.toString();
    console.log(item, "ddd");
    if (item.includes(".")) {
      let indexOfDot = item.indexOf(".");
      let strAfterDot = item.substring(indexOfDot + 1);
      let lenOFstrAfterDot = strAfterDot.length;
      numOfDeciArr.push(lenOFstrAfterDot);
      let itemDecimalNum = `${item} is correct to ${lenOFstrAfterDot} decimal places<br>`;
      statementArr.push(itemDecimalNum);
    } else {
      numOfDeciArr.push(0);
      let itemDecimalNum = `${item} is correct to 0 decimal places<br>`;
      statementArr.push(itemDecimalNum);
    }
  });
  let minDeciValue = Math.min(...numOfDeciArr);
  let numWithTheNumOfDeci = arg[numOfDeciArr.indexOf(minDeciValue)];
  AnsNum = AnsNum.toFixed(minDeciValue);

  return [AnsNum, statementArr, minDeciValue, numWithTheNumOfDeci];
}

//input looks like this "pt=5atm,p1=2atm,p2=4atm,p3=4atm""
//returns an array that looks like this  ["p2", "5", "atm", "p1", "2", "atm", "p2", "4", "atm"]
//and another array like this [pt,p1,p2,p3...]
function splitDalton(input) {
  let matchValueArray = [];
  let paraArray = [];
  let splitResultArray = input.trim().split(",");
  let testRegex = /((?:pt)|(?:p\d+))\s*\=\s*((?:\d+\.?\d*e?\+?\-?\d*)|(?:\?))\s*([a-zA-Z23]+)/i;
  for (let i = 0; i < splitResultArray.length; i++) {
    const element = splitResultArray[i].trim();
    if (testRegex.test(element)) {
      let matchArray = element.match(
        /((?:pt)|(?:p\d+))\s*\=\s*((?:\d+\.?\d*e?\+?\-?\d*)|(?:\?))\s*([a-zA-Z23]+)/i
      );
      console.log(matchArray, "ddddddd");
      matchValueArray.push(matchArray[1], matchArray[2], matchArray[3]);
      paraArray.push(matchArray[1]);
    } else {
      return false;
    }
  }
  console.log(matchValueArray, "\\\\\\\\");
  console.log(paraArray, "rrrrttwwww");
  if (checkPara(paraArray) === false) {
    return false;
  }
  return [matchValueArray, paraArray];
}

//checks that input first part has been enter in correct order pt=p1,p2,p3
//input pt=5atm,p1=2atm,p2=4atm,p3=4atm
function checkPara(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index === 0 && array[index].toLowerCase() != "pt") {
      console.log("vvvvvvv");
      return false;
    }
    if (index === 1 && array[index].toLowerCase().trim() != "p1") {
      console.log("zzzzzzzzzzzzzz");
      return false;
    }
    if (index > 1) {
      console.log("mmmmmmmm");
      let arrItem = array[index].toLowerCase().trim();
      let formItem = `p${index}`;
      if (arrItem != formItem) {
        return false;
      }
    }
  }
  return true;
}
// splitDalton("p2=5atm,p1=2atm,p2=4atm")
// (9) ["p2", "5", "atm", "p1", "2", "atm", "p2", "4", "atm"]

//Evaluate variables: pt,p1,p2,p3,p4
function daltonGasLawCal(matchArray, userInput) {
  //declare variables
  let subjectFormula;
  let substituteValues;
  let calculatedAnswer;
  let calculatedAnsNormal;
  let cancelledUnit;
  let thinkAboutString;
  let getMinSigFigs;
  let makeSenseString;

  //matchArray looks like this ["p2", "?", "atm", "p1", "2", "atm", "p2", "4", "atm"]
  //userInput looks like this "p2=5atm,p1=2atm,p2=4atm"

  //get the parameter associated with the ?, this is the unknown
  let indexOfUnknownQueMark = matchArray.indexOf("?");
  let unknownIndex = indexOfUnknownQueMark - 1;
  let unknown = matchArray[unknownIndex];

  //gets the parameters pt, p1,p2, p3
  let otherPara = splitDalton(userInput)[1];
  console.log(otherPara, "gggggggg");
  //seperate pt from the rest
  const [a, ...others] = otherPara;
  console.log(matchArray, ";;;;;;;;;");
  console.log(userInput, "::::::::");
  console.log(others, ":OOOOOoo");
  console.log(unknown, ":ttttttt");

  //calculating pt
  if (unknown.toLowerCase() === "pt") {
    //get the parameters and equate to pt like pt = p1 +p2 + p3 etc
    let Pt = `Pt = ${others.join(" + ")}`;

    //get the actual value of the parameters as numbers
    let ptValueArray = others.map((item) =>
      Number(matchArray[matchArray.indexOf(item) + 1])
    );

    //get the actual value of the parameters as string
    let ptValueArray2 = others.map(
      (item) => matchArray[matchArray.indexOf(item) + 1]
    );

    //copy ptValueArray2
    ptValueArray2 = [...ptValueArray2];

    console.log(ptValueArray, ":VVVVVV");
    //join the values with their units
    let PtString = [...ptValueArray, ""].join(
      ` ${matchArray[indexOfUnknownQueMark + 1]} + `
    );

    console.log(PtString, ":llllllgggg");
    //remove any trailing +
    let ptValueUnit = `Pt = ${trimString(PtString.trim(), "+")[1]}`;
    console.log(ptValueArray, ":rrrrrttttwww");

    //add the values together
    let ptValue = ptValueArray.reduce((total, num) => total + num);
    console.log(ptValue, ":xxxxxxxxxx");
    subjectFormula = `In this problem Dalton's law of partial pressure will reduce to:<br><span style="color:red">${Pt}</span>`;
    substituteValues = `Substitutes values for parameters:<br><span style="color:red">${ptValueUnit}</span>`;
    cancelledUnit = ``;

    calculatedAnswer = ptValue;
    //puts answer to the correct number of decimal
    calculatedAnswer = addSubSigFigsCheck(ptValue, ...ptValueArray2)[0];
    console.log(getMinSigFigs, "+++++++==");
    console.log(calculatedAnswer, "----==");
    calculatedAnsNormal = calculatedAnswer;
    makeSenseString = "";

    //change exponential number from the form 56e+45 to the form 56 x 10exponent for e.g
    calculatedAnswer = removeEFromNum(calculatedAnswer);
    //get the answer
    calculatedAnswer = `<span style="color:red">Pt = ${calculatedAnsNormal} ${
      matchArray[2]
    }  Or<br> ${calculatedAnswer} ${matchArray[2]} to ${
      addSubSigFigsCheck(ptValue, ...ptValueArray2)[2]
    } decimal places</span>`;

    //explain why the result is rounded to certain number of decimal places
    thinkAboutString = thinkAboutStrDalton(
      addSubSigFigsCheck(ptValue, ...ptValueArray2)[1],
      addSubSigFigsCheck(ptValue, ...ptValueArray2)[2]
    );
  } else {
    //calculate other values other than pt
    //remove unknown,returns something like this [p1,p2,p3,p4] but without the unknown and pt
    let removeUnknownArr = others.filter((item) => item != unknown);
    console.log(removeUnknownArr, "ffffnownow");

    //joins the removeUnknownArr above with + to produce a string like p1+p2+p3+p4
    let removeUnknownStr = [...removeUnknownArr, ""].join(` + `);
    console.log(removeUnknownStr, "uuuuokay");

    //make the unknown the subject of the formula like p2 = pt - p1=p2+p3+p4...
    removeUnknownStr = `${unknown} = Pt - (${
      trimString(removeUnknownStr.trim(), "+")[1]
    })`;
    console.log(removeUnknownStr, "iiiiiiikay");

    //produce an array of unknown number values but without pt values e.g 78.8,89.9,45.64
    let unknownValueArr = removeUnknownArr.map((item) =>
      Number(matchArray[matchArray.indexOf(item) + 1])
    );

    //produce an array of unknown string values but without pt values e.g "78.8","89.9","45.64"
    let unknownValueArr2 = removeUnknownArr.map(
      (item) => matchArray[matchArray.indexOf(item) + 1]
    );

    //add the value of pt to unknownValueArr2
    unknownValueArr2 = [...unknownValueArr2, matchArray[1]];
    //add units to the array of unknown number values like "78.8 atm","89.9 atm","45.64 atm"
    let arrStr = [...unknownValueArr, ""].join(
      ` ${matchArray[indexOfUnknownQueMark + 1]} + `
    );

    //include the pt value and unit to produce something like p1 = pt - (p2+p3+p4)
    arrStr = `${unknown} = ${matchArray[1]} ${matchArray[2]} - (  ${
      trimString(arrStr.trim(), "+")[1]
    })`;
    console.log(arrStr, "===kkkkyyy");

    console.log(unknownValueArr, "yyyyyyyyy");

    //add the unknown values together to produce a single value like
    let unknownValue = unknownValueArr.reduce((total, num) => total + num);

    //subtract unknown value from pt value to produce something like p1 = 89 atm
    let unknownResult = `${unknown} = ${
      Number(matchArray[1]) - unknownValue
    }  ${matchArray[2]}`;

    //console.log(unknownResult, "oooooooo");

    //produce pt= p1+p2+p3...,p1 = pt -p2+p3...
    subjectFormula = `Mathematically, Dalton's law of partial pressure is:<br><span style="color:red">Pt = ${others.join(
      " + "
    )}</span><br>
    <br>Rearrange the formula so that only the unknown <span style="color:red">(${unknown}) </span>occupies one side of the equation.<br> 
    This is known as Making the unknown <span style="color:red">(${unknown}) </span>the subject of the formula:<br>
    To achieve this subtract <span style="color:red"> ${removeUnknownArr.join(
      ","
    )} </span> from both sides of the equation<br>
    We now have:<br><span style="color:red"> ${removeUnknownStr}</span>`;

    //produce p1 = 9 atm - ( 0.77 atm ) for instance
    substituteValues = `Substitutes values for parameters:<br><span style="color:red">${arrStr}</span>`;
    cancelledUnit = ``;
    //subtract partial  pressures from the total pressure to produce answer
    let calculatedAns = Number(matchArray[1]) - unknownValue;

    //puts answer to the correct number of decimal
    calculatedAnswer = addSubSigFigsCheck(
      calculatedAns,
      ...unknownValueArr2
    )[0];
    console.log(getMinSigFigs, "+++++++==");
    console.log(calculatedAnswer, "----==");
    calculatedAnsNormal = calculatedAnswer;
    makeSenseString = "";
    //change exponential number from the form 56e+45 to the form 56 x 10exponent for e.g
    calculatedAnswer = removeEFromNum(calculatedAnswer);

    //write out the result e.gp1 = 8 atm Or 8 atm to 0 decimal places
    calculatedAnswer = `<span style="color:red">${unknown} = ${calculatedAnsNormal} ${
      matchArray[2]
    }  Or<br> ${calculatedAnswer} ${matchArray[2]} to  ${
      addSubSigFigsCheck(calculatedAns, ...unknownValueArr2)[2]
    } decimal places</span>`;

    //explains why the result is rounded to the this number of significant figures
    thinkAboutString = thinkAboutStrDalton(
      addSubSigFigsCheck(calculatedAns, ...unknownValueArr2)[1],
      addSubSigFigsCheck(calculatedAns, ...unknownValueArr2)[2]
    );
  }

  return {
    subjectFormula,
    substituteValues,
    cancelledUnit,
    calculatedAnswer,
    thinkAboutString,
    makeSenseString,
  };
}
export { daltonGasLawCal, splitDalton, addSubSigFigsCheck };
