const connection = require('../database/connect');

module.exports = {
    
    async seeAllposts(request, response) {
        const {page = 1} = request.query;

        const [count] = await connection('posts').count();

        const posts = await connection('posts').limit(5).offset((page-1)*5).select("*");
        return response.json(posts)
    },

    async createPost(request, response) {
        const {title, description} = request.body;
        const user_id = request.headers.authorization;

       const [id] = await connection('posts').insert({
            title,
            description,
            user_id,
        });
        return response.json({id});
        
    },

    async deletePost(request,response) {
        const {id} = request.params;
        const user_id = request.headers.authorization;

        const experience = await connection('posts')
            .where('id', id)
            .select('user_id')
            .first();

            if(experience.user_id !== user_id){
                return response.status(401).json({error: 'Operation not permitted, login with valited account and try again'})
            }

            await connection('posts').where('id', id).delete();

            return response.status(204).send();
    }
};