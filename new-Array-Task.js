const colorsArray = [
  { id: 1, name: "red" },
  { id: 2, name: "yellow" },
  { id: 2, name: "green" },
  { id: 3, name: "brown" },
  { id: 4, name: "gray" },
  { id: 5, name: "white" },
  { id: 5, name: "red" },
  { id: 6, name: "black" },
];

// Remove duplicates by id
const uniqueIds = [];

const unique = colorsArray.filter(element => {
  const isDuplicate = uniqueIds.includes(element.id);

  if (!isDuplicate) {
    uniqueIds.push(element.id);

    return true;
  }

  return false;
});
console.log("Unique ids",unique);

// Remove duplicates by name
const uniqueNames = [];
const unique2 = colorsArray.filter(element=>{
    const isDuplicate = uniqueNames.includes(element.name);
    
    if(!isDuplicate){
        uniqueNames.push(element.name);

        return true;
    }
    return false;
});
console.log("Unique names:",unique2);

//Delete the color with name "green"
const filteredArray = colorsArray.filter(color => color.name !== "green");

console.log("Filtered array:", filteredArray);

//Add color "Purple" at the begining
const updatedArray = colorsArray.unshift('id:0,name:"purple"');
console.log("Updated array:", colorsArray);