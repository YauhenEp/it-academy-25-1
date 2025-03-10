const { filterLongWords, reverseWord, countPropertyValues } = require("./task.js");

describe('Test functions', () => {

  const testCases = [
    {data: "Hello World", expected: "olleH dlroW"},
    {data: "Wow Wow", expected: "woW woW"},
  ];

  beforeAll(() => {
    console.log('Before all tests')
  })

  beforeEach(() => {
    console.log('Before each tests')
  })

  test('should be filtered data with length more than 4', async () => {
    const result = await filterLongWords(["Hello", "Metro", 'New'], 4)
    expect(result).toEqual(["Hello", "Metro"]);
  })

  test('should correct reverse one word', async () => {
    const result = reverseWord("Hello");
    expect(result).toEqual("olleH");
  })

  test('should correct reverse two word', async () => {
    const result = reverseWord("Hello World");
    expect(result).toEqual("olleH dlroW");
  })

  test.each(testCases)(`should be correct reverse word %s`, async ({data, expected}) => {
    const result = reverseWord(data);
    expect(result).toEqual(expected);
  })


  afterAll(() => {
    console.log('After all tests')
  })

  afterEach(() => {
    console.log('After each tests')
  })
});

const obj = {data: "Hello World", expected: "olleH dlroW"}

const {data, expected, ...spread} = obj;

const  arr = [1, 10, 15]

const [n1, n2, n3, ...spread1] = arr;