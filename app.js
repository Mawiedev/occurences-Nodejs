/*test :
aaabbc --> a3b2c
aaabaaa --> a3ba3
abcde --> abcde
abcdeee --> abcde3
abbbbbcdeee  --> ab5cde3
a -> a
aaaaaa -> a6 
"" --> ""
*/

const test = () => {

    const input = "abbbbbcdeee";
    const result = compress(input);
    const expect = "ab5cde3";

    if (result !== expect) {
        console.log("failed test");
    }else{
        console.log("passed test");
    }
}

let compress = (input) => {
    let counter = 1;
    const arr = [];
    const tempArr = input.split("");
    
    for (let index = 0; index < input.length; index++) {
        
        if(input[index] === input[index+1])
        {
            counter++;
        }
        else
        {
            let value = `${tempArr[index]}${counter > 1 ? counter : ''}`;
            arr.push(value);
            counter=1;
        }
    }
    console.log(`Input: ${input}`);
    console.log(`Result: ${arr.join('')}`);
    return arr.join('');
}

test();
