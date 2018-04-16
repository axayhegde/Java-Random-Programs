//Find the number of subStrings in a string


/* Count of non-empty substrings is n*(n+1)/2

 Question is for number of subStrings in a string.

 The above formula was derived from :

    Number of substrings of length one is n (We can choose any of the n characters)
    Number of substrings of length two is n-1 (We can choose any of the n-1 pairs formed by adjacent)
    Number of substrings of length three is n-2
    (We can choose any of the n-2 triplets formed by adjacent)
    In general, mumber of substrings of length k is n-k+1 where 1 <= k <= n
    Total number of substrings of all lengths from 1 to n =
    n + (n-1) + (n-2) + (n-3) + … 2 + 1
    = n * (n + 1)/2

 */


function countSubStrings(myStr) {

    var n = myStr.length;
    console.log( n * (n + 1) / 2);

}

countSubStrings("abc");