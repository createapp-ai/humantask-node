# [HumanTask.ai](https://www.humantask.ai) - Node.js Package

> ⚠️ **This package is in private beta.** If you want to try it out, [join the waitlist](https://docs.google.com/forms/d/e/1FAIpQLSf-kk7AFk1u8tz5Bsl1WpxZQFXvP6TNUKZw5IvGqKRWLhWhUg/viewform).

## Installation

```bash
npm install --save humantask
# or
yarn add humantask
```


## Usage

When you run a `humantask`, it will return a `Promise` that will resolve **ONCE AND ONLY ONCE** the task is completed by a human. You **can** kill the process anytime and run it back, once the task is completed you will get the answer.

```javascript
import HumanTask from 'humantask';

const humantask = new HumanTask({
  apiKey: process.env['HUMANTASK_API_KEY'], // This is the default and can be omitted
});

async function main() {
  const answer = await humantask.run({
    // Put your task parameters here
  })
  // wait until the task is completed by a human
}

main();
```