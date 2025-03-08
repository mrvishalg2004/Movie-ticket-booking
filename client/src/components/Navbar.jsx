// import {
// 	ClockIcon,
// 	FilmIcon,
// 	HomeModernIcon,
// 	MagnifyingGlassIcon,
// 	TicketIcon,
// 	UsersIcon,
// 	VideoCameraIcon
// } from '@heroicons/react/24/outline'
// import { Bars3Icon } from '@heroicons/react/24/solid'
// import axios from 'axios'
// import { useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { AuthContext } from '../context/AuthContext'


// const Navbar = () => {
// 	const { auth, setAuth } = useContext(AuthContext)
// 	const [menuOpen, setMenuOpen] = useState(false)
// 	const [isLoggingOut, SetLoggingOut] = useState(false)

// 	const toggleMenu = () => {
// 		setMenuOpen(!menuOpen)
// 	}

// 	const navigate = useNavigate()

// 	const onLogout = async () => {
// 		try {
// 			SetLoggingOut(true)
// 			const response = await axios.get('/auth/logout')
// 			// console.log(response)
// 			setAuth({ username: null, email: null, role: null, token: null })
// 			sessionStorage.clear()
// 			navigate('/')
// 			toast.success('Logout successful!', {
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
// 			SetLoggingOut(false)
// 		}
// 	}

// 	const menuLists = () => {
// 		return (
// 			<>
// 				<div className="flex flex-col gap-2 lg:flex-row">
// 					<Link
// 						to={'/cinema'}
// 						className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${
// 							window.location.pathname === '/cinema'
// 								? 'bg-gradient-to-br from-indigo-800 to-blue-700'
// 								: 'bg-gray-600'
// 						}`}
// 					>
// 						<HomeModernIcon className="h-6 w-6" />
// 						<p>Cinema</p>
// 					</Link>
// 					<Link
// 						to={'/schedule'}
// 						className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${
// 							window.location.pathname === '/schedule'
// 								? 'bg-gradient-to-br from-indigo-800 to-blue-700'
// 								: 'bg-gray-600'
// 						}`}
// 					>
// 						<ClockIcon className="h-6 w-6" />
// 						<p>Schedule</p>
// 					</Link>
// 					{auth.role && (
// 						<Link
// 							to={'/ticket'}
// 							className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${
// 								window.location.pathname === '/ticket'
// 									? 'bg-gradient-to-br from-indigo-800 to-blue-700'
// 									: 'bg-gray-600'
// 							}`}
// 						>
// 							<TicketIcon className="h-6 w-6" />
// 							<p>Ticket</p>
// 						</Link>
// 					)}
// 					{auth.role === 'admin' && (
// 						<>
// 							<Link
// 								to={'/movie'}
// 								className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${
// 									window.location.pathname === '/movie'
// 										? 'bg-gradient-to-br from-indigo-800 to-blue-700'
// 										: 'bg-gray-600'
// 								}`}
// 							>
// 								<VideoCameraIcon className="h-6 w-6" />
// 								<p>Movie</p>
// 							</Link>
// 							<Link
// 								to={'/search'}
// 								className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${
// 									window.location.pathname === '/search'
// 										? 'bg-gradient-to-br from-indigo-800 to-blue-700'
// 										: 'bg-gray-600'
// 								}`}
// 							>
// 								<MagnifyingGlassIcon className="h-6 w-6" />
// 								<p>Search</p>
// 							</Link>
// 							<Link
// 								to={'/user'}
// 								className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${
// 									window.location.pathname === '/user'
// 										? 'bg-gradient-to-br from-indigo-800 to-blue-700'
// 										: 'bg-gray-600'
// 								}`}
// 							>
// 								<UsersIcon className="h-6 w-6" />
// 								<p>User</p>
// 							</Link>
// 						</>
// 					)}
// 				</div>
// 				<div className="flex grow items-center justify-center gap-3 lg:justify-end">
// 					{auth.username && (
// 						<p className="text-md whitespace-nowrap leading-none text-white">Welcome {auth.username}!</p>
// 					)}
// 					{auth.token ? (
// 						<button
// 							className="rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 px-2 py-1 text-white drop-shadow-md hover:from-indigo-500 hover:to-blue-400 disabled:from-slate-500 disabled:to-slate-400"
// 							onClick={() => onLogout()}
// 							disabled={isLoggingOut}
// 						>
// 							{isLoggingOut ? 'Processing...' : 'Logout'}
// 						</button>
// 					) : (
// 						<button className="rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 px-2 py-1 text-white drop-shadow-md hover:from-indigo-500 hover:to-blue-400">
// 							<Link to={'/login'}>Login</Link>
// 						</button>
// 					)}
// 				</div>
// 			</>
// 		)
// 	}

