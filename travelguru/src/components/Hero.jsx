import { AiOutlineSearch } from 'react-icons/ai'
import beachvid from '../assets/beachvid.mp4'
function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachvid} autoPlay loop muted/>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1>First Class Travel</h1>
            <h3>Top 1% locations Worldwide</h3>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                <div>
                <input className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none' type="text"  placeholder='Search Destination'/>
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon '/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero