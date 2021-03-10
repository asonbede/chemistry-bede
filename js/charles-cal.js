import {
  formArrayOfSigFigs,
  getSigFig,
  getMinValueOfArray,
  trimString,
} from "./sigfigs.js";
import {
  queryAnswer,
  thinkAboutStr,
  queryAnswerCharles,
  drawHorizonBetweenVar,
  drawHorizonBetweenVar2,
  drawVar,
  drawVarUnits,
  removeEFromNum,
} from "./combine-cal.js";

function charlesCal(matchArray) {
  let subjectFormula;
  let substituteValues;
  let calculatedAnswer;
  let calculatedAnsNormal;
  let cancelledUnit;
  let thinkAboutString;
  let v1Value = matchArray[2];

  let v1Unit = matchArray[3];
  let t1Value = matchArray[5];
  let t1Unit = matchArray[6];
  let v2Value = matchArray[8];
  //console.log(p2Value, typeof p2Value);
  let v2Unit = matchArray[9];
  let t2Value = matchArray[11];
  let t2Unit = matchArray[12];
  let getMinSigFigs;
  let makeSenseString;
  matchArray.forEach((element, index) => {
    let unknownValue = matchArray[index + 1];
    // let unitValue = matchArray[index + 2];

    //p1 is of interest
    if (element.toLowerCase() === "v1" && unknownValue === "?") {
      subjectFormula = `Make the unknown(V<sub>1</sub>) subject of the formula:<br>${drawVar(
        "V1",
        "V2",
        "T1",
        "T2"
      )}`; //Make the unknown(V<sub>1</sub>) subject of the formula:<br> ${drawHorizonBetweenVar(
      //   "T2",
      //   "V1",
      //   "V2",
      //   "T1"
      // )} `; //<br> V<sub>1</sub> = (V<sub>2</sub> x T<sub>1</sub>)<br><hr style= "width:80px; margin-left:50px"><span style="margin-left:80px">T<sub>2</sub></span>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "V1",
        v2Value + " " + v2Unit,
        t1Value + " " + t1Unit,
        t2Value + " " + t2Unit
      )}`;
      //${drawHorizonBetweenVar2}(
      //   t2Value + " " + t2Unit,
      //   "V1",
      //   v2Value + " " + v2Unit,
      //   t1Value + " " + t1Unit
      // )}`; //V<sub>1</sub> = (${v2Value} ${v2Unit} * ${t1Value} ${t1Unit})/${t2Value} ${t2Unit}`;
      cancelledUnit = `Units of temperatures: T<sub>1</sub> and T<sub>2</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        v2Value,
        t2Value,
        t1Value
      );
      calculatedAnswer = (Number(v2Value) * Number(t1Value)) / Number(t2Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswerCharles(
        calculatedAnswer,
        v2Value,
        t1Value,
        t2Value
      );
      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);

      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `V<sub>1</sub> = ${calculatedAnsNormal} ${v1Unit}  Or<br>  ${calculatedAnswer} ${v1Unit} to ${getMinSigFigs} sigificant figures`;
      thinkAboutString = thinkAboutStr(
        v2Value,
        t2Value,
        t1Value,
        getMinSigFigs
      );

      //t1 is of interest(unknown, num1, num2, deno)
    } else if (element.toLowerCase() === "t1" && unknownValue === "?") {
      subjectFormula = `Make the unknown(T<sub>1</sub>) subject of the formula:<br>${drawVar(
        "T1",
        "V1",
        "T2",
        "V2"
      )}`; //`Make the unknown(T<sub>1</sub>) subject of the formula:<br> T<sub>1</sub> = (V<sub>1</sub> * T<sub>2</sub>)/V<sub>2</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "T1",
        v1Value + " " + v1Unit,
        t2Value + " " + t2Unit,
        v2Value + " " + v2Unit
      )}`; //`Substitute  values into Charles’ law variables, we get:<br>T<sub>1</sub> = (${v1Value} ${v1Unit} * ${t2Value} ${t2Unit})/${v2Value} ${v2Unit}`;
      cancelledUnit = `Units of volumes: V<sub>1</sub> and V<sub>2</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        v1Value,
        t2Value,
        v2Value
      ); //queryAnswerCharles( v1, v2, t1,t2)
      calculatedAnswer = (Number(v1Value) * Number(t2Value)) / Number(v2Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswerCharles(
        v1Value,
        v2Value,
        calculatedAnswer,
        t2Value
      );

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `T<sub>1</sub> = ${calculatedAnsNormal} ${t1Unit}  Or<br>  ${calculatedAnswer} ${t1Unit} to ${getMinSigFigs} sigificant figures`;
      thinkAboutString = thinkAboutStr(
        v1Value,
        t2Value,
        v2Value,
        getMinSigFigs
      );

      //v2 is of interest
    } else if (element.toLowerCase() === "v2" && unknownValue === "?") {
      subjectFormula = `Make the unknown(V<sub>2</sub>) subject of the formula:<br>${drawVar(
        "V2",
        "V1",
        "T2",
        "T1"
      )}`; //`Make the unknown(V<sub>2</sub>) subject of the formula:<br>V<sub>2</sub> = (V<sub>1</sub> * T<sub>2</sub>)/T<sub>1</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "V2",
        v1Value + " " + v1Unit,
        t2Value + " " + t2Unit,
        t1Value + " " + t1Unit
      )}`; //`Substitute values into variables:<br>V<sub>2</sub> = (${v1Value} ${v1Unit} * ${t2Value} ${t2Unit})/${t1Value} ${t1Unit}`;
      cancelledUnit = `Units of Temperatures: T<sub>2</sub> and T<sub>1</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        v1Value,
        t2Value,
        t1Value
      );
      calculatedAnswer = (Number(v1Value) * Number(t2Value)) / Number(t1Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswerCharles(
        v1Value,
        calculatedAnswer,
        t1Value,
        t2Value
      );

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `V<sub>2</sub> = ${calculatedAnsNormal} ${v2Unit}  Or<br>  ${calculatedAnswer} ${v2Unit} to ${getMinSigFigs} sigificant figures`;
      thinkAboutString = thinkAboutStr(
        v1Value,
        t2Value,
        t1Value,
        getMinSigFigs
      );

      //t2 is of interest
    } else if (element.toLowerCase() === "t2" && unknownValue === "?") {
      subjectFormula = `Make the unknown(T<sub>2</sub>) subject of the formula:<br>${drawVar(
        "T2",
        "V2",
        "T1",
        "V1"
      )}`; //`Make the unknown(T<sub>2</sub>) subject of the formula:<br>T<sub>2</sub> = (V<sub>2</sub> * T<sub>1</sub>)/V<sub>1</sub>`;
      substituteValues = `Substitute values into variables:<br> ${drawVarUnits(
        "T2",
        v2Value + " " + v2Unit,
        t1Value + " " + t1Unit,
        v1Value + " " + v1Unit
      )}`; //`Substitute values into variables:<br>T<sub>2</sub> = (${v2Value} ${v2Unit} * ${t1Value} ${t1Unit})/${v1Value} ${v1Unit}`;
      cancelledUnit = `Units of volumes: V<sub>2</sub> and V<sub>1</sub> cancel out`;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        v2Value,
        t1Value,
        v1Value
      );
      calculatedAnswer = (Number(v2Value) * Number(t1Value)) / Number(v1Value);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = queryAnswerCharles(
        v1Value,
        v2Value,
        t1Value,
        calculatedAnswer
      );

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `T<sub>2</sub> = ${calculatedAnsNormal} ${t2Unit}  Or<br>  ${calculatedAnswer} ${t2Unit} to ${getMinSigFigs} sigificant figures`;
      thinkAboutString = thinkAboutStr(
        v2Value,
        t1Value,
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

export { charlesCal };
