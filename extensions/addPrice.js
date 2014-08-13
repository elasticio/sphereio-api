exports.preRequest = function (options, cfg, msg) {

    var body = JSON.parse(options.body);

    body.actions = [];

    var action = {};

    action.action = 'addPrice';
    action.variantId = body.variantId;
    action.price = {};
    action.price.value = {};
    action.price.value.currencyCode = body.currencyCode;
    action.price.value.centAmount = body.amount * 100;
    action.country = body.country;

    body.actions.push(action);

    delete body.currencyCode;
    delete body.amount;
    delete body.country;
    delete body.variantId;

    attributeManager.cleanupValues(body);

    options.body = JSON.stringify(body);
    options.json = body;
};