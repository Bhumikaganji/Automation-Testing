import { Page } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * LoginPage handles interactions on the login page.
 */
export class LoginPage extends BasePage {
    /**
     * Clicks on the 'Login / Register' link.
     */
    async clickLoginRegister(): Promise<void> {
        this.logger.info("Clicking on 'Login / Register' link.");
        this.allureReporter.addStep("Click on 'Login / Register' link.");
        await this.page.getByRole('link', { name: 'Login / Register' }).click();
    }

    /**
     * Clicks on the 'Login with Email' link.
     */
    async clickLoginWithEmail(): Promise<void> {
        this.logger.info("Clicking on 'Login with Email' link.");
        this.allureReporter.addStep("Click on 'Login with Email' link.");
        await this.page.getByRole('link', { name: 'Login with Email' }).click();
    }

    /**
     * Verifies that the email input field is visible.
     */
    async verifyEmailFieldVisible(): Promise<void> {
        this.logger.info("Verifying email input field visibility.");
        this.allureReporter.addStep("Verify email input field is visible.");
        await expect(this.page.locator('input[name="email"]')).toBeVisible();
    }
}
