const ftoc = (ferDegr) => {
  //    C = (F − 32) × 5⁄9
  const celicDegr = ((ferDegr - 32) * 5) / 9;
  const roundedDegr = Math.round(celicDegr * 10) / 10;
  return roundedDegr;
};

const ctof = (celicDegr) => {
  //F = C × 9⁄5 + 32
  const ferDegr = (celicDegr * 9) / 5 + 32;
  const roundedDegr = Math.round(ferDegr * 10) / 10;
  return roundedDegr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
