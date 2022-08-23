// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Preview the ad', function() {
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
  it('Preview the ad', async function() {
    // Test name: Preview the ad
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
    // 9 | click | css=.BaseEntitySubmitAction | 
    await driver.findElement(By.css(".BaseEntitySubmitAction")).click()
    // 10 | click | css=.SubmitCategorySelector-items > .SubmitCategorySelector-item:nth-child(1) > .SubmitCategorySelector-categoryAction | 
    await driver.findElement(By.css(".SubmitCategorySelector-items > .SubmitCategorySelector-item:nth-child(1) > .SubmitCategorySelector-categoryAction")).click()
    // 11 | click | css=.is-remainingLevel > .SubmitCategorySelector-item:nth-child(2) > .SubmitCategorySelector-categoryAction | 
    await driver.findElement(By.css(".is-remainingLevel > .SubmitCategorySelector-item:nth-child(2) > .SubmitCategorySelector-categoryAction")).click()
    // 12 | click | css=.SubmitCategorySelector-item:nth-child(5) > .is-leaf | 
    await driver.findElement(By.css(".SubmitCategorySelector-item:nth-child(5) > .is-leaf")).click()
    // 13 | click | css=.SubmitCategorySelector-submit | 
    await driver.findElement(By.css(".SubmitCategorySelector-submit")).click()
    // 14 | click | id=submit-button-01 | 
    await driver.findElement(By.id("submit-button-01")).click()
    // 15 | click | id=ad-condition_id | 
    await driver.findElement(By.id("ad-condition_id")).click()
    // 16 | select | id=ad-condition_id | label=novo
    {
      const dropdown = await driver.findElement(By.id("ad-condition_id"))
      await dropdown.findElement(By.xpath("//option[. = 'novo']")).click()
    }
    // 17 | click | id=ad-modelName | 
    await driver.findElement(By.id("ad-modelName")).click()
    // 18 | type | id=ad-modelName | VW
    await driver.findElement(By.id("ad-modelName")).sendKeys("VW")
    // 19 | click | id=ad-yearManufactured | 
    await driver.findElement(By.id("ad-yearManufactured")).click()
    // 20 | type | id=ad-yearManufactured | 2000
    await driver.findElement(By.id("ad-yearManufactured")).sendKeys("2000")
    // 21 | click | id=ad-motorTypeId | 
    await driver.findElement(By.id("ad-motorTypeId")).click()
    // 22 | select | id=ad-motorTypeId | label=benzinski
    {
      const dropdown = await driver.findElement(By.id("ad-motorTypeId"))
      await dropdown.findElement(By.xpath("//option[. = 'benzinski']")).click()
    }
    // 23 | click | id=ad-mileage | 
    await driver.findElement(By.id("ad-mileage")).click()
    // 24 | type | id=ad-mileage | 2000
    await driver.findElement(By.id("ad-mileage")).sendKeys("2000")
    // 25 | click | id=ad-modelYear | 
    await driver.findElement(By.id("ad-modelYear")).click()
    // 26 | type | id=ad-modelYear | 2000
    await driver.findElement(By.id("ad-modelYear")).sendKeys("2000")
    // 27 | click | id=ad-motorSize | 
    await driver.findElement(By.id("ad-motorSize")).click()
    // 28 | type | id=ad-motorSize | 3000
    await driver.findElement(By.id("ad-motorSize")).sendKeys("3000")
    // 29 | click | id=ad-motorPower | 
    await driver.findElement(By.id("ad-motorPower")).click()
    // 30 | type | id=ad-motorPower | 3000
    await driver.findElement(By.id("ad-motorPower")).sendKeys("3000")
    // 31 | click | id=ad-ownerCountId | 
    await driver.findElement(By.id("ad-ownerCountId")).click()
    // 32 | select | id=ad-ownerCountId | label=drugi
    {
      const dropdown = await driver.findElement(By.id("ad-ownerCountId"))
      await dropdown.findElement(By.xpath("//option[. = 'drugi']")).click()
    }
    // 33 | click | id=ad-registrationExpiryTs | 
    await driver.findElement(By.id("ad-registrationExpiryTs")).click()
    // 34 | select | id=ad-registrationExpiryTs | label=08/2022
    {
      const dropdown = await driver.findElement(By.id("ad-registrationExpiryTs"))
      await dropdown.findElement(By.xpath("//option[. = '08/2022']")).click()
    }
    // 35 | click | id=ad-vehicleSeatCount | 
    await driver.findElement(By.id("ad-vehicleSeatCount")).click()
    // 36 | type | id=ad-vehicleSeatCount | 3
    await driver.findElement(By.id("ad-vehicleSeatCount")).sendKeys("3")
    // 37 | click | id=ad-transmissionType | 
    await driver.findElement(By.id("ad-transmissionType")).click()
    // 38 | select | id=ad-transmissionType | label=ručni
    {
      const dropdown = await driver.findElement(By.id("ad-transmissionType"))
      await dropdown.findElement(By.xpath("//option[. = 'ručni']")).click()
    }
    // 39 | click | id=ad-guaranteeTypeId | 
    await driver.findElement(By.id("ad-guaranteeTypeId")).click()
    // 40 | select | id=ad-guaranteeTypeId | label=1 godina
    {
      const dropdown = await driver.findElement(By.id("ad-guaranteeTypeId"))
      await dropdown.findElement(By.xpath("//option[. = '1 godina']")).click()
    }
    // 41 | click | id=ad-firstRegistrationYear | 
    await driver.findElement(By.id("ad-firstRegistrationYear")).click()
    // 42 | type | id=ad-firstRegistrationYear | 2000
    await driver.findElement(By.id("ad-firstRegistrationYear")).sendKeys("2000")
    // 43 | click | id=ad-ecoStandardTypeId | 
    await driver.findElement(By.id("ad-ecoStandardTypeId")).click()
    // 44 | select | id=ad-ecoStandardTypeId | label=Euro 1
    {
      const dropdown = await driver.findElement(By.id("ad-ecoStandardTypeId"))
      await dropdown.findElement(By.xpath("//option[. = 'Euro 1']")).click()
    }
    // 45 | click | id=ad-airconditionTypeId | 
    await driver.findElement(By.id("ad-airconditionTypeId")).click()
    // 46 | select | id=ad-airconditionTypeId | label=automatska
    {
      const dropdown = await driver.findElement(By.id("ad-airconditionTypeId"))
      await dropdown.findElement(By.xpath("//option[. = 'automatska']")).click()
    }
    // 47 | click | id=ad-colorId | 
    await driver.findElement(By.id("ad-colorId")).click()
    // 48 | select | id=ad-colorId | label=bež
    {
      const dropdown = await driver.findElement(By.id("ad-colorId"))
      await dropdown.findElement(By.xpath("//option[. = 'bež']")).click()
    }
    // 49 | click | id=ad-metallicColor | 
    await driver.findElement(By.id("ad-metallicColor")).click()
    // 50 | click | id=ad-serviceBook | 
    await driver.findElement(By.id("ad-serviceBook")).click()
    // 51 | click | id=ad-vehicleEquipment_ksenon svjetla | 
    await driver.findElement(By.id("ad-vehicleEquipment_ksenon svjetla")).click()
    // 52 | click | css=#ad-vanSafetyFeatures-container .form-field-choice-item:nth-child(1) .form-label-caption | 
    await driver.findElement(By.css("#ad-vanSafetyFeatures-container .form-field-choice-item:nth-child(1) .form-label-caption")).click()
    // 53 | click | id=ad-vanComfortFeatures_tempomat | 
    await driver.findElement(By.id("ad-vanComfortFeatures_tempomat")).click()
    // 54 | click | id=ad-vanAirbagType | 
    await driver.findElement(By.id("ad-vanAirbagType")).click()
    // 55 | select | id=ad-vanAirbagType | label=vozački
    {
      const dropdown = await driver.findElement(By.id("ad-vanAirbagType"))
      await dropdown.findElement(By.xpath("//option[. = 'vozački']")).click()
    }
    // 56 | click | id=ad-vanRadioTypeId | 
    await driver.findElement(By.id("ad-vanRadioTypeId")).click()
    // 57 | select | id=ad-vanRadioTypeId | label=nema
    {
      const dropdown = await driver.findElement(By.id("ad-vanRadioTypeId"))
      await dropdown.findElement(By.xpath("//option[. = 'nema']")).click()
    }
    // 58 | click | css=.form-grid-item--1of3:nth-child(1) > .form-field-choice-list > .form-field-choice-item:nth-child(1) > .form-label | 
    await driver.findElement(By.css(".form-grid-item--1of3:nth-child(1) > .form-field-choice-list > .form-field-choice-item:nth-child(1) > .form-label")).click()
    // 59 | click | id=ad-paymentOptions_341 | 
    await driver.findElement(By.id("ad-paymentOptions_341")).click()
    // 60 | click | id=ad-paymentOptions_342 | 
    await driver.findElement(By.id("ad-paymentOptions_342")).click()
    // 61 | click | id=ad-description | 
    await driver.findElement(By.id("ad-description")).click()
    // 62 | type | id=ad-description | Prodaja VEW
    await driver.findElement(By.id("ad-description")).sendKeys("Prodaja VEW")
    // 63 | click | css=.form-item-group > .form-item:nth-child(3) | 
    await driver.findElement(By.css(".form-item-group > .form-item:nth-child(3)")).click()
    // 64 | click | id=ad-enteredPrice-amount | 
    await driver.findElement(By.id("ad-enteredPrice-amount")).click()
    // 65 | type | id=ad-enteredPrice-amount | 3000
    await driver.findElement(By.id("ad-enteredPrice-amount")).sendKeys("3000")
    // 66 | click | css=.LocalitySelector-autoLocate-cta | 
    await driver.findElement(By.css(".LocalitySelector-autoLocate-cta")).click()
    // 67 | click | id=adLocalitySelector-location_id_level_0 | 
    await driver.findElement(By.id("adLocalitySelector-location_id_level_0")).click()
    // 68 | select | id=adLocalitySelector-location_id_level_2 | label=--- odaberi naselje ---
    {
      const dropdown = await driver.findElement(By.id("adLocalitySelector-location_id_level_2"))
      await dropdown.findElement(By.xpath("//option[. = '--- odaberi naselje ---']")).click()
    }
    // 69 | click | id=adLocalitySelector-location_id_level_0 | 
    await driver.findElement(By.id("adLocalitySelector-location_id_level_0")).click()
    // 70 | select | id=adLocalitySelector-location_id_level_0 | label=Bjelovarsko-bilogorska
    {
      const dropdown = await driver.findElement(By.id("adLocalitySelector-location_id_level_0"))
      await dropdown.findElement(By.xpath("//option[. = 'Bjelovarsko-bilogorska']")).click()
    }
    // 71 | click | id=adLocalitySelector-location_id_level_1 | 
    await driver.findElement(By.id("adLocalitySelector-location_id_level_1")).click()
    // 72 | select | id=adLocalitySelector-location_id_level_1 | label=Berek
    {
      const dropdown = await driver.findElement(By.id("adLocalitySelector-location_id_level_1"))
      await dropdown.findElement(By.xpath("//option[. = 'Berek']")).click()
    }
    // 73 | mouseDown | css=.HierarchySelector-item:nth-child(3) > .form-field | 
    {
      const element = await driver.findElement(By.css(".HierarchySelector-item:nth-child(3) > .form-field"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    // 74 | mouseUp | id=adLocalitySelector-location_id_level_2 | 
    {
      const element = await driver.findElement(By.id("adLocalitySelector-location_id_level_2"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    // 75 | click | css=.HierarchySelector-item:nth-child(3) > .form-field | 
    await driver.findElement(By.css(".HierarchySelector-item:nth-child(3) > .form-field")).click()
    // 76 | click | id=adLocalitySelector-location_id_level_2 | 
    await driver.findElement(By.id("adLocalitySelector-location_id_level_2")).click()
    // 77 | select | id=adLocalitySelector-location_id_level_2 | label=Begovača
    {
      const dropdown = await driver.findElement(By.id("adLocalitySelector-location_id_level_2"))
      await dropdown.findElement(By.xpath("//option[. = 'Begovača']")).click()
    }
    // 78 | click | id=ad[phoneNumberControl][phoneNumberChooser][0]-numberSelector | 
    await driver.findElement(By.id("ad[phoneNumberControl][phoneNumberChooser][0]-numberSelector")).click()
    // 79 | select | id=ad[phoneNumberControl][phoneNumberChooser][0]-numberSelector | label=+387 62214363
    {
      const dropdown = await driver.findElement(By.id("ad[phoneNumberControl][phoneNumberChooser][0]-numberSelector"))
      await dropdown.findElement(By.xpath("//option[. = '+387 62214363']")).click()
    }
    // 80 | click | id=item_file_10 | 
    await driver.findElement(By.id("item_file_10")).click()
    // 81 | click | id=ad-youtube_url | 
    await driver.findElement(By.id("ad-youtube_url")).click()
    // 82 | type | id=ad-youtube_url | wwwyoutube.com
    await driver.findElement(By.id("ad-youtube_url")).sendKeys("wwwyoutube.com")
    // 83 | click | id=ad-submitButton | 
    await driver.findElement(By.id("ad-submitButton")).click()
  })
})
