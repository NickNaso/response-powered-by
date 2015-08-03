/******************************************************************************
 * Copyright (c) 2012 - 2015 Nacios Technologies.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Apache License Version 2.0
 * which accompanies this distribution, and is available at
 * http://www.apache.org/licenses/
 *
 * Contributors - initial API implementation:
 * Antonio D'Angelo, Mauro Brasiliano, Nicola Del Gobbo, Vincenzo Villani
 *****************************************************************************/

'use strict';

/**
 * Response powered by:
 * Add the `X-Powered-By` header on the response
 * @params {String} The value for the `X-Powered-By` header
 * @return {Function}
 * @api public
 */
module.exports = function responsePoweredBy(powered) {
    return function(req, res, next) {
        next = next || noop;
        if(powered && typeof powered === 'string') {
            res.setHeader('X-Powered-By', powered);
        } else {
            res.removeHeader('X-Powered-By');
        }
        next();
    };
};

function noop() {};