// Let's load the default configs:
var defaults = require("./wdio.conf.js").config;  
var _ = require("lodash");

var overrides = {  
    // Here are all my 'dev' specific overrides:
    //baseUrl: "http://dev.example.com",
    shortDelay: 6000,
    globalDelay: 90000, 
    waitforTimeout: 60000,   

 
    // Cloud setttings for Sauce Labs
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    capabilities: [{
        name: 'Chrome - Selenium TestingCR 2017 Demo',
        //name: test.title, //ToDo: how to inject test name, per each test case.
        //build: '2.0-localDevelopment',
        build: process.env.BUILD_NUMBER + process.env.JOB_NAME, //process.env.BUILD_NUMBER +'---'+ 
        //screenResolution: '1024x768', //'1280x1024',
        //recordVideo: 'false',
        //recordScreenshots: 'false',
        maxInstances: 2, //8,
        browserName: 'chrome',
        chromeOptions: { 
            //Check this chrome approach: --start-maximized
            args: ['--incognito', '--disable-extensions', '--window-size=2200,1800']//, '--start-maximized']              
            //args: 'window-size: maximize','--incognito', '--disable-extensions'  
            //Chrome Headless:
            //args: ['--headless', '--disable-gpu', '--window-size=1280,800']     
        }, //,ignoreZoomSetting:true        
        version: '61', //'40', //'54', //dev, beta
        platform: 'macOS 10.12', //'Windows 7',//, //'Windows 10',//
        chromedriverVersion: '2.32',//'2.27'
        seleniumVersion: '3.5.0', //'2.53.1', //'3.4.0', //todo, whats SL default?
        customData:{
            release: "1.0", 
            commit: "0k392a9dkjr", 
            environment: 'qa', 
            organization: 'testingcr', 
        },
        timeZone: 'Central',     
        priority: '0',
        webdriverRemoteQuietExceptions: false,         
    }],
    services: ['sauce'],
    sauceConnect: true,
    sauceConnectOpts: {
        tunnelIdentifier: 'testingcr',
        verbose : true,
        logger : console.log,
        //dns : '127.0.0.1',
        port : 4444 //4400
    },
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    tags: ['jenkins-smoke','local-development','debug'],
    videoUploadOnPass: false,  
};

// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults); 