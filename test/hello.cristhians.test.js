import sayHello from '../utils/hello.cristhians.mjs';
import assert from 'assert';

it('Tests the Hello Seth', () => {
  const hello = sayHello();

  assert.equal(hello, 'Hello Cristhians');

  console.log('Hello Cristhians');
});
