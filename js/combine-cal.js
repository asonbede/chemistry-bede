import {
  formArrayOfSigFigs,
  getSigFig,
  getMinValueOfArray,
  trimString,
} from "./sigfigs.js";
import { boylesCal } from "./boyle-cal.js";
import { charlesCal } from "./charles-cal.js";
import { gaylusacCal } from "./gaylusac-cal.js";
import { avogadroCal } from "./avogadro.js";
import { generalCal } from "./general-law.js";
import { daltonGasLawCal } from "./dalton-cal.js";
import { idealGasCal, getRvalue, drawRvalue } from "./idealgas-cal.js";
const detailOutput = document.querySelector("#detail-output");
//get unknown
function getUnknown(matchArray = []) {
  let result;
  let unknownVariable = matchArray.find(
    (element, index) => matchArray[index + 1] === "?"
  );

  result = `Unknown: <br><span style="color:red">${unknownVariable} = ? ${
    matchArray[matchArray.indexOf(unknownVariable) + 2]
  } </span>`;
  result = `${result}`;

  return result;
}

//get known
function getKnown(matchArray, userChoice, ...arg) {
  let pUnit = matchArray[3];

  let vUnit = matchArray[6];

  let nUnit = matchArray[9];

  let tUnit = matchArray[12];

  let knownString = "Known:";
  matchArray.forEach((element, index) => {
    let unknownValue = matchArray[index + 1];
    let unitValue = matchArray[index + 2];
    if (arg.includes(element.toLowerCase()) && unknownValue != "?") {
      knownString =
        knownString +
        `<br><span style="color:red">${element} = ${unknownValue} ${unitValue}</span>`;
    }
  });
  knownString =
    userChoice === "ideal-calculation"
      ? `${knownString}<br> ${getRvalue(pUnit, vUnit, nUnit, tUnit)[0]}`
      : `${knownString}`;
  return `${knownString}`;
}

//check unitAgreement
// function checkUnitAgreement(matchValue, userInput) {
//   let p1Unit = matchValue[3];

//   let v1Unit = matchValue[6];

//   let p2Unit = matchValue[9];

//   let v2Unit = matchValue[12];
//   let commonPressureUnits = [
//     "torr",
//     "mmHg",
//     "atm",
//     "Pa",
//     "Paschal",
//     "millimeters of mercury",
//     "N/m2",
//   ];
//   let commonVolumeUnits = ["mL", "L", "liters", "milliliters"];
//   if (p1Unit !== p2Unit) {
//     return `${userInput} not processed. Reason:<br> Unit incompatibility.Please ensure that the units of pressure p1 and p2 are the same `;
//   } else if (v1Unit !== v2Unit) {
//     return `${userInput} not processed. Reason:<br> Unit incompatibility.Please ensure that the units of volume v1 and v2 are the same `;
//   } else {
//     return false;
//   }
// }

//check unit agreement
function checkUnitAgreement(matchArray, userInput, userChoice, ...arg) {
  if (userChoice === "ideal-calculation") {
    return false;
  }

  for (let i = 0; i < arg.length; i++) {
    let varArray = [];
    let element = arg[i];
    let firstChar = element.charAt(0);
    matchArray.forEach((elem, index) => {
      if (
        elem.toLowerCase().startsWith(firstChar) &&
        arg.includes(elem.toLowerCase())
      ) {
        let varUnit = matchArray[index + 2].trim().toLowerCase();
        varArray.push(elem, varUnit);
      }
    });

    if (varArray[1] !== varArray[3]) {
      return `${userInput} not processed. Reason:<br> Unit incompatibility.Please ensure that the units of ${varArray[0]} and ${varArray[2]} are the same `;
      //console.log("inside array arrayarray array");
    }
  }

  return false;
}

//check if the user has included only one unknown(?)
function checkUnknown(userInput) {
  let checkUnknownMatch = userInput.match(/\?/g);
  if (checkUnknownMatch === null) {
    return `${userInput} not processed. Reason:<br>No unknown found,input should have one unknown`;
  } else if (checkUnknownMatch.length > 1) {
    return `${userInput} not processed. Reason:<br>More than one unknown found.Only one unknown is allowed per question`;
  } else if (checkUnknownMatch.length === 1) {
    return false;
  }
}