// return (
// 	<nav className="flex flex-col items-center justify-between gap-2 bg-gray-900 px-4 py-3 drop-shadow-lg lg:flex-row lg:justify-start sm:px-8">
// 		<div className="flex w-full flex-row justify-between lg:w-fit">
// 			<button className="flex flex-row items-center gap-2" onClick={() => navigate('/')}>
// 				<FilmIcon className="h-8 w-8 text-white" />
// 				<h1 className="mr-2 text-xl text-white">Cinema</h1>
// 			</button>
// 			<button
// 				className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-700 lg:hidden"
// 				onClick={() => toggleMenu()}
// 			>
// 				<Bars3Icon className="h-6 w-6 text-white" />
// 			</button>
// 		</div>
// 		<div className="hidden grow justify-between gap-2 lg:flex">{menuLists()}</div>
// 		{menuOpen && <div className="flex w-full grow flex-col gap-2 lg:hidden">{menuLists()}</div>}
// 	</nav>
// )
// }

// export default Navbar

//logo

//****************************************** */

// import {
// 	ClockIcon,
// 	FilmIcon,
// 	HomeModernIcon,
// 	MagnifyingGlassIcon,
// 	TicketIcon,
// 	UsersIcon,
// 	VideoCameraIcon
// } from '@heroicons/react/24/outline'
// import { Bars3Icon } from '@heroicons/react/24/solid'
// import axios from 'axios'
// import { useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { AuthContext } from '../context/AuthContext'

// const Navbar = () => {
// 	const { auth, setAuth } = useContext(AuthContext)
// 	const [menuOpen, setMenuOpen] = useState(false)
// 	const [isLoggingOut, SetLoggingOut] = useState(false)

// 	const toggleMenu = () => {
// 		setMenuOpen(!menuOpen)
// 	}

// 	const navigate = useNavigate()

// 	const onLogout = async () => {
// 		try {
// 			SetLoggingOut(true)
// 			await axios.get('/auth/logout')
// 			setAuth({ username: null, email: null, role: null, token: null })
// 			sessionStorage.clear()
// 			navigate('/')
// 			toast.success('Logout successful!', {
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
// 			SetLoggingOut(false)
// 		}
// 	}

// 	const menuLists = () => {
// 		return (
// 			<div className="flex flex-col gap-2 lg:flex-row">
// 				{[
// 					{ path: '/cinema', label: 'Cinema', icon: <HomeModernIcon className="h-6 w-6" /> },
// 					{ path: '/schedule', label: 'Schedule', icon: <ClockIcon className="h-6 w-6" /> },
// 					...(auth.role ? [{ path: '/ticket', label: 'Ticket', icon: <TicketIcon className="h-6 w-6" /> }] : []),
// 					...(auth.role === 'admin'
// 						? [
// 							{ path: '/movie', label: 'Movie', icon: <VideoCameraIcon className="h-6 w-6" /> },
// 							{ path: '/search', label: 'Search', icon: <MagnifyingGlassIcon className="h-6 w-6" /> },
// 							{ path: '/user', label: 'User', icon: <UsersIcon className="h-6 w-6" /> }
// 						]
// 						: [])
// 				].map(({ path, label, icon }) => (
// 					<Link
// 						key={path}
// 						to={path}
// 						className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl backdrop-blur-md hover:scale-105 ${
// 							window.location.pathname === path
// 								? 'bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500'
// 								: 'bg-gray-800 bg-opacity-70'
// 						}`}
// 					>
// 						{icon}
// 						<p className="font-semibold">{label}</p>
// 					</Link>
// 				))}
// 			</div>
// 		)
// 	}

