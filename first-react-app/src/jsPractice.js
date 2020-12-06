var numbers = [10,12,15,67,5];

// Mapping
var mapNumbers = numbers.map(number=>{
  return number *3;
});

// Filter
var filteredNums = numbers.filter(number=>{
    return number>30;
});

// Reduce
var accumulator = numbers.reduce(function(accumulator,number){
    return accumulator + number;
})

// Find
var search = numbers.find(word=> {return word==15});

// Find index
var position = numbers.findIndex(number=>{
  return number == 12;
})
export {mapNumbers,filteredNums,accumulator,search,position};