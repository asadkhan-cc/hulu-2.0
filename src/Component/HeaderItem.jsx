function HeaderItem({ Icon, title }) {
  return (
    <div className=" group flex flex-col items-center cursor-pointer hover:text-white">
      <Icon className="mb-1  group-hover:animate-bounce" />
      <p className=" opacity-0 group-hover:opacity-100 ">{title}</p>
    </div>
  );
}

export default HeaderItem;
