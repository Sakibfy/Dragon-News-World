import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
  return (
    <div className="flex  gap-3 items-center bg-gray-300 p-2">
      <span className="font-semibold text-white bg-[#d72050] py-2 px-3  ">Latest</span>
      <Marquee pauseOnHover className="space-x-10 font-semibold ">
        <Link to={"/news"}>
          I knew this man needed to be reported and I was sure the police could trace the
        </Link>
        <Link  to={"/news"}>
          I knew this man needed to be reported and I was sure the police could trace the
        </Link>
        <Link  to={"/news"}>
          I knew this man needed to be reported and I was sure the police could trace the
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;