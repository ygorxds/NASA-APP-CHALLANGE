const connection = require('../database/connect');

module.exports = {
    
    async seeAllTutorials(request, response) {
        const {page = 1} = request.query;

        const [count] = await connection('tutorials').count();

        const tutorials = await connection('tutorials').limit(5).offset((page-1)*5).select("*");
        return response.json(tutorials)
    },

    async createTutorial(request, response) {
        const {title, description, video} = request.body;
        const user_id = request.headers.authorization;

       const [id] = await connection('tutorials').insert({
            title,
            description,
            video,
            user_id,
        });
        return response.json({id});
    },

    async deleteTutorial(request,response) {
        const {id} = request.params;
        const user_id = request.headers.authorization;

        const experience = await connection('tutorials')
            .where('id', id)
            .select('user_id')
            .first();

            if(experience.user_id !== user_id){
                return response.status(401).json({error: 'Operation not permitted, login with valited account and try again'})
            }

            await connection('tutorials').where('id', id).delete();

            return response.status(204).send();
    }
};