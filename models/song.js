'use strict';

const Artist = require('./artist');
const Album = require('./album');

const requests = require('../requests');
const co = require('co');

const M163 = require('./m163_api');

class Song{
    constructor({ id, name,duration ,album, artists })
    {
        let that = this;
        this.id = id;
        this.duration = duration;
        this.name = name;
        this.album = new Album(album) ;
        this.artist = new Artist(artists[0])
        // this.artists = artists.map(artist=>{
        //     return new Artist(artist);
        // });

        return new Promise((resolve,reject)=>{
            co(function *(){
                const detail_string  =yield requests.get(M163.detail_url,{ids:`[${id}]`});
                that.mp3Url = JSON.parse(detail_string)['songs'][0]['mp3Url'];
                resolve(that);
            }).catch(error=>reject(error));
        });
    }



}


module.exports = Song;