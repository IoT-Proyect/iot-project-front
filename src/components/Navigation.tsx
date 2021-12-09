import Link from 'next/link';
import {
  HomeIcon,
  ChartBarIcon,
  CogIcon,
  LoginIcon,
} from '@heroicons/react/solid';
import { useAuth } from '@/lib/auth';

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const { signOut } = useAuth();

  return (
    <nav
      className={`bg-white w-36 h-screen border-r-2 flex flex-col justify-around ${className} sticky top-0`}>
      <div className="">
        <div className="w-8 h-8 bg-purple-600 shadow-perrona mx-auto rounded-full"></div>
        <h2 className="text-center font-bold pt-5 text-sm">Plomo Reportes</h2>
      </div>

      <ul className="flex flex-col h-96 justify-between w-full">
        <li className="m-auto">
          <Link href="/">
            <a>
              <HomeIcon className="w-10 h-10 transition-transform hover:scale-125 text-purple-600" />
            </a>
          </Link>
        </li>
        <li className="m-auto">
          <Link href="/">
            <a>
              <ChartBarIcon className="w-10 h-10 transition-transform hover:scale-125 text-purple-600" />
            </a>
          </Link>
        </li>
        <li className="m-auto">
          <Link href="/">
            <a>
              <CogIcon className="w-10 h-10 transition-transform hover:scale-125 text-purple-600" />
            </a>
          </Link>
        </li>
      </ul>
      <div className="grid place-items-center">
        <button onClick={signOut}>
          <LoginIcon className="w-10 h-10 transition-transform hover:scale-125 text-purple-600 mx-auto " />
        </button>
      </div>
    </nav>
  );
};
