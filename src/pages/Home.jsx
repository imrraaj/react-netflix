import React from 'react'
import ProtectedRoute from '../components/ProtectedRoute';
import { requests } from "../utils/apiLinks"
import Rows from "../components/Row";
import Banner from '../components/Banner';
import AppNavbar from "../components/AppNavbar";
import { motion } from 'framer-motion'
function Home() {
    return (
        <main>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} exit={{ opacity: 0, x: 0, transition: { duration: 2 } }}>
            <ProtectedRoute>
                <AppNavbar />
                <Banner />
                <Rows title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
                <Rows title='Trending Now' fetchUrl={requests.fetchTrending} isBig={true} />
                <Rows title='Popular Movies' fetchUrl={requests.fetchMoviepop} />
                <Rows title='Top Rated TV shows' fetchUrl={requests.fetchTopRated} />
                <Rows title='Popular TV shows' fetchUrl={requests.fetchTVpop} />
                <Rows title='SciFi shows' fetchUrl={requests.fetchScifi} />
                <Rows title='Action Movies' fetchUrl={requests.fetchAction} />
                <Rows title='Adventure Movies' fetchUrl={requests.fetchAdventure} />
                <Rows title='Horror Movies' fetchUrl={requests.fetchHorror} />
            </ProtectedRoute>
        </motion.div>
        </main>
    )
}

export default React.memo(Home);
