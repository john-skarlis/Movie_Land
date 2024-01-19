'use client';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

export default function HomePageNavbar() {
    const pathname = usePathname();
    const homePathName = "/main";
    const profilePathName = "/main/pages/profile";
    const watchListPathName = "/main/pages/watchlist";
    const moviesPathname = "/main/pages/categories/movies";
    const seriesPathname = "/main/pages/categories/series";
    const episodesPathname = "/main/pages/categories/episodes";
    const aboutPathName = "/main/pages/about";


    const activeBgColor = "bg-gray-200";
    const activeTextColor = "text-gray-900";

    const [storedUser, setStoredUser] = useState();
    useEffect(() => {
        const storedObjectString = typeof window !== "undefined" ? window.localStorage.getItem('user') : "";
        const storedUserJSON = storedObjectString !== "" ? JSON.parse(storedObjectString) : "";
        setStoredUser(storedUserJSON);
        console.log("User: "+storedObjectString);
    }, []);

    const firstName = storedUser ? storedUser.firstName : 'Not logged in';
    const lastName = storedUser ? storedUser.lastName : '';
    const loggedInName = firstName + " " + lastName;
    const userImage = storedUser ? storedUser.image : "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png";
    function logout(){
        localStorage.clear();
    }
    return (
        <nav className="border-gray-200 bg-element-blue dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="text-center">
                    <button
                        className="text-element-white bg-element-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
                        aria-controls="drawer-navigation">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <Link href={homePathName} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" alt="Movie land logo" className="h-20"/>
                </Link>
                <div className="flex items-center gap-2">
                    <img className="w-10 h-10 rounded-full" src={userImage} alt=""/>
                    <div className="font-medium text-element-white">
                        <div>{loggedInName}</div>
                    </div>
                </div>
                <div id="drawer-navigation"
                     className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
                     tabIndex="-1" aria-labelledby="drawer-navigation-label">
                    <h5 id="drawer-navigation-label"
                        className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    <div className="py-4 overflow-y-auto">
                        <ul className="space-y-2 font-medium">
                            <li className={pathname === homePathName ? activeBgColor : ''}>
                                <Link href={homePathName}
                                   className={`${pathname === homePathName ? activeTextColor : ''} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                                    <svg
                                        className={`${pathname === homePathName ? activeTextColor : ''} w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 22 21">
                                        <path
                                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                    </svg>
                                    <span className="ms-3">Home</span>
                                </Link>
                            </li>
                            <li className={pathname === profilePathName ? activeBgColor : ''}>
                                <Link href={profilePathName}
                                   className={`${pathname === profilePathName ? activeTextColor : ''} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                                    <svg
                                        className={`${pathname === profilePathName ? activeTextColor : ''} flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 20 18">
                                        <path
                                            d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                                </Link>
                            </li>
                            <li className={pathname === watchListPathName ? activeBgColor : ''}>
                                <Link href={watchListPathName}
                                   className={`${pathname === watchListPathName ? activeTextColor : ''} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                                    <svg
                                        className={`${pathname === watchListPathName ? activeTextColor : ''} flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v2H7V2ZM5 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 4H8a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2Zm0-4H8a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Z"/>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Watchlist</span>
                                </Link>
                            </li>
                            <li>
                                <button type="button"
                                        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        aria-controls="dropdown-categories" data-collapse-toggle="dropdown-categories">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 18 18">
                                        <path
                                            d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                    </svg>
                                    <span
                                        className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Categories</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <ul id="dropdown-categories" className="hidden py-2 space-y-2">
                                    <li>
                                        <Link href={moviesPathname}
                                           className={`${pathname === moviesPathname ? activeTextColor + ' ' + activeBgColor : ''} flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>Movies</Link>
                                    </li>
                                    <li>
                                        <Link href={seriesPathname}
                                           className={`${pathname === seriesPathname ? activeTextColor + ' ' + activeBgColor : ''} flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>Series</Link>
                                    </li>
                                    <li>
                                        <Link href={episodesPathname}
                                           className={`${pathname === episodesPathname ? activeTextColor + ' ' + activeBgColor : ''} flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}>Episodes</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/" onClick={logout}
                                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 18 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                                </a>
                            </li>
                            <li className={pathname === aboutPathName ? activeBgColor : ''}>
                                <Link href={aboutPathName}
                                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg
                                        className={`${pathname === aboutPathName ? activeTextColor : ''} flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 18 20">
                                        <path
                                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                    </svg>
                                    <span className={`${pathname === aboutPathName ? activeTextColor : ''} flex-1 ms-3 whitespace-nowrap`}>About</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
