import { ISeasonsPaths, SeasonsData } from "../../model/seasons.interface";

type Props = {
	handle: (path: ISeasonsPaths) => void;
} & SeasonsData;

export const SeasonsBodyItem = (p: Props) => {
	return (
		<div className="text-left text-3xl font-black text-gray-500 transition-all">
			<div>{p.year}</div>
			<div className="text-left text-xl">
				{p.seasons.map((el) => (
					<div
						onClick={() => p.handle({ season: el, year: String(p.year) })}
						className="cursor-pointer hover:text-gray-100"
						key={el}
					>
						{el}
					</div>
				))}
			</div>
		</div>
	);
};
