function formatCategoryTitleForURL(categoryTitle) {

    const formattedString = categoryTitle.replace(/\s+/g, '-');
    return formattedString.toLowerCase();
}

export default formatCategoryTitleForURL;