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
} from "./combine-cal.js";

function generalCal(matchArray) {
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
  let t1Value = matchArray[8];
  let t1Unit = matchArray[9];
  let p2Value = matchArray[11];
  let p2Unit = matchArray[12];

  let v2Value = matchArray[14];
  let v2Unit = matchArray[15];

  let t2Value = matchArray[17];
  let t2Unit = matchArray[18];
  let getMinSigFigs;
  let makeSenseString;
  matchArray.forEach((element, index) => {
    let unknownValue = matchArray[index + 1];
    // let unitValue = matchArray[index + 2];

    //P1 is of interest
    if (element.toLowerCase() === "p1" && unknownValue === "?") {
      subjectFormula = `Make the unknown(P<sub>1</sub>) subject of the formula:<br>${drawVarGen(
        "P1",
        "P2",
        "V2",
        "T1",
        "V1",
        "T2"
      )}`; //`Making the unknown(P1) subject of the formula:<br>P<sub>1</sub> = (P<sub>2</sub> * V<sub>2</sub>)/V<sub>1</sub>`;
      substituteValues = `Substitute known values into variables:<br> ${drawVarUnitsGen(
        "P1",
        p2Value + " " + p2Unit,
        v2Value + " " + v2Unit,
        t1Value + " " + t1Unit,
        v1Value + " " + v1Unit,
        t2Value + " " + t2Unit
      )}`; //`Substituting values into variables:<br>P<sub>1</sub> = (${p2Value} ${p2Unit} * ${v2Value} ${v2Unit})/${v1Value} ${v1Unit}`;
      cancelledUnit = `Units of volumes: V<sub>1</sub> and V<sub>2</sub> and temperatures: T<sub>1</sub> and T<sub>2</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p2Value,
        v2Value,
        t1Value,
        v1Value,
        t2Value
      );
      calculatedAnswer =
        (Number(p2Value) * Number(v2Value) * Number(t1Value)) /
        (Number(v1Value) * Number(t2Value));
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = "";
      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);

      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `P<sub>1</sub> = ${calculatedAnsNormal} ${p1Unit}  Or<br> ${calculatedAnswer} ${p1Unit} to ${getMinSigFigs} sigificant figures`;

      thinkAboutString = thinkAboutStrGen(
        p2Value,
        v2Value,
        t1Value,
        v1Value,
        t2Value,
        getMinSigFigs
      );

      //V1 is of interest
    } else if (element.toLowerCase() === "v1" && unknownValue === "?") {
      subjectFormula = `Make the unknown(V<sub>1</sub>) subject of the formula:<br>${drawVarGen(
        "V1",
        "P2",
        "V2",
        "T1",
        "P1",
        "T2"
      )}`; //`Making the unknown(V1) subject of the formula:<br> V<sub>1</sub> = (P<sub>2</sub> * V<sub>2</sub>)/P<sub>1</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnitsGen(
        "V1",
        p2Value + " " + p2Unit,
        v2Value + " " + v2Unit,
        t1Value + " " + t1Unit,
        p1Value + " " + p1Unit,
        t2Value + " " + t2Unit
      )}`; //Substituting these values into Boyle’s law variables, we get:<br>V<sub>1</sub> = (${p2Value} ${p2Unit} * ${v2Value} ${v2Unit})/${p1Value} ${p1Unit}`;
      cancelledUnit = `Units of pressures: P<sub>2</sub> and P<sub>1</sub>  and of temperatures  T<sub>1</sub> and T<sub>2</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p2Value,
        v2Value,
        t1Value,
        p1Value,
        t2Value
      );
      calculatedAnswer =
        (Number(p2Value) * Number(v2Value) * Number(t1Value)) /
        (Number(p1Value) * Number(t2Value));
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = "";
      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `V<sub>1</sub> = ${calculatedAnsNormal} ${v1Unit}  Or<br>  ${calculatedAnswer} ${v1Unit} to ${getMinSigFigs} figures`;
      thinkAboutString = thinkAboutStr(
        p2Value,
        v2Value,
        t1Value,
        p1Value,
        t2Value,
        getMinSigFigs
      );

      //t1 is of interest
    } else if (element.toLowerCase() === "t1" && unknownValue === "?") {
      subjectFormula = `Make the unknown(T<sub>1</sub>) subject of the formula:<br>${drawVarGen(
        "T1",
        "P1",
        "V1",
        "T2",
        "V2",
        "P2"
      )}`; //`Making the unknown(P2) subject of the formula:<br>P<sub>2</sub> = (P<sub>1</sub> * V<sub>1</sub>)/V<sub>2</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnitsGen(
        "T1",
        p1Value + " " + p1Unit,
        v1Value + " " + v1Unit,
        t2Value + " " + t2Unit,
        p2Value + " " + p2Unit,
        v2Value + " " + v2Unit
      )}`; //Substituting values into variables:<br>P<sub>2</sub> = (${p1Value} ${p1Unit} * ${v1Value} ${v1Unit})/${v2Value} ${v2Unit}`;
      cancelledUnit = `Units of pressures: P<sub>1</sub> and P<sub>2</sub> and of volumes: V<sub>1</sub> and V<sub>2</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p1Value,
        v1Value,
        t2Value,
        p2Value,
        v2Value
      );
      calculatedAnswer =
        (Number(p1Value) * Number(v1Value) * Number(t2Value)) /
        (Number(p2Value) * Number(v2Value));
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = "";

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `T<sub>1</sub> = ${calculatedAnsNormal} ${t1Unit}  Or<br>  ${calculatedAnswer} ${t1Unit} to ${getMinSigFigs} figures`;
      thinkAboutString = thinkAboutStr(
        p1Value,
        v1Value,
        t2Value,
        p2Value,
        v2Value,
        getMinSigFigs
      );

      //p2 is of interest
    } else if (element.toLowerCase() === "p2" && unknownValue === "?") {
      subjectFormula = `Make the unknown(P<sub>2</sub>) subject of the formula:<br>${drawVarGen(
        "P2",
        "P1",
        "V1",
        "T2",
        "V2",
        "T1"
      )}`; //`Making the unknown(V2) subject of the formula:<br>V<sub>2</sub> = (P<sub>1</sub> * V<sub>1</sub>)/P<sub>2</sub>`;
      substituteValues = `Substitute values into variables:<br>${drawVarUnitsGen(
        "P2",
        p1Value + " " + p1Unit,
        v1Value + " " + v1Unit,
        t2Value + " " + t2Unit,
        v2Value + " " + v2Unit,
        t1Value + " " + t1Unit
      )}`; //`Substituting values into variables:<br>V<sub>2</sub> = (${p1Value} ${p1Unit} * ${v1Value} ${v1Unit})/${p2Value} ${p2Unit}`;
      cancelledUnit = `Units of volumes: V<sub>2</sub> and V<sub>1</sub> and of temperatures: T<sub>2</sub> and T<sub>1</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p1Value,
        v1Value,
        t2Value,
        v2Value,
        t1Value
      );
      calculatedAnswer =
        (Number(p1Value) * Number(v1Value) * Number(t2Value)) /
        (Number(v2Value) * Number(t1Value));
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = "";

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `P<sub>2</sub> = ${calculatedAnsNormal} ${p2Unit}  Or<br>   ${calculatedAnswer} ${p2Unit} to ${getMinSigFigs} sigificant figures`;
      thinkAboutString = thinkAboutStr(
        p1Value,
        v1Value,
        t2Value,
        v2Value,
        t1Value,
        getMinSigFigs
      );
    } else if (element.toLowerCase() === "v2" && unknownValue === "?") {
      subjectFormula = `Make the unknown(P<sub>2</sub>) subject of the formula:<br>${drawVarGen(
        "V2",
        "P1",
        "V1",
        "T2",
        "P2",
        "T1"
      )}`; //`Making the unknown(V2) subject of the formula:<br>V<sub>2</sub> = (P<sub>1</sub> * V<sub>1</sub>)/P<sub>2</sub>`;
      substituteValues = `Substitute values into variables:<br>${drawVarUnitsGen(
        "V2",
        p1Value + " " + p1Unit,
        v1Value + " " + v1Unit,
        t2Value + " " + t2Unit,
        p2Value + " " + p2Unit,
        t1Value + " " + t1Unit
      )}`; //`Substituting values into variables:<br>V<sub>2</sub> = (${p1Value} ${p1Unit} * ${v1Value} ${v1Unit})/${p2Value} ${p2Unit}`;
      cancelledUnit = `Units of pressures: P<sub>2</sub> and P<sub>1</sub> and of temperatures: T<sub>2</sub> and T<sub>1</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p1Value,
        v1Value,
        t2Value,
        p2Value,
        t1Value
      );
      calculatedAnswer =
        (Number(p1Value) * Number(v1Value) * Number(t2Value)) /
        (Number(p2Value) * Number(t1Value));
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = "";

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `V<sub>2</sub> = ${calculatedAnsNormal} ${v2Unit}  Or<br>   ${calculatedAnswer} ${v2Unit} to ${getMinSigFigs} sigificant figures`;
      thinkAboutString = thinkAboutStr(
        p1Value,
        v1Value,
        t2Value,
        p2Value,
        t1Value,
        getMinSigFigs
      );
    } else if (element.toLowerCase() === "t2" && unknownValue === "?") {
      subjectFormula = `Make the unknown(T<sub>2</sub>) subject of the formula:<br>${drawVarGen(
        "T2",
        "P2",
        "V2",
        "T1",
        "P1",
        "V1"
      )}`; //`Making the unknown(V2) subject of the formula:<br>V<sub>2</sub> = (P<sub>1</sub> * V<sub>1</sub>)/P<sub>2</sub>`;
      substituteValues = `Substitute values into variables:<br>${drawVarUnitsGen(
        "T2",
        p2Value + " " + p2Unit,
        v2Value + " " + v2Unit,
        t1Value + " " + t1Unit,
        p1Value + " " + p1Unit,
        v1Value + " " + v1Unit
      )}`; //`Substituting values into variables:<br>V<sub>2</sub> = (${p1Value} ${p1Unit} * ${v1Value} ${v1Unit})/${p2Value} ${p2Unit}`;
      cancelledUnit = `Units of pressures: P<sub>2</sub> and P<sub>1</sub> and of volumes: V<sub>2</sub> and V<sub>1</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        p2Value,
        v2Value,
        t1Value,
        p1Value,
        v1Value
      );
      calculatedAnswer =
        (Number(p2Value) * Number(v2Value) * Number(t1Value)) /
        (Number(p1Value) * Number(v1Value));
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = "";

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `T<sub>2</sub> = ${calculatedAnsNormal} ${t2Unit}  Or<br>   ${calculatedAnswer} ${t2Unit} to ${getMinSigFigs} sigificant figures`;
      thinkAboutString = thinkAboutStr(
        p2Value,
        v2Value,
        t1Value,
        p1Value,
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
export { generalCal };
