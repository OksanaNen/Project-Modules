const calculateBonus = require('./debugger.js'); 

describe ("Тестирование расчета бонуса", () => {
  it ("Если сумма входных параметров больше 50, то бонус равен 50", () => {
    expect(calculateBonus(15, 50)).toBe(50);
  });
  
  it ("Если сумма входных параметров меньше 50, то бонус равен этой сумме", () => {
    expect(calculateBonus(10, 20)).toBe(30);
  });
});