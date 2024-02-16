'use strict';

/**
 * data-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-user.data-user');
