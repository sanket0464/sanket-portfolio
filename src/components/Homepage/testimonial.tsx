interface Props {
  image: string;
  name: string;
  description: string;
  position: string;
}

const Testimonial = ({ image, description, name, position }: Props) => {
  return (
    <div
      className="relative rounded-[16px] bg-white px-4 gap-6 pt-4 pb-7 shadow-[0px_0px_20px_0px_#00000014]
 max-w-[290px] sm:w-[590px] sm:aspect-[590/381.92]  aspect-[290/467] sm:min-h-[381px]"
    >
      <div className="block w-[90px] h-[90px] rounded-full overflow-hidden">
        <img src={image} alt="" className="object-cover" />
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-xl text-[#172B4D]">{name}</p>
        <p className="text-sm font-light text-[#AEAEAE]">{position}</p>
      </div>
      <div>
        <p className="text-base font-normal text-[#172B4D]">{description}</p>
      </div>
    </div>
  );
};

export default Testimonial;
