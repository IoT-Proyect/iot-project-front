import Image from 'next/image';
import { LocationMarkerIcon } from '@heroicons/react/solid';

export const Card = ({ pool }) => {
  return (
    <article className="bg-white rounded-xl max-w-sm overflow-hidden">
      <div className="bg-white grid">
        <div className="aspect-w-16 aspect-h-9">
          <Image src="/inground-pool.jpeg" layout="fill" />
        </div>
        <div className="p-4">
          <h2 className="text-2xl z-10 left-2 bottom-2 font-bold text-gray-900">
            {pool.name}
          </h2>
          <p className="text-gray-400 text-sm pt-1">{pool.description}</p>
          <span className="flex gap-2 mt-2">
            <LocationMarkerIcon className="w-5 h-5 text-purple-600" />
            <p>{pool.location}</p>
          </span>
        </div>
      </div>
    </article>
  );
};
