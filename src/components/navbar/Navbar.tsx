


const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between p-10 text-zinc-200 w-screen h-[150px] ">
      <h2 className="uppercase text-4xl hover:text-amber-700 transition-all cursor-pointer">German Koch</h2>
      <div className="uppercase flex flex-row items-center justify-between px-20">
        <p className="text-2xl hover:text-amber-500 transition-all cursor-pointer p-5">Services</p>
        <p className="text-2xl hover:text-amber-500 transition-all cursor-pointer p-5">Technologies</p>
        <p className="text-2xl hover:text-amber-500 transition-all cursor-pointer p-5">Portfolio</p>
        <p className="text-2xl hover:text-amber-500 transition-all cursor-pointer p-5">Contact</p>
      </div>
    </div>
  )
}

export default Navbar