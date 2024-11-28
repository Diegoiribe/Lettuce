import XIcon from '@mui/icons-material/X'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-screen py-10 -mt-5 bg-white ">
      <div className="mac:w-4/5 phone:w-[90%] flex phone:flex-col mac:flex-row justify-beetwen mt-10 ">
        <div className="flex flex-col gap-5 mac:w-1/5 phone:w-full phone:mb-10 mac:mb-0">
          <div className="overflow-hidden text-4xl font-medium">
            Lettuce Inc
          </div>
          <p className="text-sm">
            © 2024 Lettuce. Todos los derechos reservados.
          </p>
          <select
            name="language"
            id="language"
            className="block w-4/5 px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none cursor-pointer focus:outline-none"
            defaultValue="en"
          >
            <option value="en" className="font-medium cursor-pointer">
              Español
            </option>
          </select>
        </div>
        <div className='"mac:w-4/5 phone:w-full flex flex-row phone:flex-wrap mac:flex-nowrap gap-5 phone:justify-center'>
          <div className=" flex flex-col gap-5 phone:w-[45%] desktop:w-1/5 mac:w-[10%]">
            <h2 className="text-gray-500 mac:font-medium phone:font-bold phone:text-sm mac:text-[16px]">
              Guia
            </h2>
            <div className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Inicio
            </div>
            <a
              href="#news"
              className="font-medium cursor-pointer phone:text-sm mac:text-[16px]"
            >
              Noticias
            </a>
            <div className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Novedades
            </div>
            <div className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Tienda
            </div>
          </div>
          <div className=" flex flex-col gap-5 phone:w-[45%] mac:w-1/5">
            <h2 className="text-gray-500 mac:font-medium phone:font-bold phone:text-sm mac:text-[16px]">
              Sobre Lettuce
            </h2>
            <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Quienes somos
            </p>
            <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Politicas de privacidad
            </p>
            <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Condiciones de servicio
            </p>
            <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Politica de cookies
            </p>
            <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Divulgacion de afiliacion
            </p>
          </div>
          <div className=" flex flex-col gap-5 phone:w-[100%] phone:mb-10 mac:mb-0 mac:w-[30%] desktop:w-[22%]">
            <h2 className="text-gray-500 mac:font-medium phone:font-bold phone:text-sm mac:text-[16px]">
              Contacto
            </h2>
            <p className="font-medium phone:text-sm mac:text-[16px]">
              support@lettucesupport.com
            </p>
          </div>
          <div className="flex justify-around gap-5 phone:w-full mac:w-1/5">
            <a
              href="#"
              className="flex items-center justify-center bg-gray-100 cursor-pointer w-14 h-14 rounded-xl hover:bg-black hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-gray-100 cursor-pointer w-14 h-14 rounded-xl hover:bg-black hover:text-white"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-gray-100 cursor-pointer w-14 h-14 rounded-xl hover:bg-black hover:text-white"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
