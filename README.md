# laravel-config

Adaptation of the Laravel JS config module implemented by [andywer](https://github.com/andywer/laravel-js-localization) to be used as a module.

The advantage of using this module is that you can combine it with this [babel plugin](https://github.com/thiagorb/babel-plugin-laravel-facades). The plugin will detect usages of this module in the JavaScript and build a JSON file containing the configuration keys, which can be used later to generate the data to be sent to the browser.

## Installation
```
npm install laravel-config
```
## Usage
```
import Config from 'laravel-config';

Config.addConfig({
	'config key': 'config value'
});

console.log(Config.get('config key')); // config value
```
