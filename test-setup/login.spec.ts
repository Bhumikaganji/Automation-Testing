import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { Logger } from '@/logger/logger';
import { AllureReporter } from '@/reporting/allure-reporter';
import { config } from '@config/env';

base.describe('Login Test Suite', () => {
    let loginPage: LoginPage;
    let logger: Logger;
    let allureReporter: AllureReporter;

    base.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        logger = Logger.getInstance();
        allureReporter = new AllureReporter();

        page.setDefaultTimeout(config.timeouts.default);
        page.setDefaultNavigationTimeout(config.timeouts.long);
        await page.setViewportSize({
            width: config.viewport.width,
            height: config.viewport.height,
        });
        const testName = base.info().title;
        logger.info(`Starting test: ${testName}`);
        allureReporter.addStep(`Test started: ${testName}`);
    });

    base('should navigate to homepage and verify login functionality', async ({ page }) => {
        await page.goto('https://happenstance.com/');
        logger.info('Navigated to homepage');
        allureReporter.addStep('Navigated to homepage');

        await loginPage.clickLoginRegister();
        logger.info('Clicked on Login / Register');
        allureReporter.addStep('Clicked on Login / Register');

        await loginPage.clickLoginWithEmail();
        logger.info('Clicked on Login with Email');
        allureReporter.addStep('Clicked on Login with Email');

        await loginPage.verifyEmailFieldVisible();
        logger.info('Verified email field is visible');
        allureReporter.addStep('Verified email field is visible');
    });
});
