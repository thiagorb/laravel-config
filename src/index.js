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

export default Config;