import { useEffect, useState } from "react";
import { requests } from "../utils/apiLinks";



function Banner() {


    const [movie, setMovie] = useState({});
    const title = 'Bannermovie'
    // return a movie object which definately has a backdrop poster path
    function retriveImage(arr) {
        const m = arr.results[Math.floor(Math.random() * arr.results.length - 1)];
        if (m?.backdrop_path) return m;
        else return retriveImage(arr);
    }


    useEffect(() => {
        async function fetchData() {
            const dt = sessionStorage.getItem(title);
            if (dt && dt.length > 0) {
                setMovie(JSON.parse(sessionStorage.getItem(title)));
            } else {
                try {
                    const request = await fetch(requests.fetchNetflixOriginals);
                    const josnData = await request.json();
                    const m = await retriveImage(josnData);
                    sessionStorage.setItem(title, JSON.stringify(m));
                    setMovie(m);
                } catch (e) {
                    console.log(e);
                    alert(e);
                }
            }
        };
        fetchData();
    }, []);


    return (
        <section>
            <div className='banner' style={{
                backgroundImage: `linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0.5) 60%,rgba(0,0,0,.8) 100%),url(https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            }}>
                <div className="banner__description">
                    <h1 className="banner__title">
                        {movie?.title || movie?.original_name || movie?.original_title}
                    </h1>
                    <p className="banner__text">
                        {movie?.overview}
                    </p>

                    <div className="banner_btns_group">
                        <button className="btn banner__btn">Add to Playlist</button>
                        <button className="btn banner__btn">My Playlist</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner;
