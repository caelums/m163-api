'use strict';

const M163 = require('./models/m163_api');

const co = require('co');
const requests = require('./requests');
class Test{
    constructor()
    {
        return new Promise((resolve,reject)=>{
            co(function *() {

                let headers = {
                    Host:'music.163.com',
                    Referer:'http://music.163.com'
                };

                const res = yield requests.post(M163.search_url,headers,{s:'不为谁',type:1,offset:0,total:true,limit:1});
                console.log(res);
                let json_res = JSON.parse(res);
                resolve(json_res);
            }).catch(error=>console.log(error));
        });
    }
}


co(function *() {

    let res = yield new Test();
    console.log(res);
});