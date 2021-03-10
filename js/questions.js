import { getRndInteger } from "./main.js";
let Para1 = getRndInteger(1, 1000);
let Para2 = getRndInteger(1, 1000);
let Para3 = getRndInteger(1, 1000);
let Para4 = getRndInteger(1, 1000);
let Para5 = getRndInteger(1, 1000);
let Para6 = getRndInteger(1, 1000);
let Para7 = getRndInteger(1, 1000);
let Para8 = getRndInteger(1, 1000);
let Para9 = getRndInteger(1, 1000);
let Para10 = getRndInteger(1, 1000);
let Para11 = getRndInteger(1, 1000);

let ran1F = getRndInteger(0, 2);
let ran2F = getRndInteger(0, 1);
let ran3F = getRndInteger(0, 3);
let ran4F = getRndInteger(0, 3);
let ran5F = getRndInteger(0, 2);
let ran6F = getRndInteger(0, 3);

let ran7F = getRndInteger(0, 3);
let ran8F = getRndInteger(0, 1);
let ran9F = getRndInteger(0, 3);
let ran10F = getRndInteger(0, 2);

let boylesQuestionArray = [
  [
    `A sample of gas has an initial pressure of ${Para1} atm and an initial volume of ${Para2} L.
Its pressure changes to ${Para3} atm.
What is the new volume if temperature and amount are kept constant?`,
    `P1 = ${Para1} atm, V1 = ${Para2} L, P2 = ${Para3} atm, V2 = ? L`,
  ],
  [
    `If  P<sub>1</sub> = ${(Para1 / 3).toFixed(ran1F)} torr, V<sub>1</sub> = ${(
      Para2 / 2
    ).toFixed(ran2F)} mL, and P<sub>2</sub> = ${(Para3 / 4).toFixed(
      ran3F
    )} torr, what is V<sub>2</sub>?`,
    `P1 =  ${(Para1 / 3).toFixed(ran1F)} torr, V1 =  ${(Para2 / 2).toFixed(
      ran2F
    )} mL, P2 = ${(Para3 / 4).toFixed(ran3F)} torr, V2 = ? mL`,
  ],
  [
    `A gas has an initial pressure of ${(Para1 / 5).toFixed(
      ran1F
    )} atm and an initial volume of ${(Para2 / 6).toFixed(ran3F)} L. What
  is its new pressure if volume is changed to ${(Para1 / 7).toFixed(
    ran4F
  )} L? Assume temperature and
  amount are held constant.`,
    `p1 = ${(Para1 / 5).toFixed(ran1F)} atm, v1 = ${(Para2 / 6).toFixed(
      ran3F
    )}  L, p2 = ? atm, v2 = ${(Para1 / 7).toFixed(ran4F)} L`,
  ],
  [
    `A gas has an initial pressure of ${(Para1 / 8).toFixed(
      ran10F
    )} torr and an initial volume of ${(Para2 / 9).toFixed(ran3F)} mL. What
  is its new pressure if volume is changed to ${(Para1 / 10).toFixed(
    ran2F
  )} mL? Assume temperature and
  amount are held constant.`,
    `p1 = ${(Para1 / 8).toFixed(ran10F)} torr, v1 = ${(Para2 / 9).toFixed(
      ran3F
    )} mL, p2 = ? torr, v2 = ${(Para1 / 10).toFixed(ran2F)} mL`,
  ],
  [
    `A gas has an initial pressure of ${(Para4 / 11).toFixed(
      ran9F
    )} atm and an initial volume of ${(Para3 / 12).toFixed(ran5F)} L. What is
  its new volume if pressure is changed to ${(Para1 / 13).toFixed(
    ran7F
  )} atm? Assume temperature and
  amount are held constant.`,
    `p1 = ${(Para4 / 11).toFixed(ran9F)} atm, v1 = ${(Para3 / 12).toFixed(
      ran5F
    )} L, p2 = ${(Para1 / 13).toFixed(ran7F)} atm, v2 = ? L`,
  ],
  [
    `A gas has an initial pressure of ${(Para2 / 14).toFixed(
      ran5F
    )} torr and an initial volume of ${(Para4 / 15).toFixed(ran5F)} mL. What
  is its new volume if pressure is changed to ${(Para4 / 16).toFixed(
    ran7F
  )} torr? Assume temperature and
  amount are held constant.`,
    `p1 = ${(Para2 / 14).toFixed(ran5F)} torr, v1 = ${(Para4 / 15).toFixed(
      ran5F
    )} mL, p2 = ${(Para4 / 16).toFixed(ran7F)} torr, v2 = ? mL`,
  ],
  [
    `A gas has an initial volume of ${(Para4 / 17).toFixed(
      ran3F
    )} mL and an initial pressure of ${(Para3 / 18).toFixed(ran6F)} torr. What
  is its final volume in liters if its pressure is changed to ${(
    Para4 / 19
  ).toFixed(ran3F)} atm? Assume
  temperature and amount are held constant.
  <br>Hint:<br> The unit of any quantity on both sides of the change must be the same.<br>
  Before you proceed, convert ${(Para4 / 17).toFixed(ran3F)} mL to L<br> and ${(
      Para3 / 18
    ).toFixed(ran6F)} torr to atm.<br>
 V<sub>1</sub> =  ${(Para4 / 17).toFixed(ran3F)}  mL =  ${(
      (Para4 / 17).toFixed(ran3F) / 1000
    ).toFixed(3)}  L <br> P<sub>1</sub> = ${(Para3 / 18).toFixed(
      ran6F
    )} torr = ${((Para3 / 18).toFixed(ran6F) / 760).toFixed(3)} atm
  `,
    `P1 = ${((Para3 / 18).toFixed(ran6F) / 760).toFixed(3)} atm, V1 = ${(
      (Para4 / 17).toFixed(ran3F) / 1000
    ).toFixed(3)} L, P2 =  ${(Para4 / 19).toFixed(ran3F)} atm, V2 = ? L`,
  ],
  [
    `A gas has an initial volume of ${Para4} L and an initial pressure of ${Para5} atm.
  What is its final pressure in torr if its volume is changed to ${Para3} mL?
  Assume temperature and amount are held constant
 <br> Hint:<br> The unit of any quantity on both sides of the change must be the same.
  Before you proceed, convert ${Para4} L to mL and ${Para5} atm to torr.
 V<sub>1</sub> = ${Para4} L = ${
      Para4 * 1000
    } mL <br> P<sub>1</sub> = ${Para5} atm = ${Para5 * 760} torr
  `,
    `P1 = ${Para5 * 760} torr, V1 = ${
      Para4 * 1000
    } mL, P2 = ? torr, V2 = ${Para3} mL`,
  ],
  [
    `A sample of gas has an initial pressure of ${(Para2 / 20).toFixed(
      ran3F
    )}  torr and an initial volume of ${(Para3 / 21).toFixed(ran5F)} mL.
Its volume changes to ${(Para4 / 22).toFixed(
      ran7F
    )}  L. What is the new pressure?<br>

Hint:<br> The unit of any quantity on both sides of the change must be the same.<br>
Before you proceed, convert  ${(Para4 / 22).toFixed(ran7F)} L to mL <br>
v2 = ${(Para4 / 22).toFixed(ran7F)} L = ${
      (Para4 / 22).toFixed(ran7F) * 1000
    } mL`,
    `P1 = ${(Para2 / 20).toFixed(ran3F)} torr,V1 = ${(Para3 / 21).toFixed(
      ran5F
    )} mL,P2 = ? torr,V2 = ${(Para4 / 22).toFixed(ran7F) * 1000} mL`,
  ],
  [
    `If V<sub>1</sub> =  ${(Para4 / 25).toFixed(ran6F)} mL, P<sub>1</sub> = ${(
      Para3 / 26
    ).toFixed(ran8F)} torr, and P<sub>2</sub> = ${(Para4 / 27).toFixed(
      ran6F
    )} atm, what is V<sub>2</sub> ?<br>
Hint:<br> The unit of any quantity on both sides of the change must be the same.<br>
Before you proceed, convert ${(Para3 / 26).toFixed(ran8F)} torr to atm 
P<sub>1</sub> = ${(Para3 / 26).toFixed(ran8F)} torr = ${(
      (Para3 / 26).toFixed(ran8F) / 760
    ).toFixed(3)} atm`,
    `P1 = ${((Para3 / 26).toFixed(ran8F) / 760).toFixed(3)} atm, V1 = ${(
      Para4 / 25
    ).toFixed(ran6F)} mL, P2 = ${(Para4 / 27).toFixed(ran6F)} atm, V2 = ? mL`,
  ],
  [
    `Problem1<br>A sample of helium gas occupies a volume of ${(
      Para8 / 26
    ).toFixed(ran1F)} mL when the pressure is equal to ${(Para9 / 27).toFixed(
      ran10F
    )} kPa.
   The gas is allowed to expand into a ${Para8} mL container. Calculate the new pressure of the gas.<br><br>
   
   Problem2<br>
   A gas sample confined to a volume of ${(Para9 / 28).toFixed(
     ran5F
   )} L at a pressure of ${(Para5 / 30).toFixed(
      ran6F
    )} atm is allowed to flow into a ${Para9} L container by opening the valve that links the two containers. 
   What is the final pressure of the gas?<br><br>
   Problem3<br>
   A balloon is filled with helium to a volume of ${(Para2 / 32).toFixed(
     ran3F
   )} L at a pressure of ${Para1} KPa. If the pressure decreases to ${(
      Para1 / 20
    ).toFixed(ran5F)}  KPa,
   what is the new volume of the ballon assume that temperature and amount of gas is constant
   `,
    `P1 = ${(Para9 / 27).toFixed(ran10F)} KPa,V1 = ${(Para8 / 26).toFixed(
      ran1F
    )} mL,P2 = ? KPa,V2 = ${Para8} mL;P1 =  ${(Para5 / 30).toFixed(
      ran6F
    )} atm,V1 = ${(Para9 / 28).toFixed(
      ran5F
    )} L,P2 = ? atm,V2 = ${Para9} L;P1 = ${Para1} KPa,V1 = ${(
      Para2 / 32
    ).toFixed(ran3F)} L,P2 = ${(Para1 / 20).toFixed(ran5F)} KPa,V2 = ? L`,
  ],
];

