import React from 'react';

type IconProps = {
    size: number;
    color: string;
    stroke: number;
    className: string;
}

class Icons {
    static readonly BrandGitHub: React.FC<IconProps> = ({ size, color, stroke, className }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                stroke-width={stroke}
                stroke-linecap="round"
                stroke-linejoin="round"
                className={className}
            >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
        );
    }

    static readonly BrandInstagram: React.FC<IconProps> = ({ size, color, stroke, className }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                stroke-width={stroke}
                stroke-linecap="round"
                stroke-linejoin="round"
                className={className}
            >
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
            </svg>
        );
    }

    static readonly BrandLinkedIn: React.FC<IconProps> = ({ size, color, stroke, className }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                stroke-width={stroke}
                stroke-linecap="round"
                stroke-linejoin="round"
                className={className}
            >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
        );
    }

    static readonly BrandX: React.FC<IconProps> = ({
        size, color, stroke, className
    }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                stroke-width={stroke}
                stroke-linecap="round"
                stroke-linejoin="round"
                className={className}
            >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
        );
    }

    static readonly BrandYoutube: React.FC<IconProps> = ({
        size, color, stroke, className
    }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                stroke-width={stroke}
                stroke-linecap="round"
                stroke-linejoin="round"
                className={className}
            >
                <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                <path d="M10 9l5 3l-5 3z" />
            </svg>
        );
    }

    static readonly Mail: React.FC<IconProps> = ({
        size, color, stroke, className
    }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                stroke-width={stroke}
                stroke-linecap="round"
                stroke-linejoin="round"
                className={className}
            >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
            </svg>
        );
    }

    static readonly Map: React.FC<IconProps> = ({ size, color, stroke, className }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                stroke-width={stroke}
                stroke-linecap="round"
                stroke-linejoin="round"
                className={className}
            >
                <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
                <path d="M9 4v13" />
                <path d="M15 7v13" />
            </svg>
        );
    }
}

export default Icons;