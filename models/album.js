'use strict';

class Album{
    constructor({id,name,picId,size,publishTime})
    {
        this.id = id;
        this.name = name;
        this.picId = picId;
        this.size = size;
        this.publishTime = publishTime;
    }
}

module.exports = Album;