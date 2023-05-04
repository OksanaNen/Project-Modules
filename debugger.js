const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger; //состояние переменных на текущий момент - бонус еще не рассчитан
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger; // рассчитан бонус
    return bonus;
    };

calculateBonus(10, 30);