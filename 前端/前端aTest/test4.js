let map={
    a:'bcd',
    b:'123',
    c:'def',
    d:'321',
    e:'11',
    f:'d',
    g:'hf',
    h:'2',
}
// var input = readline();
var input = 'bfppp';
var input_list = input.split('');
console.log(input_list)
var input_list_new = [];

for(var n = 0;n<4;n++){
    for(var i = 0;i<input_list.length;i++){
        if (input_list[i] in map){
            for(v of map[input_list[i]].split('')){
                input_list_new.push(v);
            }
        }else{
            input_list_new.push(input_list[i]);
        }
    }
    input_list = input_list_new
    input_list_new = []
}
console.log(input_list.join(''))

// for(var j = 0;j<length(input_list_new);j++){
//
// }