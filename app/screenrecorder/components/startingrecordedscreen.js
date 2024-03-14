export default function StartingRecordScreen() {

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="text-center mb-6 max-w-[293px] p-0 sm:mb-8 sm:max-w-[370px] md:max-w-none md:mb-[50px]">
        <div className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent text-5xl font-semibold leading-12">
          Capture Your Screen for Free
        </div>
        <div className="text-lg pt-2  font-normal">
          Quickly and effortlessly record professional-quality videos
        </div>
      </div>
      <div className="flex justify-center">

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="py-4">
            <div
              className="flex h-40 w-52 flex-col items-center justify-center rounded-2xl md:h-52 md:w-56 card-bg"
            >
              <div className="[&_svg]:transform-['scale(0.88)'] md:[&_svg]:transform-['scale(1)'] m-0 w-auto p-0 text-center sm:m-auto flex items-center flex-col">
              <img src="./screen.svg" width={100} height={100}/>
                <div className="pt-2.5 text-sm">Screen</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="flex h-40 w-52 flex-col items-center justify-center rounded-2xl md:h-52 md:w-56 card-bg">
              <div className="[&_svg]:transform-['scale(0.88)'] md:[&_svg]:transform-['scale(1)'] m-0 w-auto p-0 text-center sm:m-auto flex items-center flex-col">
                <img src="./camera-and-screen.svg" width={100} height={100}/>
                <div className="pt-2.5 text-sm">Screen & Camera</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button className="mt-4 flex h-[72px] w-64 items-center justify-around gap-6 rounded-2xl bg-red-600 text-white hover:bg-red-700 active:bg-red-800 md:mt-1">
            <div className="ml-3 text-sm">Start Recording</div>
            <div className="flex h-12 w-12 content-center items-center rounded-2xl bg-white shadow-md">
              <div className="mx-auto h-4 w-4 rounded-full bg-red-600 p-0"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
