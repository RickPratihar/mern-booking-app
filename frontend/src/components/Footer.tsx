
const Footer = () => {
  return (
    <div className='bg-blue-800 py-10 '>
        <div className="mx-auto flex justify-around items-start">
            <span className="sm:text-xl md:text-3xl text-white font-bold tracking-tight">
                Holiday-Booking.com
            </span>
            <span className="sm:text-sm md:text-xl text-white font-bold tracking-tight flex gap-4"> 
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms of Services</p>
            </span>
        </div>
    </div>
  )
}

export default Footer