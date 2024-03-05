const teste = require("./gas") 
test('add 16 and type = gas', () => {
    expect(teste.fuelPerKm(16, 'gas')).toBe(1);
  });