const categoriesEl = document.querySelectorAll('.item');
const numberOfCategories = categoriesEl.length;
console.log(`Number of categories: ${numberOfCategories}`);



const messangeEl = categoriesEl.forEach(function(element, index){
    const titleEl = categoriesEl[index].firstElementChild.textContent;
    
    const categoriesLastEl = categoriesEl[index].lastElementChild;
    const elementsEl = categoriesLastEl.querySelectorAll('li').length;
    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${elementsEl}`);
});


