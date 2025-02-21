const Tecnologies = () => {
  return (
    <div className="bg-[#2b2b2b] flex flex-row items-center justify-center px-30 py-45 pb-[95px] text-zinc-200 w-screen h-screen">
      <div className="flex flex-col gap-7 p-0">
        <h1 className="flex items-start text-zinc-700 text-4xl">Mis<span className="text-zinc-600 ml-2.5 mr-2.5">tecnologías</span>usadas son</h1>
        <div className="flex flex-row justify-center gap-20 text-amber-400">
          <div>
            <h2 className="text-4xl">HTML</h2>
            <p>3 años</p>
          </div>
          <div>
            <h2 className="text-4xl">JavaScript</h2>
            <p>3 años</p>
          </div>
          <div>
            <h2 className="text-4xl">React</h2>
            <p>3 años</p>
          </div>
          <div>
            <h2 className="text-4xl">TypeScript</h2>
            <p>1 año</p>
          </div>
          <div>
            <h2 className="text-4xl">Next.js</h2>
            <p>1 año</p>
          </div>
          <div>
            <h2 className="text-4xl">Vite</h2>
            <p>1 año</p>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-20 text-amber-500">
          <div>
            <h2 className="text-4xl">CSS</h2>
            <p>3 años</p>
          </div>
          <div>
            <h2 className="text-4xl">Stiled-Components</h2>
            <p>3 años</p>
          </div>
          <div>
            <h2 className="text-4xl">Boostrap</h2>
            <p>2 años</p>
          </div>
          <div>
            <h2 className="text-4xl">Tailwind CSS</h2>
            <p>1 año</p>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-20 text-amber-600">
          <div>
            <h2 className="text-4xl">Node.js</h2>
            <p>3 años</p>
          </div>
          <div>
            <h2 className="text-4xl">Jest</h2>
            <p>1 años</p>
          </div>
          <div>
            <h2 className="text-4xl">Cypress</h2>
            <p>1 años</p>
          </div>
          <div>
            <h2 className="text-4xl">Express.js</h2>
            <p>1 año</p>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-20 text-amber-700">
          <div>
            <h2 className="text-4xl">GitHub</h2>
            <p>3 años</p>
          </div>
        </div>

      </div >
    </div>
  )
}

export default Tecnologies