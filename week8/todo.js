console.log("Bah pardner");

const todoList = [];

todoList.push("Sweep the ceiling");

console.log(todoList);

todoList.push("Mow the living room");

todoList.push("Cook the peanut butter");

console.log(todoList);

todoList.pop();

console.log(todoList);

for (let i = 0; i < todoList.length; i++) {
  console.log(i);
  console.log(todoList[i]);
}
