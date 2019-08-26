
 const post = {
    include: ['@all'],
    exclude: ['path_of_images', 'created_date'],
    as: { category_fk: 'category_id', sub_category_fk: 'sub_category_id', author_fk: 'author_id' }
};

 const posts = {
    include: ['@all', 'author'],
    exclude: ['path_of_images'],
    as: { category_fk: 'category_id', sub_category_fk: 'sub_category_id', author_fk: 'author_id' },
    assoc: {
        author: {
            include: ['id', 'name'],
        }
    }
};

export {
    post,
    posts
 }