let charlesQuestionArray = [
  [
    `A sample of gas has an initial volume of ${(Para5 / 3).toFixed(
      ran1F
    )} mL and an initial temperature
of ${(Para1 / 2).toFixed(
      ran2F
    )} K. What is the new volume if the temperature is increased to ${(
      Para4 / 5
    ).toFixed(ran6F)} K?
Assume constant pressure and amount for the gas.`,
    `V1 = ${(Para5 / 3).toFixed(ran1F)} mL, T1 = ${(Para1 / 2).toFixed(
      ran2F
    )} K, V2 = ? mL, T2 = ${(Para4 / 5).toFixed(ran6F)} K`,
  ],
  [
    `If V<sub>1</sub> = ${(Para4 / 8).toFixed(
      ran4F
    )} mL and T<sub>1</sub> = ${Para3} K, what is V<sub>2</sub> if T<sub>2</sub> = ${Para2} K?`,
    `V1 = ${(Para4 / 8).toFixed(
      ran4F
    )} mL, T1 = ${Para3} K, V2 = ? mL, T2 = ${Para2} K`,
  ],
  [
    `A sample of a gas has an initial volume of ${(Para4 / 9).toFixed(
      ran8F
    )} L and an initial temperature of −${Para3}°C.<br>
     What must be the temperature of the gas for its volume to be ${Para1} L? <br> 
Hint:<br>
  (1) all temperatures must be expressed in the absolute temperature scale<br>
      (Kelvin) not in degrees Celsius while working with gas laws<br> 
  (2) The unit of any quantity on both sides of the change must be the same.<br>
  (3) The relationship between the absolute temperature scale and the Celsius temperature scale:<br>
    K = °C + 273 <br>
   where:<br>
    K represents the temperature in kelvins<br> 
    °C represents the temperature in degrees Celsius.<br>
    T<sub>1</sub> = −${Para3}°C + 273 = ${Para3 + 273} K`,
    `V1 = ${(Para4 / 9).toFixed(ran8F)} L, T1 = ${
      Para3 + 273
    } K, V2 =  ${Para1} L, T2 = ? K`,
  ],
  [
    `If V<sub>1</sub> =  ${Para5} mL, T<sub>1</sub> =  ${Para1}°C, and V<sub>2</sub> =  ${Para4} mL, What is T<sub>2</sub>? <br>
    T<sub>1</sub> = ${Para1}°C + 273 = ${Para1 + 273} K`,
    `V1 = ${Para5} mL, T1 = ${Para1 + 273} K, V2 = ${Para4} mL, T2 = ? K`,
  ],
  [
    `A gas has an initial volume of ${(Para10 / 10).toFixed(
      ran1F
    )} mL and an initial temperature of ${Para7} K.
  What is its new volume if temperature is changed to ${Para8} K? Assume pressure
  and amount are held constant.`,
    `V1 = ${(Para10 / 10).toFixed(
      ran1F
    )} mL, T1 = ${Para7} K, V2 = ? mL, T2 = ${Para8} K`,
  ],
  [
    `A gas has an initial volume of ${(Para5 / 13).toFixed(
      ran4F
    )} L and an initial temperature of ${(Para11 / 14).toFixed(ran5F)} K. What
  is its volume if temperature is changed to ${Para6} K? Assume pressure and amount
  are held constant`,
    `V1 = ${(Para5 / 13).toFixed(ran4F)} L, T1 = ${(Para11 / 14).toFixed(
      ran5F
    )} K, V2 = ? L, T2 = ${Para6} K`,
  ],
  [
    `A gas has an initial volume of ${(Para8 / 15).toFixed(
      ran2F
    )} mL and an initial temperature of ${(Para7 / 16).toFixed(ran7F)} K. What
  is its new temperature if volume is changed to ${(Para8 / 16).toFixed(
    ran8F
  )} mL? Assume pressure and
  amount are held constant.`,
    `V1 = ${(Para8 / 15).toFixed(ran2F)} mL, T1 = ${(Para7 / 16).toFixed(
      ran7F
    )} K, V2 = ${(Para8 / 16).toFixed(ran8F)} mL, T2 = ? K`,
  ],
  [
    `A gas has an initial volume of ${(Para9 / 17).toFixed(
      ran6F
    )} L and an initial temperature of ${(Para8 / 18).toFixed(ran9F)} K. What
  is its new temperature if volume is changed to ${(Para10 / 19).toFixed(
    ran9F
  )} mL? Assume pressure and
  amount are held constant.<br>
  The unit of any given quantity must be the same on both side of the change<br>
  So V1 = ${(Para9 / 17).toFixed(ran6F)} L = ${
      (Para9 / 17).toFixed(ran6F) * 1000
    } mL, remenber that 1 L = 1000 mL`,
    `V1 = ${(Para9 / 17).toFixed(ran6F) * 1000} mL, T1 =  ${(
      Para8 / 18
    ).toFixed(ran9F)} K, V2 = ${(Para10 / 19).toFixed(ran9F)} mL, T2 = ? K`,
  ],
  [
    `A gas has an initial volume of ${(Para9 / 20).toFixed(
      ran10F
    )} L and an initial temperature of ${(Para1 / 21).toFixed(ran4F)} K. What
  is its new temperature if volume is changed to ${(Para2 / 22).toFixed(
    ran10F
  )} L? Assume pressure and
  amount are held constant.`,
    `V1 = ${(Para9 / 20).toFixed(ran10F)} L, T1 = ${(Para1 / 21).toFixed(
      ran4F
    )} K, V2 =  ${(Para2 / 22).toFixed(ran10F)} L, T2 = ? K`,
  ],
  [
    `A gas has an initial volume of  ${(Para3 / 23).toFixed(
      ran1F
    )} mL and an initial temperature of  ${Para2}°C. What
  is its new temperature if volume is changed to  ${(Para3 / 23).toFixed(
    ran9F
  )} L? Assume pressure and
  amount are held constant.<br>
  Convert T<sub>1</sub> from <sup>o</sup>C to Kelvin(K)<br>
  T<sub>1</sub> = ${Para2}<sup>o</sup>C = ${Para2}<sup>o</sup>C + 273 K = ${
      Para2 + 273
    } K<br>
  V<sub>2</sub> =  ${(Para3 / 23).toFixed(ran9F)} L =  ${
      (Para3 / 23).toFixed(ran9F) * 1000
    } mL
  `,
    `V1 = ${(Para3 / 23).toFixed(ran1F)} mL, T1 = ${Para2 + 273} K, V2 = ${
      (Para3 / 23).toFixed(ran9F) * 1000
    } mL, T2 = ? K`,
  ],
  [
    `A gas has an initial volume of ${(Para3 / 24).toFixed(
      ran6F
    )} L and an initial temperature of ${Para3}°C. What
  is its new volume if temperature is changed to ${Para6}°C? Assume pressure and
  amount are held constant<br>
  T<sub>1</sub> = -${Para3}<sup>o</sup>C = ${Para3}<sup>o</sup>C + 273 = ${
      Para3 + 273
    } K<br>
  T<sub>2</sub> = ${Para6}<sup>o</sup>C = ${Para6}<sup>o</sup>C + 273 = ${
      Para6 + 273
    } K
   `,
    `V1 = ${(Para3 / 24).toFixed(ran6F)} L, T1 = ${
      Para3 + 273
    } K, V2 = ? L, T2 = ${Para6 + 273} K`,
  ],
  [
    `If  ${(Para5 / 25).toFixed(
      ran8F
    )}  cm<sup>3</sup> of a gas is heated from 27<sup>o</sup>C to 50<sup>o</sup>C, What is the new volume of the gas at constant pressure<br>
  T<sub>1</sub> = 27<sup>o</sup>C + 273 = 300 K<br>
  T<sub>2</sub> = 50<sup>o</sup>C + 273 =  323 k`,
    `V1 = ${(Para5 / 25).toFixed(
      ran8F
    )} cm<sup>3</sup>, T1 = 300 K, V2 = ? cm<sup>3</sup>, T2 = 323 K`,
  ],
];

