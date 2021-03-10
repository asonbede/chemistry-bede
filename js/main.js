// get reference from html elements
import {
  boylesQuestionArray,
  charlesQuestionArray,
  gaylusacQuestionArray,
  avogadroQuestionArray,
  combinedQuestionArray,
  idealQuestionArray,
  daltonQuestionArray,
  getSigNumQuestionArray,
  changeSigNumQuestionArray,
  multiDiviSigNumQuestionArray,
  addSubSigNumQuestionArray,
} from "./questions.js";
import {
  trimString,
  sigMain,
  multiDividSigFigMain,
  addSubtractSigFigMain,
} from "./sigfigs.js";
import {
  getUnknown,
  getKnown,
  checkUnitAgreement,
  checkUnknown,
  boyleEqu,
  CalculateResults,
} from "./combine-cal.js";
import { splitDalton } from "./dalton-cal.js";
import { getRvalue } from "./idealgas-cal.js";
let charlesUserInputRegex = /^(V1)\s*\=\s*((?:\d+\.?\d*)|(?:\?))\s*([a-zA-Z23]+)\s*,\s*(T1)\s*\=\s*((?:\d+\.?\d*)|(?:\?))\s*([a-zA-Z23]+)\s*,\s*(V2)\s*\=\s*((?:\d+\.?\d*)|(?:\?))\s*([a-zA-Z23]+)\s*,\s*(T2)\s*\=\s*((?:\d+\.?\d*)|(?:\?))\s*([a-zA-Z23]+)/i;
let boylesUserInputRegex = /^(p1)\s*\=\s*((?:\d+\.?\d*)|\?)\s*([a-zA-Z23]+)\s*,\s*(v1)\s*\=\s*((?:\d+\.?\d*)|\?)\s*([a-zA-Z23]+)\s*,\s*(p2)\s*\=\s*((?:\d+\.?\d*)|\?)\s*([a-zA-Z23]+)\s*,\s*(v2)\s*\=\s*((?:\d+\.?\d*)|\?)\s*([a-zA-Z23]+)/i;
let gaylusacUserInputRegex = /^(p1)\s*\=\s*((?:\d+\.?\d*)|(?:\?))\s*([a-zA-Z23]+)\s*,\s*(T1)\s*\=\s*((?:\d+\.?\d*)|(?:\?))\s*([a-zA-Z23]+)\s*,\s*(p2)\s*\=\s*((?:\d+\.?\d*)|(?:\?))\s*([a-zA-Z23]+)\s*,\s*(T2)\s*\=\s*((?:\d+\.?\d*)|(?:\?))\s*([a-zA-Z23]+)/i;
let avogadroUserInputRegex = /^(v1)\s*\=\s*((?:\d+\.?\d*e?\+?\d*)|(?:\?))\s*([a-zA-Z23]+)\s*,\s*(n1)\s*\=\s*((?:\d+\.?\d*e?\+?\d*)|(?:\?))\s*([a-zA-Z23]+)\s*,\s*(v2)\s*\=\s*((?:\d+\.?\d*e?\+?\d*)|(?:\?))\s*([a-zA-Z23]+)\s*,\s*(n2)\s*\=\s*((?:\d+\.?\d*e?\+?\d*)|(?:\?))\s*([a-zA-Z23]+)/i;
let combineUserInputRegex = /^(p1)\s*\=\s*((?:\d+\.?\d*e?\+?\d*)|\?)\s*([a-zA-Z23]+)\s*,\s*(v1)\s*\=\s*((?:\d+\.?\d*e?\+?\d*)|\?)\s*([a-zA-Z23]+)\s*,\s*(t1)\s*\=\s*((?:\d+\.?\d*e?\+?\d*)|\?)\s*([a-zA-Z23]+)\s*,\s*(p2)\s*\=\s*((?:\d+\.?\d*e?\+?\d*)|\?)\s*([a-zA-Z23]+)\s*,\s*(v2)\s*\=\s*((?:\d+\.?\d*e?\+?\d*)|\?)\s*([a-zA-Z23]+)\s*,\s*(t2)\s*\=\s*((?:\d+\.?\d*e?\+?\d*)|\?)\s*([a-zA-Z23]+)/i;
let idealUserInputRegex = /^(p)\s*\=\s*((?:\d+\.?\d*e?\+?\-?\d*)|\?)\s*([a-zA-Z23]+)\s*,\s*(v)\s*\=\s*((?:\d+\.?\d*e?\+?\-?\d*)|\?)\s*([a-zA-Z23]+)\s*,\s*(n)\s*\=\s*((?:\d+\.?\d*e?\+?\-?\d*)|\?)\s*([a-zA-Z23]+)\s*,\s*(t)\s*\=\s*((?:\d+\.?\d*e?\+?\-?\d*)|\?)\s*([a-zA-Z23]+)/i;
let daltonUserInputRegex = /((?:pt)|(?:p\d+))\s*\=\s*((?:\d+\.?\d*e?\+?\-?\d*)|(?:\?))\s*([a-zA-Z23]+)/i;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const temp = document.querySelector("#temp");
const output = document.querySelector(".temp-output");
//demo elem references
const volume = document.querySelector("#volume");
const outputVolume = document.querySelector(".volume-output");
const mole = document.querySelector("#mole");
const outputMole = document.querySelector(".mole-output");
const pressure = document.querySelector(".pressure");
const timeOutput = document.querySelector(".time-output");
const selectAction = document.querySelector("#select-action");
const elem = document.querySelectorAll(".demo-elem");
const body = document.querySelector("body");
// calculation elem references
const instructionCal = document.querySelector("#instruction-cal");
const textareaScreen = document.querySelector("#textarea-screen");
//const textareaScreen2 = document.querySelector("#textarea-screen2");
const inputQuestion = document.querySelector("#input-question");
const checkAnswerButton = document.querySelector("#check-answer-button");
const clearScreenButton = document.querySelector("#clear-screen-button");
const previousExampleButton = document.querySelector("#pre-example-button");
const nextExampleButton = document.querySelector("#next-Example-button");
const summaryOutput = document.querySelector("#summary-output");
const detailOutput = document.querySelector("#detail-output");
const elemCal = document.querySelectorAll(".cal-elem");
//declare and initialize variables
let ballRadius = 5;
let iniTime = getMsTime();
let countWallCollion = 0;

