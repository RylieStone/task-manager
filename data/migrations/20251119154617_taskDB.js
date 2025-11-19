/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('tasks', table => {
    table.increments('task_id')
    table.string('title').notNullable().unique()
    table.boolean('status').notNullable()
    table.string('created_at').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('tasks')
};
