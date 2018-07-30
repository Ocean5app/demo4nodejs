/*
用于自动登录service now 网站的测试脚本， 需要预先安装 node.js 和 selenium-webdriver
确保在注册表的如下位置有MachineLevelUserCloudPolicyEnrollmentToken文件（ 值为空值）
HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome
*/
console.time("driver");
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

(async () =>{
    try{
        await console.time('snowWebsitelogin');
        driver.manage().window().maximize();
        driver.get('https://developer.servicenow.com/app.do');  
        let loginbutton =  driver.wait(until.elementLocated(By.id('dp-hdr-login-link')));
        await loginbutton.click();
        let uname =  driver.wait(until.elementLocated(By.id('username')));
        await uname.sendKeys('youremail@xxx.com');
        let pwd =  driver.wait(until.elementLocated(By.id('password')));
        await pwd.sendKeys('yourpwd');
        let subbutton =  driver.wait(until.elementLocated(By.id('submitButton')));
        await subbutton.click();
        let button1 =  driver.wait(until.elementLocated(By.xpath('//*[@id="instanceReqBtnHInst"]'))); 
        await driver.executeScript('arguments[0].click()',button1);
        let url2 =  driver.wait(until.elementLocated(By.xpath('//*[@id="instance_detail"]/div[2]/p[2]/a')));
        await driver.executeScript('arguments[0].click()',url2);
        await console.log('url.click');
        await setTimeout(() => {driver.quit()}, 20000); 
        return 'login finished';
    } catch(err) {
        console.log(err);
        return 'login finished';
    }
})().then(v =>{console.log(v);console.timeEnd("snowWebsitelogin");});



