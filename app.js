'use strict';

const SearchResult = require('./models/searchResult');


const co = require('co');

co(function *() {

    let s = {query:'不为谁',type:1,offset:0,limit:1};

    let sr = new SearchResult(s);
    let res = yield sr.search();

    console.log(res);

}).catch(error=>console.log(error));

