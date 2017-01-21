/******************************************************************************
 * Copyright (c) 2016 Nicola Del Gobbo
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 * this file except in compliance with the License. You may obtain a copy of the
 * License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 * WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 * MERCHANTABLITY OR NON-INFRINGEMENT.
 *
 * See the Apache Version 2.0 License for specific language governing permissions
 * and limitations under the License.
 *
 * Contributors - initial API implementation:
 * Nicola Del Gobbo <nicoladelgobbo@gmail.com>
 * Antonio D'Angelo <tonydangelo123@gmail.com>
 *****************************************************************************/

'use strict';

/** */
var express = require('express');
var request = require('supertest');
var responsePoweredBy = require('../');

describe("Test response-powered-by() middleware", function(){

  it("Should export function", function(){
		  expect(typeof responsePoweredBy).toEqual('function');
	});

  it("Should remove `X-Powered-By` header set by Express", function(done){
    var app = express()
      .use(responsePoweredBy())
      .get("/", function(req, res){
        res.send("Response Powered By");
      });
    request(app)
      .get("/")
      .expect(200)
      .end(function(err, res){
      if(err) {
        done.fail(err);
      } else {
        expect(res.get('X-Powered-By')).toEqual(undefined);
        done();
      }
    });
  });

  it("Should remove and set `X-Powered-By` header set by Express", function(done){
    var xPoweredBy = "@NickNaso";
    var app = express()
      .use(responsePoweredBy(xPoweredBy))
      .get("/", function(req, res){
        res.send("Response Powered By");
      });
    request(app)
      .get("/")
      .expect(200)
      .end(function(err, res){
      if(err) {
        done.fail(err);
      } else {
        expect(res.get('X-Powered-By')).toEqual(xPoweredBy);
        done();
      }
    });
  });

});
