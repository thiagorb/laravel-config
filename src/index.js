var configData = {};

const Config = {
    get: function(propertyName, defaultValue) {
        if (typeof configData[propertyName] !== 'undefined') {
            return configData[propertyName];
        }

        // Config property not set

        if (arguments.length > 1) {
            return defaultValue;
        } else {
            return null;
        }
    },

    addConfig: function(data) {
        for (var propertyName in data) {
            configData[propertyName] = data[propertyName];
        }
    }
}

if (typeof(window) !== 'undefined') {
    const configDataElement = window.document.getElementById('facades-data-config');

    if (configDataElement) {
        Config.addConfig(JSON.parse(configDataElement.innerHTML));
    }
}

export default Config;