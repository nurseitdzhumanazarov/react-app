export function loadData() {
    return JSON.parse(localStorage.getItem("cafeData")) || {
        categories: [],
        products: []
    };
}

export function saveData(data) {
    localStorage.setItem("cafeData", JSON.stringify(data));
}