function thinkAboutStr(input1, input2, input3, minsigfig) {
  let thinkAboutString = `Think about the answer:<br><br>
       Why is the answer rounded to ${minsigfig} significant figures?<br>Because the answer should have the same  number of significant figures as the input with the least number of significant figures:<br>
       input ${input1} has ${getSigFig(
    input1.toString(),
    trimString
  )} significant figures<br>
       input ${input2} has ${getSigFig(
    input2.toString(),
    trimString
  )} significant figures<br>
       input ${input3} has ${getSigFig(
    input3.toString(),
    trimString
  )} significant figures<br>
       `;
  return thinkAboutString;
}

function thinkAboutStrIdeal(input1, input2, input3, input4, minsigfig) {
  let thinkAboutString = `Think about the answer:<br><br>
       Why is the answer rounded to ${minsigfig} significant figures?<br>Because the answer should have the same  number of significant figures as the input with the least number of significant figures:<br>
       input ${input1} has ${getSigFig(
    input1.toString(),
    trimString
  )} significant figures<br>
       input ${input2} has ${getSigFig(
    input2.toString(),
    trimString
  )} significant figures<br>
       input ${input3} has ${getSigFig(
    input3.toString(),
    trimString
  )} significant figures<br>

  input ${input4} has ${getSigFig(
    input4.toString(),
    trimString
  )} significant figures<br>
      
       `;
  return thinkAboutString;
}

//explans why the answer is written to the given significant figures
function thinkAboutStrDalton(arr, minsigfig) {
  let thinkAboutString = `Think about the answer:<br><br>
  Why is the answer rounded to ${minsigfig} decimal places?<br>When doing addition and subtraction, the answer should have the same  number of decimal places as the input with the least number of decimal places:<br>
  ${arr.join("\n")}`;
  return thinkAboutString;
}
function thinkAboutStrGen(input1, input2, input3, input4, input5, minsigfig) {
  let thinkAboutString = `Think about the answer:<br><br>
       Why is the answer rounded to ${minsigfig} significant figures?<br>Because the answer should have the same  number of significant figures as the input with the least number of significant figures:<br>
       input ${input1} has ${getSigFig(
    input1.toString(),
    trimString
  )} significant figures<br>
       input ${input2} has ${getSigFig(
    input2.toString(),
    trimString
  )} significant figures<br>
       input ${input3} has ${getSigFig(
    input3.toString(),
    trimString
  )} significant figures<br>

  input ${input4} has ${getSigFig(
    input4.toString(),
    trimString
  )} significant figures<br>

  input ${input5} has ${getSigFig(
    input5.toString(),
    trimString
  )} significant figures<br>
       `;
  return thinkAboutString;
}

//checks agreement with Boyle's law
function queryAnswer(p1, v1, p2, v2) {
  let strValue = "";
  if (Number(v2) > Number(v1) && Number(p2) < Number(p1)) {
    strValue = `<br>Does the answer make sense? <br>The volume is increasing from ${v1} to ${v2} and the pressure is decreasing from ${p1} to ${p2}.<br>
This aggrees with Boyle's Law.<br>
The answer makes sense
 `;
  } else if (Number(v2) < Number(v1) && Number(p2) > Number(p1)) {
    strValue = `<br>Does the answer make sense? <br> The volume is decreasing from ${v1} to ${v2}  and the pressure is increasing from ${p1} to ${p2}.<br>
This aggrees with Boyle's Law.<br>
The answer makes sense`;
  }
  return strValue;
}

//checks agreement with charles' law
function queryAnswerCharles(v1, v2, t1, t2) {
  let strValue = "";
  if (Number(v2) > Number(v1) && Number(t2) > Number(t1)) {
    strValue = `<br>Does the answer make sense? <br>The volume is increasing from ${v1} to ${v2} and the temperature is also increasing from ${t1} to ${t2}.<br>
This aggrees with Charles' Law.<br>
The answer makes sense
 `;
  } else if (Number(v2) < Number(v1) && Number(t2) < Number(t1)) {
    strValue = `<br>Does the answer make sense? <br> The volume is decreasing from ${v1} to ${v2}  and the temperature is also decreasing from ${t1} to ${t2}.<br>
 This aggrees with Charles' Law.<br>
The answer makes sense`;
  }
  return strValue;
}

