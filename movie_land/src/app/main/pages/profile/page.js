'use client';

function Profile() {
    const storedObjectString = typeof window !== "undefined" ? window.localStorage.getItem('user') : "";
    const storedUser = storedObjectString !== "" ? JSON.parse(storedObjectString) : "";

    return (
        <div>
            <div className="flex justify-center m-10 px-8">
                <form className="max-w-2xl">
                    <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
                        <div className="m-4 child-div mx-auto w-1/2" align="center">
                            <img className="w-20 h-20 rounded" src={storedUser.image}
                                 alt="Large avatar"/>
                        </div>

                        {/*<h2 className="text-xl text-gray-600 dark:text-gray-300 pb-2">Profile settings:</h2>*/}

                        <div className="flex flex-col gap-2 w-full border-gray-400">

                            <div>
                                <label htmlFor="username-input"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" id="username-input"
                                       className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder={storedUser.username} required/>
                            </div>
                            <div>
                                <label htmlFor="email-input"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="text" id="email-input"
                                       className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder={storedUser.email} required/>
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="first_name"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                        name</label>
                                    <input type="text" id="first_name"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder={storedUser.firstName} required/>
                                </div>
                                <div>
                                    <label htmlFor="last_name"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                        name</label>
                                    <input type="text" id="last_name"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder={storedUser.lastName} required/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="gender-input"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                <input type="text" id="gender-input"
                                       className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder={storedUser.gender}/>
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="text" id="password"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="" required/>
                                </div>
                                <div>
                                    <label htmlFor="resetPassword"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reset
                                        password</label>
                                    <input type="text" id="resetPassword"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="" required/>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="py-1.5 px-3 m-1 text-center bg-gray-200 border rounded-md text-black  hover: hover: dark:text-gray-200 dark:bg-violet-700"
                                    type="submit">Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile;