import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"


function Rows({ title, fetchUrl, isBig }) {

    const base_URL = "https://image.tmdb.org/t/p/original";
    const [movies, setMovies] = useState([]);
    let url;

    useEffect(() => {
        async function fetchData() {
            const existingData = sessionStorage.getItem(title);
            if (existingData && existingData.length > 0) {
                setMovies(JSON.parse(sessionStorage.getItem(title)));
            } else {
                try {
                    const request = await fetch(fetchUrl);
                    const josnData = await request.json();
                    sessionStorage.setItem(title, JSON.stringify(josnData.results.slice(0, 10)));
                    setMovies(josnData.results.slice(0, 10));
                } catch (err) {
                    console.log(err);
                }
            }
        };
        fetchData();
    }, [fetchUrl]);

    const [selectedId, setSelectedId] = useState(null)
    return (
        <>
            <div className='row'>
                <h2>{title}</h2>
                <div className="row__posters">
                    {movies?.map((movie, idx) => {
                        if (!movie.backdrop_path) return;
                        { isBig ? url = `${movie.backdrop_path}` : url = `${movie.poster_path}` }
                        return <motion.img key={movie.id} loading="lazy" className='row__poster' src={`${base_URL}${url}`} alt={selectedId?.title || selectedId?.original_title || "Movie Image"} onClick={() => setSelectedId(movie)} />
                    })}

                    <AnimatePresence>
                        {selectedId && (
                            <motion.dialog layoutId={selectedId.id} open style={{
                                zIndex: "100",
                                backgroundColor: "whitesmoke",
                                borderColor: "transparent",
                                width: "min(90%,50ch)",
                                margin: "0 auto"
                            }}>
                                <motion.h2
                                    style={{
                                        marginTop: "1rem",
                                        marginLeft: 0
                                    }}>
                                    {selectedId?.title || selectedId?.name || selectedId?.original_title}
                                </motion.h2>
                                <motion.p style={{ maxWidth: "50ch", marginBlock: "1rem" }}>
                                    {selectedId?.overview}
                                </motion.p>

                                <motion.div onClick={() => setSelectedId(null)}>

                                    <motion.button style={{ marginBottom: "10px", backgroundColor: "transparent", border: "1px solid lightgray", borderRadius: "0.25rem" }} onClick={() => setSelectedId(null)}>
                                        <svg version="1.1" width="12" height="12"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <line x1="1" y1="11"
                                                x2="11" y2="1"
                                                stroke="red"
                                                strokeWidth="2" />
                                            <line x1="1" y1="1"
                                                x2="11" y2="11"
                                                stroke="black"
                                                strokeWidth="2" />
                                        </svg>
                                    </motion.button>
                                </motion.div>

                            </motion.dialog>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}
export default React.memo(Rows);