let gaylusacQuestionArray = [
  [
    `Use Gay-Lussac’s law to determine the final pressure of a gas whose initial
pressure is 602 torr, initial temperature is 356 K, and final temperature is 277
K. Assume volume and amount are held constant.`,
    `P1 = 602 torr, T1 = 356 K, P2 = ? torr, T2 = 277 K`,
  ],
  [
    `Use Gay-Lussac’s law to determine the final temperature of a gas whose initial
pressure is 1.88 atm, initial temperature is 76.3 K, and final pressure is 6.29 atm.
 Assume volume and amount are held constant.`,
    `P1 = 1.88 atm, T1 = 76.3 K, P2 = 6.29 atm, T2 = ? K`,
  ],
  [
    `A Helium tank has a pressure of 1200.0 KPa at 283 K. What will the pressure be if the temperature is 
  increased to 387 K`,
    `P1 = 1200.0 KPa, T1 = 298 K,P2 = ? KPa,T2 = 387 K`,
  ],
];

let avogadroQuestionArray = [
  [
    `A ballon is filled with 0.340 mol of air to a volume of 7.60 L.
 What will the volume be if the amount is increased to 1.00 mol`,
    `V1 = 7.60 L, N1 = 0.340 mol, V2 = ? L, N2 = 1.00 mol`,
  ],
  [
    `If 3.45 × 10<sup>22</sup> atoms of Ar have a volume of 1.55 L at a certain temperature and
  pressure, what volume do 6.00 × 10<sup>23</sup> atoms of Ar have at the same
  temperature and pressure?`,
    `V1 = 1.55 L, n1 = 3.45e+22 atoms, V2 = ? L, n2 = 6.00e+23 atoms`,
  ],
  [
    `Use Avogadro’s law to determine the final amount of a gas whose initial
  volume is 885 mL, initial amount is 0.552 mol, and final volume is 1477 mL.
  Assume pressure and temperature are held constant.`,
    `V1 = 885 mL, N1 = 0.552 mol, V2 = 1477 mL,N2 = ? mol`,
  ],
  [
    `If  5.55 × 10<sup>22</sup> atoms of He occupy a volume of 2.06 L at 0°C at 1.00 atm pressure,
  what volume do 2.08 × 10<sup>23</sup> atoms of He occupy under the same conditions?`,
    `V1 = 2.06 L, N1 = 5.55e+22 atoms, V2 = ? L, N2 = 2.08e+23 atoms`,
  ],
  [
    `Use Avogadro’s law to determine the final volume of a gas whose initial volume
  is 6.72 L, initial amount is 3.88 mol, and final amount is 6.10 mol. Assume
  pressure and temperature are held constant.`,
    `V1 = 6.72 L, N1 = 3.88 mol, V2 = ? L, N2 = 6.10 mol`,
  ],
  [
    `A 2.45 L volume of gas contains 4.5 × 10<sup>21</sup> gas particles. How many gas
  particles are there in 3.87 L if the gas is at constant pressure and
  temperature?`,
    `V1 = 2.45 L,N1 = 4.5e+21 particles,V2 = 3.87 L,N2 = ? particles`,
  ],
  [
    `A 12.8 L volume of gas contains 3.00 × 10<sup>20</sup>gas particles. At constant
  temperature and pressure, what volume does 8.22 × 10<sup>18</sup> gas particles fill?`,
    `V1 = 12.8 L,N1 = 3.00e+20 particles, V2 = ? L,N2 = 8.22e+18 particles`,
  ],
];
let combinedQuestionArray = [
  [
    `If  V1 = 46.7 mL, T1 = 266 K, P2 = 409 torr, T2 = 371 K, and V2 is 105 mL what is 
P1?`,
    `P1 = ? torr, V1 = 46.7 mL, T1 = 266K,P2 = 409 torr,V2 = 105 mL,T2 = 371 K`,
  ],
  [
    `Problem1:<br>
  Evaluate V<sub>2</sub><br>
  P1 = 334 torr, V1 = 56.9 mL, T1 = 266 K,P2 = 722 torr,V2 = ? mL, T2 = 334 K
  Problem2:<br>
  Evaluate P<sub>2</sub><br>
  V1 = 0.976 L, P1 = 2.33 atm, T1 = 443 K,V2 = 1.223 L,P2 = ? mL, T2 = 355 K
  Problem3:<br>
  Evaluate T<sub>2</sub><br>
  V1 = 3.66 L, P1 = 899 torr, T1 = 23<sup>o</sup>C K,V2 = 2.19 L,P2 = 739 torr, T2 = ? K`,
    `P1 = 334 torr, V1 = 56.9 mL, T1 = 266 K,P2 = 722 torr,V2 = ? mL, T2 = 334 K;P1 = 2.33 atm, V1 = 0.976 L, T1 = 443 K,P2 = ? atm,    V2 = 1.223 L, T2 = 355 K;P1 = 899 torr, V1 = 3.66 L,  T1 = 296 K, P2 = 739 torr, V2 = 2.19 L, T2 = ? K`,
  ],
];

