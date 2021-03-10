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
  thinkAboutStrIdeal,
} from "./combine-cal.js";

//draw R value e.g 0.0821  L.atm/K.mol
function drawRvalue(num, num2, deno) {
  return `
  <div style="display:flex;flex-wrap: wrap;color:red">
 <div  style="margin-right: 10px;">R </div>
 <div style="margin-right: 10px;"> =</div>
<div style="margin-right: 10px;" >${num} </div>
<div style="margin-right: 10px;">
<div  style="border-bottom:2px solid red">${num2}</div>
<div> ${deno}</div>
</div>
</div>
`;
}

//gets the value of R depending on the unit of pressure
function getRvalue(pUnit, vUnit, nUnit, tUnit) {
  let valueOfR = "";
  if (
    (pUnit.toLowerCase() === "atm" || pUnit.toLowerCase() === "atmosphere") &&
    vUnit.toLowerCase() === "l" &&
    nUnit.toLowerCase() === "mol" &&
    tUnit.toLowerCase() === "k"
  ) {
    valueOfR = [
      `${drawRvalue("0.0821", "L.atm", "K.mol")}`,
      0.0821,
      "0.0821 L.atm",
      `0.0821 L.atm/K.mol`,
      `K.mol`,
    ];
    return valueOfR;
  } else if (
    pUnit.toLowerCase() === "torr" &&
    vUnit.toLowerCase() === "l" &&
    nUnit.toLowerCase() === "mol" &&
    tUnit.toLowerCase() === "k"
  ) {
    valueOfR = [
      `${drawRvalue("62.4", "L.torr", "K.mol")}`, //pUnit.toLowerCase() === "mmHg"
      62.36,
      "62.36 L.torr",
      `62.36 L.torr/K.mol`,
      `K.mol`,
    ];
    return valueOfR;
  } else if (
    pUnit.toLowerCase() === "KPa" &&
    vUnit.toLowerCase() === "l" &&
    nUnit.toLowerCase() === "mol" &&
    tUnit.toLowerCase() === "k"
  ) {
    valueOfR = [
      `${drawRvalue("8.31", "L.KPa", "K.mol")}}`,
      8.31,
      "8.31 L.KPa",
      `8.31 L.KPa/K.mol`,
      `K.mol`,
    ];
    return valueOfR;
  } else if (
    pUnit.toLowerCase() === "mmHg" &&
    vUnit.toLowerCase() === "l" &&
    nUnit.toLowerCase() === "mol" &&
    tUnit.toLowerCase() === "k"
  ) {
    valueOfR = [
      `${drawRvalue("62.36", "L.mmHg", "K.mol")}}`, //pUnit.toLowerCase() === "mmHg"
      62.36,
      "62.36 L.mmHg",
      `62.36 L.mmHg/K.mol`,
      `K.mol`,
    ];
    return valueOfR;
  }
  return false;
}

//substitute known values into the ideal gas law equation:PV=nTR e.g P  x   3.94  L = 0.0997  mol x 0.0821 L.atm/K.mol x 333 K
function drawSubstivalue(
  pValue,
  pUnit,
  vValue,
  vUnit,
  nValue,
  nUnit,
  tValue,
  tUnit,
  rValue
) {
  return `<div style="display:flex;flex-wrap: wrap;color:red">
 <div  style="margin-right: 10px;">
 ${pValue} ${pUnit}  x ${vValue} ${vUnit}
</div>
 <div style="margin-right: 10px;"> =</div>


<div  style="margin-right: 10px;">
${nValue} ${nUnit}  x
</div>

<div style="margin-right: 10px;">
<div  style="border-bottom:2px solid red">${rValue[2]}</div>
<div> mol.k</div>
</div>

<div  style="margin-right: 10px;">
x  ${tValue} ${tUnit}
</div>
</div><br>
`;
}

