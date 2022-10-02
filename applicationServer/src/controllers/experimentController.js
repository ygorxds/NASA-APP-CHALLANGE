const connection = require('../database/connect');

module.exports = {
    
    async seeAllXp(request, response) {
        const experiments = await connection('experiments').select("*");
        return response.json(experiments)
    },

    async createXp(request, response) {
        const {title, description, video} = request.body;
        const user_id = request.headers.authorization;

       const [id] = await connection('experiments').insert({
            title,
            description,
            video,
            user_id,
        });
        return response.json({id});
    },

    async deleteXp(request,response) {
        const {id} = request.params;
        const user_id = request.headers.authorization;

        const experience = await connection('experiments')
            .where('id', id)
            .select('user_id')
            .first();

            if(experience.user_id !== user_id){
                return response.status(401).json({error: 'Operation not permitted, login with valited account and try again'})
            }

            await connection('experiments').where('id', id).delete();

            return response.status(204).send();
    }
};