'use strict';


const request = require('request');
const https = require('https');
const qs = require('querystring');

class Requests{

    static get(uri,query){
        return new Promise((resolve,reject)=>{
            let url ;
            if(query)
            {
                var req_data = qs.stringify(query);
                url = uri+'?'+req_data;
            }

            request(url, (error, response, body) =>{
                if(error)
                {
                    reject(error);
                }

                resolve(body);
            })
        });
    };

    static post(uri,headers,postOriginData){
        return new Promise((resolve,reject)=>{
            request.post({url:uri, headers:headers,form: postOriginData}, function(error,response,body){
               if(error)
               {
                   reject(error);
               }

                resolve(body);
            });
        });
    }
}


module.exports = Requests;