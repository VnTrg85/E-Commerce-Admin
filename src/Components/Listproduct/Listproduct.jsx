import styles from "./Listproduct.module.scss";
import className from "classnames/bind";
import { useEffect, useState } from "react";
import cross_icon from "../../assets/cart_cross_icon.png";
const cx = className.bind(styles);

function Listproduct() {
	const [allProducts, setAllProducts] = useState([]);
	const fetchInfo = async () => {
		await fetch("http://localhost:4000/allproducts")
			.then(res => res.json())
			.then(data => {
				setAllProducts(data);
			});
	};
	useEffect(() => {
		fetchInfo();
	}, []);

	const removeProduct = async id => {
		await fetch("http://localhost:4000/removeproduct", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
			},
			body: JSON.stringify({ id: id }),
		});
		await fetchInfo();
	};
	return (
		<div className={cx("list-product")}>
			<h1>All Products List</h1>
			<div className={cx("listproduct-format-main")}>
				<p>Products</p>
				<p>Title</p>
				<p>Old price</p>
				<p>New Price</p>
				<p>Category</p>
				<p>Remove</p>
			</div>
			<div className={cx("listproduct-allproduct")}>
				<hr></hr>
				{allProducts.map((product, index) => {
					return (
						<>
							<div key={index} className={cx("listproduct-format-main", "listproduct-format")}>
								<img src={product.image} className={cx("listproduct-product-icon")} alt=""></img>
								<p>{product.name}</p>
								<p>${product.old_price}</p>
								<p>${product.new_price}</p>
								<p>{product.category}</p>
								<img
									onClick={() => {
										removeProduct(product.id);
									}}
									src={cross_icon}
									alt=""
									className={cx("listproduct-remove-icon")}
								></img>
							</div>
							<hr></hr>
						</>
					);
				})}
			</div>
		</div>
	);
}

export default Listproduct;