// 	return (
// 		<nav className="flex flex-col items-center justify-between gap-4 bg-gray-900 px-6 py-4 rounded-xl shadow-lg lg:flex-row sm:px-10">
// 			<div className="flex w-full justify-between lg:w-fit">
// 				<button className="flex items-center gap-3" onClick={() => navigate('/')}
// 					style={{ textShadow: '2px 2px 10px rgba(255,255,255,0.3)' }}>
// 					<FilmIcon className="h-10 w-10 text-white" />
// 					<h1 className="text-2xl font-bold text-white">Cinema</h1>
// 				</button>
// 				<button
// 					className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 lg:hidden"
// 					onClick={toggleMenu}
// 				>
// 					<Bars3Icon className="h-6 w-6 text-white" />
// 				</button>
// 			</div>
// 			<div className="hidden grow justify-center lg:flex">{menuLists()}</div>
// 			{menuOpen && <div className="flex w-full flex-col items-center gap-3 lg:hidden">{menuLists()}</div>}
// 		</nav>
// 	)
// }

// export default Navbar


// import {
// 	ClockIcon,
// 	FilmIcon,
// 	HomeModernIcon,
// 	MagnifyingGlassIcon,
// 	TicketIcon,
// 	UsersIcon,
// 	VideoCameraIcon,
// 	UserIcon,
// 	ArrowRightOnRectangleIcon
// } from '@heroicons/react/24/solid' 
// import { Bars3Icon } from '@heroicons/react/24/solid'
// import axios from 'axios'
// import { useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { AuthContext } from '../context/AuthContext'
// import logo from '../assets/three.png' // Add your logo file path

// const Navbar = () => {
// 	const { auth, setAuth } = useContext(AuthContext)
// 	const [menuOpen, setMenuOpen] = useState(false)
// 	const [isLoggingOut, setLoggingOut] = useState(false)

// 	const toggleMenu = () => {
// 		setMenuOpen(!menuOpen)
// 	}

// 	const navigate = useNavigate()

// 	const onLogout = async () => {
// 		try {
// 			setLoggingOut(true)
// 			await axios.get('/auth/logout')
// 			setAuth({ username: null, email: null, role: null, token: null })
// 			sessionStorage.clear()
// 			navigate('/')
// 			toast.success('Logout successful!', { position: 'top-center', autoClose: 2000 })
// 		} catch (error) {
// 			console.error(error)
// 			toast.error('Error logging out', { position: 'top-center', autoClose: 2000 })
// 		} finally {
// 			setLoggingOut(false)
// 		}
// 	}

// 	const menuLists = () => {
// 		return (
// 			<div className="flex flex-col items-center gap-3 lg:flex-row">
// 				{[
// 					{ path: '/cinema', icon: HomeModernIcon, label: 'Cinema' },
// 					{ path: '/schedule', icon: ClockIcon, label: 'Schedule' },
// 					{ path: '/ticket', icon: TicketIcon, label: 'Ticket', authRequired: true },
// 					{ path: '/movie', icon: VideoCameraIcon, label: 'Movies', adminOnly: true },
// 					{ path: '/search', icon: MagnifyingGlassIcon, label: 'Search', adminOnly: true },
// 					{ path: '/user', icon: UsersIcon, label: 'Users', adminOnly: true }
// 				].map(({ path, icon: Icon, label, authRequired, adminOnly }) => {
// 					if ((authRequired && !auth.role) || (adminOnly && auth.role !== 'admin')) return null
// 					return (
// 						<Link
// 							key={path}
// 							to={path}
// 							className={`flex items-center gap-3 rounded-lg px-5 py-2 text-white transition-all duration-300 hover:bg-blue-600 shadow-md
// 								${window.location.pathname === path ? 'bg-blue-700' : 'bg-gray-800'}`}
// 						>
// 							<Icon className="h-5 w-5 text-blue-300" />
// 							<span className="text-base font-medium tracking-wide">{label}</span>
// 						</Link>
// 					)
// 				})}
// 			</div>
// 		)
// 	}

// 	return (
// 		<nav className="flex flex-col items-center justify-between gap-4 bg-gray-900 p-4 shadow-lg lg:flex-row lg:justify-between">
// 			<div className="flex w-full justify-between lg:w-auto">
// 				<button className="flex items-center gap-2 text-white" onClick={() => navigate('/')}> 
// 					<img src={logo} alt="Logo" className="h-20 w-20" />
// 					<h1 className="text-2xl font-bold"></h1>
// 				</button>
// 				<button className="lg:hidden" onClick={() => toggleMenu()}>
// 					<Bars3Icon className="h-8 w-8 text-white" />
// 				</button>
// 			</div>

// 			<div className="hidden lg:flex lg:items-center lg:space-x-5">{menuLists()}</div>
// 			{menuOpen && <div className="flex flex-col items-center w-full space-y-3 lg:hidden">{menuLists()}</div>}

