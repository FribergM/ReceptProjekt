export const sortCategories = (categories) => {
    const newCategoryOrder = ['Förrätt', 'Huvudrätt', 'Efterrätt']

    const sortedCategories = [...categories].sort((a,b) => {

        const indexA = newCategoryOrder.indexOf(a.name);
        const indexB = newCategoryOrder.indexOf(b.name);

        if(indexA !== -1 && indexB !== -1){
            return indexA - indexB;
        }

        if (indexA !== -1) {
            return -1;
        }
        
        if (indexB !== -1) {
            return 1; 
        }

        return 0;
    }) 
    return sortedCategories;
}

