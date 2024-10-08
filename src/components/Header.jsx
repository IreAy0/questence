import { ChevronLeft, ChevronRight } from 'lucide-react'
import Logo from '../assets/logo.png'
import Avatar from '../assets/avatar-img.png'
import Button from './ui/Button'
import AvatarDropdown from './ui/Avatar'
function Header() {
  return (
    <header className="pb-6 bg-white lg:pb-0 fixed top-0 left-0 z-50 right-0 shadow-[0px_4px_4px_0px_#00000040]">
    <div className="px-4 mx-auto sm:px-8 lg:px-16 py-4">
        <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                    <img className="w-auto h-40 lg:h-56" src={Logo} alt="questence logo" />
                </a>

            </div>
            <div>
                <p className='font-bold'>ENT 1001 : Entrepreneurship in Emerging Economies</p>
            </div>

            <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>

                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className='flex items-center justify-center ml-auto'>
            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-5">
                <Button variant='outline' >
                    <ChevronLeft />
                    Prev
                    
                </Button>
                <Button>
                    
                    Next
                    <ChevronRight />
                </Button>
              
           </div>
            <div className='ml-10'>
            <AvatarDropdown
                image={Avatar}
                placeholder="JD" 
                dropdownItems={[]} 
            />
            </div>
            </div>
                    </nav>

    </div>
</header>
  )
}

export default Header