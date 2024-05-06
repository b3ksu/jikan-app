import { getData } from "@/shared/services/get-data";
import Image from "next/image";
import { Recommendations } from "../model/types";

export const AnimeList = async () => {
	const res = await getData<Recommendations>("/recommendations/anime");

	return (
		<div className="container">
			<h1 className="bg-muted">Recommendations</h1>

			<div className="w-screen">
				{res.data.map((el) => (
					<div key={el.content}>
						{el.entry.map((el) => (
							<div key={el.mal_id}>
								<div>{el.title}</div>
								{/* <div>{JSON.stringify(el.images.jpg.image_url)}</div> */}
								<Image
									src={el.images.jpg.image_url}
									alt="sdfsaf"
									width={200}
									height={200}
								/>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};
