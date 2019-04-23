import puppeteer from 'puppeteer';
const app = 'file:///E:/HTML/Form-Validation/index.html';
let browser;

test(
	'Validating first name field',
	async () => {
		browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(app);

		await page.click('input#firstName');
		await page.type('input#firstName', ' ');
		await page.click('input#lastName');
		let firstNameInputClass = await page.$eval('input#firstName', (input) => input.className);
		expect(firstNameInputClass).toBe('invalid');

		await page.click('input#firstName');
		await page.type('input#firstName', 'John');
		await page.click('input#email');

		firstNameInputClass = await page.$eval('input#firstName', (input) => input.className);
		expect(firstNameInputClass).toBe('valid');

		await browser.close();
	},
	10000
);

test(
	'Validating all fields',
	async () => {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 35
		});
		const page = await browser.newPage();
		await page.goto(app);

		await page.click('input#firstName');
		await page.type('input#firstName', 'John');
		await page.click('input#lastName');
		await page.type('input#lastName', 'Doe');
		await page.click('input#password');
		await page.type('input#password', '123456abc');
		await page.click('input#confirmPassword');
		await page.type('input#confirmPassword', '123456abc');
		await page.click('input#email');
		await page.type('input#email', 'John@email.com');
		await page.click('input#firstName');

		try {
			const invalidInput = await page.$eval('input.invalid', (input) => input);
			expect(invalidInput).toBeUndefined();
		} catch (err) {
			expect(err).toBeDefined();
		}

		await browser.close();
	},
	25000
);

test(
	'Fetching success panel',
	async () => {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 40,
			args: [ '--window-size=1280, 800' ]
		});
		const page = await browser.newPage();
		await page.goto(app);

		await page.click('input#firstName');
		await page.type('input#firstName', 'John');
		await page.click('input#lastName');
		await page.type('input#lastName', 'Doe');
		await page.click('input#password');
		await page.type('input#password', '123456abc');
		await page.click('input#confirmPassword');
		await page.type('input#confirmPassword', '123456abc');
		await page.click('input#email');
		await page.type('input#email', 'John@email.com');
		await page.click('button#formBtn');

		let successPanel = await page.waitForSelector('div.card-panel');
		expect(successPanel).toBeDefined();

		await browser.close();
	},
	15000
);
