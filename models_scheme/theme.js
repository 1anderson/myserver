const theme = {
    include: ['@all'],
};

 const themes = {
    include: ['@all', 'categories'],
    assoc: {
        categories: {
            include: ['id', 'name', 'subCategories'],
            assoc: {
                subCategories: {
                    include: ['id','name']
                }
            }
        }
    }
};

export {
    theme,
    themes
 }