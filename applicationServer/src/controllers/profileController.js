// return data only user

const connection =  require ("../database/connect")

module.exports = {

    async seeOnly(request, response){
        const user_id = request.headers.authorization;
        
        const experience = await connection('experiments')
        .where('user_id', user_id)
        .select('*');

        return response.json(experience)
    }
}