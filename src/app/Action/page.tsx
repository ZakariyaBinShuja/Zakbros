import React from 'react'
import Navbar from "../componet/Navbar";
import Mid from "../componet/Mid";
import Pop from "../componet/Pop";
import { PaginationDemo } from "../componet/sui";
import Hero from "../componet/Hero";
import Link from 'next/link';
import Image from 'next/image';


const Action = () => {
  return (
    <div>
<Navbar/>

<div className='flex bg-blue-400 text-blue-900 font-bold text-xl mr-28 ml-28 mt-5 p-3'>
<Link href="/"> <h1>Home</h1></Link>
/
      <h1>Movies</h1>
     /
     <h1>Action</h1> 
    </div>

<div>
  <Pop/>
</div>

<div>
  <PaginationDemo/>
</div>

<div>
            <div className='text-blue-900 font-extrabold text-2xl   p-4 bg-blue-300 mt-6'>
                <h1>Action</h1>
            </div>
            <div className='grid grid-cols-6 gap-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 items-center text-center pt-10 pb-10'>

                <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black text-cyan-600 rounded-lg'>
                    <Link href="https://soap2day.rs/movie/watch-kingdom-of-the-planet-of-the-apes-full-108877"> <Image src="/14.png" alt='14' width={200} height={200} className='hover:opacity-80  w-full'></Image></Link>
                    <Link href="https://soap2day.rs/movie/watch-kingdom-of-the-planet-of-the-apes-full-108877"> <h1>KINGDOM OF THE</h1></Link>
                    <Link href="https://soap2day.rs/movie/watch-kingdom-of-the-planet-of-the-apes-full-108877"><h1>PLANET OF THE APES</h1></Link>


                </div>

                <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black text-cyan-600 rounded-lg'>
                    <Link href="https://soap2day.rs/movie/watch-once-upon-a-time-in-the-east-full-108946"><Image src="/2.png" alt='2' width={200} height={200} className='hover:opacity-80 w-full'></Image></Link>
                    <Link href="https://soap2day.rs/movie/watch-once-upon-a-time-in-the-east-full-108946"> <h1>Once Upon a Time</h1></Link>
                    <Link href="https://soap2day.rs/movie/watch-once-upon-a-time-in-the-east-full-108946"><h1>In The East</h1></Link>
                </div>




                <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black text-cyan-600 rounded-lg'>
                    <Link href="https://soap2day.rs/movie/watch-bloodline-killer-full-108829"><Image src="/3.png" alt='3' width={200} height={200} className='hover:opacity-80 w-full'></Image></Link>
                    <Link href="https://soap2day.rs/movie/watch-bloodline-killer-full-108829"><h1>BloodLine</h1></Link>
                    <Link href="https://soap2day.rs/movie/watch-bloodline-killer-full-108829"> <h1>Killer</h1></Link>
                </div>



                <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black  text-cyan-600 pb-3 rounded-lg'>
                    <Link href="https://soap2day.rs/movie/watch-tarot-full-108796"><Image src="/4.png" alt='4' width={200} height={200} className='hover:opacity-80 w-full'></Image></Link>
                <Link href="https://soap2day.rs/movie/watch-tarot-full-108796"><h1 className='mt-3'>TAROT</h1></Link>

            </div>



            <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black text-cyan-600 pb-3 rounded-lg'>
                <Link href="https://soap2day.rs/movie/watch-for-sale-full-108823"><Image src="/5.png" alt='5' width={200} height={200} className='hover:opacity-80 w-full'></Image></Link>
                <Link href="https://soap2day.rs/movie/watch-for-sale-full-108823"><h1 className='mt-3'>FOR SALE</h1></Link>

            </div>



           

        </div>


       
             
            
            <div className='flex justify-evenly items-center text-center pt-5 pb-10'>

                <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black text-cyan-600 rounded-lg'>
                    <Link href="https://soap2day.rs/movie/watch-jack-the-giant-slayer-full-16793"> <Image src="/7.png" alt='7' width={200} height={200} className='hover:opacity-80 w-full'></Image></Link>
                    <Link href="https://soap2day.rs/movie/watch-jack-the-giant-slayer-full-16793"> <h1>Jack The Gaint</h1></Link>
                    <Link href="https://soap2day.rs/movie/watch-jack-the-giant-slayer-full-16793"><h1>Slayer</h1></Link>


                </div>

                <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black text-cyan-600 rounded-lg'>
                    <Link href="https://soap2day.rs/movie/watch-hotel-transylvania-2-full-19181"><Image src="/13.png" alt='13' width={200} height={200} className='hover:opacity-80 w-full'></Image></Link>
                    <Link href="https://soap2day.rs/movie/watch-hotel-transylvania-2-full-19181"> <h1>Hotel of</h1></Link>
                    <Link href="https://soap2day.rs/movie/watch-hotel-transylvania-2-full-19181"><h1>Transylvania 2</h1></Link>
                </div>




                <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black text-cyan-600 rounded-lg'>
                    <Link href="https://soap2day.rs/movie/watch-hotel-transylvania-transformania-full-76336"><Image src="/9.png" alt='9' width={200} height={200} className='hover:opacity-80 w-full'></Image></Link>
                    <Link href="https://soap2day.rs/movie/watch-hotel-transylvania-transformania-full-76336"><h1>Hotel Transylvania</h1></Link>
                    <Link href="https://soap2day.rs/movie/watch-hotel-transylvania-transformania-full-76336"> <h1>Transformania</h1></Link>
                </div>



                <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black  text-cyan-600 rounded-lg '>
                    <Link href="https://soap2day.rs/movie/watch-hotel-transylvania-puppy-full-2823"><Image src="/10.png" alt='10' width={200} height={200} className='hover:opacity-80 w-full'></Image></Link>
                <Link href="https://soap2day.rs/movie/watch-hotel-transylvania-puppy-full-2823"><h1>Hotel Transylvania</h1>
                <h1>Puppy!</h1></Link>

            </div>



            <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black text-cyan-600 pb-3 rounded-lg'>
                <Link href="https://soap2day.rs/movie/watch-prisoners-full-19186"><Image src="/11.png" alt='11' width={200} height={200} className='hover:opacity-80 w-full'></Image></Link>
                <Link href="https://soap2day.rs/movie/watch-prisoners-full-19186"><h1 className='mt-3'>Prisoners</h1></Link>

            </div>



            <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black  text-cyan-600 pb-3 rounded-lg'>
               <Link href="https://soap2day.rs/tv/watch-grant-full-61400"> <Image src="/12.png" alt='12' width={200} height={200} className='hover:opacity-80 w-full'></Image></Link>
                <Link href="https://soap2day.rs/tv/watch-grant-full-61400"><h1 className='mt-3'>GRANT</h1></Link>

            </div>

        </div>


    </div >

</div>

  )
}

export default Action
