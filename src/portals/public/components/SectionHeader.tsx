const SectionHeader = ({
  header,
  description,
}: {
  header: string;
  description: string;
}) => {
  return (
		<div className="w-full flex justify-center flex-col gap-y-6 items-center max-w-[1281px]">
			<h2 className="text-xl md:text-3xl lg:w-[40%]  text-[40px] text-center font-bold">
				{header}
			</h2>
			<p className="text-xs font-normal text-center text-gray-400 md:text-sm lg:text-base lg:px-24 lg:w-[80%] mx-auto">
				{description}
			</p>
		</div>
	);
};

export default SectionHeader;
