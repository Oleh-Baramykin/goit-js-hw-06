const categories = document.querySelectorAll('li.item');
console.log('Number of categories:', categories.length);

// categories.forEach(category => console.log(category.textContent));
const categoryName = document.querySelectorAll('h2');
// console.log(categoryName);
categoryName.forEach(category => {
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${category.nextElementSibling.children.length}`);
});
