import { ButtonHTMLAttributes } from 'react';

// Update interface
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary'; // Renamed to variant
	size?: 'small' | 'medium' | 'large';
	label: string;
	href?: string;
	delay?: number;
	additionalClasses?: string;
}
