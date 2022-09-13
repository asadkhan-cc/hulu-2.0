import Image from "next/image";
import { HomeOutlined } from "@ant-design/icons";
import hulu from "../../public/hulu.png";
import HeaderItem from "./HeaderItem";
const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between">
        <div className="flex">
          <HeaderItem title="HOME" Icon={HomeOutlined} />
          <HeaderItem title="HOME" Icon={HomeOutlined} />
          <HeaderItem title="HOME" Icon={HomeOutlined} />
          <HeaderItem title="HOME" Icon={HomeOutlined} />
          <HeaderItem title="HOME" Icon={HomeOutlined} />
        </div>
        <div>
          <Image src={hulu} height={100} width={200} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
