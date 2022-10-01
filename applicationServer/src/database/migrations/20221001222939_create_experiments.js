/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('experiments', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('video').notNullable();
    
        //here have relation for sql Tables
        table.string('user_id').notNullable();
    
    
    
        table.foreign('user_id').references('id').inTable('users')
        });
    };


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable('experiments');
};
