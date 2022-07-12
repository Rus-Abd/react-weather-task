export default async function requestGetLocation(city: string) {
    let latitude = 0
    let longitude = 0

    await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a32fc8e429c811dbafb887d21cb6e1b8`
    )
        .then((res) => res.json())
        .then((res) => {
            latitude = res[0].lat
            longitude = res[0].lon
        })

    return { latitude, longitude }
}
