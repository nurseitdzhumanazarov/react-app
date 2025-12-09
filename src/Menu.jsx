import { loadData } from "./data";

export default function Menu() {
    const data = loadData();

    return (
        <div>
            <h1>Menu</h1>

            {data.categories.map(cat => (
                <div key={cat}>
                    <h2>{cat}</h2>

                    {data.products
                        .filter(p => p.category === cat)
                        .map(p => (
                            <div key={p.name}>
                                <img src={p.image} width="80" />
                                <strong>{p.name}</strong> — ${p.price}
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
}
