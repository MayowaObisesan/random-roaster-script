// Array of 18 names
const names = ["Dy", "Ekoh", "Samson", "Isaac", "Ego", "Dolapo", "Pelumi", "Natachie", "Samuel", "Paul-Joseph", "Rahman", "Mars", "Damola", "Mitong", "Joshua", "James", "Biliqis", "Tola"];

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the names array
shuffleArray(names);

// Divide the shuffled names into 3 groups
const groupSize = Math.ceil(names.length / 3);
const groups = [];

for (let i = 0; i < 3; i++) {
  const start = i * groupSize;
  const end = start + groupSize;
  groups.push(names.slice(start, end));
}

// Print the groups
console.log("Group 1:", groups[0]);
console.log("Group 2:", groups[1]);
console.log("Group 3:", groups[2]);
