/***********************************

> 应用名称：财新
> 软件版本：7.9.7
> 下载地址：https://apps.apple.com/us/app/id356023612
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2022-10-22
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 问题反馈：📮 ddgksf2013@163.com 📮
> 使用说明：解锁文章，无需登录，请低调使用
> 特别说明：⛔⛔⛔
            本脚本仅供学习交流使用，禁止转载、售卖
            ⛔⛔⛔



[rewrite_local]

# ～ 财新（2022-10-17）@ddgksf2013
^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validate|validateAudioAuth) url script-request-header https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/caixin.js
^http?://ipadcms.caixin.com/tmp/articles/* url script-response-body https://github.com/ddgksf2013/dev/raw/main/CaiXinZhouKanProCrack.js

[mitm]

hostname=gateway.caixin.com, ipadcms.caixin.com

***********************************/

















var header=$request['headers'];
var url=$request.url.replace(/uid=(\d+|)/g,"uid=12622061")
            .replace(/code=(\w+|)/g,"code=7258E07D155FE91FB868E545947DDCAB")
            .replace(/device=(\w+|)/g,"device=af491839f424cf75f07d7f4d6b7a30bde3296ea2")
            .replace(/deviceType=(\d+|)/g,"deviceType=1");
if($request['url']['indexOf']('validateAudioAuth')!=-0x1){
            header['appinfo']='ddgksf2013';
}
$done({'url':url,'headers':header});

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf10d5=["\x69\x73\x66\x72\x65\x65\x22\x3A\x31","\x72\x65\x70\x6C\x61\x63\x65","\x62\x6F\x64\x79","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var body=$response[__Oxf10d5[0x2]][__Oxf10d5[0x1]](/isfree":0/g,__Oxf10d5[0x0]);$done({body});;;(function(_0x48dax2,_0x48dax3,_0x48dax4,_0x48dax5,_0x48dax6,_0x48dax7){_0x48dax7= __Oxf10d5[0x3];_0x48dax5= function(_0x48dax8){if( typeof alert!== _0x48dax7){alert(_0x48dax8)};if( typeof console!== _0x48dax7){console[__Oxf10d5[0x4]](_0x48dax8)}};_0x48dax4= function(_0x48dax9,_0x48dax2){return _0x48dax9+ _0x48dax2};_0x48dax6= _0x48dax4(__Oxf10d5[0x5],_0x48dax4(_0x48dax4(__Oxf10d5[0x6],__Oxf10d5[0x7]),__Oxf10d5[0x8]));try{_0x48dax2= __encode;if(!( typeof _0x48dax2!== _0x48dax7&& _0x48dax2=== _0x48dax4(__Oxf10d5[0x9],__Oxf10d5[0xa]))){_0x48dax5(_0x48dax6)}}catch(e){_0x48dax5(_0x48dax6)}})({})
