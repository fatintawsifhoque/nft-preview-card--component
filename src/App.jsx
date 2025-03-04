function App() {

  return (
    <>
      <div className="h-screen w-screen bg-[#0E182B] flex items-center justify-center">
        <div className="h-[546px] md:h-[596px] w-[335px] md:w-[356px] bg-[#15253F] p-6 rounded-xl">
          <div className="h-[285px] md:h-[306px] w-[278px] md:w-[304px] rounded-xl overflow-hidden ">
            <img className="object-cover" src="/images/image-equilibrium.jpg" alt="" />
          </div>
          <h1 className="font-bold text-white text-xl mt-6 hover:text-[#00FFF8]">Equilibrium #3429</h1>
          <p className="text-gray-400 mt-3">Our Equilibrium collection promotes  balance and calm.</p>

          <div className="flex justify-between mt-3">
            <div className="flex gap-2 items-center"><img src="/images/icon-ethereum.svg" alt="" />
              <p className="text-[#00FFF8]">0.041ETH</p>
            </div>
            <div className="flex gap-1 items-center"><img src="images/icon-clock.svg" alt="" />
            <p className="text-[#8BACD9]">3 days left</p></div>
          </div>
          <div className="h-[1px] w-full bg-gray-700 mt-3"></div>
          <div className="flex gap-2.5 items-center mt-3">
            <img className="h-[40px] w-[40px] rounded-full" src="/images/image-avatar.png" alt="" />
            <p className="text-[#8BACD9]">Creation of <span className="text-white hover:text-[#00FFF8]"><a href="#">Jules Wyvern</a></span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
