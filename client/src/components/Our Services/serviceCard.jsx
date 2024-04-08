import { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ServiceCard = ({
  name,
  logo,
  text,
  DarkerColor,
  LighterColor,
  setSelectedService,
}) => {
  const [onHover, setOnHover] = useState(false);

  const setMouseEnter = () => {
    setOnHover(true);
  };

  const setMouseLeave = () => {
    setOnHover(false);
  };

  return (
    <div
      className={`flex w-[350px] h-[350px] md:w-[400px] border-2 p-5 rounded-3xl md:h-[400px] bg-[#FFFFFF] bg-opacity-[7%] overflow-hidden relative`}>
      <div className="flex flex-col justify-between text-white">
        <div
          onMouseEnter={setMouseEnter}
          onMouseLeave={setMouseLeave}
          className="w-max h-max relative cursor-pointer">
          {/* Outer Div Color*/}
          <div
            onClick={() => setSelectedService(name)}
            style={
              onHover
                ? {
                    transform: 'scale(1) translate(-50%, -50%)',
                    width: '200px',
                    height: '200px',
                    opacity: 1,
                    borderRadius: '50%',
                    backgroundColor: `${DarkerColor}`,
                    zIndex: 2,
                  }
                : {
                    transform: 'scale(0)',
                    width: '0',
                    height: '0',
                    opacity: 0,
                  }
            }
            className={`absolute top-0 left-0 rounded-3xl transition-all duration-300 ease-in-out`}>
            {/* Display text on hover */}
            <div className="bottom-[20px] right-[-70px] absolute text-center ">
              <button className="cursor-pointer">
                <Link
                  to="/projects"
                  className="underline-offset-4 decoration-4 flex flex-row items-center justify-center text-2xl text-black underline cursor-pointer font-HeadingFont">
                  See Projects <MdOutlineArrowOutward size={20} />
                </Link>
              </button>
            </div>
          </div>

          {/* Inner Div color */}
          <div
            style={
              onHover
                ? {
                    transform: 'scale(1.3) translate(-50%, -50%)',
                    width: '500px',
                    height: '500px',
                    opacity: 1,
                    borderRadius: '50%',
                    zIndex: 1,
                    backgroundColor: `${LighterColor}`,
                  }
                : {
                    transform: 'scale(0)',
                    width: '0',
                    height: '0',
                    opacity: 0,
                    zIndex: 1,
                  }
            }
            className={`absolute top-0 left-0 rounded-3xl  transition-all duration-300 ease-in-out`}></div>

          <div
            style={{
              color: DarkerColor,
              borderBottomColor: DarkerColor,
            }}
            className={`z-10 flex items-center justify-center border-b-[5px] pb-1`}>
            {logo}
          </div>
        </div>
        <b className="flex items-center justify-center py-2 text-3xl md:text-5xl font-HeadingFont">
          {name}
        </b>
        <p
          style={{
            color: LighterColor,
          }}
          className={`text-justify font-BodyFont`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
