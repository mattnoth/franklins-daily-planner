import {
	Montserrat as MonteFont,
	Oswald as OswaldFont,
} from 'next/font/google';

export const monte = MonteFont({
	subsets: ['latin'],
	variable: '--font-monte',
});

export const oswald = OswaldFont({
	subsets: ['latin'],
	variable: '--font-oswald',
});
