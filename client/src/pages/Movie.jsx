// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
// import axios from 'axios'
// import { useContext, useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
// import Loading from '../components/Loading'
// import MovieLists from '../components/MovieLists'
// import Navbar from '../components/Navbar'
// import { AuthContext } from '../context/AuthContext'

// const Movie = () => {
// 	const { auth } = useContext(AuthContext)
// 	const {
// 		register,
// 		handleSubmit,
// 		reset,
// 		watch,
// 		formState: { errors }
// 	} = useForm()

// 	const [movies, setMovies] = useState([])
// 	const [isFetchingMoviesDone, setIsFetchingMoviesDone] = useState(false)
// 	const [isAddingMovie, SetIsAddingMovie] = useState(false)

// 	const fetchMovies = async (data) => {
// 		try {
// 			setIsFetchingMoviesDone(false)
// 			const response = await axios.get('/movie')
// 			// console.log(response.data.data)
// 			reset()
// 			setMovies(response.data.data)
// 		} catch (error) {
// 			console.error(error)
// 		} finally {
// 			setIsFetchingMoviesDone(true)
// 		}
// 	}

// 	useEffect(() => {
// 		fetchMovies()
// 	}, [])

// 	const onAddMovie = async (data) => {
// 		try {
// 			data.length = (parseInt(data.lengthHr) || 0) * 60 + (parseInt(data.lengthMin) || 0)
// 			SetIsAddingMovie(true)
// 			const response = await axios.post('/movie', data, {
// 				headers: {
// 					Authorization: `Bearer ${auth.token}`
// 				}
// 			})
// 			// console.log(response.data)
// 			fetchMovies()
// 			toast.success('Add movie successful!', {
// 				position: 'top-center',
// 				autoClose: 2000,
// 				pauseOnHover: false
// 			})
// 		} catch (error) {
// 			console.error(error)
// 			toast.error('Error', {
// 				position: 'top-center',
// 				autoClose: 2000,
// 				pauseOnHover: false
// 			})
// 		} finally {
// 			SetIsAddingMovie(false)
// 		}
// 	}

// 	const handleDelete = (movie) => {
// 		const confirmed = window.confirm(
// 			`Do you want to delete movie ${movie.name}, including its showtimes and tickets?`
// 		)
// 		if (confirmed) {
// 			onDeleteMovie(movie._id)
// 		}
// 	}

// 	const onDeleteMovie = async (id) => {
// 		try {
// 			const response = await axios.delete(`/movie/${id}`, {
// 				headers: {
// 					Authorization: `Bearer ${auth.token}`
// 				}
// 			})
// 			// console.log(response.data)
// 			fetchMovies()
// 			toast.success('Delete movie successful!', {
// 				position: 'top-center',
// 				autoClose: 2000,
// 				pauseOnHover: false
// 			})
// 		} catch (error) {
// 			console.error(error)
// 			toast.error('Error', {
// 				position: 'top-center',
// 				autoClose: 2000,
// 				pauseOnHover: false
// 			})
// 		}
// 	}

// 	const inputHr = parseInt(watch('lengthHr')) || 0
// 	const inputMin = parseInt(watch('lengthMin')) || 0
// 	const sumMin = inputHr * 60 + inputMin
// 	const hr = Math.floor(sumMin / 60)
// 	const min = sumMin % 60

