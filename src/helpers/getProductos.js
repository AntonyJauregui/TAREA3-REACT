export const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();
    return data;
  }

  export const getProductId = async (id) => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      console.log(response)
      const data = response.json();
      return data;
}; 