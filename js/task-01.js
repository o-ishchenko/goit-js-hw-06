const listItemsEl = document.querySelectorAll( ".item" );
console.log('Number of categories:', listItemsEl.length);
listItemsEl.forEach(item => {
    const titleEl = item.querySelector("h2");
    console.log('Category:', titleEl.textContent);
    const innerListItemsEl = item.querySelectorAll("li");
    console.log('Elements:', innerListItemsEl.length);
});