let idealQuestionArray = [
  [
    `A 4.22 mol sample of Ar has a volume of 87.9 L  and a temperature of
    307 K. What is its  pressure? `,
    `P = ? atm, V = 87.9 L, N = 4.22 mol, T = 307 K`,
  ],
  [
    `A 0.0997 mol sample of O2 has a volume of 3.94 L  and a temperature of
  333 K. What is its pressure?`,
    `P = ? atm, V = 3.94 L, N = 0.0997 mol,T = 333 K`,
  ],
  [
    `A 4.22 mol sample of Ar has a pressure of 1.21 atm and a temperature of
  34°C. What is its volume?
  Hint<br> T = 34°C = 273 + 34 = 307 K 
  `,
    `P = 1.21 atm, V = ? L, N = 4.22 mol,T = 307 K`,
  ],
  [
    `A 0.0997 mol sample of O2 has a pressure of 0.692 atm and a temperature of
  333 K. What is its volume?`,
    `P = 0.692 atm, V = ? L, N = 0.0997 mol,T = 333 K`,
  ],
  [
    `A sample of gas has a volume of 3.91 L, a temperature of 305 K, and a pressure
  of 2.09 atm. How many moles of gas are present?`,
    `P = 2.09 atm, V = 3.91 L, N = ? mol, T = 305 K`,
  ],
  [
    `A 3.88 mol sample of gas has a temperature of 28°C and a pressure of 885 torr.
  What is its volume?<br>Hint:<br>
  Convert temperature to Kelvin(K)<br>
  T = 28°C = 28 + 273 = 301 K`,
    `P = 885 torr, V = ? L, N = 3.88 mol, T = 301 K`,
  ],
  [
    `A 0.0555 mol sample of Kr has a temperature of 188°C and a volume of 0.577 L.
  What pressure does it have?
  <br>Hint:<br>
  Convert temperature to Kelvin(K)<br>
  T = 188°C = 118 + 273 = 491 K`,
    `P = ? atm, V = 0.577 L, N = 0.0555 mol, T = 491 K`,
  ],
  [
    `If 1.000 mol of gas has a volume of 5.00 L and a pressure of 5.00 atm, what is its
  temperature?`,
    `P = 5.00 atm, V = 5.00 L, N = 1.000 mol, T = ? K`,
  ],
  [
    `A sample of 7.55 g of He has a volume of 5,520 mL and a temperature of 123°C.
  What is its pressure in torr?
  <br>Hint:<br>
  convert: 7.55 g  of He to mol, 5520 mL to L, and 123°C to k<br>
     4.003 g of He( molar mass of He) = 1 mol of He<br>
     Therefore 7.55 g of He = 1.89 mol<br>
     1 L = 1000 mL<br>
     Therefore 5520 mL = 5.520 L<br>
     The relationship between temperature in Celsius and temperature in Kelvin is:K = <sup>o</sup>C + 273<br>
     Therefore 123°C = 123 + 273 = 396 K`,
    `P = ? torr, V = 5.520 L, n= 1.89 mol, T = 396 K`,
  ],
  [
    `A sample of Ne has a pressure of 0.772 atm and a volume of 18.95 L. If its
     temperature is 295 K, what mol is present in the sample?`,
    `P = 0.772 atm, V = 18.95 L, n = ? mol, T = 295 K`,
  ],
  [
    `A sample of 87.4 g of Cl<sub>2</sub> has a temperature of −22°C and a pressure of 993 torr.
     What is its volume  ?<br>
     70.90 g of Cl<sub>2</sub> = molar mass of Cl<sub>2</sub> = 1 mol of Cl<sub>2</sub>
     Therefore 87.4 g of Cl<sub>2</sub> = 1.23 mol,n = 1.23 mol<br>
     −22°C = -22 + 273 = 251 K`,
    `P = 993 torr, V = ? L, n = 1.23 mol, T = 251 K`,
  ],
  [
    `A sample of Ne has a pressure of 0.772 atm and a volume of 18.95 L. If its
     temperature is 295 K, what mol is present in the sample?`,
    `P = 0.772 atm, V = 18.95 L, n = ? mol, T = 295 K`,
  ],
  [
    `A mercury lamp contains 0.0055 g of Hg vapor in a volume of 15.0 mL. If the
     operating temperature is 2800 K, what is the pressure of the mercury vapor?<br>Hint:<br>
     200.59 g of Hg( molar mass of Hg) = 1 mol of Hg<br>
     Therefore 0.005 g of Hg = 2.74 x 10<sup>-5</sup> mol of Hg<br>
     1 L = 1000 mL<br>
     Therefore 15.0 mL = 0.015 L `,
    `P = ? atm, V = 0.015 L, n = 2.74e-5 mol, T = 2800 K`,
  ],
  [
    `Oxygen is a product of the decomposition of mercury(II) oxide:<br>
     2HgO(s) →2Hg(ℓ) + O<sub>2</sub>(g)<br>
     What volume of O<sub>2</sub> is formed from the decomposition of 3.009 g of HgO if the
     gas has a pressure of 744 torr and a temperature of 122°C?<br>Hint<br>
     First determine the number of moles of O<sub>2</sub> involved<br>
     216.6 g of HgO( molar mass of HgO) = 1 mol of HgO<br>
     Therefore 3.009 g of HgO = 0.0139 mol of HgO<br>
     2 mol of 2HgO => 1 mol O<sub>2</sub> from the equation<br>
     Therefore 0.0138 mol of HgO => 0.00695 mol of O<sub>2</sub><br>
     The relationship between temperature in Celsius and temperature in Kelvin is:K = <sup>o</sup>C + 273
     Therefore 122°C = 122 + 273 = 395 K
     `,
    `P = 744 torr, V = ? L, n = 0.00695  mol, T = 395 K`,
  ],
  [
    `Lithium oxide is used to absorb carbon dioxide:<br>
     Li<sub>2</sub>O(s) + CO<sub>2</sub>(g) →Li<sub>2</sub>CO<sub>3</sub>(s)<br>
     What volume of CO<sub>2</sub> can 6.77 g of Li<sub>2</sub>O absorb if the CO<sub>2</sub> pressure is 3.5 × 10<sup>−4</sup>
     atm and the temperature is 295 K?<br>Hint:<br>
     First determine the number of moles of CO<sub>2</sub> involved.<br>
     29.9 g of Li<sub>2</sub>O( molar mass of Li<sub>2</sub>O) = 1 mol of Li<sub>2</sub>O<br>
     Therefore 6.77 g of Li<sub>2</sub>O = 0.227 mol of Li<sub>2</sub>O<br>
     1 mol of Li<sub>2</sub>O => 1 mol CO<sub>2</sub> from the equation<br>
     Therefore 0.227 mol of Li<sub>2</sub>O => 0.227 mol of CO<sub>2</sub><br`,
    `P = 3.5e-4 atm, V = ? L, n = 0.227 mol, T = 295 K`,
  ],
  [
    `What is the volume of 17.88 mol of Ar at STP?
     <br>Hint:<br>
     STP = Standard Temperature and Pressure<br>
     At STP, p = 1 atm, T = 273 K`,
    `P = 1 atm, V = ? L, n = 17.88 mol, T = 273 K`,
  ],
  [
    `How many moles are present in 334 L of H<sub>2</sub> at STP?<br>
     STP = Standard Temperature and Pressure<br>
     At STP, P = 1 atm, T = 273 K`,
    `P = 1 atm, V = 334 L, n = ? mol, T = 273 K`,
  ],
  [
    `Calculate the volume of one mole of any gas at STP<br>Hint:<br>
  STP = Standard Temperature and Pressure<br>
     At STP, P = 1 atm, T = 273 K`,
    `P = 1 atm, V = ? L, n = 1 mol, T = 273 K`,
  ],
  [
    `How many liters, at STP, of CO2 are produced from 100.0 g of C<sub>8</sub>H<sub>18</sub> ?<br>
     2C<sub>8</sub>H<sub>18</sub>(ℓ) + 25O<sub>2</sub>(g) →16CO<sub>2</sub>(g) + 18H<sub>2</sub>O(ℓ)<br>
     First determine the number of moles of CO<sub>2</sub> involved.<br>
     114.224 g of C<sub>8</sub>H<sub>18</sub>( molar mass of C<sub>8</sub>H<sub>18</sub>) = 1 mol of C<sub>8</sub>H<sub>18</sub><br>
     Therefore 100.0 g of C<sub>8</sub>H<sub>18</sub> = 0.875 mol of  C<sub>8</sub>H<sub>18</sub><br>
     2 moles of  C<sub>8</sub>H<sub>18</sub> => 16 moles CO<sub>2</sub> from the equation<br>
     Therefore 0.875 moles of  C<sub>8</sub>H<sub>18</sub> => 7.003 moles of CO<sub>2</sub><br
     STP = Standard Temperature and Pressure<br>
     At STP, P = 1 atm, T = 273 K
     `,
    `P = 1 atm, V = ? L, n = 7.003 mol, T = 273 K`,
  ],
  [
    `How many liters, at STP, of O<sub>2</sub> are required to burn 3.77 g of butane from a
  disposable lighter?<br>
  2C<sub>4</sub>H<sub>10</sub>(g) + 13O<sub>2</sub>(g) →8CO<sub>2</sub>(g) + 10H<sub>2</sub>O(ℓ)<br>
  First determine the number of moles of O<sub>2</sub> involved.<br>
     58.12 g of C<sub>4</sub>H<sub>10</sub>( molar mass of C<sub>4</sub>H<sub>10</sub>) = 1 mol of C<sub>4</sub>H<sub>10</sub><br>
     Therefore 3.77 g of C<sub>4</sub>H<sub>10</sub> = 0.065 mol of  C<sub>4</sub>H<sub>10</sub><br>
     2 moles of  C<sub>4</sub>H<sub>10</sub> => 13 moles O<sub>2</sub> from the equation<br>
     Therefore 0.065 moles of  C<sub>4</sub>H<sub>10</sub> => 0.421 moles of O<sub>2</sub><br
     STP = Standard Temperature and Pressure<br>
     At STP, P = 1 atm, T = 273 K`,
    `P = 1 atm, V = ? L, n= 0.421 mol, T = 273 K`,
  ],
  [
    `What is the density of He gas at STP? <br>Hint:<br>
    <div style="display:flex;flex-wrap:nowrap">
    <div style="margin-right: 10px;">density </div>
    <div style="margin-right: 10px;"> =</div>
    <div>
    <div style="border-bottom:2px solid white">Mass</div>
    <div>Volume</div>
    </div>
    </div>
    
     density = molar mass/molar volume<br>
     molar volume = volume of one of a gas, use ideal gas equation(PV=nRT) to calculate it<br>
     Note: at STP(Standard Temperature and Pressure) molar volume of any gas = 22.4 L. Want to verify? Use PV = nRT
     `,
    `P = 1 atm, V = ? L, n = 1 mol, T = 273 K`,
  ],
];

