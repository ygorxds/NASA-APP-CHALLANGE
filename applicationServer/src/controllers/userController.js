const crypto = require('crypto');
const connection = require('../database/connect');


module.exports = {

    async seeAllUser (request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },
    
    async createUser (request,response) {
        
        const { name,email,birth } = request.body;
        
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('users').insert({
            id,
            name,
            email,
            birth,
        })
    
        return response.json({ id });
    }
    
};