//checks agreement with gaylusac' law
function queryAnswerGaylusac(p1, p2, t1, t2) {
  let strValue = "";
  if (Number(p2) > Number(p1) && Number(t2) > Number(t1)) {
    strValue = `<br>Does the answer make sense? <br>The pressure is increasing from ${p1} to ${p2} and the temperature is also increasing from ${t1} to ${t2}.<br>
This aggrees with Charles' Law.<br>
The answer makes sense
 `;
  } else if (Number(p2) < Number(p1) && Number(t2) < Number(t1)) {
    strValue = `<br>Does the answer make sense? <br> The pressure is decreasing from ${p1} to ${p2}  and the temperature is also decreasing from ${t1} to ${t2}.<br>
 This aggrees with Gay-Lussac’s law.<br>
The answer makes sense`;
  }
  return strValue;
}

//checks agreement with avogadro's law
function queryAnswerAvogadro(v1, v2, n1, n2) {
  let strValue = "";
  if (Number(v2) > Number(v1) && Number(n2) > Number(n1)) {
    strValue = `<br>Does the answer make sense? <br>The volume is increasing from ${v1} to ${v2} and the number of moles is also increasing from ${n1} to ${n2}.<br>
This aggrees with Avogadro's law.<br>
The answer makes sense
 `;
  } else if (Number(v2) < Number(v1) && Number(n2) < Number(n1)) {
    strValue = `<br>Does the answer make sense? <br> The volume is decreasing from ${v1} to ${v2}  and the number of moles is also decreasing from ${n1} to ${n2}.<br>
 This aggrees with Avogadro’s law.<br>
The answer makes sense`;
  }
  return strValue;
}

