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
} from "./combine-cal.js";

function boylesCal(matchArray) {
  let subjectFormula;
  let substituteValues;
  let calculatedAnswer;
  let calculatedAnsNormal;
  let cancelledUnit;
  let thinkAboutString;
  let p1Value = matchArray[2];

  let p1Unit = matchArray[3];
  let v1Value = matchArray[5];
  let v1Unit = matchArray[6];
  let p2Value = matchArray[8];
  //console.log(p2Value, typeof p2Value);
  let p2Unit = matchArray[9];
  let v2Value = matchArray[11];
  let v2Unit = matchArray[12];
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
        "V2",
        "V1"
      )}`; //`Making the unknown(P1) subject of the formula:<br>P<sub>1</sub> = (P<sub>2</sub> * V<sub>2</sub>)/V<sub>1</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "P1",
        p2Value + " " + p2Unit,
        v2Value + " " + v2Unit,
        v1Value + " " + v1Unit
      )}`; //`Substituting values into variables:<br>P<sub>1</sub> = (${p2Value} ${p2Unit} * ${v2Value} ${v2Unit})/${v1Value} ${v1Unit}`;
      cancelledUnit = `Units of volumes: V<sub>2</sub> and V<sub>1</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p2Value,
        v2Value,
        v1Value
      );
      calculatedAnswer = (Number(p2Value) * Number(v2Value)) / Number(v1Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswer(
        calculatedAnswer,
        v1Value,
        p2Value,
        v2Value
      );
      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);

      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `P<sub>1</sub> = ${calculatedAnsNormal} ${p1Unit}  Or<br> ${calculatedAnswer} ${p1Unit} to ${getMinSigFigs} sigificant figures`;

      thinkAboutString = thinkAboutStr(
        p2Value,
        v2Value,
        v1Value,
        getMinSigFigs
      );

      //v1 is of interest
    } else if (element.toLowerCase() === "v1" && unknownValue === "?") {
      subjectFormula = `Make the unknown(V<sub>1</sub>) subject of the formula:<br>${drawVar(
        "V1",
        "P2",
        "V2",
        "P1"
      )}`; //`Making the unknown(V1) subject of the formula:<br> V<sub>1</sub> = (P<sub>2</sub> * V<sub>2</sub>)/P<sub>1</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "V1",
        p2Value + " " + p2Unit,
        v2Value + " " + v2Unit,
        p1Value + " " + p1Unit
      )}`; //Substituting these values into Boyle’s law variables, we get:<br>V<sub>1</sub> = (${p2Value} ${p2Unit} * ${v2Value} ${v2Unit})/${p1Value} ${p1Unit}`;
      cancelledUnit = `Units of pressures: P<sub>2</sub> and P<sub>1</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p2Value,
        v2Value,
        p1Value
      );
      calculatedAnswer = (Number(p2Value) * Number(v2Value)) / Number(p1Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswer(
        p1Value,
        calculatedAnswer,
        p2Value,
        v2Value
      );

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `V<sub>1</sub> = ${calculatedAnsNormal} ${v1Unit}  Or<br>  ${calculatedAnswer} ${v1Unit} to ${getMinSigFigs} figures`;
      thinkAboutString = thinkAboutStr(
        p2Value,
        v2Value,
        p1Value,
        getMinSigFigs
      );

      //p2 is of interest
    } else if (element.toLowerCase() === "p2" && unknownValue === "?") {
      subjectFormula = `Make the unknown(P<sub>1</sub>) subject of the formula:<br>${drawVar(
        "P2",
        "P1",
        "V1",
        "V2"
      )}`; //`Making the unknown(P2) subject of the formula:<br>P<sub>2</sub> = (P<sub>1</sub> * V<sub>1</sub>)/V<sub>2</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "P2",
        p1Value + " " + p1Unit,
        v1Value + " " + v1Unit,
        v2Value + " " + v2Unit
      )}`; //Substituting values into variables:<br>P<sub>2</sub> = (${p1Value} ${p1Unit} * ${v1Value} ${v1Unit})/${v2Value} ${v2Unit}`;
      cancelledUnit = `Units of volumes: V<sub>1</sub> and V<sub>2</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p1Value,
        v1Value,
        v2Value
      );
      calculatedAnswer = (Number(p1Value) * Number(v1Value)) / Number(v2Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswer(
        p1Value,
        v1Value,
        calculatedAnswer,
        v2Value
      );

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `P<sub>2</sub> = ${calculatedAnsNormal} ${p2Unit}  Or<br>  ${calculatedAnswer} ${p2Unit} to ${getMinSigFigs} figures`;
      thinkAboutString = thinkAboutStr(
        p1Value,
        v1Value,
        v2Value,
        getMinSigFigs
      );

      //v2 is of interest
    } else if (element.toLowerCase() === "v2" && unknownValue === "?") {
      subjectFormula = `Make the unknown(V<sub>2</sub>) subject of the formula:<br>${drawVar(
        "V2",
        "P1",
        "V1",
        "P2"
      )}`; //`Making the unknown(V2) subject of the formula:<br>V<sub>2</sub> = (P<sub>1</sub> * V<sub>1</sub>)/P<sub>2</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "V1",
        p1Value + " " + p1Unit,
        v1Value + " " + v1Unit,
        p2Value + " " + p2Unit
      )}`; //`Substituting values into variables:<br>V<sub>2</sub> = (${p1Value} ${p1Unit} * ${v1Value} ${v1Unit})/${p2Value} ${p2Unit}`;
      cancelledUnit = `Units of pressures: P<sub>1</sub> and P<sub>2</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p1Value,
        v1Value,
        p2Value
      );
      calculatedAnswer = (Number(p1Value) * Number(v1Value)) / Number(p2Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswer(
        p1Value,
        v1Value,
        p2Value,
        calculatedAnswer
      );

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `V<sub>2</sub> = ${calculatedAnsNormal} ${v2Unit}  Or<br>   ${calculatedAnswer} ${v2Unit} to ${getMinSigFigs} sigificant figures`;
      thinkAboutString = thinkAboutStr(
        p1Value,
        v1Value,
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
export { boylesCal };
