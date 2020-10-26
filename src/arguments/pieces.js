const { MultiArgument } = require('@pengubot/klasa');

module.exports = class extends MultiArgument {

	constructor(...args) {
		super(...args, { aliases: ['...piece'] });
	}

	get base() {
		return this.store.get('piece');
	}

};