let setIntervalValueComp;
let speedValue = 1000;
let moleNumber = mole.value;
let userChoice = "";
let questionValue = 0;

//output initial display values of temperature,volume,pressure,number of molecules
hideOrShowElement(elemCal, "none");
displayTemValue(temp.value);

displayPressureValue(countWallCollion);

displayVolValue(volume.value);
displayMoleNum(moleNumber);

setIntervalFun(moleNumber, speedValue);
inputQuestion.focus();

//called each time the temperature slider is moved
//gets the value of the slider
//increase or decrease the speed of the molecules
temp.addEventListener("input", function () {
  countWallCollion = 0;
  iniTime = getMsTime();
  let slideValue = Number(temp.value);

  //set slider temperature attribute:min,max,step,value
  setSliderAtrribute(temp);

  let tempMaxValue = getSliderAttribute(temp, "max");

  let tempMinValue = getSliderAttribute(temp, "min");

  slideValue = Number(temp.value);

  let reverseTempValue = tempMaxValue - (slideValue - tempMinValue); //1000-(n-1)
  speedValue = reverseTempValue;

  // speedValue = setTempSpeedValue(slideValue);
  if (userChoice == "charles") {
    volume.value = slideValue;
    changeCanvasSize(volume.value, volume.value);
    displayVolValue(volume.value);
  }
  displayTemValue(slideValue);

  stopSetIntervals(setIntervalValueComp);
  setIntervalFun(moleNumber, speedValue);
});

//watches for change in the value of the volume slider
//uses the value of the slider volume to reset the dimensions of the canvas

volume.addEventListener("input", function () {
  iniTime = getMsTime();
  countWallCollion = 0;
  let slideVolumeValue;
  if (userChoice == "charles") {
    // slideVolumeValue = volume.value;

    slideVolumeValue = Number(volume.value);
    let volumeMaxValue = getSliderAttribute(volume, "max");
    let volumeMinValue = getSliderAttribute(volume, "min");
    let reverseVolumeValue =
      volumeMaxValue - (slideVolumeValue - volumeMinValue); //1000-(n-1)
    speedValue = reverseVolumeValue;
    volume.value = slideVolumeValue;
    temp.value = slideVolumeValue;
    changeCanvasSize(volume.value, volume.value);
    displayVolValue(volume.value);
    displayTemValue(temp.value);

    stopSetIntervals(setIntervalValueComp);
    setIntervalFun(moleNumber, speedValue);
  } else if (userChoice == "avogadro") {
    setSliderAtrribute(volume);
    // volume.setAttribute("step", 1);
    // volume.setAttribute("min", 1);
    // volume.setAttribute("max", 1000);
    // volume.setAttribute("value", 10);

    slideVolumeValue = volume.value;
    moleNumber = slideVolumeValue;
    mole.value = slideVolumeValue;
    displayMoleNum(mole.value);
    stopSetIntervals(setIntervalValueComp);
    setIntervalFun(moleNumber, speedValue);
  } else if (userChoice == "compresibility") {
    setSliderAtrribute(volume);
    slideVolumeValue = volume.value;
  }

  changeCanvasSize(slideVolumeValue, slideVolumeValue);

  displayVolValue(slideVolumeValue);
});

