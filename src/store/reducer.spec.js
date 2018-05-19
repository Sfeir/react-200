import reducer from './reducer';

describe('rootReducer', () => {
  it('should return the expected structure', () => {
    const actualState = reducer(undefined, {});
    expect(actualState).toEqual({
      people: expect.anything(),
      search: expect.anything(),
      discover: expect.anything()
    });
  });
});
