/**AUTHORED BY MUSICNOTH */

import React, { useMemo } from 'react';
import { IButton } from './IButton';
import { useRouter } from 'next/navigation';


// Function to calculate size classes based on the size prop
const getSizeClasses = (size: IButton['size']) => {
	switch (size) {
		case 'small': {
			return 'px-4 py-2.5';
		}
		case 'large': {
			return 'px-6 py-3';
		}
		default: {
			return 'px-5 py-2.5';
		}
	}
};

// Function to calculate mode classes based on the variant prop
const getModeClasses = (variant: IButton['variant']) => {
	switch (variant) {
		case 'primary': {
			return 'text-white bg-pink-600 dark:bg-pink-700 dark:border-pink-700';
		}
		case 'secondary': {
			return 'text-white  bg-blue-500 border-blue-200 dark:text-white dark:border-blue-300';
		}
		default: {
			// Default button style
			return 'text-white bg-blue-600 dark:bg-blue-700 dark:border-blue-700';
		}
	}
};

// Base classes that are always applied to the button
const BASE_BUTTON_CLASSES =
	'cursor-pointer leading-none inline-block transition-opacity duration-500 ease-in-out hover:opacity-50';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<IButton> = ({
	variant,
	size = 'medium',
	label,
	href,
	delay = 0,
	additionalClasses = '',
	...props
}) => {
	const router = useRouter();

	// Function to handle navigation with delay
	const handleHref = (
		href: string | undefined,
		delay: number,
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		if (!href) return;

		console.log(`Navigating to ${href} after a delay of ${delay} ms`);

		// Prevent the default click behavior
		e.preventDefault();

		// If there is an onClick prop, call it
		if (props.onClick) props.onClick(e);

		// Navigate after a delay
		setTimeout(() => {
			router.push(href);
		}, delay);
	};

	// Compute the classes based on the props
	const computedClasses = useMemo(() => {
		const modeClass = getModeClasses(variant);
		const sizeClass = getSizeClasses(size);

		// Combine all classes
		return `${modeClass} ${sizeClass} ${additionalClasses}`;
	}, [variant, size, additionalClasses]);

	return (
		<button
			type='button'
			onClick={(e) => handleHref(href, delay, e)} // call handleHref on button click
			className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
			{...props}>
			{label}
		</button>
	);
};