// 	return (
// 		<div className="flex min-h-screen flex-col gap-4 bg-gradient-to-br from-indigo-900 to-blue-500 pb-8 text-gray-900 sm:gap-8">
// 			<Navbar />
// 			<div className="mx-4 flex h-fit flex-col gap-4 rounded-md bg-gradient-to-br from-indigo-200 to-blue-100 p-4 drop-shadow-xl sm:mx-8 sm:p-6">
// 				<h2 className="text-3xl font-bold text-gray-900">Movie Lists</h2>
// 				<form
// 					onSubmit={handleSubmit(onAddMovie)}
// 					className="flex flex-col items-stretch justify-end gap-x-4 gap-y-2 rounded-md bg-gradient-to-br from-indigo-100 to-white p-4 drop-shadow-md lg:flex-row"
// 				>
// 					<div className="flex w-full grow flex-col flex-wrap justify-start gap-4 lg:w-auto">
// 						<h3 className="text-xl font-bold">Add Movie</h3>
// 						<div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
// 							<label className="text-lg font-semibold leading-5">Name :</label>
// 							<input
// 								type="text"
// 								required
// 								className="w-full flex-grow rounded px-3 py-1 font-semibold drop-shadow-sm sm:w-auto"
// 								{...register('name', {
// 									required: true
// 								})}
// 							/>
// 						</div>
// 						<div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
// 							<label className="text-lg font-semibold leading-5">Poster URL :</label>
// 							<input
// 								type="text"
// 								required
// 								className="w-full flex-grow rounded px-3 py-1 font-semibold drop-shadow-sm sm:w-auto"
// 								{...register('img', {
// 									required: true
// 								})}
// 							/>
// 						</div>
// 						<div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
// 							<label className="text-lg font-semibold leading-5">Length (hr.):</label>
// 							<input
// 								type="number"
// 								min="0"
// 								max="20"
// 								maxLength="2"
// 								className="w-full flex-grow rounded px-3 py-1 font-semibold drop-shadow-sm sm:w-auto"
// 								{...register('lengthHr')}
// 							/>
// 						</div>
// 						<div>
// 							<div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
// 								<label className="text-lg font-semibold leading-5">Length (min.):</label>
// 								<input
// 									type="number"
// 									min="0"
// 									max="2000"
// 									maxLength="4"
// 									required
// 									className="w-full flex-grow rounded px-3 py-1 font-semibold drop-shadow-sm sm:w-auto"
// 									{...register('lengthMin', {
// 										required: true
// 									})}
// 								/>
// 							</div>
// 							<div className="pt-1 text-right">{`${hr}h ${min}m / ${sumMin}m `}</div>
// 						</div>
// 					</div>
// 					<div className="flex w-full flex-col gap-4 lg:w-auto lg:flex-row">
// 						{watch('img') && (
// 							<img src={watch('img')} className="h-48 rounded-md object-contain drop-shadow-md lg:h-64" />
// 						)}
// 						<button
// 							className="w-full min-w-fit items-center rounded-md bg-gradient-to-br from-indigo-600 to-blue-500 px-2 py-1 text-center font-medium text-white drop-shadow-md hover:from-indigo-500 hover:to-blue-500 disabled:from-slate-500 disabled:to-slate-400 lg:w-24 xl:w-32 xl:text-xl"
// 							type="submit"
// 							disabled={isAddingMovie}
// 						>
// 							{isAddingMovie ? 'Processing...' : 'ADD +'}
// 						</button>
// 					</div>
// 				</form>
// 				<div className="relative drop-shadow-sm">
// 					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// 						<MagnifyingGlassIcon className="h-5 w-5 stroke-2 text-gray-500" />
// 					</div>
// 					<input
// 						type="search"
// 						className="block w-full rounded-lg border border-gray-300 p-2 pl-10 text-gray-900"
// 						placeholder="Search movie"
// 						{...register('search')}
// 					/>
// 				</div>
// 				{isFetchingMoviesDone ? (
// 					<MovieLists movies={movies} search={watch('search')} handleDelete={handleDelete} />
// 				) : (
// 					<Loading />
// 				)}
// 			</div>
// 		</div>
// 	)
// }

// export default Movie

//************************************** */


// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import axios from 'axios';
// import { useContext, useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import Loading from '../components/Loading';
// import MovieLists from '../components/MovieLists';
// import Navbar from '../components/Navbar';
// import { AuthContext } from '../context/AuthContext';

// const Movie = () => {
// 	const { auth } = useContext(AuthContext);
// 	const {
// 		register,
// 		handleSubmit,
// 		reset,
// 		watch,
// 		formState: { errors }
// 	} = useForm();

// 	const [movies, setMovies] = useState([]);
// 	const [isFetchingMoviesDone, setIsFetchingMoviesDone] = useState(false);
// 	const [isAddingMovie, setIsAddingMovie] = useState(false);

// 	const fetchMovies = async () => {
// 		try {
// 			setIsFetchingMoviesDone(false);
// 			const response = await axios.get('/movie');
// 			reset();
// 			setMovies(response.data.data);
// 		} catch (error) {
// 			console.error(error);
// 		} finally {
// 			setIsFetchingMoviesDone(true);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchMovies();
// 	}, []);

