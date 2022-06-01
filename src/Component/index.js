
import { Link } from "@chakra-ui/react";


import Navbar from "./Navbar";
import Slide from "./Slide";




const Index = () => {
  
 
  
  
  return (
    <div className="text-gray-200">

        <Navbar />

  
            <Slide />

        <section className=" body-font bg-gray-100">
          <div className="container px-5 md:py-24 py-12 mx-auto flex flex-wrap">
            <div className="md:w-2/3 w-full mx-auto">
              <Link href="/patagonia">
                
                <a className="flex flex-wrap w-full h-96 bg-gray-100 md:py-32 relative mb-4 overflow test">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block absolute inset-0 card-img-top"
                    src="clientes.jpg"
                  />
                  <div className="details text-white">
                    <h2 className="text-3xl font-medium title-font mb-2">
                  
                    </h2>
                    <p className="leading-relaxed">
                      Sumate!!
                    </p>
                  </div>
                </a>
              </Link>
              <div className="flex flex-wrap -mx-2">
                <div className="md:w-1/2 p-2 w-full">
                  <Link href="/euro">
                    <a className="flex flex-wrap w-full bg-gray-100 md:py-32 py-20 relative mb-4 overflow test">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-42 object-center block absolute inset-0 card-img-top"
                        src="img-section-euro-2.jpg"
                      />
                      <div className="details text-white">
                        <h2 className="text-3xl font-medium title-font mb-2">
                        
                        </h2>
                        <p className="leading-relaxed">
                        Logistica Funcional
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="md:w-1/2 p-2 w-full">
                  <Link href="/termos">
                    <a className="flex flex-wrap w-full bg-gray-100 md:py-32 py-20 relative mb-4 overflow test">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-42 object-center block absolute inset-0 card-img-top"
                        src="img-section-termo.jpg"
                      />
                      <div className="details text-white">
                        <h2 className="text-3xl font-medium title-font mb-2">
                        
                        </h2>
                        <p className="leading-relaxed">
                          Buscamos Talentos
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
 
    </div>
  );
};

export default Index;
