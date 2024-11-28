import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-screen h-screen">
      <header className="fixed flex items-center justify-around w-screen h-20 bg-[#141413] border-b-2 border-white">
        <h1 className="text-3xl text-[#fff] font-extrabold">Lettuce Inc.</h1>
        <div className="flex items-center gap-5">
          <button className="px-4 py-2 font-bold text-white bg-[#cf4500] rounded-full">
            Comprar consultoria
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </header>
      <div className="w-full h-full pt-20 ">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="w-4/5 h-[80vh]">
            <h1 className="mb-5 text-4xl font-bold text-[#cf4500] text-start">
              Advisors consulting
            </h1>

            <div className="flex flex-row items-center justify-start w-full h-10 mb-10 text-black bg-transparent border-b-2 border-[#141413] cursor-pointer hover:border-black hover:text-black">
              <p className="">Nosotros</p>
            </div>
            <div className="flex w-full gap-5">
              <div
                className="w-4/5 bg-center bg-no-repeat bg-cover h-[60vh] rounded-3xl"
                style={{
                  backgroundImage: `url(https://img.freepik.com/foto-gratis/personas-que-trabajan-vista-lateral-escritorio_23-2149445781.jpg?t=st=1732832134~exp=1732835734~hmac=23c0ace471332f65eae837c64490e207904b2ac38a58c356082e87bf174e4352&w=1380)`
                }}
              ></div>
              <div className="flex flex-col items-center w-1/5 gap-10 p-2 font-semibold">
                <p>
                  Ignite business transformation with more than 150 cutting-edge
                  technology solutions primed to help your business grow. Ignite
                  business transformation with more than 150 cutting-edge
                  technology solutions primed to help your business grow.
                </p>
                <button className="px-4 py-2 font-bold text-white bg-[#cf4500] rounded-full">
                  Agendar cita
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[20rem] py-28">
          <p className="font-mono text-lg font-bold ">WHO WE ARE</p>
          <p className="font-mono text-[28px] my-3">
            Mastercard Advisors features more than 3,000 consultants spanning 53
            countries, bringing unparalleled expertise to the world’s largest
            payments-focused consulting organization.
          </p>
        </div>
        <div className="bg-[#141413] px-[20rem] py-20">
          <p className="text-[28px] font-bold text-white">
            Our team has diverse expertise
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col gap-5 p-5">
              <span
                className="w-8 bg-center bg-no-repeat bg-cover h-7"
                style={{
                  backgroundImage: `url(https://www.mastercardservices.com/sites/default/files/icon-check.svg)`
                }}
              ></span>
              <p className="font-mono font-medium text-white">Designers</p>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <span
                className="w-8 bg-center bg-no-repeat bg-cover h-7"
                style={{
                  backgroundImage: `url(https://www.mastercardservices.com/sites/default/files/icon-check.svg)`
                }}
              ></span>
              <p className="font-mono font-medium text-white">
                Data scientists
              </p>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <span
                className="w-8 bg-center bg-no-repeat bg-cover h-7"
                style={{
                  backgroundImage: `url(https://www.mastercardservices.com/sites/default/files/icon-check.svg)`
                }}
              ></span>
              <p className="font-mono font-medium text-white">Economists</p>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <span
                className="w-8 bg-center bg-no-repeat bg-cover h-7"
                style={{
                  backgroundImage: `url(https://www.mastercardservices.com/sites/default/files/icon-check.svg)`
                }}
              ></span>
              <p className="font-mono font-medium text-white">
                Loyalty experts
              </p>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <span
                className="w-8 bg-center bg-no-repeat bg-cover h-7"
                style={{
                  backgroundImage: `url(https://www.mastercardservices.com/sites/default/files/icon-check.svg)`
                }}
              ></span>
              <p className="font-mono font-medium text-white">Marketers</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