//boyles preliminaries
function boyleEqu(userChoice) {
  let stringVar;
  if (userChoice === "boyles-calculation") {
    stringVar = `This is a Boyle's law problem.
     Boyle's Law is  named after the English scientist Robert Boyle who first announced it in 1662.<br>
     According to Boyle's law, the volume of a gas decreases as the pressure increases at constant temperature and pressure:<br>
    in other words, pressure and volume are inversely related.<br>
    The mathematical relationship of Boyle’s Law is:<br>
     P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub> <br>
     P<sub>1</sub> = initial pressure of the gas <br>
     V<sub>1</sub> = initial volume of the gas <br>
     P<sub>2</sub> = final pressure of the gas <br>
     V<sub>2</sub> = final volume of the gas <br>`;
  } else if (userChoice === "charles-calculation") {
    stringVar = `The volume of a gas is directly proportional  to its absolute temperature in Kelvin, not its
temperature in degrees Celsius at constant pressure and amount.
This is  Charles’s law, named after the French scientist Jacques Charles who discovered it.
The mathematical relationship of Charles’s Law is:<br><br>
<svg  height="70" width="120">
    <text x="10"  y="20" style="fill:white">V<tspan style="baseline-shift: sub;">1</tspan></text>
    <line x1="10"  y1="36" x2="30"   y2="36" style="stroke:white;stroke-width:2"/>
    <text x="10"  y="56" style="fill:white">T<tspan style="baseline-shift: sub;">1</tspan></text>
   <text x="38"  y="44" style="fill:white;">=</text>
   <text x="55"  y="20" style="fill:white">V<tspan style="baseline-shift: sub;">2</tspan></text>
   <line x1="57"  y1="36" x2="78"   y2="36" style="stroke:white;stroke-width:2;"/>
   <text x="57"  y="56" style="fill:white">T<tspan style="baseline-shift: sub;">2</tspan></text>
</svg><br><br>Where:<br>
 V<sub>1</sub> = initial volume of the gas<br>
 T<sub>1</sub>  = initial temperature of the gas<br>
 V<sub>2</sub>  = final volume of the gas<br>
 T<sub>2</sub>  = final temperature of the gas`;
  } else if (userChoice === "gaylusac-calculation") {
    stringVar = `The mathematical relationship of Gay-Lussac’s law is:<br><br>
<svg  height="70" width="120">
    <text x="10"  y="20" style="fill:white">P<tspan style="baseline-shift: sub;">1</tspan></text>
    <line x1="10"  y1="36" x2="30"   y2="36" style="stroke:white;stroke-width:2"/>
    <text x="10"  y="56" style="fill:white">T<tspan style="baseline-shift: sub;">1</tspan></text>
   <text x="38"  y="44" style="fill:white;">=</text>
   <text x="55"  y="20" style="fill:white">P<tspan style="baseline-shift: sub;">2</tspan></text>
   <line x1="57"  y1="36" x2="78"   y2="36" style="stroke:white;stroke-width:2;"/>
   <text x="57"  y="56" style="fill:white">T<tspan style="baseline-shift: sub;">2</tspan></text>
</svg><br><br>Where:<br>
 P<sub>1</sub> = initial pressure of the gas<br>
 T<sub>1</sub>  = initial temperature of the gas<br>
 P<sub>2</sub>  = final pressure of the gas<br>
 T<sub>2</sub>  = final temperature of the gas`;
  } else if (userChoice === "avogadro-calculation") {
    stringVar = `The mathematical relationship of Avogadro’s law is:<br><br>
<svg  height="70" width="120">
    <text x="10"  y="20" style="fill:white">V<tspan style="baseline-shift: sub;">1</tspan></text>
    <line x1="10"  y1="36" x2="30"   y2="36" style="stroke:white;stroke-width:2"/>
    <text x="10"  y="56" style="fill:white">N<tspan style="baseline-shift: sub;">1</tspan></text>
   <text x="42"  y="44" style="fill:white;">=</text>
   <text x="60"  y="20" style="fill:white">V<tspan style="baseline-shift: sub;">2</tspan></text>
   <line x1="60"  y1="36" x2="81"   y2="36" style="stroke:white;stroke-width:2;"/>
   <text x="60"  y="56" style="fill:white">N<tspan style="baseline-shift: sub;">2</tspan></text>
</svg><br><br>Where:<br>
 V<sub>1</sub> = initial volume of the gas<br>
 N<sub>1</sub>  = initial number of moles of the gas<br>
 V<sub>2</sub>  = final volume of the gas<br>
 N<sub>2</sub>  = final number of moles of the gas`;
  } else if (userChoice === "combined-calculation") {
    stringVar = `The mathematical relationship of Combined gas law is:<br><br>
    ${drawVarGen2("P1", "V1", "T1", "P2", "V2", "T2")}
   <br>Where:<br>
   P<sub>1</sub> = initial pressure of the gas<br>
 V<sub>1</sub>  = initial volume of the gas<br>
 T<sub>1</sub>  = initial temperature of the gas<br>
 P<sub>2</sub>  = final pressure  of the gas<br>
 V<sub>2</sub>  = final volume of the gas<br>
 T<sub>2</sub>  = final temperature  of the gas `;
  } else if (userChoice === "ideal-calculation") {
    stringVar = `The mathematical relationship of Ideal gas law is:<br>
  PV = nRT
  <br>Where:<br>
 P =  pressure of the gas<br>
 V = volume of the gas<br>
 n = amount of the gas<br>
 R = ideal gas law constant<br>
 T = final temperature  of the gas<br><br>
 Determine the value of R before you proceed.<br>
 <span style="color:red"> When using the ideal gas law(PV = nRT):</span><br>
 <span style="color:red">What should be the value and units of R? </span><br>
<span style="color:red">What should be the units of volumes, pressure,amount and temperature?<br></span>
Volume(V) should always be in the unit of Litres(L) <br>
Amount of gas should always be in the unit of moles(mol)<br>
Temperature(T) should always be expressed in Kelvin(K)<br>
When your units are in the above form,
the value of R  will then  depend on the unit of pressure(p)<br>
if P unit = atm, then: ${drawRvalue(0.0821, "L.atm", "k.mol")} <br>
if P unit = torr or mmHg, then:  ${drawRvalue(
      62.4,
      "L.mmHg",
      "k.mol"
    )} Or  ${drawRvalue(62.4, "L.torr", "k.mol")}<br>
if P KPa = atm, then:  ${drawRvalue(8.31, "L.KPa", "k.mol")} <br>
Now you can proceed.`;
  } else if (userChoice === "dalton-calculation") {
    stringVar = `Dalton’s law of partial pressures states that the total pressure of a gas mixture,Pt, is equal to the sum of the partial pressures of the components(P1 + P2 + P3 ...):<br>
  Pt = P1 + P2 + P3 + … <br>
  Where:<br>
  Pt = Total pressure.<br>
  P1, P2, P3... are partial pressures of the components
  `;
  }

  return stringVar;
}

