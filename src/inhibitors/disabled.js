const { Inhibitor } = require('@pengubot/klasa');

module.exports = class extends Inhibitor {

	run(message, command) {
		if (!command.enabled) throw message.language.get('INHIBITOR_DISABLED_GLOBAL');
		if (message.guildSettings.get('disabledCommands').includes(command.name)) throw message.language.get('INHIBITOR_DISABLED_GUILD');
	}

};
