const colors = ['red', 'green', 'black', 'white'];
const models = [{model:1}, {model:2}, {model:3}, {model:4}];


const bikes = []; // accumulator


for(let i = 0; i < models.length; i++){
  //model 1
  for(let c = 0; c < colors.length; c++){
      const newBike = {model: models[i], color: colors[c]};
      bikes.push(newBike);  
  }

}

console.log(bikes);