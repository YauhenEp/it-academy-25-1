import { filterLongWords, reverseWord, countPropertyValues } from "../task.js";
import { expect } from 'chai';

describe('Test functions', () => {

  const testCases = [
    {data: "Hello World", expected: "olleH dlroW"},
    {data: "Wow Wow", expected: "woW woW"},
  ];
  before(() => {
    console.log('Before all tests')
  })

  beforeEach(() => {
    console.log('Before each tests')
  })

  it('should be filtered data with length more than 4', async () => {
    const result = await filterLongWords(["Hello", "Metro", 'New'], 4)
    expect(result).to.deep.equal(["Hello", "Metro"]);
  })

  it('should correct reverse one word', async () => {
    const result = reverseWord("Hello");
    expect(result).to.equal("olleH");
  })

  it('should correct reverse two word', async () => {
    const result = reverseWord("Hello World");
    expect(result).to.equal("olleH dlroW");
  })

  testCases.forEach(testCase => {
    it(`should be correct reverse word ${testCase.expected}`, async () => {
      const result = reverseWord(testCase.data);
      expect(result).to.equal(testCase.expected);
    })
  })

  after(() => {
    console.log('After all tests')
  })

  afterEach(() => {
    console.log('After each tests')
  })
});