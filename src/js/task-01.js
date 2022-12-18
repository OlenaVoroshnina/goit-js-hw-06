// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

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