//
//Make unknowm variable  subject of the formula,substitute variable,cancel unit,calculate answer
function CalculateResults(matchArray = [], gasLawType, userInput) {
  let result;
  switch (gasLawType) {
    case "boyles-calculation":
      result = boylesCal(matchArray);
      break;
    case "charles-calculation":
      result = charlesCal(matchArray);
      break;
    case "gaylusac-calculation":
      result = gaylusacCal(matchArray); //avogadroCal
      break;
    case "avogadro-calculation":
      result = avogadroCal(matchArray); //avogadroCal
      break;

    case "combined-calculation":
      result = generalCal(matchArray); //avogadroCal
      break;

    case "ideal-calculation":
      result = idealGasCal(matchArray); //avogadroCal daltonGasLawCal
      break;
    case "dalton-calculation":
      result = daltonGasLawCal(matchArray, userInput); //avogadroCal daltonGasLawCal
      break;

    default:
      break;
  }
  return result;
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
  let ctx = canElement.getContext("2d");
  canElement.setAttribute("width", 200);
  canElement.setAttribute("height", 200);
  //<canvas id="myCanvas" width="200" height="100"
  canElement.style.border = "border:3px solid blue;";
  canElement.style.zIndex = 8;
  ctx.font = "20px Arial";
  //draw unknown
  ctx.fillText(unknownText1, 50, 100);
  //place equal to
  ctx.fillText("=", 70, 100);
  //draw line
  ctx.moveTo(90, 100);
  ctx.lineTo(170, 100);
  ctx.stroke();
  //place numerators
  ctx.fillText(numeratorText1, 120, 90);
  ctx.fillText("x", 140, 90);
  ctx.fillText(numeratorText2, 160, 90);
  //place denominator
  ctx.fillText(denominatorText, 140, 110);
  //detailOutput.appendChild(canElement);
  let body = document.getElementsByTagName("body")[0];
  body.appendChild(canElement);
  return canElement;
}

//draw horizontal between two numerators and a denominator
function drawHorizonBetweenVar(denoText, ...arg) {
  const [unknownText, numerator1, numerator2] = arg;
  let horiLineLen = numerator1.length * 18 + numerator2.length * 18;

  return `${unknownText.charAt(0)}<sub>${unknownText.charAt(
    1
  )}</sub> = (${numerator1.charAt(0)}<sub>${numerator1.charAt(
    1
  )}</sub> x ${numerator2.charAt(0)}<sub>${numerator2.charAt(
    1
  )}</sub>)<br><hr style= "width:${horiLineLen}px; margin-left:50px;height:3px ;background:black"><span style="margin-left:${horiLineLen}px">${denoText.charAt(
    0
  )}<sub>${denoText.charAt(1)}</sub></span>`;
}

function drawHorizonBetweenVar2(denoText, ...arg) {
  const [unknownText, numerator1, numerator2] = arg;
  let horiLineLen =
    numerator1.toString().length * 13 + numerator2.toString().length * 13;

  return `${unknownText.charAt(0)}<sub>${unknownText.charAt(
    1
  )}</sub> = (${numerator1} x ${numerator2})<br><hr style= "width:${horiLineLen}px;height:3px; margin-left:50px;background:black"><span style="margin-left:${
    horiLineLen / 1.5
  }px">${denoText}</span>`;
}

