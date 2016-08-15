import assert from 'assert';
import Config from './src/index';

it('should be possible to retrieve configuration values', () => {
    Config.addConfig({
        'config key 1': 'config value 1',
        'config key 2': 'config value 2'
    });

    assert.equal(Config.get('config key 1'), 'config value 1');
    assert.equal(Config.get('config key 2'), 'config value 2');
});