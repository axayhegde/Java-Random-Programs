function postFixEvaluation(postfix) {


    var resultStack = [];

    for (var i = 0; i < postfix.length; i++) {
        if (!isNaN(postfix[i])) {
            resultStack.push(postfix[i]);
        } else {
            var a = resultStack.pop();
            var b = resultStack.pop();
            if (postfix[i] === "+") {
                resultStack.push(parseInt(a) + parseInt(b));
                console.log('+ Executed ---> ' + resultStack);
            } else if (postfix[i] === "-") {
                resultStack.push(parseInt(b) - parseInt(a));
                console.log('- Executed ---> ' + resultStack);
            } else if (postfix[i] === "*") {
                resultStack.push(parseInt(a) * parseInt(b));
                console.log('* Executed ---> ' + resultStack);
            } else if (postfix[i] === "/") {
                resultStack.push(parseInt(b) / parseInt(a));
                console.log('/ Executed ---> ' + resultStack);
            }
        }
    }
    if (resultStack.length > 1) {
        return "error";
    } else {
        console.log('The postfix expression is --> ' + postfix);
        console.log('The result is : ');
        return resultStack.pop();
    }

}


var postfix = "123*+9-";

console.log(postFixEvaluation(postfix));