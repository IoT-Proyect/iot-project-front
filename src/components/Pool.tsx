import Image from 'next/image';
import Link from 'next/link';
interface PoolProps {
  id?: string;
  name: string;
}
export const Pool = ({ id, name }: PoolProps) => {
  return (
    <Link href={`pool/${id}`}>
      <article
        className="bg-white rounded-2xl flex items-center p-3 justify-center aspect-w-16 aspect-h-9
    shadow-lg max-w-sm relative transition-all transform hover:scale-105 cursor-pointer group">
        <div className="relative rounded-2xl bg-gray-900">
          <h2 className="absolute font-semibold text-2xl z-10 left-2 bottom-2 text-white">
            {name}
          </h2>
          <div className="aspect-w-16 aspect-h-9 opacity-70 transtion-all group-hover:opacity-50">
            <Image
              src="/inground-pool.jpeg"
              layout="fill"
              className="rounded-xl"
            />
          </div>
        </div>
      </article>
    </Link>
  );
};
