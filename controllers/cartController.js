const {
    Cart
} = require('../models/cart');
const _ = require('lodash');

// Create cart item

module.exports.createCartItem = async (req, res) => {
    try {
        const {
            price,
            product
        } = _.pick(req.body, ["price", "product"]);
        let cartItem = await Cart.findOne({
            user: req.user._id,
            product: product
        });
    
        if (cartItem) {
            return res.status(400).send({
                message: "This product already exists in cart."
            });
        } else {
            cartItem = new Cart({
                product: product,
                price: price,
                user: req.user._id
            });
            const result = await cartItem.save();
            return res.status(201).send({
                message: "Added to cart successfully.",
                data: result
            });
        }
    } catch (error) {
        return res.status(400).send({message: "Added to cart failed."});
    }
}

// get all cart item
module.exports.getCartItem = async (req, res) => {
    try {
        const cartItems = await Cart.find({
            user: req.user._id
        })
            .populate('product', 'name')
            .populate('user', 'name');
        if (cartItems.length > 0) {
            return res.status(200).send(cartItems);
        } else {
            return res.status(400).send({message: "There are no items in this cart."});
        }
    } catch (error) {
        return res.status(400).send({message: "An error occured."});
    }
}

// Update cart item
module.exports.updateCartItem = async (req, res) => {
    try {
        const {
            _id,
            count
        } = _.pick(req.body, ["_id", "count"]);
    
        await Cart.updateOne({
            user: req.user._id,
            _id: _id
        }, {
            count: count
        });
        return res.status(200).send({message: "Your cart item updated successfully."});
    } catch (error) {
        return res.status(400).send({message: "Your cart item updated failed."});
    }
}

// Delete cart item
module.exports.deleteCartItem = async (req, res) => {
    try {
        const _id = req.params.id;
        await Cart.deleteOne({user: req.user._id, _id: _id});
        return res.status(200).send({message: "Your cart item removed successfully."});
    } catch (error) {
        return res.status(400).send({message: "Your cart item removed failed."});
    }
}
