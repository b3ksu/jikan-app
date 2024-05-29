import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { TopAnimeConfig, TopAnimeControls } from "@/widgets/top-anime-aside/config";

export const TopAnimeControlsNav = ({
	isLoading,
	tab,
	handleTabChange,
}: {
	isLoading: boolean;
	tab: TopAnimeControls;
	handleTabChange: (tab: TopAnimeControls) => void;
}) => {
	return (
		<Tabs defaultValue={tab.title}>
			<TabsList>
				{TopAnimeConfig.CONTROLS.map((el) => (
					<TabsTrigger
						disabled={isLoading}
						key={el.id}
						value={el.title}
						onClick={() => {
							handleTabChange(el);
						}}
					>
						{el.title}
					</TabsTrigger>
				))}
			</TabsList>
		</Tabs>
	);
};
