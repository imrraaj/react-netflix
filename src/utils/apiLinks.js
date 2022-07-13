const url = 'https://react-netflix-project.herokuapp.com';
console.log(url);
export const requests = {
    fetchTrending: `${url}/api/fetchTrending`,
    fetchTVpop: `${url}/api/fetchTVpop`,
    fetchNetflixOriginals: `${url}/api/fetchNetflixOriginals`,
    fetchTopRated: `${url}/api/fetchTopRated`,
    fetchMoviepop: `${url}/api/fetchMoviepop`,
    fetchScifi: `${url}/api/fetchScifi`,
    fetchAction: `${url}/api/fetchAction`,
    fetchAdventure: `${url}/api/fetchAdventure`,
    fetchHorror: `${url}/api/fetchHorror`,
};