//watches for change in the value of the mole slider
//uses the value of the slider to call setinterval
mole.addEventListener("input", function () {
  iniTime = getMsTime();
  countWallCollion = 0;
  moleNumber = Number(mole.value);
  if (userChoice == "avogadro") {
    setSliderAtrribute(volume);
    volume.value = moleNumber;
    changeCanvasSize(volume.value, volume.value);
  }
  displayVolValue(volume.value);
  displayMoleNum(moleNumber);

  stopSetIntervals(setIntervalValueComp);
  setIntervalFun(moleNumber, speedValue);
});

//called when an option is chosen from the select element
selectAction.addEventListener("change", function () {
  countWallCollion = 0;
  userChoice = selectAction.options[selectAction.selectedIndex].value;

  if (userChoice == "molecules") {
    hideOrShowElement(elem, "block");
    hideOrShowElement(elemCal, "none");
    iniTime = getMsTime();
    temp.disabled = true;
    volume.disabled = true;
    mole.disabled = false;
    speedValue = 1000;
    moleNumber = 5;
    ballRadius = 5;

    changeCanvasSize(480, 480);
    displayVolValue(canvas.height);

    displayMoleNum(moleNumber);
    stopSetIntervals(setIntervalValueComp);
    setIntervalFun(moleNumber, speedValue);
  } else if (userChoice == "speed-temperature") {
    hideOrShowElement(elem, "block");
    hideOrShowElement(elemCal, "none");
    temp.disabled = false;
    volume.disabled = true;
    mole.disabled = true;
    moleNumber = 5;

    setSliderAtrribute(temp);
    displayTemValue(temp.value);
    let slideValue = getSliderAttribute(temp, "value");
    let tempMaxValue = getSliderAttribute(temp, "max");
    let tempMinValue = getSliderAttribute(temp, "min");
    let reverseTempValue = tempMaxValue - (slideValue - tempMinValue); //1000-(n-1)
    speedValue = reverseTempValue;
    stopSetIntervals(setIntervalValueComp);
    setIntervalFun(moleNumber, speedValue);
  } else if (userChoice == "compresibility") {
    hideOrShowElement(elem, "block");
    hideOrShowElement(elemCal, "none");
    temp.disabled = true;
    volume.disabled = false;
    ballRadius = 5;
    moleNumber = 25;
    speedValue = 100;
    mole.disabled = true;

    displayVolValue(canvas.height);

    displayMoleNum(moleNumber);
    stopSetIntervals(setIntervalValueComp);
    setIntervalFun(moleNumber, speedValue);
  } else if (userChoice == "compresibility2") {
    hideOrShowElement(elem, "block");
    hideOrShowElement(elemCal, "none");
    volume.disabled = true;
    temp.disabled = true;
    mole.disabled = false;
    ballRadius = 10;
    moleNumber = 25;
    speedValue = 100;
    changeCanvasSize(200, 200);

    displayVolValue(canvas.height);

    displayMoleNum(moleNumber);
    stopSetIntervals(setIntervalValueComp);
    setIntervalFun(moleNumber, speedValue);
  } else if (userChoice == "charles") {
    hideOrShowElement(elem, "block");
    hideOrShowElement(elemCal, "none");
    volume.disabled = false;
    temp.disabled = false;
    moleNumber = 25;
    mole.value = moleNumber;

    //set slider temperature  attribute:min,max,step,value
    setSliderAtrribute(temp);

    //set slider volume attribute:min,max,step,value
    setSliderAtrribute(volume);
    displayTemValue(temp.value);
    displayVolValue(volume.value);
    changeCanvasSize(volume.value, volume.value);
    displayMoleNum(mole.value);
    mole.disabled = true;

    stopSetIntervals(setIntervalValueComp);
    setIntervalFun(moleNumber, speedValue);
  } else if (userChoice == "avogadro") {
    hideOrShowElement(elem, "block");
    hideOrShowElement(elemCal, "none");
    volume.disabled = false;
    mole.disabled = false;
    temp.disabled = true;
    moleNumber = 10;
    mole.value = moleNumber;

    setSliderAtrribute(volume);

    changeCanvasSize(volume.value, volume.value);
    displayVolValue(volume.value);
    displayMoleNum(mole.value);
    stopSetIntervals(setIntervalValueComp);
    setIntervalFun(moleNumber, speedValue);
  } else if (userChoice == "boyles-calculation") {
    let questionValue = 0;
    hideOrShowElement(elem, "none");
    hideOrShowElement(elemCal, "block");
    clearScreenAndPasteQuestion(questionValue, boylesQuestionArray);
    // let workStrings = "<br>Details:";
    // let justAnswerStr = "Summary:<br>";
    //instructionCal.innerHTML = `Instruction:`;
    removeEventListenerFromEle(checkAnswerButton, checkAnswerButtonFun);
    checkAnswerButton.addEventListener("click", checkAnswerButtonFun);

    removeEventListenerFromEle(clearScreenButton, clearScreenButtonFun);
    clearScreenButton.addEventListener("click", clearScreenButtonFun);

    removeEventListenerFromEle(nextExampleButton, nextExampleButtonFun);
    nextExampleButton.addEventListener("click", nextExampleButtonFun);

    removeEventListenerFromEle(previousExampleButton, previousExampleButtonFun);
    previousExampleButton.addEventListener("click", previousExampleButtonFun);
  } else if (userChoice === "charles-calculation") {
    console.log("incharles");
    questionValue = 0;
    hideOrShowElement(elem, "none");
    hideOrShowElement(elemCal, "block");
    clearScreenAndPasteQuestion(questionValue, charlesQuestionArray);

    removeEventListenerFromEle(checkAnswerButton, checkAnswerButtonFun);
    checkAnswerButton.addEventListener("click", checkAnswerButtonFun);

    removeEventListenerFromEle(clearScreenButton, clearScreenButtonFun);
    clearScreenButton.addEventListener("click", clearScreenButtonFun);

    removeEventListenerFromEle(nextExampleButton, nextExampleButtonFun);
    nextExampleButton.addEventListener("click", nextExampleButtonFun);

    removeEventListenerFromEle(previousExampleButton, previousExampleButtonFun);
    previousExampleButton.addEventListener("click", previousExampleButtonFun);
  } else if (userChoice === "gaylusac-calculation") {
    console.log("incharles");
    questionValue = 0;
    hideOrShowElement(elem, "none");
    hideOrShowElement(elemCal, "block");
    clearScreenAndPasteQuestion(questionValue, gaylusacQuestionArray);

    removeEventListenerFromEle(checkAnswerButton, checkAnswerButtonFun);
    checkAnswerButton.addEventListener("click", checkAnswerButtonFun);

    removeEventListenerFromEle(clearScreenButton, clearScreenButtonFun);
    clearScreenButton.addEventListener("click", clearScreenButtonFun);

    removeEventListenerFromEle(nextExampleButton, nextExampleButtonFun);
    nextExampleButton.addEventListener("click", nextExampleButtonFun);

    removeEventListenerFromEle(previousExampleButton, previousExampleButtonFun);
    previousExampleButton.addEventListener("click", previousExampleButtonFun);
  } else if (userChoice === "avogadro-calculation") {
    console.log("incharles");
    questionValue = 0;
    hideOrShowElement(elem, "none");
    hideOrShowElement(elemCal, "block");
    clearScreenAndPasteQuestion(questionValue, avogadroQuestionArray);

    removeEventListenerFromEle(checkAnswerButton, checkAnswerButtonFun);
    checkAnswerButton.addEventListener("click", checkAnswerButtonFun);

    removeEventListenerFromEle(clearScreenButton, clearScreenButtonFun);
    clearScreenButton.addEventListener("click", clearScreenButtonFun);

    removeEventListenerFromEle(nextExampleButton, nextExampleButtonFun);
    nextExampleButton.addEventListener("click", nextExampleButtonFun);

    removeEventListenerFromEle(previousExampleButton, previousExampleButtonFun);
    previousExampleButton.addEventListener("click", previousExampleButtonFun);
  } else if (userChoice === "combined-calculation") {
    console.log("incharles");
    questionValue = 0;
    hideOrShowElement(elem, "none");
    hideOrShowElement(elemCal, "block");
    clearScreenAndPasteQuestion(questionValue, combinedQuestionArray);

    removeEventListenerFromEle(checkAnswerButton, checkAnswerButtonFun);
    checkAnswerButton.addEventListener("click", checkAnswerButtonFun);

    removeEventListenerFromEle(clearScreenButton, clearScreenButtonFun);
    clearScreenButton.addEventListener("click", clearScreenButtonFun);

    removeEventListenerFromEle(nextExampleButton, nextExampleButtonFun);
    nextExampleButton.addEventListener("click", nextExampleButtonFun);

    removeEventListenerFromEle(previousExampleButton, previousExampleButtonFun);
    previousExampleButton.addEventListener("click", previousExampleButtonFun);
  } else if (userChoice === "ideal-calculation") {
    console.log("incharles");
    questionValue = 0;
    hideOrShowElement(elem, "none");
    hideOrShowElement(elemCal, "block");
    clearScreenAndPasteQuestion(questionValue, idealQuestionArray);

    removeEventListenerFromEle(checkAnswerButton, checkAnswerButtonFun);
    checkAnswerButton.addEventListener("click", checkAnswerButtonFun);

    removeEventListenerFromEle(clearScreenButton, clearScreenButtonFun);
    clearScreenButton.addEventListener("click", clearScreenButtonFun);

    removeEventListenerFromEle(nextExampleButton, nextExampleButtonFun);
    nextExampleButton.addEventListener("click", nextExampleButtonFun);

    removeEventListenerFromEle(previousExampleButton, previousExampleButtonFun);
    previousExampleButton.addEventListener("click", previousExampleButtonFun);
  } else if (userChoice === "dalton-calculation") {
    console.log("incharles");
    questionValue = 0;
    hideOrShowElement(elem, "none");
    hideOrShowElement(elemCal, "block");
    clearScreenAndPasteQuestion(questionValue, daltonQuestionArray);

    removeEventListenerFromEle(checkAnswerButton, checkAnswerButtonFun);
    checkAnswerButton.addEventListener("click", checkAnswerButtonFun);

    removeEventListenerFromEle(clearScreenButton, clearScreenButtonFun);
    clearScreenButton.addEventListener("click", clearScreenButtonFun);

    removeEventListenerFromEle(nextExampleButton, nextExampleButtonFun);
    nextExampleButton.addEventListener("click", nextExampleButtonFun);

    removeEventListenerFromEle(previousExampleButton, previousExampleButtonFun);
    previousExampleButton.addEventListener("click", previousExampleButtonFun);
  } else if (userChoice === "getsigfig") {
    console.log("incharles");
    questionValue = 0;
    hideOrShowElement(elem, "none");
    hideOrShowElement(elemCal, "block");
    clearScreenAndPasteQuestion(questionValue, getSigNumQuestionArray);

    removeEventListenerFromEle(checkAnswerButton, checkAnswerButtonFun);
    checkAnswerButton.addEventListener("click", checkAnswerButtonFun);

    removeEventListenerFromEle(clearScreenButton, clearScreenButtonFun);
    clearScreenButton.addEventListener("click", clearScreenButtonFun);

    removeEventListenerFromEle(nextExampleButton, nextExampleButtonFun);
    nextExampleButton.addEventListener("click", nextExampleButtonFun);

    removeEventListenerFromEle(previousExampleButton, previousExampleButtonFun);
    previousExampleButton.addEventListener("click", previousExampleButtonFun);
  } else if (userChoice === "cal-sigfig") {
    console.log("incharles");
    questionValue = 0;
    hideOrShowElement(elem, "none");
    hideOrShowElement(elemCal, "block");
    clearScreenAndPasteQuestion(questionValue, changeSigNumQuestionArray);

    removeEventListenerFromEle(checkAnswerButton, checkAnswerButtonFun);
    checkAnswerButton.addEventListener("click", checkAnswerButtonFun);

    removeEventListenerFromEle(clearScreenButton, clearScreenButtonFun);
    clearScreenButton.addEventListener("click", clearScreenButtonFun);

    removeEventListenerFromEle(nextExampleButton, nextExampleButtonFun);
    nextExampleButton.addEventListener("click", nextExampleButtonFun);

    removeEventListenerFromEle(previousExampleButton, previousExampleButtonFun);
    previousExampleButton.addEventListener("click", previousExampleButtonFun);
  } //dalton-calculation "cal-sigfig"

  //dalton-calculation "cal-sigfig"
});

