import styles from "./nav.module.scss";
import navLogo from "./assets/logocheck.png";
import { DropDown } from "./components";
import { navBarProp } from "./types";

export function Nav({
	menuItems = [
		{
			navName: "Postcode Lists",
			dropDown: [{ name: "By Country" }, { name: "By Introduction Date" }],
		},
		{
			navName: "Postcode Maps",
			dropDown: [{ name: "default" }, { name: "default" }],
		},
		{ navName: "Nearest Postcode" },
		{ navName: "Postcode Lottery" },
	],
}: navBarProp) {
	return (
		<nav className={styles.nav}>
			<div className={styles.top}>
				<div className={styles.logo}>
					<img
						src={navLogo}
						alt="Check my Postcodes logo"
					/>
				</div>
				<div className={styles.help}>
					<span className={styles.circle}>?</span>
					<span>Help</span>
				</div>
			</div>
			<div className={styles.bottom}>
				<ul className={styles.menuWrapper}>
					{menuItems.map((item, key) => (
						<DropDown
							key={key}
							menu={item}
						/>
					))}
				</ul>
			</div>
		</nav>
	);
}
