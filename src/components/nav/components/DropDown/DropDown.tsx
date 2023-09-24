import { menuType } from "../../types";
import styles from "./DropDown.module.scss";

export function DropDown({ menu }: { menu: menuType }) {
	return (
		<li className={styles.DropDown}>
			<label
				className={styles.menuLabel}
				htmlFor={menu?.navName}>
				{menu?.navName} {menu.dropDown ? <ExpandIcon /> : null}
			</label>
			{menu?.dropDown && (
				<ul
					id={menu?.navName}
					className={styles.menuChildren}>
					{menu.dropDown?.map((item, key) => (
						<li key={key}>{item.name}</li>
					))}
				</ul>
			)}
		</li>
	);
}

// Expand Icon
function ExpandIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="25"
			fill="none"
			viewBox="0 0 25 25">
			<path
				fill="#756F6C"
				d="M17.09 8.795l-4.59 4.58-4.59-4.58-1.41 1.41 6 6 6-6-1.41-1.41z"></path>
		</svg>
	);
}