// 	const onAddMovie = async (data) => {
// 		try {
// 			data.length = (parseInt(data.lengthHr) || 0) * 60 + (parseInt(data.lengthMin) || 0);
// 			setIsAddingMovie(true);
// 			await axios.post('/movie', data, {
// 				headers: {
// 					Authorization: `Bearer ${auth.token}`
// 				}
// 			});
// 			fetchMovies();
// 			toast.success('Add movie successful!', {
// 				position: 'top-center',
// 				autoClose: 2000,
// 				pauseOnHover: false
// 			});
// 		} catch (error) {
// 			console.error(error);
// 			toast.error('Error adding movie', {
// 				position: 'top-center',
// 				autoClose: 2000,
// 				pauseOnHover: false
// 			});
// 		} finally {
// 			setIsAddingMovie(false);
// 		}
// 	};

// 	const handleDelete = (movie) => {
// 		const confirmed = window.confirm(`Do you want to delete movie ${movie.name}, including its showtimes and tickets?`);
// 		if (confirmed) {
// 			onDeleteMovie(movie._id);
// 		}
// 	};

// 	const onDeleteMovie = async (id) => {
// 		try {
// 			await axios.delete(`/movie/${id}`, {
// 				headers: {
// 					Authorization: `Bearer ${auth.token}`
// 				}
// 			});
// 			fetchMovies();
// 			toast.success('Delete movie successful!', {
// 				position: 'top-center',
// 				autoClose: 2000,
// 				pauseOnHover: false
// 			});
// 		} catch (error) {
// 			console.error(error);
// 			toast.error('Error deleting movie', {
// 				position: 'top-center',
// 				autoClose: 2000,
// 				pauseOnHover: false
// 			});
// 		}
// 	};

// 	const inputHr = parseInt(watch('lengthHr')) || 0;
// 	const inputMin = parseInt(watch('lengthMin')) || 0;
// 	const sumMin = inputHr * 60 + inputMin;
// 	const hr = Math.floor(sumMin / 60);
// 	const min = sumMin % 60;

// 	return (
// 		<div
// 			className="flex min-h-screen flex-col"
// 			style={{
// 				backgroundImage: "url('https://img.freepik.com/free-photo/3d-cinema-popcorn-cup-with-seating_23-2151005413.jpg?t=st=1741276981~exp=1741280581~hmac=74153fb9c8d57c20f2bb617720dad0a43abd202741e397634ebe4ea176bf1f82&w=2000')",
// 				backgroundSize: 'cover',
// 				backgroundPosition: 'center'
// 			}}
// 		>
// 			<Navbar />
// 			<div className="container mx-auto p-6">
// 				<h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Movie Lists</h2>
// 				<form
// 					onSubmit={handleSubmit(onAddMovie)}
// 					className="bg-white bg-opacity-30 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-6 mb-6"
// 				>
// 					<h3 className="text-2xl font-semibold mb-4">Add Movie</h3>
// 					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// 						<div>
// 							<label className="block text-lg font-medium text-gray-700">Name:</label>
// 							<input
// 								type="text"
// 								required
// 								className={`mt-1 block w-full border rounded-md p-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
// 								{...register('name', { required: true })}
// 							/>
// 							{errors.name && <span className="text-red-500 text-sm">This field is required</span>}
// 						</div>
// 						<div>
// 							<label className="block text-lg font-medium text-gray-700">Poster URL:</label>
// 							<input
// 								type="text"
// 								required
// 								className={`mt-1 block w-full border rounded-md p-2 ${errors.img ? 'border-red-500' : 'border-gray-300'}`}
// 								{...register('img', { required: true })}
// 							/>
// 							{errors.img && <span className="text-red-500 text-sm">This field is required</span>}
// 						</div>
// 						<div>
// 							<label className="block text-lg font-medium text-gray-700">Length (hr.):</label>
// 							<input
// 								type="number"
// 								min="0"
// 								max="20"
// 								className="mt-1 block w-full border rounded-md p-2"
// 								{...register('lengthHr')}
// 							/>
// 						</div>
// 						<div>
// 							<label className="block text-lg font-medium text-gray-700">Length (min.):</label>
// 							<input
// 								type="number"
// 								min="0"
// 								max="2000"
// 								required
// 								className={`mt-1 block w-full border rounded-md p-2 ${errors.lengthMin ? 'border-red-500' : 'border-gray-300'}`}
// 								{...register('lengthMin', { required: true })}
// 							/>
// 							{errors.lengthMin && <span className="text-red-500 text-sm">This field is required</span>}
// 						</div>
// 					</div>
// 					<div className="mt-4 text-right">
// 						<button
// 							className={`bg-blue-600 text-white rounded-md px-4 py-2 transition duration-200 ${isAddingMovie ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'}`}
// 							type="submit"
// 							disabled={isAddingMovie}
// 						>
// 							{isAddingMovie ? 'Processing...' : 'ADD +'}
// 						</button>
// 					</div>
// 				</form>
// 				<div className="relative mb-6">
// 					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// 						<MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
// 					</div>
// 					<input
// 						type="search"
// 						className="block w-full rounded-lg border border-gray-300 p-2 pl-10 text-gray-900"
// 						placeholder="Search movie"
// 						{...register('search')}
// 					/>
// 				</div>
// 				{isFetchingMoviesDone ? (
// 					<MovieLists movies={movies} search={watch('search')} handleDelete={handleDelete} />
// 				) : (
// 					<Loading />
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default Movie;

