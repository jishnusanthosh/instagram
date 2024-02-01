import Image from 'next/image';
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from '@heroicons/react/outline'; // Note the change from 'outline' to 'solid'

const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24 h-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle -search input field */}
        <div className="relative mt-1 p-3 rounded-md bg-white-500">
         <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'> 
         <SearchIcon className="h-5 w-5 text-gray-400" />
         </div>
          <input className='bg-gray-50 block w-full  pl-10 sm:border-gray-300 focus:ring-black  focus:border-black ' type="text" placeholder="search" />
        </div>

        {/* right */}
      </div>
    </div>
  );
};

export default Header;
