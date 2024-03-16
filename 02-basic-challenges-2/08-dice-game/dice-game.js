function diceGameSimulation(number) {
  const arrResult = [];

  for (let i = 0; i < number; i++) {
    const dice1 = Math.trunc(Math.random() * 6) + 1;
    const dice2 = Math.trunc(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    let result = 'roll again';

    switch (sum) {
      case 7:
      case 11:
        {
          result = 'win';
        }
        break;
      case 2:
      case 3:
      case 12: {
        result = 'lose';
      }
    }

    arrResult.push({
      dice1,
      dice2,
      sum,
      result,
    });
  }

  return arrResult;
}

module.exports = diceGameSimulation;
