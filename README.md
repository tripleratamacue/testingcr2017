![WebdriverIO](http://www.christian-bromann.com/wdio.png)
WebdriverIO
===========
[![Sauce Test Status](https://saucelabs.com/buildstatus/testingcr)](https://saucelabs.com/u/testingcr)
<br><br>
[![Sauce MultiBrowser Status](https://saucelabs.com/browser-matrix/testingcr.svg)](https://saucelabs.com/u/testingcr)


# testingcr2017
Demo automation project for testingCR demo 2017. WebdriverIO

### Software Stack  ###
* webdriverio: http://webdriver.io/
* selenium:    http://docs.seleniumhq.org/download/
* cucumber:    https://github.com/cucumber/cucumber-js
* chai: 	   http://chaijs.com/
* chalk:       https://www.npmjs.com/package/chalk
* *** To see version of all dependencies check package.json file. 

# How to run:
* install dependencies: `npm install --no-save`
* locally: `./node_modules/.bin/wdio wdio.conf.js`
* cloud: `./node_modules/.bin/wdio saucelabs.conf.js`
* make sure you define your SauceLabs credentials like:
`export SAUCE_ACCESS_KEY=###`


` export SAUCE_USERNAME=@#$!@#`

# How to get Setup:
#### 1. Prerequisits ####
Project have have ran successfully dependencies versions like: brew: 1.3.6, node: v6.12.0 and npm: 5.5.1
    
##### 1.1 Brew ##### 
We are using Hombrew to install our packs needed:
    

* Use this to check if you have it already: 
    

`brew -v`


* If you don't install it with: 


`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`


##### 1.2 Java (7 or 8): ####
* Use this to check if you have it already:


`java --v`


* If you don't, install it with:


`brew cask install java` 


#### 1.3 Node: ####
* Use this to check if you have it already:


`node -v`


* If you don't, install it with:
        

`brew install node` 


### Support? ###
* Daniel Guzman - guzman.cr@gmail.com FREE untill 2017 ;)
* Live Chat Support : [Gitter](https://gitter.im/webdriverio/webdriverio)
