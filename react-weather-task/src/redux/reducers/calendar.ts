type actionT = {
    users: object
    type: string
}

export default function calendarReducer(
    prevState = { events: [], isLoading: false },
    action: actionT
) {
    switch (action.type) {
        case 'GET_EVENTS':
            return { ...prevState, isLoading: true }
        case 'LOAD_EVENTS':
            return { ...prevState, isLoading: false, users: action.users }
        default:
            return prevState
    }
}
