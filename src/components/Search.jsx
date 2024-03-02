import React from "react";
//import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid  lg:grid-cols gap-4 px-4 py-16 ">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div className="text-center">
          <h2>VACACIONES DE LUJO INCLUIDO PARA DOS PERSONAS</h2>
          <p className="py-4">
            Descubre la magia de Argentina, un país que deslumbra con su
            diversidad natural, su cultura apasionada y su historia fascinante.
            Desde los picos nevados de la Patagonia hasta las exuberantes selvas
            tropicales del norte, Argentina ofrece un escenario impresionante
            para los amantes de la naturaleza y los aventureros por igual.
            Sumérgete en la vibrante escena cultural de Buenos Aires, donde el
            tango resuena en las calles y los estadios de fútbol están llenos de
            pasión y emoción. Deléitate con la deliciosa gastronomía argentina,
            desde los suculentos cortes de carne asada hasta las exquisitas
            empanadas y el mate reconfortante. Con su hospitalidad cálida y su
            belleza cautivadora, Argentina te espera con los brazos abiertos
            para una experiencia de viaje inolvidable. ¡Ven y descubre todo lo
            que este increíble país tiene para ofrecer!
          </p>
        </div>
        <div className="grid sm:grid-cols-1 m-auto gap-8 py-4 ">
          <div className="flex flex-col lg:flex-row items-center text-center ">
            <button>  <MdOutlineTravelExplore size={50} /> </button>
            <div >
              <h3 className="PY-2">SERVICIO LÍDER</h3>
              <p className="py-1">
              EMPRESA TODO INCLUIDO POR 20 AÑOS CONSECUTIVOS
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Search;