//********************************* */


// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import axios from 'axios';
// import { useContext, useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import Loading from '../components/Loading';
// import MovieLists from '../components/MovieLists';
// import Navbar from '../components/Navbar';
// import { AuthContext } from '../context/AuthContext';

// const Movie = () => {
// 	const { auth } = useContext(AuthContext);
// 	const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

// 	const [movies, setMovies] = useState([]);
// 	const [isFetchingMoviesDone, setIsFetchingMoviesDone] = useState(false);
// 	const [isAddingMovie, setIsAddingMovie] = useState(false);

// 	const fetchMovies = async () => {
// 		try {
// 			setIsFetchingMoviesDone(false);
// 			const response = await axios.get('/movie');
// 			reset();
// 			setMovies(response.data.data);
// 		} catch (error) {
// 			console.error(error);
// 		} finally {
// 			setIsFetchingMoviesDone(true);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchMovies();
// 	}, []);

// 	const onAddMovie = async (data) => {
// 		try {
// 			// Calculate total movie length in minutes
// 			data.length = (parseInt(data.lengthHr) || 0) * 60 + (parseInt(data.lengthMin) || 0);

// 			setIsAddingMovie(true);
// 			await axios.post('/movie', data, {
// 				headers: { Authorization: `Bearer ${auth.token}` }
// 			});
// 			fetchMovies();
// 			toast.success('Movie added successfully!', { position: 'top-center', autoClose: 2000 });
// 		} catch (error) {
// 			console.error(error);
// 			toast.error('Error adding movie', { position: 'top-center', autoClose: 2000 });
// 		} finally {
// 			setIsAddingMovie(false);
// 		}
// 	};

// 	const handleDelete = (movie) => {
// 		const confirmed = window.confirm(`Delete ${movie.name}?`);
// 		if (confirmed) onDeleteMovie(movie._id);
// 	};

// 	const onDeleteMovie = async (id) => {
// 		try {
// 			await axios.delete(`/movie/${id}`, { headers: { Authorization: `Bearer ${auth.token}` } });
// 			fetchMovies();
// 			toast.success('Movie deleted!', { position: 'top-center', autoClose: 2000 });
// 		} catch (error) {
// 			console.error(error);
// 			toast.error('Error deleting movie', { position: 'top-center', autoClose: 2000 });
// 		}
// 	};

// 	return (
// 		<div className="flex min-h-screen flex-col bg-gray-100">
// 			<Navbar />
// 			<div className="container mx-auto p-6">
// 				<h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Movies</h2>
// 				<form onSubmit={handleSubmit(onAddMovie)} className="bg-white shadow-md rounded-lg p-6 mb-6">
// 					<h3 className="text-2xl font-semibold mb-4">Add Movie</h3>
// 					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// 						<div>
// 							<label className="block text-lg font-medium">Name:</label>
// 							<input type="text" required className="w-full p-2 border rounded-md" {...register('name', { required: true })} />
// 						</div>
// 						<div>
// 							<label className="block text-lg font-medium">Poster URL:</label>
// 							<input type="text" required className="w-full p-2 border rounded-md" {...register('img', { required: true })} />
// 						</div>
// 						<div>
// 							<label className="block text-lg font-medium">Trailer URL:</label>
// 							<input type="text" className="w-full p-2 border rounded-md" {...register('trailer')} />
// 						</div>
// 						<div>
// 							<label className="block text-lg font-medium">Length (Hours):</label>
// 							<input type="number" className="w-full p-2 border rounded-md" {...register('lengthHr')} min="0" />
// 						</div>
// 						<div>
// 							<label className="block text-lg font-medium">Length (Minutes):</label>
// 							<input type="number" className="w-full p-2 border rounded-md" {...register('lengthMin')} min="0" />
// 						</div>
// 					</div>
// 					<div className="mt-4 text-right">
// 						<button className={`bg-blue-600 text-white rounded-md px-4 py-2 ${isAddingMovie ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'}`} type="submit" disabled={isAddingMovie}>
// 							{isAddingMovie ? 'Adding...' : 'ADD MOVIE'}
// 						</button>
// 					</div>
// 				</form>

