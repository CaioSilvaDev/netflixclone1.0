fetch(genres_list_http + new URLSearchParams({
    api_key: api_key
}))
    .then(res => res.json())
    .then(data => {
        data.genres.forEach(item => {
            fetchMoviesListByGenres(item.id, item.name)
        })
    })
const fetchMoviesListByGenres = (id, genres) => {
    fetch(movies_genres_http + new URLSearchParams({
        api_key: api_key,
        with_genrers: id,
        page: Math.floor(Math.random() * 3) + 1
    }))
        .then(res => res.json())
        .then(data => console.log(data))
}
