const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "testdb.sqlite",
    },
    useNullAsDefault: true
})

test('SQLite is usable', async () => {
    // Create connection to SQLite database
    await knex.schema.createTable('books', (table) => {
        table.increments('id').primary()
        table.integer('authorId')
        table.string('title')
        table.string('pubDate')
        table.integer('rating')
    })
    knex.destroy()
});
