import { BsArrowUpRightCircle } from 'react-icons/bs';

const projects = ({ selectedProject, selectedService }) => {
  return (
    <div className="flex flex-col gap-6 mt-[60px]">
      <div className="bg-[#000000]  py-[100px] w-full h-full   flex  flex-col justify-center space-y-12 items-center">
        <p className="md:text-9xl text-6xl text-white font-HeadingFont">
          {selectedService}
        </p>

        {selectedProject &&
          selectedProject?.map((project, i) => (
            <div
              key={i}
              className="md:w-[60%] cursor-pointer border-blue-500 border-4 border-opacity-50 md:flex-row flex-col md:h-[350px] w-[70%] bg-[#FFFFFF]  bg-opacity-20 rounded-3xl text-white flex ">
              <div className="flex flex-col p-11 justify-center items-stretch w-full h-full rounded-3xl">
                <b className="md:text-5xl text-3xl uppercase font-HeadingFont">
                  {project.title}
                </b>
                {/* <p className="font-semibold text-gray-300">20/20/2024</p> */}
                <p className="font-BodyFont">{project.description}</p>
              </div>
              <div className="flex relative justify-center  rounded-3xl items-center md:w-[50%] md:h-full w-full h-[70%]">
                <a href={project.redirectLink}>
                  <BsArrowUpRightCircle
                    className="absolute z-20 text-white right-11 top-11 "
                    size={50}
                  />
                </a>
                <img
                  src={project.images}
                  className="md:w-full md:h-full w-full h-[280px] rounded-3xl"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default projects;
