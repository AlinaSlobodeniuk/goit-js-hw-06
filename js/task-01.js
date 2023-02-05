const categoriesList = document.querySelector("#categories");
const categoryElements = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoryElements.length}`);


categoryElements.forEach((item) => {
console.log(`Category: ${item.firstElementChild.textContent}`);

console.log(`Elements: ${item.lastElementChild.children.length}`)
})









// categoryElements.forEach((item) => {
//     console.log(`Category: ${item.firstElementChild.textContent}`);
//     console.log(`Elements: ${item.lastElementChild.children.length}`)
// });