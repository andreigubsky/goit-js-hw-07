function getCategoryNumber(categorySelector, titleSelector, elementSelector){
    const categoryNumber = document.querySelectorAll(categorySelector);
    console.log(`Number of categories: ${categoryNumber.length}`);

    categoryNumber.forEach(category => {

        const categoryTitle = category.querySelector(titleSelector);
        console.log(`Category: ${categoryTitle.textContent}`);
        
        const categoryElements = category.querySelectorAll(elementSelector);
        console.log(`Elements: ${categoryElements.length}`);
        
    });
}
getCategoryNumber('ul#categories>li.item', 'h2', 'li');