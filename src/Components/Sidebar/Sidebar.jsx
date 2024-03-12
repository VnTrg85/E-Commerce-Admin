import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import cart_admin_icon from "../../assets/cart_admin_icon.png";
import listproduct_icon from "../../assets/listproduct_icon.jpg";

import { faTableList } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);

function Sidebar() {
	const [activeAdd, setActiveAdd] = useState(true);

	const handleClickAdd = () => {
		setActiveAdd(true);
	};
	const handleClickAll = () => {
		setActiveAdd(false);
	};
	return (
		<div className={cx("sidebar")}>
			<Link to={"/addproduct"} style={{ textDecoration: "none" }}>
				<div onClick={handleClickAdd} className={cx("sidebar-item", activeAdd ? "active" : "")}>
					<img src={cart_admin_icon}></img>
					<p>Add product</p>
				</div>
			</Link>
			<Link to={"/listproduct"} style={{ textDecoration: "none" }}>
				<div onClick={handleClickAll} className={cx("sidebar-item", activeAdd == false ? "active" : "")}>
					<img src={listproduct_icon}></img>
					<p>Product List</p>
				</div>
			</Link>
		</div>
	);
}

export default Sidebar;
