import { QuoteValidationException } from './quote-validation.exception';

describe('QuoteValidationException', () => {
  it('should be defined', () => {
    expect(new QuoteValidationException()).toBeDefined();
  });
});
