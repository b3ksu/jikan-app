import { ICurrentSeasonControlsNav } from "@/widgets/current-season-list/model/current-season.interface";
import { makeAutoObservable } from "mobx";
import { CurrentSeasonConfig } from ".";

class CurrentSeasonStore {
	currentList: ICurrentSeasonControlsNav = CurrentSeasonConfig.CONTROLS[0];

	constructor() {
		makeAutoObservable(this);
	}

	setCurrentList = (tab: ICurrentSeasonControlsNav) => {
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

export default new CurrentSeasonStore();
