/**
 * Friend.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name: {
      type: 'string',
      description: 'Interest Name',
      example: 'Wine'
    },
    description: {
      type: 'string',
      description: 'Detailed description of the Interest',
      example: 'Wine Suppliers and Accessories'
    },
    sku: {
      type: 'string',
      description: 'SKU code representing the identifier for through the Provider\'s API',
      example: 'SKU45263SST453'
    },
    rating: {
      type: 'number',
      description: 'The average User rating for the Product out of 10',
      example: '9.7'
    },
    listPrice: {
      type: 'number',
      description: 'The sale price for the product on a per unit basis listed in pennies to reduce rounding errors',
      example: '10000', // $100
    },
    costPrice: {
      type: 'number',
      description: 'The cost of the product on a per unit basis for the seller listed in pennies to reduce rounding errors',
      example: '10000', // $100
    },
    msrp: {
      type: 'number',
      description: 'The merchants suggested retail price',
      example: '10000', // $100
    },



    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    provider: {
      model: 'provider',
      description: 'Provider selling the Product'
    },
    interests: {
      collection: 'interest',
      via: 'product',
      through: 'productinterest',
      description: 'Products categorized by the Interest'
    },
  },

};

