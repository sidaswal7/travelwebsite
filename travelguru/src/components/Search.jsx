import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'
function Search() {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus ea cumque similique quasi, fugit suscipit architecto nam magni, at inventore unde, deserunt voluptatum minima illo? Tenetur omnis perspiciatis aspernatur quisquam nulla maiores! Doloribus quidem quas maxime modi odio similique reprehenderit fuga non nemo nisi placeat totam amet distinctio unde officiis consectetur, tempora inventore, provident minus aliquid odit blanditiis assumenda ipsam iusto! Cumque aspernatur amet eum deleniti aut libero debitis nostrum molestias aperiam velit accusantium at neque numquam sint repellendus quis, laboriosam, reiciendis ea maxime distinctio est ad? Voluptatem tenetur dolorum repellat consequatur laudantium quaerat eum distinctio sed itaque deserunt.</p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <RiCustomerService2Fill size={50}/>
                    </button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>All-INCLUSIVE COMPANY FOR 20YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <MdOutlineTravelExplore size={50}/>
                    </button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>All-INCLUSIVE COMPANY FOR 20YEARS IN-A-ROW</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='border text-center'>
                <p>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-100 py-2'>BOOK NOW AND SAVE</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label>Destinations</label>
                    <select className='border rounded-md p-2'>
                        <option>Grand Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Cozumel</option>
                    </select>
                </div>
                <div className='flex flex-col my-2'>
                    <label>Check-In</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <div className='flex flex-col my-2'>
                    <label>Check Out</label>
                    <input className='border rounded-md p-2' type="date"/>
                </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
            </form>
        </div>

    </div>
  )
}

export default Search