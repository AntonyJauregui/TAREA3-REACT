export const getCategoria = async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = response.json();
    return data;
  };
  