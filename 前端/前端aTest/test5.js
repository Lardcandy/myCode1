var nm = readline().split(' ');
var a = readline().split(' ');
//console.log(nm);
//console.log(a);
//var n = nm[0];
//var m = nm[1];
//console.log(n);
//console.log(m);
var nums_list = [];
for(var i = 0;i<nm[1];i++){
    nums_list.push(readline().split(' ').join(''));
}
var all_range = [];
var flag;
var temp_str;
for(var start_i = 0;start_i<nm[0];start_i++){
    for(var amount=1;amount<=nm[0]-start_i;amount++){
        var temp_range = [];
        for(var j = 0;j<amount;j++){
            temp_range.push(a[start_i+j]);
        }
        temp_str = temp_range.join('');
        flag = false;
        for(var k=0;k<nums_list.length;k++){
            if(temp_str.match(nums_list[k])){
                flag = true;
                break;
            }
        }
        if(flag){
            break;
        }
        all_range.push(temp_str);
    }
}
console.log(all_range.length);








for(var start_i = 0;start_i<nm[0];start_i++){
    for(var amount=1;amount<=nm[0]-start_i;amount++){
        var temp_range = [];
        for(var j = 0;j<amount;j++){
            temp_range.push(a[start_i+j]);
        }
        temp_str = temp_range.join('');
        flag = false;
        for(var k=0;k<nums_list.length;k++){
            if(temp_str.match(nums_list[k])){
                flag = true;
                break;
            }
        }
        if(flag){
            break;
        }
        all_range.push(temp_str);
    }
}
