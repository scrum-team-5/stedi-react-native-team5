import sayHello from '../utils/hello.alejandro.mjs';
import assert from 'assert';

it('Tests the Hello Alejandro', () => {
  const hello = sayHello();

  assert.equal(hello, 'Hello Alejandro');

  console.log('Hello Alejandro');
});
