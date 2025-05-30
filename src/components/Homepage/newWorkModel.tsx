interface Props {
  color: string;
  icon: string;
  title: string;
  description: string;
  link: string;
  image: string;
  appType: string;
  order: string;
}

const Section = ({
  color,
  description,
  icon,
  image,
  link,
  title,
  appType,
  order,
}: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="sm:rounded-[32px] border border-[#424242] w-full p-4 pl-8 flex bg-black justify-between relative overflow-hidden gap-4 cursor-pointer">
        <div className="flex flex-col justify-between max-w-[330px] pt-2 pb-2">
          <div className="flex flex-col gap-[32px] z-10">
            <p className="font-light text-base text-white">
              {order} • {appType}
            </p>
            <div className="flex flex-col gap-4">
              <img src={icon} alt="" className="w-[51px]" />
              <p className="font-medium text-[32px] text-white">{title}</p>
              <p className="font-light text-base text-[#ADADAD]">
                {description}
              </p>
            </div>
          </div>
          <div>
            <a
              href={link}
              target="_blank"
              className="underline decoration-[#FFB800]"
            >
              <p className="text-[#FFB800] font-normal text-base flex gap-1">
                View case study{" "}
                <img
                  src="/icons/arrow-top.svg"
                  alt=""
                  className="inline-block"
                />
              </p>
            </a>
          </div>
          <div
            className="absolute -top-[25%] -left-[15%] h-[110%] aspect-square rounded-[60%]"
            style={{
              backdropFilter: "blur(200px)",
              background: `radial-gradient(circle at center, ${color} 12%, black 70%, black 90%)`,
            }}
          ></div>
        </div>
        <div className="h-full z-50">
          <img src={image} alt="" className="h-full" />
        </div>
      </div>
    </a>
  );
};
export default Section;
