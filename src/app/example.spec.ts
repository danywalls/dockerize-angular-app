describe('example component', () => {
  let name = 'default';

  beforeEach(() => {
    console.log(`my name: ${name}`);

    console.log('reset working to null');

    name = 'default';
  });

  it('should set dany name', () => {
    expect(name).toEqual('default');

    name = 'dany';

    expect(name).toEqual('dany');
  });

  it('should set mandy name', () => {
    expect(name).toEqual('default');

    name = 'mandy';

    expect(name).toEqual('mandy');
  });
});
