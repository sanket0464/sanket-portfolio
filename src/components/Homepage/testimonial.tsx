interface Props {
  image: string;
  name: string;
  description: string;
  position: string;
}

const Testimonial = ({ image, description, name, position }: Props) => {
  return (
    <div
      className="relative rounded-[16px] bg-white flex flex-col px-7 gap-6 pb-7
max-w-[290px] sm:max-w-[590px] sm:aspect-[590/381.92]  aspect-[290/467] sm:min-h-[381px] overflow-visible pt-[80px]"
    >
      <div className="block w-[144px] h-[144px] rounded-full  sm:absolute -top-[72px] z-[999] sm:left-1/2 sm:-translate-x-1/2">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-xl text-[#172B4D] text-center">
          {name}
        </p>
        <p className="text-sm font-light text-[#AEAEAE] text-center">
          {position}
        </p>
      </div>
      <div>
        <p className="text-base font-normal text-[#172B4D] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
