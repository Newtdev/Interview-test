import IconButton from "@mui/material/IconButton";
import { TbDotsVertical } from "react-icons/tb";

export const ModuleCards = ({ name, action }: any) => {
	return (
		<div className="h-[415px] rounded-2xl bg-white">
			<div className="w-full flex justify-between p-6">
				<h4 className="md:text-sm font-semibold text-[#45464E]">{name}</h4>
				<div>
					<button
						className="md:text-sm font-semibold p-2 border rounded-lg border-gray-dark text-[#45464E]"
						onClick={action}>
						Add New
					</button>
					<IconButton>
						<TbDotsVertical />
					</IconButton>
				</div>
			</div>
		</div>
	);
};
