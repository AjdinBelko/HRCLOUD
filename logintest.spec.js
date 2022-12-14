// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Login test', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Login test', async function() {
    // Test name: Login test
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("https://www.njuskalo.hr/")
    // 2 | setWindowSize | 1440x790 | 
    await driver.manage().window().setRect({ width: 1440, height: 790 })
    // 3 | click | linkText=Prijava | 
    await driver.findElement(By.linkText("Prijava")).click()
    // 4 | click | id=login_username | 
    await driver.findElement(By.id("login_username")).click()
    // 5 | type | id=login_username | ajdi15
    await driver.findElement(By.id("login_username")).sendKeys("ajdi15")
    // 6 | click | id=login_password | 
    await driver.findElement(By.id("login_password")).click()
    // 7 | type | id=login_password | tester12345
    await driver.findElement(By.id("login_password")).sendKeys("tester12345")
    // 8 | sendKeys | id=login_password | ${KEY_ENTER}
    await driver.findElement(By.id("login_password")).sendKeys(Key.ENTER)
  })
})
