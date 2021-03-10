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
  queryAnswerAvogadro,
} from "./combine-cal.js";

function avogadroCal(matchArray) {
  let subjectFormula;
  let substituteValues;
  let calculatedAnswer;
  let calculatedAnsNormal;
  let cancelledUnit;
  let thinkAboutString;
  let v1Value = matchArray[2];

  let v1Unit = matchArray[3];
  let n1Value = matchArray[5];
  let n1Unit = matchArray[6];
  let v2Value = matchArray[8];
  //console.log(p2Value, typeof p2Value);
  let v2Unit = matchArray[9];
  let n2Value = matchArray[11];
  let n2Unit = matchArray[12];
  let getMinSigFigs;
  let makeSenseString;
  matchArray.forEach((element, index) => {
    let unknownValue = matchArray[index + 1];
    // let unitValue = matchArray[index + 2];

    //V1 is of interest
    if (element.toLowerCase() === "v1" && unknownValue === "?") {
      subjectFormula = `Make the unknown(P<sub>1</sub>) subject of the formula:<br>${drawVar(
        "V1",
        "V2",
        "N1",
        "N2"
      )}`; //`Making the unknown(P1) subject of the formula:<br>P<sub>1</sub> = (P<sub>2</sub> * V<sub>2</sub>)/V<sub>1</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "v1",
        v2Value + " " + v2Unit,
        n1Value + " " + n1Unit,
        n2Value + " " + n2Unit
      )}`; //`Substituting values into variables:<br>P<sub>1</sub> = (${p2Value} ${p2Unit} * ${v2Value} ${v2Unit})/${v1Value} ${v1Unit}`;
      cancelledUnit = `Units of volumes: N<sub>1</sub> and N<sub>2</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        v2Value,
        n1Value,
        n2Value
      );
      calculatedAnswer = (Number(v2Value) * Number(n1Value)) / Number(n2Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswerAvogadro(
        calculatedAnswer,
        v2Value,
        n1Value,
        n2Value
      );
      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);

      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `V<sub>1</sub> = ${calculatedAnsNormal} ${v1Unit}  Or<br> ${calculatedAnswer} ${v1Unit} to ${getMinSigFigs} sigificant figures`;

      thinkAboutString = thinkAboutStr(
        v1Value,
        n1Value,
        n2Value,
        getMinSigFigs
      );

      //n1 is of interest
    } else if (element.toLowerCase() === "n1" && unknownValue === "?") {
      subjectFormula = `Make the unknown(N<sub>1</sub>) subject of the formula:<br>${drawVar(
        "N1",
        "V1",
        "N2",
        "V2"
      )}`; //`Making the unknown(V1) subject of the formula:<br> V<sub>1</sub> = (P<sub>2</sub> * V<sub>2</sub>)/P<sub>1</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "N1",
        v1Value + " " + v1Unit,
        n2Value + " " + n2Unit,
        v2Value + " " + v2Unit
      )}`; //Substituting these values into Boyle’s law variables, we get:<br>V<sub>1</sub> = (${p2Value} ${p2Unit} * ${v2Value} ${v2Unit})/${p1Value} ${p1Unit}`;
      cancelledUnit = `Units of pressures: V<sub>2</sub> and V<sub>1</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        v1Value,
        n2Value,
        v2Value
      );
      calculatedAnswer = (Number(v1Value) * Number(n2Value)) / Number(v2Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswerAvogadro(
        v1Value,
        v2Value,
        calculatedAnswer,
        n2Value
      );

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `V<sub>1</sub> = ${calculatedAnsNormal} ${n1Unit}  Or<br>  ${calculatedAnswer} ${n1Unit} to ${getMinSigFigs} figures`;
      thinkAboutString = thinkAboutStr(
        v1Value,
        v2Value,
        n2Value,
        getMinSigFigs
      );

      //v2 is of interest
    } else if (element.toLowerCase() === "v2" && unknownValue === "?") {
      subjectFormula = `Make the unknown(P<sub>1</sub>) subject of the formula:<br>${drawVar(
        "V2",
        "V1",
        "N2",
        "N1"
      )}`; //`Making the unknown(P2) subject of the formula:<br>P<sub>2</sub> = (P<sub>1</sub> * V<sub>1</sub>)/V<sub>2</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "V2",
        v1Value + " " + v1Unit,
        n2Value + " " + n2Unit,
        n1Value + " " + n1Unit
      )}`; //Substituting values into variables:<br>P<sub>2</sub> = (${p1Value} ${p1Unit} * ${v1Value} ${v1Unit})/${v2Value} ${v2Unit}`;
      cancelledUnit = `Units of moles: N<sub>2</sub> and N<sub>1</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        v1Value,
        n2Value,
        n1Value
      );
      calculatedAnswer = (Number(v1Value) * Number(n2Value)) / Number(n1Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswerAvogadro(
        v1Value,
        calculatedAnswer,
        n1Value,
        n2Value
      );

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `V<sub>2</sub> = ${calculatedAnsNormal} ${v2Unit}  Or<br>  ${calculatedAnswer} ${v2Unit} to ${getMinSigFigs} figures`;
      thinkAboutString = thinkAboutStr(
        v1Value,
        n2Value,
        n1Value,
        getMinSigFigs
      );

      //n2 is of interest
    } else if (element.toLowerCase() === "n2" && unknownValue === "?") {
      subjectFormula = `Make the unknown(N<sub>2</sub>) subject of the formula:<br>${drawVar(
        "N2",
        "V2",
        "N1",
        "V1"
      )}`; //`Making the unknown(V2) subject of the formula:<br>V<sub>2</sub> = (P<sub>1</sub> * V<sub>1</sub>)/P<sub>2</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "N2",
        v2Value + " " + v2Unit,
        n1Value + " " + n1Unit,
        v1Value + " " + v1Unit
      )}`; //`Substituting values into variables:<br>V<sub>2</sub> = (${p1Value} ${p1Unit} * ${v1Value} ${v1Unit})/${p2Value} ${p2Unit}`;
      cancelledUnit = `Units of volumes: V2<sub>2</sub> and V<sub>1</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        v2Value,
        n1Value,
        v1Value
      );
      calculatedAnswer = (Number(v2Value) * Number(n1Value)) / Number(v1Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswerAvogadro(
        v1Value,
        v2Value,
        n1Value,
        calculatedAnswer
      );

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `V<sub>2</sub> = ${calculatedAnsNormal} ${v2Unit}  Or<br>   ${calculatedAnswer} ${v2Unit} to ${getMinSigFigs} sigificant figures`;
      thinkAboutString = thinkAboutStr(
        v2Value,
        n1Value,
        v1Value,
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
export { avogadroCal };
