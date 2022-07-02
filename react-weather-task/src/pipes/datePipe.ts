export default function formatDate(date: Date) {
    const dateArr = date.toUTCString().split(' ')

    return {
        date: dateArr.slice(0, 3),
        time: dateArr[4],
    }
}
