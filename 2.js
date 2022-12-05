function propName(obj, objKeyName) {
  return (objKeyName in obj);
}
const human = {
  Имя: "Андрей", 
  Город: "Тюмень",
  Возраст: 24,
};
console.log(propName(human, "Фамилия"));  
console.log(propName(human, "Имя"));  