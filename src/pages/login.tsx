import { useAuth } from '@/lib/auth';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AtSymbolIcon, UserCircleIcon } from '@heroicons/react/solid';

export default function LoginPage() {
  const { user } = useAuth();
  const router = useRouter();
  if (user) {
    router.push('/');
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function onSubmit(e) {
    e.preventDefault();
    signIn({ email, password });
  }
  return (
    <div className="container px-2 mx-auto w-full h-screen grid place-items-center ">
      <div className="max-w-4xl max-h-[500px] grid grid-cols-1 md:grid-cols-3 w-full h-full self-center rounded-2xl shadow-2xl overflow-hidden bg-gray-100">
        <div className="md:col-span-2 h-full grid place-items-center">
          <form onSubmit={onSubmit}>
            <h1 className="mb-5 text-2xl font-bold text-center text-purple-600">
              Plomo Reportes
            </h1>
            <div className="flex mb-3">
              <AtSymbolIcon className="w-10 h-10 transition-transform hover:scale-125 text-purple-600 mt-2" />
              <input
                className=" w-80 h-14 block rounded-3xl text-left pl-4 pb-1 focus:outline-none"
                type="text"
                placeholder="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex mb-3">
              <UserCircleIcon className="w-10 h-10 transition-transform hover:scale-125 text-purple-600 mt-2" />
              <input
                className=" w-80 h-14 block rounded-3xl text-left pl-4 pb-1 focus:outline-none"
                type="password"
                placeholder="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full h-14 transition-all bg-purple-700 hover:bg-purple-600 hover:scale-105 block rounded-3xl text-white md:w-80 md:ml-10">
              <p className="font-bold tracking-widest">Login</p>
            </button>
            <div className="flex justify-center mt-5">
              <Link href="/register">
                <a className="text-purple-600 hover:text-purple-500">
                  <p className="font-bold tracking-widest">No tengo cuenta</p>
                </a>
              </Link>
            </div>
          </form>
        </div>
        <div className="max-h-48 md:max-h-full h-full hidden md:block">
          <img
            src="https://i.pinimg.com/564x/50/57/e7/5057e7df232087466b6d16c6e79aeb00.jpg"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
}