//multiply both sides of the ideal gas equation by mol.k if cancelled is set to false
//Removes mol.k from one side if cancelled is set to true
//returns either type of ideal gas equation:one in which both sides of equation are multiplied by
//mol.k and the other in which mol.k is removed from one side
//called like this: makeUnknownsub("P", "",vValue,vUnit,nValue,nUnit,tValue,tUnit,rValue,"P")
// to multiply both sides by mol.k if "P" is the unknown for instance or
// like this: makeUnknownsub("P", "",vValue,vUnit,nValue,nUnit,tValue,tUnit,rValue,"P",true)
// to remove mol.k from one side
function molkHandler(
  pValue,
  pUnit,
  vValue,
  vUnit,
  nValue,
  nUnit,
  tValue,
  tUnit,
  rValue,
  unknown,
  canceled = false
) {
  if (canceled === false) {
    return `Now rearrange the equation so that only the unknown(${unknown}) remains on one side of the equation.<br><br>
This is known as making ${unknown} the subject of the formula.<br><br>
To do this multiply both sides of the equation by mol.k<br><br>

<div style="display:flex;flex-wrap: wrap;color:red">
 <div  style="margin-right: 10px;">
mol.K x ${pValue} ${pUnit}  x ${vValue} ${vUnit}
</div>
 <div style="margin-right: 10px;"> =</div>


<div  style="margin-right: 10px;">
${nValue} ${nUnit}  x
</div>

<div style="margin-right: 10px;">
<div  style="border-bottom:2px solid red">${rValue[2]} </div>
<div style="color:purple"> mol.k</div>
</div>

<div  style="margin-right: 10px;">
  x ${tValue} ${tUnit} x <span style="color:purple">mol.K</span> 
</div>
</div><br>
This gets rid of the denominator mol.k from the right hand side<br><br>`;
  } else {
    return `We now have:<br><br>
 <div style="display:flex;flex-wrap: wrap;color:red" >
    <div  style="margin-right: 10px;">
   mol.K x ${pValue} ${pUnit}  x ${vValue} ${vUnit}
   </div>
    <div style="margin-right: 10px;"> =</div>
   <div  style="margin-right: 10px;">
   ${nValue} ${nUnit} 
   </div>
<div style="margin-right: 10px;"> x ${rValue[2]}  x </div>
  <div  style="margin-right: 10px;">
   ${tValue} ${tUnit}  
   </div>
   </div><br>`;
  }
}

//divide both sides by  denominator to isolate the unknown on one side of the equation
//called like this anothStr("P", pUnit,vValue,vUnit,nValue,nUnit,tValue,tUnit,rValue,"P",false,true) to
//isolate p if it is the unknown for instance
function isolateUnknown(
  pValue,
  pUnit,
  vValue,
  vUnit,
  nValue,
  nUnit,
  tValue,
  tUnit,
  rValue,
  unknown,
  withOutUnits = false,
  withDoubleUnder = false
) {
  //obtain appropriate numerators and denominators
  let deno = "";
  let numerator = "";
  if (unknown.toLowerCase() === "p") {
    deno = `mol.k  x  ${vValue} ${vUnit}`;
    numerator = `${nValue} ${nUnit} x ${rValue[2]} x ${tValue} ${tUnit}`;
    if (withOutUnits) {
      deno = `${vValue}`;
      numerator = `${nValue} x ${rValue[1]}  ${pUnit}  x ${tValue}`;
    }
  } else if (unknown.toLowerCase() === "v") {
    deno = `mol.k x ${pValue} ${pUnit}`;
    numerator = `${nValue} ${nUnit} x ${rValue[2]} x ${tValue} ${tUnit}`;
    if (withOutUnits) {
      deno = `${pValue}`;
      numerator = `${nValue}  x ${rValue[1]}  ${vUnit}  x ${tValue}`;
    }
  } else if (unknown.toLowerCase() === "n") {
    deno = ` ${tValue} ${tUnit} x ${rValue[2]}`;
    numerator = `mol.k x ${pValue} ${pUnit}  x ${vValue} ${vUnit}`;
    if (withOutUnits) {
      deno = `${tValue} x ${rValue[1]}`;
      numerator = `${pValue}  x  ${vValue} x ${nUnit}`;
    }
  } else if (unknown.toLowerCase() === "t") {
    deno = ` ${nValue} ${nUnit} x ${rValue[2]}`;
    numerator = `mol.k x ${pValue} ${pUnit}  x ${vValue} ${vUnit}`;
    if (withOutUnits) {
      deno = `${nValue} x ${rValue[1]}`;
      numerator = `${pValue} x ${vValue} x ${tUnit}`;
    }
  }

  // T x 5 mol x 0.0821 L.atm/5 mol x 0.0821 L.at =mol.k x 3 atm x 8 L/5 mol x 0.0821 L.atm
  if (withDoubleUnder) {
    return `<br>Now divide both sides of the equation by ${deno}<br></br>
 <div style="display:flex;flex-wrap: wrap;color:red">
 <div  style="margin-right: 10px;">
 <div style="border-bottom:2px solid red">${unknown} x ${deno}</div>
 <div>${deno}</div>
 </div>
 <div style="margin-right: 10px;"> =</div>
<div >
<div  style="border-bottom:2px solid red">${numerator}</div>
<div>${deno}</div>
</div>
</div><br>
This leaves only ${unknown} on one side of the equation<br><br>`;
  }

  let noUnitStr = `<div style="display:flex;flex-wrap:nowrap;color:red">
  <div style="margin-right: 10px;">${unknown} </div>
  <div style="margin-right: 10px;"> =</div>
  <div >
  <div  style="border-bottom:2px solid red">${numerator}</div>
  <div>${deno}</div>
  </div>
  </div> <br>`;

  //draw this form:T = mol.k x 3 atm x 8 L/5 mol x 0.0821 L.atm or this form:T = 3 x 8 x K/5 x 0.0821
  let appendStr = `Cancel out common values and unit from the numerator and denominator<br>`;
  let strResult = withOutUnits ? noUnitStr : ` ${noUnitStr} ${appendStr}<br>`;
  return strResult;
}

//Evaluate variable,p,v,n,or t
function idealGasCal(matchArray) {
  let subjectFormula;
  let substituteValues;
  let calculatedAnswer;
  let calculatedAnsNormal;
  let cancelledUnit;
  let thinkAboutString;
  let pValue = matchArray[2];
  let pUnit = matchArray[3];
  let vValue = matchArray[5];
  let vUnit = matchArray[6];
  let nValue = matchArray[8];
  let nUnit = matchArray[9];
  let tValue = matchArray[11];
  let tUnit = matchArray[12];

  let getMinSigFigs;
  let makeSenseString;
  let rValue = getRvalue(pUnit, vUnit, nUnit, tUnit);
  matchArray.forEach((element, index) => {
    let unknownValue = matchArray[index + 1];
    let unitValue = matchArray[index + 2];

    //P1 is of interest
    if (element.toLowerCase() === "p" && unknownValue === "?") {
      subjectFormula = ``;
      substituteValues = `Substitute values into ideal gas equation PV = nRT:<br><br>${drawSubstivalue(
        "P",
        "",
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue
      )}<br>
      
      ${molkHandler(
        "P",
        "",
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "P"
      )}

      ${molkHandler(
        "P",
        "",
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "P",
        true
      )}

      ${isolateUnknown(
        "P",
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "P",
        false,
        true
      )}
     
      ${isolateUnknown(
        "P",
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "P"
      )}
      ${isolateUnknown(
        "P",
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "P",
        true
      )}
      `;
      cancelledUnit = ``;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        vValue,
        nValue,
        rValue[1],
        tValue
      );
      calculatedAnswer =
        (Number(nValue) * Number(rValue[1]) * Number(tValue)) / Number(vValue);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = "";
      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);

      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `<span style="color:red">P = ${calculatedAnsNormal} ${pUnit}  Or<br> ${calculatedAnswer} ${pUnit} to ${getMinSigFigs} sigificant figures</span>`;

      thinkAboutString = thinkAboutStrIdeal(
        vValue,
        nValue,
        tValue,
        rValue[1],
        getMinSigFigs
      );

      //V is of interest
    } else if (element.toLowerCase() === "v" && unknownValue === "?") {
      subjectFormula = ``; //`Making the unknown(V1) subject of the formula:<br> V<sub>1</sub> = (P<sub>2</sub> * V<sub>2</sub>)/P<sub>1</sub>`;
      substituteValues = `Substitute known values into ideal gas equation PV = nRT<br>${drawSubstivalue(
        pValue,
        pUnit,
        "V",
        "",
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue
      )}<br>
      
      ${molkHandler(
        pValue,
        pUnit,
        "V",
        "",
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "V"
      )}
      ${molkHandler(
        pValue,
        pUnit,
        "V",
        "",
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "V",
        true
      )}
      ${isolateUnknown(
        pValue,
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "V",
        false,
        true
      )}
      ${isolateUnknown(
        pValue,
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "V"
      )}
      ${isolateUnknown(
        pValue,
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "V",
        true
      )}
      `;
      cancelledUnit = ``;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        pValue,
        nValue,
        rValue[1],
        tValue
      );
      calculatedAnswer =
        (Number(nValue) * Number(rValue[1]) * Number(tValue)) / Number(pValue);
      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = "";
      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `V= ${calculatedAnsNormal} ${vUnit}  Or<br>  ${calculatedAnswer} ${vUnit} to ${getMinSigFigs} figures`;
      thinkAboutString = thinkAboutStrIdeal(
        pValue,
        nValue,
        tValue,
        rValue[1],
        getMinSigFigs
      );

      //N is of interest
    } else if (element.toLowerCase() === "n" && unknownValue === "?") {
      subjectFormula = ``;
      substituteValues = `Substitute known values into ideal gas equation PV = nRT<br>${drawSubstivalue(
        pValue,
        pUnit,
        vValue,
        vUnit,
        "n",
        "",
        tValue,
        tUnit,
        rValue
      )}<br>
      
      ${molkHandler(
        pValue,
        pUnit,
        vValue,
        vUnit,
        "n",
        "",
        tValue,
        tUnit,
        rValue,
        "n"
      )}
      ${molkHandler(
        pValue,
        pUnit,
        vValue,
        vUnit,
        "n",
        "",
        tValue,
        tUnit,
        rValue,
        "n",
        true
      )}
      ${isolateUnknown(
        pValue,
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "n",
        false,
        true
      )}
     
      ${isolateUnknown(
        pValue,
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "n"
      )}
      ${isolateUnknown(
        pValue,
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "n",
        true
      )}
      `;
      cancelledUnit = ``;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        pValue,
        vValue,
        rValue[1],
        tValue
      );
      calculatedAnswer =
        (Number(vValue) * Number(pValue)) /
        (Number(rValue[1]) * Number(tValue));

      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = "";

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `n = ${calculatedAnsNormal} ${nUnit}  Or<br>  ${calculatedAnswer} ${nUnit} to ${getMinSigFigs} significant figures`;
      thinkAboutString = thinkAboutStrIdeal(
        pValue,
        vValue,
        tValue,
        rValue[1],
        getMinSigFigs
      );

      //t is of interest
    } else if (element.toLowerCase() === "t" && unknownValue === "?") {
      subjectFormula = ``; //`Making the unknown(P2) subject of the formula:<br>P<sub>2</sub> = (P<sub>1</sub> * V<sub>1</sub>)/V<sub>2</sub>`;
      substituteValues = `Substitute known values into ideal gas equation PV = nRT<br>${drawSubstivalue(
        pValue,
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        "T",
        "",
        rValue
      )}<br>
      
      ${molkHandler(
        pValue,
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        "T",
        "",
        rValue,
        "T"
      )}
      ${molkHandler(
        pValue,
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        "T",
        "",
        rValue,
        "T",
        true
      )}
      ${isolateUnknown(
        pValue,
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "T",
        false,
        true
      )}
     
      ${isolateUnknown(
        pValue,
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "T"
      )}
      ${isolateUnknown(
        pValue,
        pUnit,
        vValue,
        vUnit,
        nValue,
        nUnit,
        tValue,
        tUnit,
        rValue,
        "T",
        true
      )}
      `; //Substituting values into variables:<br>P<sub>2</sub> = (${p1Value} ${p1Unit} * ${v1Value} ${v1Unit})/${v2Value} ${v2Unit}`;
      cancelledUnit = ``;
      getMinSigFigs = formArrayOfSigFigs(
        getSigFig,
        getMinValueOfArray,
        pValue,
        vValue,
        rValue[1],
        nValue
      );
      calculatedAnswer =
        (Number(vValue) * Number(pValue)) /
        (Number(rValue[1]) * Number(nValue));

      calculatedAnsNormal = calculatedAnswer;
      makeSenseString = "";

      calculatedAnswer = calculatedAnswer.toPrecision(getMinSigFigs);
      calculatedAnswer = removeEFromNum(calculatedAnswer);
      calculatedAnswer = `T = ${calculatedAnsNormal} ${tUnit}  Or<br>  ${calculatedAnswer} ${tUnit} to ${getMinSigFigs} figures`;
      thinkAboutString = thinkAboutStrIdeal(
        pValue,
        vValue,
        nValue,
        rValue[1],
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
export { idealGasCal, getRvalue, drawRvalue };
