//T-Shirt:Write a function called make_shirt() that accepts a size and the text of a message that should be
//printed on the shirt.The function should print a sentence summarizing the size of the shirt and the message 
//printed on it. Call the function.


function make_shirt(size: string, text: string) {
    console.log(`you order a ${size} t-shirt that says: ${text}`);
}

make_shirt(`large`, `"Think positive, Do your best"`);
make_shirt(`medium`, `"If you dream, You can do it"`);
make_shirt(`small`, `"Never give up."`);