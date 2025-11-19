const db = require('../../data/dbconfig')

async function create(task) {
    const { title, status, created } = task

    const obj = {
        title,
        status,
        created_at: created
    }

    const [id] = await db('tasks').insert(obj).returning('task_id')
    const user = await db('tasks').where('task_id', id.task_id).first()
    return user
}

async function get() {
    const tasks = await db('tasks')
    console.log(tasks)
    return tasks
}

async function update(task) {
    const { id, status } = task

    await db('tasks')
        .where('task_id', id)
        .update({ status })
    return 'updated'
}

async function del(ID) {
    await db('tasks')
        .where('task_id', ID).delete()
    return 'Task deleted'
}

module.exports = {
    create,
    get,
    update,
    del,
}
