import sayHello from '../utils/hello.matias.mjs';
import assert from 'assert';

it("Tests the Hello Matias", ()=>{

    const hello = sayHello();

    assert.equal(hello,"Hello Matias");

    console.log('Hello Matias');

});