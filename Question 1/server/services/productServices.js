const axios = require('axios');

const BASE_URL = 'http://20.244.56.144/test/companies';

exports.getTopProducts = async (categoryName, n, page, sortBy, sortOrder, minPrice, maxPrice) => {
    const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
    let allProducts = [];

    for (const company of companies) {
        try {
            const response = await axios.get(`${BASE_URL}/${company}/categories/${categoryName}/products`, {
                params: {
                    top: n,
                    minPrice: minPrice,
                    maxPrice: maxPrice
                }
            });
            allProducts = [...allProducts, ...response.data];
        } catch (error) {
            console.error(`Error fetching data from ${company}:`, error.message);
        }
    }

    if (sortBy) {
        allProducts.sort((a, b) => {
            if (sortOrder === 'desc') {
                return b[sortBy] - a[sortBy];
            }
            return a[sortBy] - b[sortBy];
        });
    }

    const startIndex = (page - 1) * n;
    const endIndex = startIndex + Number(n);
    const paginatedProducts = allProducts.slice(startIndex, endIndex);

    return paginatedProducts;
};

exports.getProductDetails = async (categoryName, productId) => {
    const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
    let product = null;

    for (const company of companies) {
        try {
            const response = await axios.get(`${BASE_URL}/${company}/categories/${categoryName}/products`);
            product = response.data.find(p => p.productId === productId);
            if (product) break;
        } catch (error) {
            console.error(`Error fetching data from ${company}:`, error.message);
        }
    }

    return product;
};