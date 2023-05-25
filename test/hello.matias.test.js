import sayHello from '../utils/hello.seth.mjs';
import assert from 'assert';

it("Tests the Hello Matias", ()=>{

    const hello = sayHello();

    assert.equal(hello,"Hello Matias");

    console.log('Hello Matias');

});