//remove event listener from elemenent
function removeEventListenerFromEle(elem, func) {
  if (document.removeEventListener) {
    // For all major browsers, except IE 8 and earlier
    elem.removeEventListener("click", func);
  } else if (document.detachEvent) {
    // For IE 8 and earlier versions
    document.detachEvent("click", func);
  }
}

function previousExampleButtonFun() {
  let questionType;
  questionValue = questionValue - 1;
  questionValue = resetQuestionValueToMin(questionValue);
  if (userChoice === "boyles-calculation") {
    questionType = boylesQuestionArray;
  } else if (userChoice === "charles-calculation") {
    questionType = charlesQuestionArray;
  } else if (userChoice == "gaylusac-calculation") {
    questionType = gaylusacQuestionArray;
  } else if (userChoice === "avogadro-calculation") {
    questionType = avogadroQuestionArray;
  } else if (userChoice === "combined-calculation") {
    questionType = combinedQuestionArray;
  } else if (userChoice === "ideal-calculation") {
    questionType = idealQuestionArray;
  } else if (userChoice === "dalton-calculation") {
    questionType = daltonQuestionArray;
  } else if (userChoice === "getsigfig") {
    questionType = getSigNumQuestionArray;
  } else if (userChoice === "cal-sigfig") {
    questionType = changeSigNumQuestionArray;
  }
  clearScreenAndPasteQuestion(questionValue, questionType); //getSigNumQuestionArray,"cal-sigfig"
}

