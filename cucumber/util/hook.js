import {Before, After} from "@wdio/cucumber-framework";

Before(async function() {
  console.log('Before All');
})

After(async function() {
  console.log('After All');
})

Before({tags: '@beforeAll'}, async function() {
  console.log('Before All with tag');
})

After({tags: '@afterAll'}, async function() {
  console.log('After All with tag');
})