// 			<div className="flex items-center space-x-4 ml-auto">
// 				{auth.username && <p className="flex items-center gap-2 text-base text-white font-medium"><UserIcon className="h-6 w-6 text-blue-300" />{auth.username}</p>}
// 				{auth.token ? (
// 					<button
// 						className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition-all duration-300 shadow-md"
// 						onClick={() => onLogout()}
// 						disabled={isLoggingOut}
// 					>
// 						<ArrowRightOnRectangleIcon className="h-6 w-6 text-white" />
// 						{isLoggingOut ? 'Logging out...' : 'Logout'}
// 					</button>
// 				) : (
// 					<Link to={'/login'} className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition-all duration-300 shadow-md">
// 						<ArrowRightOnRectangleIcon className="h-6 w-6 text-white" />
// 						Login
// 					</Link>
// 				)}
// 			</div>
// 		</nav>
// 	)
// }

// export default Navbar


// import {
// 	ClockIcon,
// 	FilmIcon,
// 	HomeModernIcon,
// 	MagnifyingGlassIcon,
// 	TicketIcon,
// 	UsersIcon,
// 	VideoCameraIcon
// } from '@heroicons/react/24/outline'
// import { Bars3Icon } from '@heroicons/react/24/solid'
// import axios from 'axios'
// import { useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { AuthContext } from '../context/AuthContext'
// import logo from '../assets/3.png'

// const Navbar = () => {
// 	const { auth, setAuth } = useContext(AuthContext)
// 	const [menuOpen, setMenuOpen] = useState(false)
// 	const [isLoggingOut, SetLoggingOut] = useState(false)

// 	const toggleMenu = () => setMenuOpen(!menuOpen)
// 	const navigate = useNavigate()

// 	const onLogout = async () => {
// 		try {
// 			SetLoggingOut(true)
// 			await axios.get('/auth/logout')
// 			setAuth({ username: null, email: null, role: null, token: null })
// 			sessionStorage.clear()
// 			navigate('/')
// 			toast.success('Logout successful!', { position: 'top-center', autoClose: 2000, pauseOnHover: false })
// 		} catch (error) {
// 			console.error(error)
// 			toast.error('Error', { position: 'top-center', autoClose: 2000, pauseOnHover: false })
// 		} finally {
// 			SetLoggingOut(false)
// 		}
// 	}

// 	const menuLists = () => (
// 		<div className="flex flex-col gap-2 lg:flex-row">
// 			{[
// 				{ path: '/cinema', icon: HomeModernIcon, label: 'Cinema' },
// 				{ path: '/schedule', icon: ClockIcon, label: 'Schedule' },
// 				{ path: '/ticket', icon: TicketIcon, label: 'Ticket', authRequired: true },
// 				{ path: '/movie', icon: VideoCameraIcon, label: 'Movies', adminOnly: true },
// 				{ path: '/search', icon: MagnifyingGlassIcon, label: 'Search', adminOnly: true },
// 				{ path: '/user', icon: UsersIcon, label: 'Users', adminOnly: true }
// 			].map(({ path, icon: Icon, label }) => (
// 				<Link key={path} to={path} className="flex items-center gap-2 rounded-md px-3 py-1.5 text-white text-sm bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600 transition-all duration-300 shadow-sm transform hover:scale-105">
// 					<Icon className="h-5 w-5 text-white drop-shadow-sm" />
// 					<span>{label}</span>
// 				</Link>
// 			))}
// 		</div>
// 	)

// 	return (
// 		<nav className="flex flex-col items-center justify-between gap-2 bg-gray-900 bg-opacity-90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg lg:flex-row lg:justify-start">
// 			<div className="flex w-full items-center justify-between lg:w-fit">
// 				<button className="flex items-center gap-2" onClick={() => navigate('/')}> 
// 					<img src={logo} alt="Logo" className="h-10 w-auto object-contain drop-shadow-md" />
// 					<h1 className="text-lg text-white font-semibold">CinemaPlus</h1>
// 				</button>
// 				<button className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 lg:hidden shadow-md" onClick={toggleMenu}>
// 					<Bars3Icon className="h-5 w-5 text-white" />
// 				</button>
// 			</div>
// 			<div className="hidden grow lg:flex">{menuLists()}</div>
// 			{menuOpen && <div className="flex w-full grow flex-col lg:hidden">{menuLists()}</div>}
// 		</nav>
// 	)
// }

// export default Navbar



