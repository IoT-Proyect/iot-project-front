import Image from 'next/image';

// JOTOS - JAVASCRIPT OBJECT ORIENTED TEMPLATE STRING
export const Header = () => {
  const date = new Date().toLocaleDateString();

  return (
    <header className="flex justify-between p-2">
      <span>
        <div className="relative text-white my-4 ml-4 w-auto rounded-lg bg-purple-600 cursor-default">
          <time className="p-4 font-semibold">{date}</time>
        </div>
      </span>
      <div className="flex items-center border-2 px-2 border-gray-200 rounded-full transition-all duration-300 hover:bg-gray-200 hover:border-purple-500 cursor-pointer hover:-translate-y-1">
        <div className="relative rounded-full overflow-hidden w-10 h-10">
          <Image src="/adaldev.png" layout="fill" objectFit="cover" />
        </div>
        <p className="ml-4 mr-2 font-bold">Adalberto</p>
      </div>
    </header>
  );
};
