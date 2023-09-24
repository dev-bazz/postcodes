export interface navBarProp {
	menuItems?: menuType[];
}

type DropDownType = { name: string }[];
type menuType = {
	navName: string;
	dropDown?: DropDownType;
};
