( function ( $ ) {
	'use strict';

	var knKGP = {
		id: 'kn-kgp',
		name: 'ಕಗಪ/ನುಡಿ',
		description: 'Kannada kgp/nudi/KP Rao layout',
		date: '2012-11-09',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Aravinda VK<mail@aravindavk.in>',
		license: 'GPLv3,MIT',
		version: '1.0',
		contextLength: 4,
		maxKeyLength: 2,
		patterns: [
			['([ಕ-ಹೞ]಼?)f', '$1್'],
			['([ಕ-ಹೞ]಼?್)f', '$1'],
			['\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1'],
			['([ಕ-ಹೞ]಼?)A', '$1ಾ'],
			['([ಕ-ಹೞ]಼?)i', '$1ಿ'],
			['([ಕ-ಹೞ]಼?)I', '$1ೀ'],
			['([ಕ-ಹೞ]಼?)u', '$1ು'],
			['([ಕ-ಹೞ]಼?)U', '$1ೂ'],
			['([ಕ-ಹೞ]಼?)R', '$1ೃ'],
			['([ಕ-ಹೞ]಼?)ೃX', '$1ೄ'],
			['([ಕ-ಹೞ]಼?)e', '$1ೆ'],
			['([ಕ-ಹೞ]಼?)E', '$1ೇ'],
			['([ಕ-ಹೞ]಼?)Y', '$1ೈ'],
			['([ಕ-ಹೞ]಼?)o', '$1ೊ'],
			['([ಕ-ಹೞ]಼?)O', '$1ೋ'],
			['([ಕ-ಹೞ]಼?)V', '$1ೌ'],
			['ಸX', 'ಽ'],
			['([ಕ-ಹೞ]಼?\u200D)f', '$1್'],
			['(\u200D)F', '\u200C'], // 0x200C Zero width non-joiner
			['F', '\u200D'], // 0x200D Zero width joiner
			['k', 'ಕ'],
			['K', 'ಖ'],
			['g', 'ಗ'],
			['G', 'ಘ'],
			['Z', 'ಙ'],
			['c', 'ಚ'],
			['C', 'ಛ'],
			['j', 'ಜ'],
			['ಜX', 'ಜ಼'],
			['J', 'ಝ'],
			['z', 'ಞ'],
			['q', 'ಟ'],
			['Q', 'ಠ'],
			['w', 'ಡ'],
			['W', 'ಢ'],
			['N', 'ಣ'],
			['t', 'ತ'],
			['T', 'ಥ'],
			['d', 'ದ'],
			['D', 'ಧ'],
			['n', 'ನ'],
			['p', 'ಪ'],
			['P', 'ಫ'],
			['ಫX', 'ಫ಼'],
			['b', 'ಬ'],
			['B', 'ಭ'],
			['m', 'ಮ'],
			['y', 'ಯ'],
			['r', 'ರ'],
			['ರX', 'ಱ'],
			['l', 'ಲ'],
			['v', 'ವ'],
			['S', 'ಶ'],
			['x', 'ಷ'],
			['s', 'ಸ'],
			['h', 'ಹ'],
			['L', 'ಳ'],
			['ಳX', 'ೞ'],
			['a', 'ಅ'],
			['A', 'ಆ'],
			['i', 'ಇ'],
			['I', 'ಈ'],
			['u', 'ಉ'],
			['U', 'ಊ'],
			['R', 'ಋ'],
			['ಋX', 'ೠ'],
			['e', 'ಎ'],
			['E', 'ಏ'],
			['Y', 'ಐ'],
			['o', 'ಒ'],
			['O', 'ಓ'],
			['V', 'ಔ'],
			['M', 'ಂ'],
			['H', 'ಃ'],
			['0', '೦'],
			['1', '೧'],
			['2', '೨'],
			['3', '೩'],
			['4', '೪'],
			['5', '೫'],
			['6', '೬'],
			['7', '೭'],
			['8', '೮'],
			['9', '೯']
		]
	};

	$.ime.register( knKGP );
}( jQuery ) );