// import {
// 	GiTheater, GiFilmProjector, GiTicket, GiClapperboard, GiMagnifyingGlass, GiNetworkBars
// } from 'react-icons/gi'
// import { FaBars } from 'react-icons/fa6'
// import axios from 'axios'
// import { useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { AuthContext } from '../context/AuthContext'
// import logo from '../assets/logo.png'

// const Navbar = () => {
// 	const { auth, setAuth } = useContext(AuthContext)
// 	const [menuOpen, setMenuOpen] = useState(false)
// 	const [isLoggingOut, SetLoggingOut] = useState(false)

// 	const toggleMenu = () => {
// 		setMenuOpen(!menuOpen)
// 	}

// 	const navigate = useNavigate()

// 	const onLogout = async () => {
// 		try {
// 			SetLoggingOut(true)
// 			await axios.get('/auth/logout')
// 			setAuth({ username: null, email: null, role: null, token: null })
// 			sessionStorage.clear()
// 			navigate('/')
// 			toast.success('Logout successful!', {
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
// 			SetLoggingOut(false)
// 		}
// 	}

// 	const menuLists = () => {
// 		return (
// 			<>
// 				<div className="flex flex-col gap-2 lg:flex-row">
// 					{[
// 						{ path: '/cinema', icon: <GiTheater />, label: 'Cinema' },
// 						{ path: '/schedule', icon: <GiFilmProjector />, label: 'Schedule' },
// 						{ path: '/ticket', icon: <GiTicket />, label: 'Ticket', authRequired: true },
// 						{ path: '/movie', icon: <GiClapperboard />, label: 'Movies', adminOnly: true },
// 						{ path: '/search', icon: <GiMagnifyingGlass />, label: 'Search', adminOnly: true },
// 						{ path: '/user', icon: <GiNetworkBars />, label: 'Users', adminOnly: true }
// 					].map(({ path, icon, label }) => (
// 						<Link key={path} to={path} className={`flex items-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${window.location.pathname === path ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gray-600'}`}>
// 							<span className="text-xl">{icon}</span>
// 							<p>{label}</p>
// 						</Link>
// 					))}
// 				</div>
// 				<div className="flex grow items-center justify-end gap-3">
// 					{auth.username && <p className="text-md whitespace-nowrap text-white">Welcome {auth.username}!</p>}
// 					{auth.token ? (
// 						<button className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 px-3 py-1 text-white drop-shadow-md hover:from-blue-400 hover:to-indigo-500 disabled:from-slate-500 disabled:to-slate-400" onClick={onLogout} disabled={isLoggingOut}>
// 							{isLoggingOut ? 'Processing...' : 'Logout'}
// 						</button>
// 					) : (
// 						<button className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 px-3 py-1 text-white drop-shadow-md hover:from-blue-400 hover:to-indigo-500">
// 							<Link to={'/login'}>Login</Link>
// 						</button>
// 					)}
// 				</div>
// 			</>
// 		)
// 	}

// 	return (
// 		<nav className="flex flex-col items-center justify-between gap-2 bg-gradient-to-br from-gray-900 to-gray-700 px-4 py-3 drop-shadow-lg lg:flex-row lg:justify-start sm:px-8">
// 			<div className="flex w-full items-center justify-between lg:w-fit">
// 				<button className="flex flex-row items-center gap-2" onClick={() => navigate('/')}> 
// 					<img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
// 				</button>
// 				<button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-700 lg:hidden" onClick={toggleMenu}>
// 					<FaBars className="h-6 w-6 text-white" />
// 				</button>
// 			</div>
// 			<div className="hidden grow lg:flex">{menuLists()}</div>
// 			{menuOpen && <div className="flex w-full grow flex-col lg:hidden">{menuLists()}</div>}
// 		</nav>
// 	)
// }

// export default Navbar







import {
	ClockIcon,
	FilmIcon,
	HomeModernIcon,
	MagnifyingGlassIcon,
	TicketIcon,
	UsersIcon,
	VideoCameraIcon
} from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/24/solid'
import axios from 'axios'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../context/AuthContext'
import logo from '../assets/logo.png'

