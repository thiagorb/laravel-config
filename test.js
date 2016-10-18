import assert from 'assert';

const MODULE_PATH = './src/index';

suite('laravel-config', () => {
	let Config;
	
	setup(() => {
		Config = require(MODULE_PATH).default;
	});
	
	teardown(() => {
		delete require.cache[require.resolve(MODULE_PATH)]
	});
	
	test('should be possible to retrieve configuration values', () => {
		const Config = require('./src/index').default;
	    Config.addConfig({
	        'config key 1': 'config value 1',
	        'config key 2': 'config value 2'
	    });

	    assert.equal(Config.get('config key 1'), 'config value 1');
	    assert.equal(Config.get('config key 2'), 'config value 2');
	});

	test('should be possible to use default values', () => {
		const Config = require('./src/index').default;
	    Config.addConfig({
	        'config key 1': 'config value 1'
	    });

	    assert.equal(Config.get('config key 1'), 'config value 1');
	    assert.equal(Config.get('config key 2'), null);
	    assert.equal(Config.get('config key 3', 'default value 3'), 'default value 3');
	});
});