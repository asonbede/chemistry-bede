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
  removeEFromNum,
  queryAnswerGaylusac,
} from "./combine-cal.js";

function gaylusacCal(matchArray) {
  let subjectFormula;
  let substituteValues;
  let calculatedAnswer;
  let calculatedAnsNormal;
  let cancelledUnit;
  let thinkAboutString;
  let p1Value = matchArray[2];
  let p1Unit = matchArray[3];
  let t1Value = matchArray[5];
  let t1Unit = matchArray[6];
  let p2Value = matchArray[8];
  let p2Unit = matchArray[9];
  let t2Value = matchArray[11];
  let t2Unit = matchArray[12];
  let getMinSigFigs;
  let makeSenseString;
  matchArray.forEach((element, index) => {
    let unknownValue = matchArray[index + 1];
    // let unitValue = matchArray[index + 2];

    //p1 is of interest
    if (element.toLowerCase() === "p1" && unknownValue === "?") {
      subjectFormula = `Make the unknown(P<sub>1</sub>) subject of the formula:<br>${drawVar(
        "P1",
        "P2",
        "T1",
        "T2"
      )}`; //`Making the unknown(P1) subject of the formula:<br>P<sub>1</sub> = (P<sub>2</sub> * V<sub>2</sub>)/V<sub>1</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "P1",
        p2Value + " " + p2Unit,
        t1Value + " " + t1Unit,
        t2Value + " " + t2Unit
      )}`; //`Substituting values into variables:<br>P<sub>1</sub> = (${p2Value} ${p2Unit} * ${v2Value} ${v2Unit})/${v1Value} ${v1Unit}`;
      cancelledUnit = `Units of Temperatures: T<sub>1</sub> and T<sub>2</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p2Value,
        t1Value,
        t2Value
      );
      calculatedAnswer = (Number(p2Value) * Number(t1Value)) / Number(t2Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswerGaylusac(
        calculatedAnswer,
        p2Value,
        t1Value,
        t2Value
      );
      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);

      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `P<sub>1</sub> = ${calculatedAnsNormal} ${p1Unit}  Or<br> ${calculatedAnswer} ${p1Unit} to ${getMinSigFigs} sigificant figures`;

      thinkAboutString = thinkAboutStr(
        p2Value,
        t1Value,
        t2Value,
        getMinSigFigs
      );

      //t1 is of interest
    } else if (element.toLowerCase() === "t1" && unknownValue === "?") {
      subjectFormula = `Make the unknown(T<sub>1</sub>) subject of the formula:<br>${drawVar(
        "T1",
        "P1",
        "T2",
        "P2"
      )}`; //`Making the unknown(T1) subject of the formula:<br> V<sub>1</sub> = (P<sub>2</sub> * V<sub>2</sub>)/P<sub>1</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "T1",
        p1Value + " " + p1Unit,
        t2Value + " " + t2Unit,
        p2Value + " " + p2Unit
      )}`; //Substituting these values into Boyle’s law variables, we get:<br>V<sub>1</sub> = (${p2Value} ${p2Unit} * ${v2Value} ${v2Unit})/${p1Value} ${p1Unit}`;
      cancelledUnit = `Units of pressures: P<sub>2</sub> and P<sub>1</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p1Value,
        t2Value,
        p2Value
      );
      calculatedAnswer = (Number(p1Value) * Number(t2Value)) / Number(p2Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswerGaylusac(
        p1Value,
        p2Value,
        calculatedAnswer,
        t2Value
      );

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `T<sub>1</sub> = ${calculatedAnsNormal} ${t1Unit}  Or<br>  ${calculatedAnswer} ${t1Unit} to ${getMinSigFigs} significant figures`;
      thinkAboutString = thinkAboutStr(
        p1Value,
        t2Value,
        p2Value,
        getMinSigFigs
      );

      //p2 is of interest
    } else if (element.toLowerCase() === "p2" && unknownValue === "?") {
      subjectFormula = `Make the unknown(P<sub>1</sub>) subject of the formula:<br>${drawVar(
        "P2",
        "P1",
        "T2",
        "T1"
      )}`; //`Making the unknown(P2) subject of the formula:<br>P<sub>2</sub> = (P<sub>1</sub> * V<sub>1</sub>)/V<sub>2</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "P2",
        p1Value + " " + p1Unit,
        t2Value + " " + t2Unit,
        t1Value + " " + t1Unit
      )}`; //Substituting values into variables:<br>P<sub>2</sub> = (${p1Value} ${p1Unit} * ${v1Value} ${v1Unit})/${v2Value} ${v2Unit}`;
      cancelledUnit = `Units of Temperatures: T<sub>1</sub> and T<sub>2</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p1Value,
        t2Value,
        t1Value
      );
      calculatedAnswer = (Number(p1Value) * Number(t2Value)) / Number(t1Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswerGaylusac(
        p1Value,
        calculatedAnswer,
        t1Value,
        t2Value
      );

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `P<sub>2</sub> = ${calculatedAnsNormal} ${p2Unit}  Or<br>  ${calculatedAnswer} ${p2Unit} to ${getMinSigFigs} significant figures`;
      thinkAboutString = thinkAboutStr(
        p1Value,
        t1Value,
        t2Value,
        getMinSigFigs
      );

      //t2 is of interest
    } else if (element.toLowerCase() === "t2" && unknownValue === "?") {
      subjectFormula = `Make the unknown(T<sub>2</sub>) subject of the formula:<br>${drawVar(
        "T2",
        "P2",
        "T1",
        "P1"
      )}`; //`Making the unknown(V2) subject of the formula:<br>V<sub>2</sub> = (P<sub>1</sub> * V<sub>1</sub>)/P<sub>2</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "T2",
        p2Value + " " + p2Unit,
        t1Value + " " + t1Unit,
        p1Value + " " + p1Unit
      )}`; //`Substituting values into variables:<br>V<sub>2</sub> = (${p1Value} ${p1Unit} * ${v1Value} ${v1Unit})/${p2Value} ${p2Unit}`;
      cancelledUnit = `Units of pressures: P<sub>1</sub> and P<sub>2</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p1Value,
        t1Value,
        p2Value
      );
      calculatedAnswer = (Number(p2Value) * Number(t1Value)) / Number(p1Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswerGaylusac(
        p1Value,
        p2Value,
        t1Value,
        calculatedAnswer
      );

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `T<sub>2</sub> = ${calculatedAnsNormal} ${t2Unit}  Or<br>   ${calculatedAnswer} ${t2Unit} to ${getMinSigFigs} sigificant figures`;
      thinkAboutString = thinkAboutStr(
        p1Value,
        t1Value,
        p2Value,
        getMinSigFigs
      );
    }
  });
  return {
    subjectFormula,
    substituteValues,
    cancelledUnit,
    calculatedAnswer,
    thinkAboutString,
    makeSenseString,
  };
}
export { gaylusacCal };
