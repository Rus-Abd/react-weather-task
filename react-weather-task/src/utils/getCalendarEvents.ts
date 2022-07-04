// Calendar id: jokerk58@gmail.com
// api key AIzaSyBdiKy6iTUgQDVocUQb7BaGoKImi9OjMlk
// client id 401779271274-cm5hs1ag39cuf6itmfa1k3te9m832d6u.apps.googleusercontent.com
import ApiCalendar from 'react-google-calendar-api'

export default function getEvents() {
    const config = {
        clientId: '401779271274-cm5hs1ag39cuf6itmfa1k3te9m832d6u.apps.googleusercontent.com',
        apiKey: 'AIzaSyBdiKy6iTUgQDVocUQb7BaGoKImi9OjMlk',
        scope: 'https://www.googleapis.com/auth/calendar',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    }
    // const apiCalendar = new ApiCalendar(config)

    return new ApiCalendar(config)
}
