import Link from 'next/link';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { Pool } from './Pool';

export const MainDashboard = ({ pools }) => {
  if (!pools) {
    return <div>No pools found</div>;
  }
  return (
    <div className="bg-gray-100 h-screen">
      <div>
        <h1 className="text-3xl mb-10 font-bold text-purple-500">
          Dashboard Main
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/pool">
            <a className="block">
              <div
                className="h-full border-2 border-dashed rounded-2xl flex items-center p-3 justify-center aspect-w-16 aspect-h-9
    shadow-lg max-w-sm relative transition-all transform hover:scale-105 cursor-pointer">
                <div className="flex items-center justify-center">
                  <PlusCircleIcon className="w-12 text-gray-600" />
                </div>
              </div>
            </a>
          </Link>
          {pools.map((pool) => (
            <Pool key={pool._id} pool={pool} />
          ))}
        </div>
      </div>
    </div>
  );
};
