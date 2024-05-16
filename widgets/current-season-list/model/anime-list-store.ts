import { CURRENT_SEASON_NAV } from "@/shared/constant";
import { makeAutoObservable } from "mobx";
import { CurrentSeasonNav } from "./types";

class AnimeListStore {
	currentList: CurrentSeasonNav = CURRENT_SEASON_NAV[0];

	constructor() {
		makeAutoObservable(this);
	}

	setCurrentList = (tab: CurrentSeasonNav) => {
		if (this.currentList.title !== tab.title) {
			this.currentList = tab;
		}
	};

	setPrevPage = () => {
		this.currentList.currentPage -= 1;
	};

	setNextPage = () => {
		this.currentList.currentPage += 1;
	};
}
export default new AnimeListStore();
