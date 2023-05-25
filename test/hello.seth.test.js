import sayHello from '../utils/hello.seth.mjs';
import assert from 'assert';

it("Tests the Hello Seth", ()=>{

    const hello = sayHello();

    assert.equal(hello,"Hello Seth");

    console.log('Hello Seth');

});