import { useState } from "react";
import { loadData, saveData } from "./data";

export default function Dashboard() {
    const [data, setData] = useState(loadData());
    const [catName, setCatName] = useState("");
    const [prodName, setProdName] = useState("");
    const [prodPrice, setProdPrice] = useState("");
    const [prodCat, setProdCat] = useState("");
    const [prodImg, setProdImg] = useState("");

    const update = (newData) => {
        setData(newData);
        saveData(newData);
    };

    const addCategory = () => {
        if (!catName) return;
        const newData = { ...data, categories: [...data.categories, catName] };
        update(newData);
        setCatName("");
    };

    const deleteCategory = (c) => {
        const newData = {
            categories: data.categories.filter(x => x !== c),
            products: data.products.filter(p => p.category !== c)
        };
        update(newData);
    };

    const addProduct = () => {
        if (!prodName || !prodPrice || !prodCat) return;

        const newData = {
            ...data,
            products: [
                ...data.products,
                {
                    name: prodName,
                    price: prodPrice,
                    category: prodCat,
                    image: prodImg || ""
                }
            ]
        };
        update(newData);

        setProdName("");
        setProdPrice("");
    };

    const deleteProduct = (name) => {
        const newData = {
            ...data,
            products: data.products.filter(p => p.name !== name)
        };
        update(newData);
    };

    return (
        <div>
            <h2>Admin Panel</h2>

            <h3>Add Category</h3>
            <input
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
                placeholder="Category name"
            />
            <button onClick={addCategory}>Add</button>

            <ul>
                {data.categories.map((c) => (
                    <li key={c}>
                        {c}
                        <button onClick={() => deleteCategory(c)}>X</button>
                    </li>
                ))}
            </ul>

            <h3>Add Product</h3>

            <select onChange={(e) => setProdCat(e.target.value)}>
                <option>Select category</option>
                {data.categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>

            <input
                value={prodName}
                onChange={(e) => setProdName(e.target.value)}
                placeholder="Product name"
            />

            <input
                type="number"
                value={prodPrice}
                onChange={(e) => setProdPrice(e.target.value)}
                placeholder="Price"
            />

            <input
                type="text"
                value={prodImg}
                onChange={(e) => setProdImg(e.target.value)}
                placeholder="Image URL"
            />

            <button onClick={addProduct}>Add Product</button>

            <h3>Products</h3>
            {data.products.map((p) => (
                <div key={p.name}>
                    {p.name} — {p.category} — ${p.price}
                    <button onClick={() => deleteProduct(p.name)}>X</button>
                </div>
            ))}
        </div>
    );
}
