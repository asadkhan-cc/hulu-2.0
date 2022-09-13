function HeaderItem({ Icon, title }) {
  return (
    <div className=" group flex flex-col items-center cursor-pointer hover:text-white">
      <Icon className="h-8 mb-1" />
      <p className="h-8 opacity-0 group-hover:opacity-100 ">{title}</p>
    </div>
  );
}

export default HeaderItem;
