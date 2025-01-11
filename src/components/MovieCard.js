import CustomImage from "./CustomImage";

export default function MovieCard({ movie, onClick }) {
    return (
        <button className="w-full p-2 sm:p-4 my-2 sm:my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={onClick}>
            <div className="flex flex-col sm:flex-row items-center">
                <CustomImage src={movie.poster} alt={movie.id} width={80} height={80} isList={true}/>
                <div className="px-2 sm:px-4 text-center sm:text-left mt-2 sm:mt-0">
                    <h5 className="text-sm sm:text-md font-bold text-gray-900 dark:text-white">{movie.title}</h5>
                    <p className="text-xs sm:text-sm font-normal text-gray-700 dark:text-gray-400 pb-2">{movie.year}</p>
                    
                    <p className="font-bold text-green-800 dark:text-green-500">${movie.price.toFixed(2)}</p>
                    <p className="text-xs font-normal text-gray-700 dark:text-gray-400 capitalize">{movie.provider}</p>
                </div>
            </div>
        </button>

    );
}