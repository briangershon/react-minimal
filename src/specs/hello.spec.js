import getMessage from '../hello';

test('has default message', () => {
  const message = getMessage();
  expect(message).toEqual('Enjoy Simple Front-end Starter with React!');
});
