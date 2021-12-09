import { useAuth } from '@/lib/auth';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AtSymbolIcon, UserCircleIcon, UserIcon } from '@heroicons/react/solid';

export default function RegisterPage() {
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
            <div className="grid grid-cols-2 gap-2">
              <div className="flex mb-3">
                <input
                  className="h-12 block rounded-3xl text-left p-1 pl-4 focus:outline-none"
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex mb-3">
                <input
                  className="h-12 block rounded-3xl text-left pl-4 pb-1 focus:outline-none"
                  type="text"
                  placeholder="Apellido"
                  name="apellido"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex mb-3">
              <input
                className="w-full h-12 block rounded-3xl text-left pl-4 pb-1 focus:outline-none"
                type="text"
                placeholder="Correo"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex mb-3">
              <input
                className="w-full h-12 block rounded-3xl text-left pl-4 pb-1 focus:outline-none"
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex mb-3">
              <button
                type="submit"
                className="w-full h-12 transition-all bg-purple-700 hover:bg-purple-600 hover:scale-105 block rounded-3xl text-white md:w-80 mx-auto">
                <p className="font-bold tracking-widest">Register</p>
              </button>
            </div>

            <div className="flex justify-center mt-5">
              <Link href="/login">
                <a className="text-purple-600 hover:text-purple-500">
                  <p className="font-bold tracking-widest">Ya tengo cuenta</p>
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
