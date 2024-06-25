const { test, expect, request } = require('@playwright/test');

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

test('should get some weather', async ({ baseURL }) => {
    console.log('Test: Find Weather api');
    console.log('Using Base URL: ' + baseURL);
    console.log('process.env.CI: ' + process.env.CI);
    console.log('process.env.TEST_ENVIRONMENT: ' + process.env.TEST_ENVIRONMENT);
    const apiContext = await request.newContext({ extraHTTPHeaders: headers, ignoreHTTPSErrors: true });
    const response = await apiContext.get("/weather");
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});
