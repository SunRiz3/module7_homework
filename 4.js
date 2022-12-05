function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
} 

ElectricalAppliance.prototype.plugIn = function() {
  console.log(this.name + " включен!");
  this.isPlugged = true;
}

ElectricalAppliance.prototype.getPowerUsed = function() {
  return this.isPlugged ? this.power : 0;
}


const lamp = new ElectricalAppliance("lamp", 50);
const PC = new ElectricalAppliance("PC", 1000);
const tv = new ElectricalAppliance("TV", 700);
const allPower = new ElectricalAppliance("")

PC.plugIn();
console.log(PC.getPowerUsed() + " W");

tv.plugIn();
console.log(tv.getPowerUsed() + " W");

allPower.getPowerUsed();
console.log("Мощность всех приборов составляет - " + (PC.getPowerUsed() + tv.getPowerUsed()) + " W");