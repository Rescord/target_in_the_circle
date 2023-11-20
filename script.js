alert(
  "Для проверки соответствия принадлежности произвольной точки радиусу круга"
);
let xOfTarget;
do {
  xOfTarget = prompt("Введите координату 'x' у точки");
} while (xOfTarget <= "");
let yOfTarget;
do {
  yOfTarget = prompt("Введите координату 'y' у точки");
} while (yOfTarget <= "");
let xOfCenter;
do {
  xOfCenter = prompt("Введите координату 'x' у центра окружности");
} while (xOfCenter <= "");
let yOfCenter;
do {
  yOfCenter = prompt("Введите координату 'y' у центра окружности");
} while (yOfCenter <= "");
let radius;
do {
  radius = prompt("Введите радиус круга");
} while (radius <= "");
let result =
  Math.pow(xOfTarget - xOfCenter, 2) + Math.pow(yOfTarget - yOfCenter, 2);
console.log(result);
if (result <= Math.pow(radius, 2)) {
  alert("Точка принадлежит кругу");
} else alert("Точка не принадлежит кругу");

//Круг должен быть в произвольном месте
