import styles from "./Navbar.module.scss";
import className from "classnames/bind";
import navLogo from "../../assets/logo.png";
import navProfile from "../../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const cx = className.bind(styles);
function Navbar() {
	return (
		<div className={cx("navbar")}>
			<div className={cx("navlogo")}>
				<img className={cx("navlogo-img")} src={navLogo}></img>
				<div className={cx("navlogo-info")}>
					<h3>SHOPPER</h3>
					<p>Admin panel</p>
				</div>
			</div>
			<div className={cx("navprofile")}>
				<img className={cx("navprofile-img")} src={navProfile}></img>
				<FontAwesomeIcon icon={faAngleDown} />
			</div>
		</div>
	);
}

export default Navbar;
