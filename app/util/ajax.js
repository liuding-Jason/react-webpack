
/*
* Function : Make a http post request 
* Author : Liuding
* @params  analyseUrl => analyse whether a Url contains a param
*          getParams  => get a params from a Url
*/

/*
* A simple ep shows how to use it !
*
* var http = new Http() ,
*     paramsObj = {
*       url : "./sayHello.json" ,
*       method : "POST" ,
*       token : "token" ,
*       dataObj : {
*           username : "liuding" ,
*           password : "123456" 
*       }
*     }
* http.send(paramsObj)
* .then(function(json) {
*   console.log('Contents: ' + json);
* }, function(error) {
*   console.error('出错了', error);
* });
*
*/
import Conf from 'config';

let defaultUrl = "/index_ding.php";
class Ajax {
    constructor(AjaxMethod = "POST", url = defaultUrl){
        this.AjaxMethod = AjaxMethod;
        this.url = url;
    }
    /** 
     * param 将要转为URL参数字符串的对象 
     * key URL参数字符串的前缀 
     * encode true/false 是否进行URL编码,默认为true 
     *  
     * return URL参数字符串 
     */  
    urlEncode(param, key, encode) {  
        if(param==null) return '';  
        var paramStr = '' , _this = this ; 
        var t = typeof (param);  
        if (t == 'string' || t == 'number' || t == 'boolean') {  
            paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param); 
        } else {  
            for (var i in param) {  
                var k = key == null ? i : key + ('[' + i + ']');  
                paramStr += _this.urlEncode(param[i], k, encode);  
            }  
        }  
      return paramStr;
    } 
    analyseReponseData({code = void 0 , data = {} , message = "请求错误"}){
        // alert("code : " + code);
        switch(parseInt(code)){
            case 0:
                return data;
                break;
            // Token失效
            case 902000008:
                // window.location.hash = "#/tokenBind";
                break;
            default:
                alert(message);
                break;
        }
        return false;
    }
    setHeader(client , header = {}){
        client.setRequestHeader('Content-Type' , 'application/json; charset=utf-8'); 
        Object.keys(header).forEach( item => {
            client.setRequestHeader(item , header[item]);
        })
    }

    /*
    * paramsObj = {
    *   "url" : "url" ,
    *   "method" : "method" ,
    *   "token" : "token"
    *   "paramObj" : {}
    *}
    */
    send(paramsObj = {}){
        var _this = this ;
        let {
            header = {} , params = {} 
        } = paramsObj ;
        var promise = new Promise( (resolve , reject) => {
            let client = new XMLHttpRequest() ;
            client.open(this.AjaxMethod , Conf.BASEURL) ;
            function handler() {
                if (this.readyState !== 4) {
                    return;
                }
                let data = JSON.parse(this.responseText);
                if (this.status === 200 || this.status === 304) {
                    if(_this.analyseReponseData(data)){
                        return resolve(_this.analyseReponseData(data));
                    }
                }
                reject(data);
            };
            
            client.onreadystatechange = handler ;
            _this.setHeader(client , header);
            client.responseType = "text";
            client.withCredentials = true;
            client.crossDomain = true;
            client.withCredentials = true;
            client.send(JSON.stringify(params));
        });
        return promise;
    }
    ajax(url = defaultUrl, option = {}){
        // 调用 zepto ajax
        return new Promise( (resolve , reject) => {
            $.ajax(Object.assign({
                url: `${Conf.apihost}${url}`,
                cache: false,
                type: this.AjaxMethod,
                dataType : "json",
                crossDomain: false,
                contentType: "application/json; charset=utf-8", 
                xhrFields: {
                    withCredentials: false
                }
            }, option, {
                success : res => {
                    resolve(res);
                },
                error : error => {
                    reject(error);
                }
            }));
        });
    }
}
export default Ajax;

