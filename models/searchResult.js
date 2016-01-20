'use strict';

const Song = require('./song');

const requests = require('../requests');
const co = require('co');

const M163 = require('./m163_api');

class SearchResult{
    //搜索单曲(1)，歌手(100)，专辑(10)，歌单(1000)，用户(1002) *(type)*
    constructor({query,type,offset,limit})
    {
        this.query = query;
        this.type = type;
        this.offset = offset;
        this.limit = limit;

        //this.queryCorrected = queryCorrected;
        //this.songCount = songCount;
        //this.songs = songs.map(song=>{
        //    return new Song(song);
        //});
    }

    search()
    {
        return new Promise((resolve,reject)=>{
            let that = this;
            co(function *() {
                let headers = {
                    Host:'music.163.com',
                    Referer:'http://music.163.com'
                };
                const res = yield requests.post(M163.search_url,headers,{s:that.query,
                    type:that.type,offset:that.offset,
                    total:true,limit:that.limit});

                let json_res = JSON.parse(res);

                if(json_res.code === 200)
                {
                    let {queryCorrected,songCount,songs}  = json_res['result'];
                    for(let i in songs)
                    {
                        songs[i] = yield new Song(songs[i]);
                    }
                    resolve([queryCorrected,songCount,songs])
                }else{
                    reject(json_res);
                }

            }).catch(error=>reject(error));
        });
    }
}

module.exports = SearchResult;