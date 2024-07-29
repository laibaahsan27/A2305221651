const productService = require('../services/productService');

exports.getTopProducts = async (req, res) => {
    try {
        const { categoryName } = req.params;
        const { n = 10, page = 1, sortBy, sortOrder, minPrice = 1, maxPrice = 1000000 } = req.query;
        const products = await productService.getTopProducts(categoryName, n, page, sortBy, sortOrder, minPrice, maxPrice);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductDetails = async (req, res) => {
    try {
        const { categoryName, productId } = req.params;
        const product = await productService.getProductDetails(categoryName, productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};