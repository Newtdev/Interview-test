type AuthHeaderType = {
	name: string;
};

const AuthHeader = ({ name }: AuthHeaderType) => {
	return (
		<div className="w-full">
			<h1 className="font-semibold text-2xl">{name}</h1>
		</div>
	);
};

export default AuthHeader;
