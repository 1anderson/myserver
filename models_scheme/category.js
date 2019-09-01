
const category = {
    include: ['@all','subCategories'],
    as: {theme_fk: " theme_id "},
    assoc: {
        subCategories: {
            include: ['name','id']
        }
    }
}

const categorys = {
    include: ['@all','subCategories'],
    as: {theme_fk: " theme_id "},
    assoc: {
        subCategories: {
            include: ['name','id']
        }
    }
}

export {
    category,
    categorys
}