let daltonQuestionArray = [
  [
    `Air is known to be a mixture of N<sub>2</sub> and O<sub>2</sub>.
     The partial pressure of N<sub>2</sub>is 608 torr and that of O<sub>2</sub> is 152 torr. What is the total pressure of air?`,
    `Pt=?atm,P1=2.33atm,P2=0.77atm`,
  ],

  [
    `Air can be thought of as a mixture of N<sub>2</sub> and O<sub>2</sub>. In 760 torr of air, the partial
  pressure of N<sub>2</sub> is 608 torr. What is the partial pressure of O<sub>2</sub>?`,
    `Pt = 760 torr, P1 = 608 torr, P2 = ? torr`,
  ],
  [
    `What is the total pressure of a gas mixture containing these partial pressures:
  P<sub>N<sub>2</sub></sub> = 0.78 atm, P<sub>H<sub>2</sub></sub> = 0.33 atm, and P<sub>O<sub>2</sub></sub> = 1.59 atm?`,
    `Pt = P1 = 0.78 atm, P2 = 0.33 atm, P3 = 1.59 atm`,
  ],
  [
    `What is the total pressure of a gas mixture containing these partial pressures:
  P<sub>Ne</sub> = 312 torr, P<sub>He</sub> = 799 torr, and P<sub>Ar</sub> = 831 torr?`,
    `Pt = ? torr, P1 = 312 torr, P2 = 799 torr, P3 = 831 torr`,
  ],
  [
    `In a gas mixture of He and Ne, the total pressure is 335 torr and the partial
  pressure of He is 0.228 atm. What is the partial pressure of Ne?<br><Hint><br>
  All the pressure quantity must be in the same unit before you proceed<br>
  Convert He partial pressure(0.228 atm) to torr<br>
  The relationship between torr and atm is: 1 atm = 760 torr 
  Therefore 0.228 atm = 173.28 torr `,
    `Pt = 335 torr, P1 = 173.28, P2 = ? torr`,
  ],
  [
    `In a gas mixture of O<sub>2</sub> and N<sub>2</sub>, the total pressure is 2.66 atm and the partial
  pressure of O<sub>2</sub> is 888 torr. What is the partial pressure of N<sub>2</sub>?
  <br><Hint><br>
  All the pressure quantity must be in the same unit before you proceed<br>
  Convert 0<sub>2</sub> partial pressure(888 torr) to atm<br>
  The relationship between torr and atm is: 1 atm = 760 torr<br>
  Therefore 888 torr = 1.17 atm`,
    `Pt = 2.66 atm, P1 = 1.17 atm, P2 = ? atm`,
  ],
  [
    `A 3.55 L container has a mixture of 56.7 g of Ar and 33.9 g of He at 33°C. What
  are the partial pressures of the gases and the total pressure inside the
  container?<br>
  <br>Hint<br>
  The final solution to this one is three steps away<br>
  First: convert 56.7 g of Ar and 33.9 g He to moles and 33°C to Kelvin(K)<br>
  Second:Using moles result obtained in step one, Use the ideal gas law(pv = nRT) to calculate the partial pressures of Ar and He<br>
  Third: Use the Dalton's law of partial pressure to calculate total pressure<br>
  4.003g/mol(molar mass of He) = 1 mole of He<br>
  Therefore 33.9g of He =  8.469 mol of He<br>
  39.95g/mol(molar mass of Ar) = 1 mol of ar<br>
  Therefore 56.7g of Ar =  1.672 mol of Ar<br>
  33°C = 33 + 273 = 306K
  Partial pressure of He = P = nRT/V =  59.9 atm
  Partial pressure of Ar = P = nRT/V =  10.0 atm
  `,
    `pt = ? atm, p1 = 59.9 atm, p2 = 10.0 atm`,
  ],
  [
    `A sample of O<sub>2</sub> is collected over water in a 5.00 L container at 20°C. If the total
  pressure is 688 torr, how many moles of O<sub>2</sub> are collected?
  <br>Hint<br>
  Any time a gas is collected over water, the total pressure is equal to the partial
pressure of the gas plus the vapor pressure of water.<br>
Therefore in this question, the total pressure(688 torr) = partial pressure of O<sub>2</sub> + vapor pressure of water<br>
Vapor pressure of water at 20°C = 17.54 torr<br>
The relationship between temperature in celsius(°C) and temperature in Kelvin(K) is:<br>
 K = °C + 273<br>
Therefore 20°C = 20 + 273 = 293K
The final solution is now two steps away<br>
First: Use Dalton's law of partial pressure to calculate the partial pressure of O<sub>2</sub>.<br>
Second: Use ideal gas law to calculate the number of moles of O<sub>2</sub> collected `,
    `Pt = 688 torr, P1 = 17 torr, P2 = ? torr`,
  ],
  [
    `A sample of CO is collected over water in a 25.00 L container at 5°C. If the total
  pressure is 0.112 atm, how many moles of CO are collected?,
   <br>Hint<br>
  Any time a gas is collected over water, the total pressure is equal to the partial
pressure of the gas plus the vapor pressure of water.<br>
Therefore in this question, the total pressure(0.112 atm) = partial pressure of CO + vapor pressure of water<br>
Vapor pressure of water at 5°C = 6.54 torr = 0.0086 atm <br>
The relationship between temperature in celsius(°C) and temperature in Kelvin(K) is:<br>
 K = °C + 273<br>
Therefore 5°C = 5 + 273 = 278K
The final solution is now two steps away<br>
First: Use Dalton's law of partial pressure to calculate the partial pressure of CO.<br>
Second: Use ideal gas law to calculate the number of moles of CO collected`,
    `Pt = 0.112 atm, P1 = 0.0086 atm, P2 = ? atm`,
  ],
  [
    `In a container, 4.56 atm of F<sub>2</sub> is combined with 2.66 atm of Cl<sub>2</sub>. What are the
  mole fractions of each component?<br>Hint:<br>
  The mole fractions are the ratios of the partial pressure of each component
  and the total pressure:<br>
  The solution is two steps away<br>
  First: Use Dalton's law of partial pressure to obtain the total pressure<br>
  Second: Divide each partial pressure of each component by the total pressure to obtain the mole fractions of each component`,
    `Pt = ? atm, P1 = 4.56 atm, P2 = 2.66 atm`,
  ],
  [
    `A sample of NO is collected over water in a 75.0 mL container at 25°C. If the
  total pressure is 0.495 atm, how many grams of NO are collected?
  <br>Hint<br>
  Any time a gas is collected over water, the total pressure is equal to the partial
pressure of the gas plus the vapor pressure of water.<br>
Therefore in this question, the total pressure(0.112 atm) = partial pressure of CO + vapor pressure of water<br>
Vapor pressure of water at 5°C = 6.54 torr = 0.0086 atm <br>
The relationship between temperature in celsius(°C) and temperature in Kelvin(K) is:<br>
 K = °C + 273<br>
Therefore 5°C = 5 + 273 = 278K
The final solution is now two steps away<br>
First: Use Dalton's law of partial pressure to calculate the partial pressure of CO.<br>
Second: Use ideal gas law to calculate the number of moles of CO collected`,
    ``,
  ],
];
let changeSigNumQuestionArray = [
  [
    `Change the following numbers to the indicated number of significant figures <br>
 (1) 4.65000 to 2 sigfigs<br>
 (2) 63.5600 to 3 sigfigs<br>
 (3) 8.32 to 2 sigfigs<br>
 (4) 36.500 to 2 sigfigs <br>
 (5) 96.56 to 4 sigfigs <br>`,
    `4.65000=2;63.5600=3;8.32=2 ;36.500=2 ;96.56=4`,
  ],
  [
    `Change the following numbers to the indicated number of significant figures<br>
  (1) 0.00004050 to 2 sigfigs<br>
  (2) 0.054700 to 3  sigfigs<br>
  (3)  0.00784700 to 5  sigfigs<br>
  (4) 0.0345 to 5  sigfigs`,
    `0.00004050=2;0.054700=3; 0.00784700=5;0.0345=5`,
  ],
  [
    `Find the number of sigficant figures in the following numbers<br>
  (1) 7000 <br>
  (2) 40.30<br>
  (3) 0.0012<br>
  (4) 420050<br>
  (5) 0.5607`,
    `7000;40.30;0.0012;420050;0.5607`,
  ],
  [
    `Give the number of significant figures in each measurement.<br>
  1. 36.7 m <br>
  2. 0.006606 s <br>
  3. 2002 kg <br>
  4. 306490000 people`,
    `36.7;0.006606;20022;306490000`,
  ],
  [
    `How many significant figures do these numbers have?<br>
  a. 23<br>
  b. 23.0<br>
  c. 0.00023<br>
  d. 0.0002302`,
    `23;23.0;0.00023;0.0002302`,
  ],
  [
    `How many significant figures do these numbers have?<br>
  a. 5.44 × 10<sup>8</sup><br>
  b. 1.008 × 10<sup>−5</sup><br>
  c. 43.09<br>
  d. 0.0000001381`,
    `5.44 x 108;1.008 x 10-5;43.09;0.0000001381`,
  ],
  [
    `How many significant figures do these numbers have?<br>
  a. 765,890<br>
  b. 765,890.0<br>
  c. 1.2000 × 10<sup>5</sup><br>
  d. 0.0005060`,
    `765,890; 765890.0;1.2000 × 105;0.0005060`,
  ],
  [
    `How many significant figures do these numbers have?<br>
  a. 0.009<br>
  b. 0.0000009<br>
  c. 65,444<br>
  d. 65,040`,
    `0.009;0.0000009;65444;65040`,
  ],
];

