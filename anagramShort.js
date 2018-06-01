function anagrams(str1, str2){
    const charmap1 = charmap(str1);
    const charmap2 = charmap(str2);

    if(Object.keys(charmap1).length !== Object.keys(charmap2).length){
        return false;
    }
    for(let char in charmap1){
        console.log(char);
        if(charmap1[char] !== charmap2[char]){
            return false;
        }
    }

    return true;
}
function charmap(str){
    const charmap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
        charmap[char] = charmap[char] + 1 || 1;
    }
    return charmap;
}

console.log(anagrams('goody','ogody'));