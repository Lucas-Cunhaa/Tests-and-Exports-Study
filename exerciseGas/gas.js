function fuelPerKm(km, type) {
  let litros;
  if (km > 0 && (type === 'gas'|| "alcool")) {
    if (type === "gas") {
      litros = km / 16;
    } else {
      litros = km / 11;
    }

    return parseInt(litros);
  }
}
console.log(fuelPerKm(16, 'gas'));
module.exports = { fuelPerKm };