let getSigNumQuestionArray = [
  [
    `Find the number of sigficant figures in the following numbers<br>
 (1) 0.00465000 <br>
 (2) 0.0004300<br>
 (3) 0.0000432<br>
 (4) 4600500 <br>
 (5) 46.5000 <br>`,
    `0.00465000;0.0004300;0.0000432;4600500;46.5000`,
  ],
  [
    `Find the number of sigficant figures in the following numbers<br>
  (1) 0.00004050 <br>
  (2) 54700<br>
  (3) 1000.09<br>
  (4) 0.039`,
    `0.00004050 ;54700;1000.09;0.039`,
  ],
  [
    `Find the number of sigficant figures in the following numbers<br>
  (1) 7000 <br>
  (2) 40.30<br>
  (3) 0.0012<br>
  (4) 420050<br>
  (5) 0.5607`,
    `7000;40.30;0.0012;420050;0.5607`,
  ],
  [
    `Give the number of significant figures in each measurement.<br>
  1. 36.7 m <br>
  2. 0.006606 s <br>
  3. 2002 kg <br>
  4. 306490000 people`,
    `36.7;0.006606;20022;306490000`,
  ],
  [
    `How many significant figures do these numbers have?<br>
  a. 23<br>
  b. 23.0<br>
  c. 0.00023<br>
  d. 0.0002302`,
    `23;23.0;0.00023;0.0002302`,
  ],
  [
    `How many significant figures do these numbers have?<br>
  a. 5.44 × 10<sup>8</sup><br>
  b. 1.008 × 10<sup>−5</sup><br>
  c. 43.09<br>
  d. 0.0000001381`,
    `5.44 x 108;1.008 x 10-5;43.09;0.0000001381`,
  ],
  [
    `How many significant figures do these numbers have?<br>
  a. 765,890<br>
  b. 765,890.0<br>
  c. 1.2000 × 10<sup>5</sup><br>
  d. 0.0005060`,
    `765,890; 765890.0;1.2000 × 105;0.0005060`,
  ],
  [
    `How many significant figures do these numbers have?<br>
  a. 0.009<br>
  b. 0.0000009<br>
  c. 65,444<br>
  d. 65,040`,
    `0.009;0.0000009;65444;65040`,
  ],
];

let multiDiviSigNumQuestionArray = [
  [
    `Express the final answer to the proper number of significant figures.<br>
1. 76.4 × 180.4 = ?<br>
2. 934.9 ÷ 0.00455 = ?`,
    `76.4 × 180.4 = 13782.56;934.9/0.00455 = 205472.5275`,
  ],
];
let addSubSigNumQuestionArray = [
  [
    `Express the final answer to the proper number of significant figures.<br>
1. 101.2 + 18.702 = ?<br>
2. 202.88 − 1.013 = ?`,
    `101.2 + 18.702=119.902;202.88 − 1.013=201.867`,
  ],
  [
    `Express the answer for 3.445 + 90.83 − 72.4 to the proper number of
significant figures.`,
    ` 3.445 + 90.83 − 72.4=21.874999999999986`,
  ],
];
export {
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
};
