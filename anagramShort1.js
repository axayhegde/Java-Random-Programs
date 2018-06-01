function anagrams(str1,str2){
    return strSort(str1) === strSort(str2);

}

function strSort(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagrams('abcTHe Jakcdgfkldg gfdskgl; @%def','fed cba'));