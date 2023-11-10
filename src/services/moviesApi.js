import db from "./firebase";
import { collection, getDocs } from 'firebase/firestore';

const moviesRef = collection(db, 'movies');

const moviesApi = {

    getMovies: async() => {
        const documents = await getDocs(moviesRef)
        return documents.docs.map(doc => {
            return {...doc.data(), id: doc.id}
        })
    },

    addMovie: async() => {

    },

    getMovieById: async() => {

    },

    updateMovie: async => {

    },

    deleteMovie: async() => {

    },
}

export default moviesApi;