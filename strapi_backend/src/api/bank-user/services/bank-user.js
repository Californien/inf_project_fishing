'use strict';

/**
 * bank-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bank-user.bank-user');
