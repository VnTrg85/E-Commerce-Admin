import styles from "./Admin.module.scss";
import className from "classnames/bind";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Addproduct from "../../Components/Addproduct/Addproduct";
import Listproduct from "../../Components/Listproduct/Listproduct";
const cx = className.bind(styles);

function Admin() {
	return (
		<div className={cx("admin")}>
			<Sidebar></Sidebar>
			<Routes>
				<Route path="/addproduct" element={<Addproduct></Addproduct>}></Route>
				<Route path="/listproduct" element={<Listproduct></Listproduct>}></Route>
			</Routes>
		</div>
	);
}

export default Admin;
