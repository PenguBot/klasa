const { Inhibitor } = require('@pengubot/klasa');

module.exports = class extends Inhibitor {

	run(message, command) {
		if (command.nsfw && !message.channel.nsfw) throw message.language.get('INHIBITOR_NSFW');
	}

};