function nextExampleButtonFun() {
  let questionType;
  questionValue = questionValue + 1;
  questionValue = resetQuestionValueToMax(questionValue, userChoice);
  if (userChoice === "boyles-calculation") {
    questionType = boylesQuestionArray;
  } else if (userChoice === "charles-calculation") {
    questionType = charlesQuestionArray;
  } else if (userChoice === "gaylusac-calculation") {
    questionType = gaylusacQuestionArray;
  } else if (userChoice === "avogadro-calculation") {
    questionType = avogadroQuestionArray;
  } else if (userChoice === "combined-calculation") {
    questionType = combinedQuestionArray;
  } else if (userChoice === "ideal-calculation") {
    questionType = idealQuestionArray;
  } else if (userChoice === "dalton-calculation") {
    questionType = daltonQuestionArray;
  } else if (userChoice === "getsigfig") {
    questionType = getSigNumQuestionArray;
  } else if (userChoice === "cal-sigfig") {
    questionType = changeSigNumQuestionArray;
  }
  clearScreenAndPasteQuestion(questionValue, questionType); //
}

function clearScreenButtonFun() {
  summaryOutput.innerHTML = "";
  detailOutput.innerHTML = "";
  // textareaScreen2.innerHTML = "";
  textareaScreen.innerHTML = "";
  inputQuestion.innerHTML = "";
  inputQuestion.focus();
}
//select the appropriate regex
function selectRegex(userChoice) {
  let userInputRegex;
  switch (userChoice) {
    case "boyles-calculation":
      userInputRegex = boylesUserInputRegex;
      break;

    case "charles-calculation":
      userInputRegex = charlesUserInputRegex;
      break;
    case "gaylusac-calculation":
      userInputRegex = gaylusacUserInputRegex;
      break;
    case "avogadro-calculation":
      userInputRegex = avogadroUserInputRegex;
      break;

    case "combined-calculation":
      userInputRegex = combineUserInputRegex;
      break;
    case "ideal-calculation":
      userInputRegex = idealUserInputRegex;
      break;

    case "dalton-calculation":
      userInputRegex = daltonUserInputRegex;
      break;

    default:
      break;
  }
  return userInputRegex; //
}

