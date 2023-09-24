import styles from "./nav.module.scss";
import navLogo from "./assets/logocheck.png";

export interface navProps {
	prop?: string;
}

export function Nav() {
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
		</nav>
	);
}
