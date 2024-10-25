export function Hero() {
  return (
    <div className="max-w-[1400px] desktop:mx-auto laptop:mx-auto laptop:max-w-[1200px] mobile:w-full h-[100vh] flex mobile:flex-col mobile:h-full mobile:mt-5 justify-center items-center">
      <div className="flex w-[600px] laptop:w-[500px] mobile:w-full flex-col gap-10 ">
        <div className="flex justify-center items-center text-6xl">LOGO</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#dbc994] flex justify-center items-center">
              <div className=" bg-black h-2 w-2 rounded-full"></div>
            </div>
            <div className="text-xl">Valor abaixo do mercado</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#dbc994] flex justify-center items-center">
              <div className=" bg-black h-2 w-2 rounded-full"></div>
            </div>
            <div className="text-xl">Oportunidades de Negócio Exclusivas</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#dbc994] flex justify-center items-center">
              <div className=" bg-black h-2 w-2 rounded-full"></div>
            </div>
            <div className="text-xl">Variedade de Bens</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#dbc994] flex justify-center items-center">
              <div className=" bg-black h-2 w-2 rounded-full"></div>
            </div>
            <div className="text-xl">
              Processo Transparente e Seguridade Jurídica
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="text-xl mobile:text-center text-[#dbc994]">
            Cadastre-se em nossas plataformas!
          </div>
          <div className="flex w-full gap-3">
            <div className="w-full flex">
              <div className="flex w-full text-xl  justify-center py-2 rounded-xl text-black bg-[#dbc994] hover:bg-opacity-80 transition-all hover:scale-105 duration-300">
                Link 1
              </div>
            </div>
            <div className="flex w-full text-xl justify-center py-2 rounded-xl text-black bg-[#dbc994] hover:bg-opacity-80 transition-all hover:scale-105 duration-300">
              Link 2
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[800px] laptop:w-[700px] mobile:w-full "></div>
    </div>
  )
}
