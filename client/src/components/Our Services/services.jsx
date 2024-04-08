import ServiceCard from './serviceCard';
import {
  FaPenNib,
  FaRegPlayCircle,
  FaCode,
  FaMicrosoft,
  FaCubes,
} from 'react-icons/fa';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { RiChatSmileLine } from 'react-icons/ri';
import { SiMaterialdesignicons, SiSolidity } from 'react-icons/si';
import { TfiRulerPencil } from 'react-icons/tfi';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { DiAndroid } from 'react-icons/di';
import { TbPhotoCheck, TbDeviceDesktopCheck } from 'react-icons/tb';
import { LiaSitemapSolid } from 'react-icons/lia';

const ourServices = ({ setSelectedService }) => {
  const ServiceList = [
    {
      name: 'UI/UX',
      logo: <FaPenNib size={25} />,
      DarkerColor: '#FF0000',
      LighterColor: '#FF8E8E',
      content:
        "Elevate your digital presence with our expert UI/UX services! From sleek designs to seamless experiences, we're here to redefine user engagement. Ready to transform your digital journey? Let's craft brilliance together.",
    },
    {
      name: 'Graphic Design',
      logo: <SiMaterialdesignicons size={25} />,
      DarkerColor: '#FF008A',
      LighterColor: '#FF8EC4',
      content:
        "Ignite visual brilliance with our Graphic Design services! From striking logos to eye-catching marketing materials, we craft designs that captivate and resonate. Ready to stand out in the visual landscape? Let's create stunning graphics that leave a lasting impression.",
    },
    {
      name: 'Video Editing',
      logo: <FaRegPlayCircle size={25} />,
      DarkerColor: '#FF00F5',
      LighterColor: '#FD8EFF',
      content:
        "Unleash the power of storytelling with our Video Editing services! From captivating visuals to seamless transitions, we transform raw footage into compelling narratives. Ready to make your content stand out? Let's edit greatness into every frame",
    },
    {
      name: 'Web Dev',
      logo: <FaCode size={25} />,
      DarkerColor: '#FF8A00',
      LighterColor: '#FFBD8E',
      content:
        "Empower your online presence with our Web Development expertise! From responsive sites to dynamic web applications, we engineer digital solutions that seamlessly align with your goals. Ready to bring your ideas to life online? Let's code brilliance together",
    },
    {
      name: 'App Dev',
      logo: <DiAndroid size={25} />,
      DarkerColor: '#FFD600',
      LighterColor: '#FFF48E',
      content:
        "Elevate your digital presence with our App Development expertise! From sleek interfaces to robust functionality, we engineer mobile apps that redefine user experiences. Ready to turn your app vision into reality? Let's innovate together",
    },
    {
      name: 'Software Dev',
      logo: <FaMicrosoft size={25} />,
      DarkerColor: '#EBFF00',
      LighterColor: '#EFFF8E',
      content:
        "Embrace efficiency with our Software Development solutions! We create scalable, tailored software that streamlines operations and accelerates growth. Ready to optimize your processes? Let's build powerful software solutions.",
    },
    {
      name: 'Blockchain Dev',
      logo: <FaCubes size={25} />,
      DarkerColor: '#CCFF00',
      LighterColor: '#DBFF8E',
      content:
        "Enter the world of decentralized innovation with our Blockchain Development services! From smart contracts to secure networks, we pioneer blockchain solutions that redefine trust. Ready to explore the possibilities of decentralized technology? Let's build the future together.",
    },
    {
      name: 'AI Chatbot',
      logo: <RiChatSmileLine size={25} />,
      DarkerColor: '#61FF00',
      LighterColor: '#97FF8E',
      content:
        "Transform customer interactions with our AI Chatbots! From personalized conversations to efficient support, our intelligent bots redefine engagement. Ready to enhance your services? Let's chat about the future of AI.",
    },
    {
      name: 'Smart Contracts',
      logo: <SiSolidity size={25} />,
      DarkerColor: '#00FF94',
      LighterColor: '#8EFFB4',
      content:
        "Enter a new era of secure transactions with our Smart Contracts! From blockchain integration to automated agreements, we streamline processes for efficiency. Ready to elevate your operations? Let's code transparency into your contracts",
    },
    {
      name: 'Digital Marketing',
      logo: <HiOutlineSpeakerphone size={25} />,
      DarkerColor: '#00EAF9',
      LighterColor: '#8EF8FF',
      content:
        "Catapult your brand to new heights with our Digital Marketing expertise! From targeted campaigns to data-driven strategies, we amplify your online presence and boost audience engagement. Ready to conquer the digital landscape? Let's market your success together.",
    },
    {
      name: 'Social Media Management',
      logo: <TbPhotoCheck size={25} />,
      DarkerColor: '#0075FF',
      LighterColor: '#8EBBFF',
      content:
        "Supercharge your brand's social presence with our Social Media Management services! From engaging content to strategic campaigns, we tailor your online voice for maximum impact. Ready to dominate the social scene? Let's manage your success across platforms.",
    },
    {
      name: 'Accounting & Auditing',
      logo: <TbDeviceDesktopCheck size={25} />,
      DarkerColor: '#8000FF',
      LighterColor: '#9E8EFF',
      content:
        "Elevate financial clarity with our Accounting & Auditing services! From meticulous bookkeeping to comprehensive audits, we ensure precision and compliance. Ready to navigate your financial journey seamlessly? Let's audit and account for your success together",
    },
    {
      name: 'Housing & Mapping',
      logo: <LiaSitemapSolid size={25} />,
      DarkerColor: '#BA00FC',
      LighterColor: '#D48EFF',
      content:
        "Navigate the path to your dream home with our Housing & Mapping solutions! From detailed property maps to streamlined housing searches, we guide you through a seamless real estate journey. Ready to map out your future home? Let's chart a course to your ideal living space.",
    },
    {
      name: 'Interior Designing',
      logo: <TfiRulerPencil size={25} />,
      DarkerColor: '#FFB800',
      LighterColor: '#FFD88E',
      content:
        "Transform your space into a masterpiece with our Interior Design expertise! From concept to execution, we craft personalized designs that reflect your style and enhance your living or working environment. Ready to redefine your space? Let's design your world together",
    },
  ];

  return (
    <div className="w-full h-full  items-center justify-center flex flex-col bg-[#000000]">
      <div className="flex mt-[130px] my-[40px] md:mt-[150px] md:my-[70px] items-center justify-center text-white">
        <b className="md:text-5xl text-3xl font-HeadingFont">OUR SERVICES</b>
      </div>

      <div className="md:mb-[100px] mb-[80px] grid items-center justify-center grid-flow-row md:grid-cols-3 grid-cols-1 gap-11 md:gap-10">
        {ServiceList.map((item, index) => (
          <ServiceCard
            key={index}
            name={item.name}
            logo={item.logo}
            text={item.content}
            DarkerColor={item.DarkerColor}
            LighterColor={item.LighterColor}
            setSelectedService={setSelectedService}
          />
        ))}
      </div>
      <div className="flex items-center md:mb-[80px] mb-[40px] justify-center text-white">
        <b className="md:text-5xl md:flex-row cursor-auto  flex flex-col text-3xl font-HeadingFont">
          Looking for something else ?
          <a
            href="https://forms.gle/gC14oUFKpQCQS21T7"
            className=" md:pl-2 underline-offset-4 flex  flex-row items-center justify-center underline cursor-pointer font-HeadingFont">
            Contact Us <MdOutlineArrowOutward />
          </a>
        </b>
      </div>
    </div>
  );
};

export default ourServices;
