import CustomImage from './CustomImage';

export default function CustomModal({ details, openModal, closeModal }) {
    return (
        <>
            {openModal &&
                <div className='fixed inset-0 flex justify-center items-center bg-white bg-opacity-20 backdrop-blur-lg z-50 w-full h-full'>
                    <div className='flex items-center justify-center w-full h-full'>
                        <div className='relative bg-neutral-200 dark:bg-gray-800 rounded-lg p-4 sm:p-8 w-full max-w-5xl h-full sm:h-auto fade-in modal-content'>
                                <div className='mb-4 h-full sm:h-5/6 overflow-auto pt-12'>
                                    <div className="flex flex-col items-center sm:flex-row">
                                        <div className='flex flex-col items-center sm:items-start'>
                                            <CustomImage src={details.poster} alt={details.id} width={250} height={200} />
                                            <div className='p-4 w-full flex justify-center space-x-4'>
                                                <div className='bg-green-800 p-2 w-12 h-12 font-bold text-white flex items-center justify-center'>
                                                    {details.metascore}
                                                </div>
                                                <div className='bg-green-800 p-2 w-12 h-12 font-bold text-white flex items-center justify-center'>
                                                    {details.rating}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 text-left sm:w-1/2">
                                            <h5 className="text-md sm:text-lg font-bold text-gray-900 dark:text-white">{details.title}</h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">{details.genre}</p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">{details.language}, {details.country}</p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">{details.rated}</p>
                                            <br />

                                            <p className="font-normal text-gray-700 dark:text-gray-400">{details.plot}</p>
                                            <br />

                                            <p className="font-normal text-gray-700 dark:text-gray-400">Directed by {details.director}</p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">Written by {details.writer}</p>
                                            <br />

                                            <p className="font-normal text-gray-700 dark:text-gray-400">Cast: {details.actors}</p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">Awards: {details.awards}</p>
                                            <br />

                                            <p className="font-normal text-gray-700 dark:text-gray-400">Released: {details.released}</p>
                                            <p className="font-bold text-green-800 dark:text-green-500">Price: ${details.price.toFixed(2)}</p>
                                            <p className="text-xs font-normal text-gray-700 dark:text-gray-400 capitalize">({details.provider})</p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            <button className="absolute bottom-6 right-8 bg-red-800 text-white px-4 py-2 rounded font-bold z-10" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}