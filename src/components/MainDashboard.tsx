import { Pool } from './Pool';
import { PlusCircleIcon } from '@heroicons/react/solid';

export const MainDashboard = ({ pools }) => {
  if (!pools) {
    return <div>No pools found</div>;
  }
  return (
    <div className="bg-gray-100 h-screen">
      <div>
        <h1 className="font-bold text-2xl mb-4">Dashboard Main</h1>
        <div className="grid grid-cols-2 gap-4">
          <div
            className="border-2 border-dashed rounded-2xl flex items-center p-3 justify-center aspect-w-16 aspect-h-9
    shadow-lg max-w-sm relative transition-all transform hover:scale-105 cursor-pointer">
            <div className="flex items-center justify-center">
              <PlusCircleIcon className="w-12 text-gray-600" />
            </div>
          </div>
          {pools.map((pool) => (
            <Pool key={pool._id} pool={pool} />
          ))}
        </div>
      </div>
    </div>
  );
};
