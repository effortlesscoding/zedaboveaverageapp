describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
  });

  it('should show world screen after tap', async () => {
    await element(by.id('login_button')).tap();
    await waitFor(element(by.id('loading_indicator'))).toNotExist().withTimeout(3000);
    await waitFor(element(by.id('tos_agree_button'))).toBeVisible().withTimeout(3000);
    await element(by.id('tos_agree_button')).tap();
    await waitFor(element(by.id('dashboard_welcome_text'))).toBeVisible().withTimeout(2000);
  });
});