function horiLineBetweenOneVar(denoText, numerator, divId) {
  return `<div id=${divId}>${numerator.charAt(0)}<sub>${numerator.charAt(
    1
  )}</sub> <br><hr style= "width:15px;height:2px; background:black">${denoText.charAt(
    0
  )}<sub>${denoText.charAt(1)}</sub></div>`;
}

//change exponential number from the form 56e+45 to the form 56 x 10exponent
function removeEFromNum(numStr) {
  if (numStr.indexOf("e+") > -1 || numStr.indexOf("e-") > -1) {
    let matchRegex = /(\d+\.?\d*)\s*e\+?\-?(\d+)/i; // 2e+1 string
    let matchArray = numStr.match(matchRegex);
    console.log(matchArray, "first,first");
    if (matchArray) {
      console.log(matchArray, "second,second");
      let coefficienNum = matchArray[1];
      let exponentNum = matchArray[2];
      numStr = `${coefficienNum} x 10<sup>${exponentNum}</sup>`;
      return numStr;
    }
  }
  return numStr;
}

function drawVar(unknown, num1, num2, deno) {
  return `<svg  height="100" width="100%">
  <text x="4"  y="50"  style="fill:white">${unknown.charAt(
    0
  )}<tspan style="baseline-shift: sub;">${unknown.charAt(1)}</tspan></text>
  <text x="30"  y="50" style="fill:white;">=</text>
 <text x="50"  y="24"   style="fill:white">${num1.charAt(
   0
 )}<tspan style="baseline-shift: sub;">${num1.charAt(1)}</tspan></text>
 <text x="82"  y="24"  style="fill:white">x</text>
 <text x="100"  y="24"   style="fill:white">${num2.charAt(
   0
 )}<tspan style="baseline-shift: sub;">${num2.charAt(1)}</tspan></text>
 <line x1="50"  y1="47" x2="120"   y2="47" style="stroke:white;"/>
 <text x="68"  y="70"   style="fill:white">${deno.charAt(
   0
 )}<tspan style="baseline-shift: sub;">${deno.charAt(1)}</tspan></text>
 </svg>`;
}

//draw combine law parameter like P1V1/T1 = P2V2/T2
function drawVarGen2(num1, num2, deno1, num3, num4, deno2) {
  return `<svg  height="100" width="100%">
  
  
 <text x="50"  y="24"   style="fill:white">${num1.charAt(
   0
 )}<tspan style="baseline-shift: sub;">${num1.charAt(1)}</tspan></text>
<text x="70"  y="24"   style="fill:white">${num2.charAt(
    0
  )}<tspan style="baseline-shift: sub;">${num2.charAt(1)}</tspan></text>
 <line x1="50"  y1="47" x2="120"   y2="47" style="stroke:white;"/>
 <text x="70"  y="70"   style="fill:white">${deno1.charAt(
   0
 )}<tspan style="baseline-shift: sub;">${deno1.charAt(1)}</tspan></text>
 <text x="130"  y="50" style="fill:white;">=</text>

 <text x="160"  y="24"   style="fill:white">${num3.charAt(
   0
 )}<tspan style="baseline-shift: sub;">${num3.charAt(1)}</tspan></text>

<text x="180"  y="24"   style="fill:white">${num4.charAt(
    0
  )}<tspan style="baseline-shift: sub;">${num4.charAt(1)}</tspan></text>
<line x1="160"  y1="47" x2="230"   y2="47" style="stroke:white;"/>

<text x="180"  y="70"   style="fill:white">${deno2.charAt(
    0
  )}<tspan style="baseline-shift: sub;">${deno2.charAt(1)}</tspan></text>

 </svg>`;
}

