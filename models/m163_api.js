'use strict';

class M163{

}

const old_api = 'http://music.163.com/api';
const new_api = 'http://music.163.com/weapi';

M163.detail_url = `${old_api}/song/detail`;
M163.search_url = `${old_api}/search/get/web`;

module.exports = M163;