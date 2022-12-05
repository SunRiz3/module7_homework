const fruitsColor = function(a) {
    a = {Яблоко: "Зеленоё",
    Вишня: "Красная",
    Клубника: "Красная",
    Банан: "Желтный"}
  for (let key in a) {
    console.log(key+ ': ' + a[key]);
  }
}
  fruitsColor();