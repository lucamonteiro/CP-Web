import Cards from "../components/Cards";

function Project() {
  return (
    <div className="mb-24 h-auto w-full sm:mb-0 md:h-screen">
      <div>
        <p className="font-poppins mx-auto w-[50%] pb-10 pt-8 text-center text-2xl tracking-wider text-gray-900 lg:text-3xl">
          Projetos
        </p>
      </div>
      <div className="mx-auto mb-2 grid w-[90%] grid-cols-1 gap-4 sm:mb-8 md:grid-cols-2">
        <Cards />
      </div>
    </div>
  );
}

export default Project;