function selectVar(userChoice, userInput) {
  let result;
  switch (userChoice) {
    case "boyles-calculation":
      result = ["p1", "v1", "p2", "v2"];
      break;
    case "charles-calculation":
      result = ["v1", "t1", "v2", "t2"];
      break;
    case "gaylusac-calculation":
      result = ["p1", "t1", "p2", "t2"];
      break;
    case "avogadro-calculation":
      result = ["v1", "n1", "v2", "n2"];
      break;

    case "combined-calculation":
      result = ["p1", "v1", "t1", "p2", "v2", "t2"];
      break;

    case "ideal-calculation":
      result = ["p", "v", "n", "t"];
      break;
    case "dalton-calculation":
      result = splitDalton(userInput)[1];
      break;
    default:
      break;
  }
  return result; //
}

function checkAnswerButtonFun() {
  let workStrings = "<br>Solution(Details):";
  let justAnswerStr = "Solution(Summary):<br>";
  summaryOutput.innerHTML = "";
  detailOutput.innerHTML = "";
  //textareaScreen2.innerHTML = "";
  let ansValue;
  let userInput = inputQuestion.textContent;
  userInput = userInput.trim();
  userInput = trimString(userInput, ";")[1];
  let userInputArray = userInput.split(";");
  let boylesEquation = boyleEqu(userChoice);
  if (
    userChoice === "getsigfig" ||
    userChoice === "cal-sigfig" ||
    userChoice === "multiDivi-sigfig"
  ) {
    let userInputArray = userInput.replace(/\s/g, "").split(";");
    //numString = numString.replace(",", "");
    let sigResult = sigMain(userInputArray, trimString, userChoice);
    if (userChoice === "addsub-sigfig") {
      let sigResult = addSubtractSigFigMain(userInputArray);
    }

    if (userChoice === "multiDivi-sigfig") {
      let sigResult = multiDividSigFigMain(userInputArray);
    }
    //
    justAnswerStr += sigResult[0];
    workStrings += sigResult[1];
    summaryOutput.innerHTML = justAnswerStr;
    detailOutput.innerHTML = workStrings;
    return;
  }
  //let verifyUserMultipleInputRegex = /([a-zA-Z0-9=,]+;[a-zA-Z0-9=,]+)+/;
  let userInputRegex = selectRegex(userChoice);
  //check whether the userinput conforms with format
  for (let i = 0; i < userInputArray.length; i++) {
    userInput = userInputArray[i];
    if (userInputRegex.test(userInput)) {
      let matchValue = userInput.match(userInputRegex);

      //get matchValue for dalton
      if (userChoice === "dalton-calculation") {
        if (splitDalton(userInput) != false) {
          matchValue = splitDalton(userInput)[0];
        } else {
          justAnswerStr =
            justAnswerStr + `(${i + 1}) ${userInput}: not procesed <br>`;

          workStrings =
            workStrings +
            `<br><br>(${
              i + 1
            }) ${userInput}; not processed; Reason/Why?: input does not conform with format`;
          continue;
        }
      }

      //check input for unknown
      if (checkUnknown(userInput)) {
        let checkResult = checkUnknown(userInput);
        justAnswerStr =
          justAnswerStr + `(${i + 1}) ${userInput}: not procesed <br>`;

        workStrings = workStrings + `<br><br>(${i + 1}) ${checkResult}`;
        continue;
      }

      //what is being processed
      let inputBeingProcessed = `<br>Input Processed:<br>(${
        i + 1
      }) ${userInput} <br><br>`;
      //check unit compatibility
      let quantityValue = selectVar(userChoice, userInput);
      if (
        checkUnitAgreement(matchValue, userInput, userChoice, ...quantityValue)
      ) {
        let checkResult = checkUnitAgreement(
          matchValue,
          userInput,
          userChoice,
          ...quantityValue
        );
        justAnswerStr =
          justAnswerStr + `(${i + 1}) ${userInput}: not procesed <br>`;

        workStrings = workStrings + `<br><br>(${i + 1}) ${checkResult}`;
        continue;
      }
      //check ideal unit agreement

      if (
        getRvalue(
          matchValue[3],
          matchValue[6],
          matchValue[9],
          matchValue[12]
        ) === false &&
        userChoice === "ideal-calculation"
      ) {
        justAnswerStr =
          justAnswerStr + `(${i + 1}) ${userInput}: not procesed <br>`;

        workStrings =
          workStrings +
          `<br><br>(${
            i + 1
          }) ${userInput}; not processed; Reason/Why?: Unit incompatibility,please ensure that the unit of volume is L, 
      unit of temperature is K,unit of amount of gas is mol, and unit of presure is either atm, torr, or KPa`;
        continue;
      }

      //get known and unknown values
      let knownValues = getKnown(matchValue, userChoice, ...quantityValue);
      let unknownValue = getUnknown(matchValue);

      //make subject formula, substitute values into variables,cancel units, get answer
      const {
        subjectFormula,
        substituteValues,
        cancelledUnit,
        calculatedAnswer,
        thinkAboutString,
        makeSenseString,
      } = CalculateResults(matchValue, userChoice, userInput);

      //concatanate strings
      workStrings =
        workStrings +
        `${inputBeingProcessed} ${boylesEquation}<br><br> ${knownValues} <br>${unknownValue}<br> ${subjectFormula}<br><br>${substituteValues}<br> ${cancelledUnit}<br> Answer:<br> ${calculatedAnswer}<br><br>${thinkAboutString}${makeSenseString}`;
      justAnswerStr =
        justAnswerStr + `(${i + 1}) ${userInput}: ${calculatedAnswer}<br>`;
    } else {
      justAnswerStr =
        justAnswerStr + `(${i + 1}) ${userInput}: not procesed <br>`;

      workStrings =
        workStrings +
        `<br><br>(${
          i + 1
        }) ${userInput} not processed, Reason: input does not conform with format<br>`;
      console.log(userInput, "not verified");
    }
  }
  summaryOutput.innerHTML = justAnswerStr;
  detailOutput.innerHTML = workStrings;
}

