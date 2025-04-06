describe('Content UI Injection', () => {
  it('should locate the injected content UI div', async () => {
    await browser.url('https://www.example.com');

    const contentDiv = await $('#content-ui-root').getElement();
    await expect(contentDiv).toBeDisplayed();
  });
});
