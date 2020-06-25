const users = []

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase()
    group = group.trim().toLowerCase()
    const existingUser = users.find((user) => user.group === group && user.name === name))

    if (existingUser) {
        return { error: 'username is unavailable' }
    }
    const user = { id, name, group }
    users.push(user)
    return { user }
}

const getUser = (id) => users.find((user) => user.id === id)
const getUserInGroup = (group) => users.filter((user) => user.room === room)

module.exports = { addUser, getUser, getUserInGroup }