function clearScreenAndPasteQuestion(questionValue, questionArray) {
  textareaScreen.innerHTML = "";
  inputQuestion.innerHTML = "";
  summaryOutput.innerHTML = "";
  detailOutput.innerHTML = "";
  //textareaScreen2.innerHTML = "";
  let questionInput = questionArray[questionValue];
  textareaScreen.innerHTML = questionInput[0];
  textareaScreen.focus();
  inputQuestion.innerHTML = questionInput[1];
  inputQuestion.focus();
}

//reset question controller to maximum during next button operation
function resetQuestionValueToMax(questionValue, userChoice = "") {
  let questionType;
  if (userChoice === "boyles-calculation") {
    questionType = boylesQuestionArray;
  } else if (userChoice === "charles-calculation") {
    questionType = charlesQuestionArray;
  } else if (userChoice == "gaylusac-calculation") {
    questionType = gaylusacQuestionArray;
  } else if (userChoice == "avogadro-calculation") {
    questionType = avogadroQuestionArray;
  } else if (userChoice == "combined-calculation") {
    questionType = combinedQuestionArray;
  } else if (userChoice == "ideal-calculation") {
    questionType = idealQuestionArray;
  } else if (userChoice == "dalton-calculation") {
    questionType = daltonQuestionArray;
  } else if (userChoice == "getsigfig") {
    questionType = getSigNumQuestionArray;
  } else if (userChoice == "cal-sigfig") {
    questionType = changeSigNumQuestionArray;
  }
  if (questionValue > questionType.length - 1) {
    questionValue = questionType.length - 1;
  }
  return questionValue;
}

//"cal-sigfig"
//reset question controller to minimum during previous button operation//"avogadro-calculation"
function resetQuestionValueToMin(questionValue) {
  if (questionValue < 0) {
    questionValue = 0;
  }
  return questionValue;
}

//Ball functions
function setSliderAtrribute(
  sliderName,
  max = 1000,
  min = 1,
  step = 1,
  value = 100
) {
  sliderName.setAttribute("min", min);
  sliderName.setAttribute("max", max);
  sliderName.setAttribute("step", step);
  sliderName.setAttribute("value", value);
}

function getSliderAttribute(sliderName, attributeName) {
  let atrr = sliderName.getAttribute(attributeName);
  return atrr;
}

