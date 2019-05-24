var baseUrl="http://192.168.101.250:8080"
function Post(url,ac,callback){
	mui.post(baseUrl+'/user/login',ac,callback,'json');
}