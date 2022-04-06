'use strict';

/**
 * home-site service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-site.home-site');