function displayPressureValue(pressureValue) {
  pressure.textContent = `collission watch: ${pressureValue}`;
}

function displayTime(timeValue) {
  timeOutput.textContent = `Time: ${timeValue}  seconds`;
}

function displayVolValue(volValue) {
  outputVolume.textContent = `${volValue} by ${volValue} by ${volValue} liters`;
}

function displayTemValue(tempValue) {
  output.innerHTML = `${tempValue}<sup>o</sup>C`;
}

function displayMoleNum(moleValue) {
  outputMole.textContent = `${moleValue} molecules`;
}
function changeCanvasSize(width, height) {
  canvas.height = width;
  canvas.width = height;
}

function setIntervalFun(moleNumber, speedValue) {
  setIntervalValueComp = setInterval(() => draw(moleNumber), speedValue);
}
//clear all intervals
function stopSetIntervals(setInternalReturnValue) {
  if (setInternalReturnValue) {
    clearInterval(setInternalReturnValue);
  }
}
function getMsTime() {
  let Time = new Date();
  return Time.getTime();
}
function checkTime(initialTime, finalTime) {
  let timeInterval = finalTime - initialTime;
  timeInterval = timeInterval / 1000;
  return timeInterval.toFixed(0);
}

//check for wall collision
function checkWallCollision(x, y) {
  if (x >= canvas.width - ballRadius || x <= ballRadius) {
    x = ballRadius;
    countWallCollion = countWallCollion + 1;
  }
  if (y >= canvas.height - ballRadius || y <= ballRadius) {
    y = ballRadius;
    countWallCollion = countWallCollion + 1;
  }
  return { x, y };
}

//get canvas coordinates as random rumber
function getCordinates() {
  let corArray = [];
  let x = getRndInteger(0, canvas.width);
  let y = getRndInteger(0, canvas.height);
  corArray.push(x, y);
  return corArray;
}

// returns a random number between min and max (both included):
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//draw the molecules
function drawBall(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw(moleNumber = 5) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < moleNumber; i++) {
    let cord = getCordinates();
    let x = cord[0];
    let y = cord[1];

    let corObject = checkWallCollision(x, y);
    drawBall(corObject["x"], corObject["y"]);

    displayPressureValue(
      userChoice == "charles" || userChoice == "avogadro"
        ? "Constant"
        : countWallCollion
    );
  }
  let finalTime = checkTime(iniTime, getMsTime());
  displayTime(finalTime);
}

//Boyles law functions
function hideOrShowElement(elem, displayValue) {
  elem.forEach((elem) => {
    if (elem) {
      elem.style.display = displayValue;
    }
  });
}
function createHtmlElement(element) {
  let elem = document.createElement(element);
  return elem;
}
function createText(text) {
  text = document.createTextNode(text);
  return text;
}

//create canvas,draw text and lines on it
function drawWithCanvas(
  element,
  unknownText1,
  numeratorText1,
  numeratorText2,
  denominatorText
) {
  let canElement = createHtmlElement(element);
  let ctx = canvas.getContext("2d");
  canElement.setAttribute("width", 200);
  canElement.setAttribute("height", 200);
  //<canvas id="myCanvas" width="200" height="100"
  canElement.style.border = "border:1px solid #c3c3c3;";
  ctx.font = "20px Arial";
  //draw unknown
  ctx.fillText(unknownText1, 50, 100);
  //place equal to
  ctx.fillText("=", 70, 100);
  //draw line
  ctx.moveTo(90, 100);
  ctx.lineTo(170, 100);
  //place numerators
  ctx.fillText(numeratorText1, 120, 90);
  ctx.fillText("x", 140, 90);
  ctx.fillText(numeratorText2, 160, 90);
  //place denominator
  ctx.fillText(denominatorText, 140, 110);
  return canElement;
}
inputQuestion.addEventListener("blur", function (e) {
  console.log(e.target);
  formatInput(e.target);
});

inputQuestion.addEventListener("focus", function (e) {
  console.log(e.target);
  formatInput(e.target);
});
function formatInput(elem) {
  console.log("in332222");
  console.log(elem);

  let strdivContent = elem.textContent;
  strdivContent = strdivContent.replace(/(?<=p|v|t|n)1/gi, "<sub>1</sub>"); //(?=1|2)
  console.log(strdivContent, typeof strdivContent);
  strdivContent = strdivContent.replace(/(?<=p|v|t|n)2/gi, "<sub>2</sub>"); //(?=\s|\=)
  console.log(strdivContent, typeof strdivContent);
  //inputQuestion.innerHTML = "";
  elem.innerHTML = `${strdivContent}`;
  console.log(elem.innerHTML);
}
// textareaScreen.addEventListener("blur", function (e) {
//   formatInput(e.target);
// });
// textareaScreen.addEventListener("focus", function (e) {
//   formatInput(e.target);
// });

export { getRndInteger };
