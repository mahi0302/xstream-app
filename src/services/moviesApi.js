import db from "./firebase";
import { collection, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const moviesRef = collection(db, 'movies');

const moviesApi = {

    getMovies: async() => {
        const documents = await getDocs(moviesRef)
        return documents.docs.map(doc => {
            return {...doc.data(), id: doc.id}
        })
    },

    addMovie: async (formData) => {
        try {
          const docRef = await addDoc(collection(db, 'movies'), formData);
          const addedMovie = await getDoc(docRef);
          return { ...addedMovie.data(), id: docRef.id };
        } catch (error) {
          console.error('Error adding movie: ', error);
          throw error;
        }
      },    

    getMovieById: async (id) => {
        const document = await getDoc(doc(db, 'movies', id));
        return { ...document.data(), id };
    },

    updateMovie: async (formId, formData) => {
        return await updateDoc(doc(db, 'movies', formId), formData);
    },
    
    deleteMovie: async (id) => {
        return await deleteDoc(doc(db, 'movies', id));
    },
}

export default moviesApi;