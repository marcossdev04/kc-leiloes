export function Hero() {
  return (
    <div className="max-h-[1400px] -mt-10 h-[100vh] flex justify-center items-center">
      <div className="flex w-[600px] flex-col gap-10 ">
        <div className="flex justify-center items-center text-6xl">LOGO</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-green-400 flex justify-center items-center">
              <div className=" bg-black h-2 w-2 rounded-full"></div>
            </div>
            <div className="text-xl">Valor abaixo do mercado</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-green-400 flex justify-center items-center">
              <div className=" bg-black h-2 w-2 rounded-full"></div>
            </div>
            <div className="text-xl">Oportunidades de Negócio Exclusivas</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-green-400 flex justify-center items-center">
              <div className=" bg-black h-2 w-2 rounded-full"></div>
            </div>
            <div className="text-xl">Variedade de Bens</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-green-400 flex justify-center items-center">
              <div className=" bg-black h-2 w-2 rounded-full"></div>
            </div>
            <div className="text-xl">
              Processo Transparente e Seguridade Jurídica
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="text-xl">Cadastre-se em nossas plataformas!</div>
          <div className="flex w-full gap-3">
            <div className="w-full flex">
              <div className="flex w-full text-xl  justify-center py-2 rounded-xl text-black bg-green-400 hover:bg-opacity-80 transition-all hover:scale-105 duration-300">
                Link 1
              </div>
            </div>
            <div className="flex w-full text-xl justify-center py-2 rounded-xl text-black bg-green-400 hover:bg-opacity-80 transition-all hover:scale-105 duration-300">
              Link 2
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[800px] "></div>
    </div>
  )
}
