'use client'
import {useRouter} from "next/navigation";
import {useState} from "react";
import login from "@/app/services/login";
import Link from "next/link";

function SignInPage() {

    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSignInClick = async () => {
        try {
            const user = await login(username, password);
            localStorage.setItem('token', user.token);
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/main');
        } catch (error) {
            console.error('Login failed', error);
        }
    }

    return (
        <div className="flex flex-col bg-gradient-to-tl from-[#d7ff93] to-[#00354d] min-h-screen w-screen m-0 p-0">
            <div className="top-0 w-screen h-24 m-0 flex justify-center items-center bg-element-blue">
                <img className="h-full w-24rem" src="/logo.png" alt="Movie land logo"/>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col justify-center px-6 py-12 lg:px-8 my-auto h-full">
                </div>
                <div className="flex flex-col justify-center px-6 py-12 lg:px-8 my-auto">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-element-blue">Sign
                            in to
                            your account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="username"
                                       className="block text-sm font-medium leading-6 text-element-blue">Username</label>
                                <div className="mt-2">
                                    <input id="username" name="username" type="username" value={username} autoComplete="username"
                                           onChange={(e) => setUsername(e.target.value)} required
                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-element-blue">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-element-blue hover:text-element-blue">Forgot
                                            password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                           name="password" type="password" autoComplete="current-password"
                                           required
                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div>
                                <button onClick={onSignInClick} type="button"
                                        className="bg-element-blue text-element-white flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Sign
                                    in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?
                            <a href="#"
                               className="font-semibold leading-6 text-element-blue hover:text-element-blue"> Register</a>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center px-6 py-12 lg:px-8 my-auto">
                </div>
            </div>
            <div className="flex bottom-0 w-screen h-24 mt-auto bg-element-blue">
                <div className="text-sm self-center ml-auto mr-10">
                    <Link href="#" className="font-semibold text-element-white hover:text-element-white">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;