// 				<div className="relative mb-6">
// 					<div className="absolute inset-y-0 left-0 flex items-center pl-3">
// 						<MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
// 					</div>
// 					<input type="search" className="w-full p-2 border rounded-lg pl-10" placeholder="Search movie" {...register('search')} />
// 				</div>

// 				{isFetchingMoviesDone ? <MovieLists movies={movies} search={watch('search')} handleDelete={handleDelete} /> : <Loading />}
// 			</div>
// 		</div>
// 	);
// };

// export default Movie;



// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import axios from 'axios';
// import { useContext, useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import Loading from '../components/Loading';
// import MovieLists from '../components/MovieLists';
// import Navbar from '../components/Navbar';
// import { AuthContext } from '../context/AuthContext';

// const Movie = () => {
//     const { auth } = useContext(AuthContext);
//     const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

//     const [movies, setMovies] = useState([]);
//     const [isFetchingMoviesDone, setIsFetchingMoviesDone] = useState(false);
//     const [isAddingMovie, setIsAddingMovie] = useState(false);

//     const fetchMovies = async () => {
//         try {
//             setIsFetchingMoviesDone(false);
//             const response = await axios.get('/movie');
//             reset();
//             setMovies(response.data.data);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setIsFetchingMoviesDone(true);
//         }
//     };

//     useEffect(() => {
//         fetchMovies();
//     }, []);

//     const onAddMovie = async (data) => {
//         try {
//             // Calculate total movie length in minutes
//             data.length = (parseInt(data.lengthHr) || 0) * 60 + (parseInt(data.lengthMin) || 0);

//             // Ensure trailer URL is included (even if empty)
//             data.trailer = data.trailer || '';

//             setIsAddingMovie(true);
//             await axios.post('/movie', data, {
//                 headers: { Authorization: `Bearer ${auth.token}` }
//             });
//             fetchMovies();
//             toast.success('Movie added successfully!', { position: 'top-center', autoClose: 2000 });
//         } catch (error) {
//             console.error(error);
//             toast.error('Error adding movie', { position: 'top-center', autoClose: 2000 });
//         } finally {
//             setIsAddingMovie(false);
//         }
//     };

//     const handleDelete = (movie) => {
//         const confirmed = window.confirm(`Delete ${movie.name}?`);
//         if (confirmed) onDeleteMovie(movie._id);
//     };

//     const onDeleteMovie = async (id) => {
//         try {
//             await axios.delete(`/movie/${id}`, { headers: { Authorization: `Bearer ${auth.token}` } });
//             fetchMovies();
//             toast.success('Movie deleted!', { position: 'top-center', autoClose: 2000 });
//         } catch (error) {
//             console.error(error);
//             toast.error('Error deleting movie', { position: 'top-center', autoClose: 2000 });
//         }
//     };

//     return (
//         <div className="flex min-h-screen flex-col bg-gray-100">
//             <Navbar />
//             <div className="container mx-auto p-6">
//                 <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Movies</h2>
//                 <form onSubmit={handleSubmit(onAddMovie)} className="bg-white shadow-md rounded-lg p-6 mb-6">
//                     <h3 className="text-2xl font-semibold mb-4">Add Movie</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         <div>
//                             <label className="block text-lg font-medium">Name:</label>
//                             <input type="text" required className="w-full p-2 border rounded-md" {...register('name', { required: true })} />
//                         </div>
//                         <div>
//                             <label className="block text-lg font-medium">Poster URL:</label>
//                             <input type="text" required className="w-full p-2 border rounded-md" {...register('img', { required: true })} />
//                         </div>
//                         <div>
//                             <label className="block text-lg font-medium">Trailer URL:</label>
//                             <input type="text" className="w-full p-2 border rounded-md" {...register('trailer')} />
//                         </div>
//                         <div>
//                             <label className="block text-lg font-medium">Length (Hours):</label>
//                             <input type="number" className="w-full p-2 border rounded-md" {...register('lengthHr')} min="0" />
//                         </div>
//                         <div>
//                             <label className="block text-lg font-medium">Length (Minutes):</label>
//                             <input type="number" className="w-full p-2 border rounded-md" {...register('lengthMin')} min="0" />
//                         </div>
//                     </div>
//                     <div className="mt-4 text-right">
//                         <button className={`bg-blue-600 text-white rounded-md px-4 py-2 ${isAddingMovie ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'}`} type="submit" disabled={isAddingMovie}>
//                             {isAddingMovie ? 'Adding...' : 'ADD MOVIE'}
//                         </button>
//                     </div>
//                 </form>

//                 <div className="relative mb-6">
//                     <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//                         <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
//                     </div>
//                     <input type="search" className="w-full p-2 border rounded-lg pl-10" placeholder="Search movie" {...register('search')} />
//                 </div>

//                 {isFetchingMoviesDone ? <MovieLists movies={movies} search={watch('search')} handleDelete={handleDelete} /> : <Loading />}
//             </div>
//         </div>
//     );
// };

// export default Movie;


import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
import MovieLists from '../components/MovieLists';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';

const Movie = () => {
    const { auth } = useContext(AuthContext);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const [movies, setMovies] = useState([]);
    const [isFetchingMoviesDone, setIsFetchingMoviesDone] = useState(false);
    const [isAddingMovie, setIsAddingMovie] = useState(false);

    const fetchMovies = async () => {
        try {
            setIsFetchingMoviesDone(false);
            const response = await axios.get('/movie');
            reset();
            setMovies(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsFetchingMoviesDone(true);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const onAddMovie = async (data) => {
        try {
            data.length = (parseInt(data.lengthHr) || 0) * 60 + (parseInt(data.lengthMin) || 0);
            data.trailer = data.trailer || '';

            setIsAddingMovie(true);
            await axios.post('/movie', data, {
                headers: { Authorization: `Bearer ${auth.token}` }
            });
            fetchMovies();
            toast.success('Movie added successfully!', { position: 'top-center', autoClose: 2000 });
        } catch (error) {
            console.error(error);
            toast.error('Error adding movie', { position: 'top-center', autoClose: 2000 });
        } finally {
            setIsAddingMovie(false);
        }
    };

    const handleDelete = (movie) => {
        const confirmed = window.confirm(`Delete ${movie.name}?`);
        if (confirmed) onDeleteMovie(movie._id);
    };

    const onDeleteMovie = async (id) => {
        try {
            await axios.delete(`/movie/${id}`, { headers: { Authorization: `Bearer ${auth.token}` } });
            fetchMovies();
            toast.success('Movie deleted!', { position: 'top-center', autoClose: 2000 });
        } catch (error) {
            console.error(error);
            toast.error('Error deleting movie', { position: 'top-center', autoClose: 2000 });
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-900 to-gray-700 text-black">
            <Navbar />
            <div className="container mx-auto p-6">
                <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">Movies</h2>
                <form onSubmit={handleSubmit(onAddMovie)} className="bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-4">Add Movie</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-lg font-medium text-blue-300">Name:</label>
                            <input type="text" required className="w-full p-2 border rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500" {...register('name', { required: true })} />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-blue-300">Poster URL:</label>
                            <input type="text" required className="w-full p-2 border rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500" {...register('img', { required: true })} />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-blue-300">Trailer URL:</label>
                            <input type="text" className="w-full p-2 border rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500" {...register('trailer')} />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-blue-300">Length (Hours):</label>
                            <input type="number" className="w-full p-2 border rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500" {...register('lengthHr')} min="0" />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-blue-300">Length (Minutes):</label>
                            <input type="number" className="w-full p-2 border rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500" {...register('lengthMin')} min="0" />
                        </div>
                    </div>
                    <div className="mt-4 text-right">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md px-4 py-2 hover:opacity-80 transition-all duration-300" type="submit" disabled={isAddingMovie}>
                            {isAddingMovie ? 'Adding...' : 'ADD MOVIE'}
                        </button>
                    </div>
                </form>

                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-5 w-5 text-blue-300" />
                    </div>
                    <input type="search" className="w-full p-2 border rounded-lg pl-10 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500" placeholder="Search movie" {...register('search')} />
                </div>

                {isFetchingMoviesDone ? <MovieLists movies={movies} search={watch('search')} handleDelete={handleDelete} /> : <Loading />}
            </div>
        </div>
    );
};

export default Movie;