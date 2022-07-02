export function getUsers() {
    return { type: 'GET_EVENTS' }
}

export function loadUsers(events) {
    return { type: 'LOAD_EVENTS', events }
}
