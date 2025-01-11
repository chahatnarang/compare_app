"use client";
import React, { useState, useEffect } from 'react';
import CustomLoader from '@/components/CustomLoader';
import CustomModal from '@/components/CustomModal';
import MovieCard from '@/components/MovieCard';
import movieList from '../helpers/api';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [modalDetails, setModalDetails] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieList.get('/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalDetails(null);
  };

  const handleOpenModal = (movie) => {
    setModalDetails(movie);
    setOpenModal(true);
  };

  return (
    <div className="w-full flex-wrap p-2">
      {loading && <CustomLoader />}

      {!loading && modalDetails && openModal && (
        <CustomModal openModal={openModal} details={modalDetails} closeModal={handleCloseModal} />
      )}

      {!loading && movies.length > 0 ? (
        <>
          <div className="font-bold text-2xl sm:text-4xl pt-4 px-4 sm:px-8">Movies</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:p-8">

            {movies.map(movie => (
              <div className="w-full" key={movie.id}>
                <MovieCard
                  movie={movie}
                  onClick={() => handleOpenModal(movie)}
                />
              </div>
            ))}
          </div>
        </>
      )
        :
        <div className="font-normal text-lg pt-4 px-4 sm:px-8">Something went wrong, please try refreshing the page.</div>
      }
    </div>
  );
}
