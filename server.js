'use strict';

const koa = require('koa');
const app = koa();

const router = require('koa-router')();

const SearchResult = require('./models/searchResult');

app.use(router.routes());

router.get('/search', function *(next) {
    let s;
    if(this.query.query)
    {
        let {query,type=1,offset=0,limit=10} = this.query;
        s = {query:query,type:type,offset:offset,limit:limit};
    }else{
        s = {query:'不为谁而作的歌',type:1,offset:0,limit:1};
    }

    let sr = new SearchResult(s);

    this.body = yield sr.search();
});

app.listen(3000);