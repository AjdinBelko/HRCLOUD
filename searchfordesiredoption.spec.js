// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Search for desired option', function() {
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
  it('Search for desired option', async function() {
    // Test name: Search for desired option
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
    // 8 | click | id=login_login | 
    await driver.findElement(By.id("login_login")).click()
    // 9 | click | css=.BaseCategory--0 .BaseCategory-icon | 
    await driver.findElement(By.css(".BaseCategory--0 .BaseCategory-icon")).click()
    // 10 | click | css=.BaseCategory--2 .BaseCategory-icon | 
    await driver.findElement(By.css(".BaseCategory--2 .BaseCategory-icon")).click()
    // 11 | click | linkText=Autobusi | 
    await driver.findElement(By.linkText("Autobusi")).click()
    // 12 | click | id=modelName | 
    await driver.findElement(By.id("modelName")).click()
    // 13 | type | id=modelName | Man
    await driver.findElement(By.id("modelName")).sendKeys("Man")
    // 14 | click | id=submitButton | 
    await driver.findElement(By.id("submitButton")).click()
  })
})
