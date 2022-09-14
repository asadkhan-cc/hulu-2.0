import Image from "next/image";
import {
  HomeOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  DiffOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import hulu from "../../public/hulu.png";
import HeaderItem from "./HeaderItem";
const Header = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-between sm:flex-row m-5 items-center h-auto">
        <div className="flex flex-grow justify-evenly text-sm sm:text-lg max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeOutlined} />
          <HeaderItem title="TRENDING" Icon={ThunderboltOutlined} />
          <HeaderItem title="VERIFIED" Icon={CheckCircleOutlined} />
          <HeaderItem title="COLLECTIONS" Icon={DiffOutlined} />
          <HeaderItem title="SEARCH" Icon={SearchOutlined} />
          <HeaderItem title="ACCOUNT" Icon={UserOutlined} />
        </div>
        <div>
          <Image
            className="object-contain"
            src={hulu}
            height={100}
            width={200}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
