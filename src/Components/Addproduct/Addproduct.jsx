import styles from "./Addproduct.module.scss";
import className from "classnames/bind";
import upload_icon from "../../assets/upload_icon.jpeg";
import { useState } from "react";
const cx = className.bind(styles);

function Addproduct() {
	const [image, setImage] = useState(false);
	const [productDetail, setProductDetail] = useState({
		name: "",
		old_price: "",
		new_price: "",
		category: "women",
		image: "",
	});
	const imageHandler = e => {
		setImage(e.target.files[0] ? e.target.files[0] : image);
	};
	const Add_product = async () => {
		console.log(productDetail);
		let responseData;
		let product = productDetail;
		let formData = new FormData();
		formData.append("product", image);

		await fetch("http://localhost:4000/upload", {
			method: "POST",
			headers: {
				Accept: "application/json",
			},
			body: formData,
		})
			.then(res => res.json())
			.then(data => {
				responseData = data;
			});
		if (responseData.success == true) {
			product.image = responseData.image_url;
			await fetch("http://localhost:4000/addproduct", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(product),
			})
				.then(res => res.json())
				.then(data => {
					if (data.success) {
						alert("Product is added");
					} else {
						alert("Fail!!!");
					}
				});
		}
	};

	const changeHandler = e => {
		setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
	};
	return (
		<div className={cx("add-product")}>
			<div className={cx("add-product-itemfield")}>
				<p>Product title</p>
				<input value={productDetail.name} onChange={changeHandler} type="text" name="name" placeholder="Type here"></input>
			</div>
			<div className={cx("add-product-itemprice")}>
				<div className={cx("add-product-itemfield")}>
					<p>Price</p>
					<input value={productDetail.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here"></input>
				</div>
				<div className={cx("add-product-itemfield")}>
					<p>Price offer</p>
					<input value={productDetail.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here"></input>
				</div>
			</div>
			<div className={cx("add-product-itemfield")}>
				<p>Product category</p>
				<select value={productDetail.category} onChange={changeHandler} name="category" className={cx("add-product-selector")}>
					<option value="Women">Women</option>
					<option value="Men">Men</option>
					<option value="Kids">Kids</option>
				</select>
			</div>
			<div className={cx("add-product-itemfield")}>
				<p>Product image</p>
				<label htmlFor="file-input">
					<img src={image ? URL.createObjectURL(image) : upload_icon} className={cx("addproduct-thumnail-img")}></img>
				</label>
				<input onChange={imageHandler} type="file" name="image" id="file-input" hidden></input>
			</div>
			<button onClick={Add_product} className={cx("addproduct-btn")}>
				ADD
			</button>
		</div>
	);
}

export default Addproduct;