//draw subject formulla e.g P1 = P2 x V2 x T1/V1 x T2
function drawVarGen(unknown, num1, num2, num3, deno1, deno2) {
  return `<svg  height="100" width="100%">
  <text x="4"  y="50"  style="fill:white">${unknown.charAt(
    0
  )}<tspan style="baseline-shift: sub;">${unknown.charAt(1)}</tspan></text>
  <text x="30"  y="50" style="fill:white;">=</text>
 <text x="50"  y="24"   style="fill:white">${num1.charAt(
   0
 )}<tspan style="baseline-shift: sub;">${num1.charAt(1)}</tspan></text>
 <text x="82"  y="24"  style="fill:white">x</text>
 <text x="100"  y="24"   style="fill:white">${num2.charAt(
   0
 )}<tspan style="baseline-shift: sub;">${num2.charAt(1)}</tspan></text>
 <text x="140"  y="24"  style="fill:white">x</text>

 <text x="162"  y="24"   style="fill:white">${num3.charAt(
   0
 )}<tspan style="baseline-shift: sub;">${num3.charAt(1)}</tspan></text>
 <line x1="50"  y1="47" x2="200"   y2="47" style="stroke:white;"/>
 <text x="68"  y="70"   style="fill:white">${deno1.charAt(
   0
 )}<tspan style="baseline-shift: sub;">${deno1.charAt(1)}</tspan></text>
 <text x="110"  y="70"  style="fill:white">x</text>
 <text x="150"  y="70"   style="fill:white">${deno2.charAt(
   0
 )}<tspan style="baseline-shift: sub;">${deno2.charAt(1)}</tspan></text>
 </svg>`;
}

function drawVarUnits(unknown, num1, num2, deno) {
  let lineLength = (num1 + num2).length * 18;
  return `<svg  height="100" width="100%">
  <text x="4"  y="50"  style="fill:white">${unknown.charAt(
    0
  )}<tspan style="baseline-shift: sub;">${unknown.charAt(1)}</tspan></text>
  <text x="30"  y="50" style="fill:white">=</text>
 <text x="50"  y="30"   style="fill:white">${num1}</text>
 <text x=${110 + num1.length * 7}  y="30"  style="fill:white">x</text>
 <text x=${130 + num1.length * 9}  y="30"  style="fill:white">${num2}</text>
 <line x1="50"  y1="47" x2=${50 + lineLength}   y2="47" style="stroke:white;"/>
 <text x="68"  y="70"  style="fill:white">${deno}</text>
 </svg>`;
}

//draw subject formulla e.g P1 = P2 unit x V2 unit x T1 unit/V1 unit x T2 unit
function drawVarUnitsGen(unknown, num1, num2, num3, deno1, deno2) {
  let lineLengthNum = (num1 + num2 + num3).length * 20;
  let lineLengthDeno = (deno1 + deno2).length * 20;
  let lineLength =
    lineLengthNum > lineLengthDeno ? lineLengthNum : lineLengthDeno;

  return `<svg  height="100" width="100%">
  <text x="4"  y="50"  style="fill:white">${unknown.charAt(
    0
  )}<tspan style="baseline-shift: sub;">${unknown.charAt(1)}</tspan></text>
  <text x="35"  y="50" style="fill:white">=</text>
  <text x="55" y="30" style="fill:white">
  <tspan> ${num1}&nbsp; </tspan>
  
  <tspan>x &nbsp;</tspan>
  <tspan>${num2}&nbsp;</tspan>
  <tspan>x&nbsp;</tspan>
  <tspan>${num3}</tspan>

</text>
<line x1="55"  y1="47" x2=${lineLength}   y2="47" style="stroke:white;"/>
<text x="65" y="70" style="fill:white">
  <tspan> ${deno1}&nbsp; </tspan>
  
  <tspan>x &nbsp;</tspan>
  <tspan>${deno2};</tspan>
 </text>
</svg>`;
}

export {
  getUnknown,
  getKnown,
  checkUnitAgreement,
  checkUnknown,
  thinkAboutStr,
  queryAnswer,
  boyleEqu,
  CalculateResults,
  drawHorizonBetweenVar,
  drawHorizonBetweenVar2,
  queryAnswerCharles,
  removeEFromNum,
  drawVar,
  drawVarGen,
  drawVarUnits,
  drawVarUnitsGen,
  queryAnswerGaylusac,
  queryAnswerAvogadro,
  thinkAboutStrGen,
  thinkAboutStrIdeal,
  thinkAboutStrDalton,
};
