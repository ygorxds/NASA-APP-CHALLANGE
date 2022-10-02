const connection =  require ("../database/connect");

module.exports = {
    async create(request, response){
        const {id} = request.body;

        const user = await connection('users').where('id',id).select('name').first();

        if (user !== true) {
            return response.status(400).json({error: 'No Ong Found this ID'});
        }

        return response.json(user);
    }
}