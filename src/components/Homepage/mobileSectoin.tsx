interface Props {
  title: string;
  image: string;
  description: string;
  link: string;
}

const MobileSection = ({ description, image, title, link }: Props) => {
  return (
    <div className="flex flex-col gap-[14px] justify-center items-center">
      <div className="p-2.5 w-full text-center">
        <p className="text-base leading-[120%] text-white font-semibold">
          {title}
        </p>
      </div>
      <div
        className="flex justify-center items-center h-fit max-h-[300px] py-[11px] relative"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 5.98%, #000000 62.84%)",
        }}
      >
        <div
          className="absolute w-full h-full z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 75%, #000000 96%,  #000000 98%)",
          }}
        ></div>
        <img src={image} alt="" className="max-w-[250px]" />
      </div>

      <div className="flex flex-col gap-[38px]">
        <p className="text-[#A4A4A4] font-light text-center">{description}</p>
        <div className="w-full flex justify-center">
          <a
            href={link}
            target="_blank"
            className="underline decoration-[#FFB800]"
          >
            <p className="text-[#FFB800] font-normal text-base flex gap-1 text-center">
              View case study{" "}
              <img src="/icons/arrow-top.svg" alt="" className="inline-block" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