const Navbar = () => {
	const { auth, setAuth } = useContext(AuthContext)
	const [menuOpen, setMenuOpen] = useState(false)
	const [isLoggingOut, SetLoggingOut] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	const navigate = useNavigate()

	const onLogout = async () => {
		try {
			SetLoggingOut(true)
			await axios.get('/auth/logout')
			setAuth({ username: null, email: null, role: null, token: null })
			sessionStorage.clear()
			navigate('/')
			toast.success('Logout successful!', {
				position: 'top-center',
				autoClose: 2000,
				pauseOnHover: false
			})
		} catch (error) {
			console.error(error)
			toast.error('Error', {
				position: 'top-center',
				autoClose: 2000,
				pauseOnHover: false
			})
		} finally {
			SetLoggingOut(false)
		}
	}

	const menuLists = () => {
		return (
			<>
				<div className="flex flex-col gap-2 lg:flex-row">
					<Link
						to={'/cinema'}
						className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${
							window.location.pathname === '/cinema'
								? 'bg-gradient-to-br from-indigo-800 to-blue-700'
								: 'bg-gray-600'
						}`}
					>
						<HomeModernIcon className="h-6 w-6" />
						<p>Cinema</p>
					</Link>
					<Link
						to={'/schedule'}
						className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${
							window.location.pathname === '/schedule'
								? 'bg-gradient-to-br from-indigo-800 to-blue-700'
								: 'bg-gray-600'
						}`}
					>
						<ClockIcon className="h-6 w-6" />
						<p>Schedule</p>
					</Link>
					{auth.role && (
						<Link
							to={'/ticket'}
							className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${
								window.location.pathname === '/ticket'
									? 'bg-gradient-to-br from-indigo-800 to-blue-700'
									: 'bg-gray-600'
							}`}
						>
							<TicketIcon className="h-6 w-6" />
							<p>Ticket</p>
						</Link>
					)}
					{auth.role === 'admin' && (
						<>
							<Link
								to={'/movie'}
								className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${
									window.location.pathname === '/movie'
										? 'bg-gradient-to-br from-indigo-800 to-blue-700'
										: 'bg-gray-600'
								}`}
							>
								<VideoCameraIcon className="h-6 w-6" />
								<p>Movie</p>
							</Link>
							<Link
								to={'/search'}
								className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${
									window.location.pathname === '/search'
										? 'bg-gradient-to-br from-indigo-800 to-blue-700'
										: 'bg-gray-600'
								}`}
							>
								<MagnifyingGlassIcon className="h-6 w-6" />
								<p>Search</p>
							</Link>
							<Link
								to={'/user'}
								className={`flex items-center justify-center gap-2 rounded-md px-2 py-1 text-white hover:bg-gray-500 ${
									window.location.pathname === '/user'
										? 'bg-gradient-to-br from-indigo-800 to-blue-700'
										: 'bg-gray-600'
								}`}
							>
								<UsersIcon className="h-6 w-6" />
								<p>User</p>
							</Link>
						</>
					)}
				</div>
				<div className="flex grow items-center justify-center gap-3 lg:justify-end">
					{auth.username && (
						<p className="text-md whitespace-nowrap leading-none text-white">Welcome {auth.username}!</p>
					)}
					{auth.token ? (
						<button
							className="rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 px-2 py-1 text-white drop-shadow-md hover:from-indigo-500 hover:to-blue-400 disabled:from-slate-500 disabled:to-slate-400"
							onClick={() => onLogout()}
							disabled={isLoggingOut}
						>
							{isLoggingOut ? 'Processing...' : 'Logout'}
						</button>
					) : (
						<button className="rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 px-2 py-1 text-white drop-shadow-md hover:from-indigo-500 hover:to-blue-400">
							<Link to={'/login'}>Login</Link>
						</button>
					)}
				</div>
			</>
		)
	}

	return (
		<nav className="flex flex-col items-center justify-between gap-2 bg-gray-900 px-4 py-3 drop-shadow-lg lg:flex-row lg:justify-start sm:px-8">
			<div className="flex w-full flex-row justify-between lg:w-fit">
				<button className="flex flex-row items-center gap-2" onClick={() => navigate('/')}>
					<img src={logo} alt="Logo" className="h-10 w-auto object-contain" /> {/* ✅ Logo Added */}
					<h1 className="mr-2 text-xl text-white"></h1>
				</button>
				<button
					className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-700 lg:hidden"
					onClick={() => toggleMenu()}
				>
					<Bars3Icon className="h-6 w-6 text-white" />
				</button>
			</div>
			<div className="hidden grow justify-between gap-2 lg:flex">{menuLists()}</div>
			{menuOpen && <div className="flex w-full grow flex-col gap-2 lg:hidden">{menuLists()}</div>}
		</nav>
	)
}

export default Navbar
