import React from 'react';

export const TechLogo = ({ name, className = "w-8 h-8", color }) => {
  const norm = (name || '').toLowerCase();

  // React
  if (norm.includes('react') || norm.includes('jsx')) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }

  // JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path d="M6.5 18.5V14.5M6.5 18.5C7.2 19 8.2 19.3 9 18.5C9.8 17.7 9.8 16 9.8 14.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M14 18.2C14.8 18.8 16 19.1 17 18.5C18 17.9 18.2 16.7 17.5 15.9C16.8 15.1 15 15.1 14.5 14.2C14 13.3 14.5 12 15.8 11.5C17.1 11 18.3 11.5 19 12.2" stroke="#000000" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    );
  }

  // TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#3178C6"/>
        <path d="M5 9H13M9 9V19" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M14 18C14.8 18.6 16 19 17 18.4C18 17.8 18.2 16.6 17.5 15.8C16.8 15 15 15 14.5 14.1C14 13.2 14.5 12 15.8 11.5C17.1 11 18.3 11.5 19 12.2" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    );
  }

  // PHP
  if (norm.includes('php')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#777BB4" fillOpacity="0.2"/>
        <ellipse cx="12" cy="12" rx="10" ry="6.5" stroke="#777BB4" strokeWidth="1.5" fill="#292D5A"/>
        <text x="12" y="14.5" fill="#8892BF" fontSize="6.5" fontWeight="900" textAnchor="middle" fontFamily="monospace">PHP</text>
      </svg>
    );
  }

  // PostgreSQL
  if (norm.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#336791" fillOpacity="0.15"/>
        <path d="M12 3C7.5 3 4 6.5 4 11C4 13.5 5 15.8 6.8 17.3C6.3 18.2 5.5 19 4.5 19.5C6.5 19.8 8.5 19 10 17.8C10.6 17.9 11.3 18 12 18C16.5 18 20 14.5 20 10C20 5.5 16.5 3 12 3Z" fill="#336791" stroke="#4169E1" strokeWidth="1.2"/>
        <circle cx="9" cy="9" r="1.2" fill="#FFFFFF"/>
        <circle cx="15" cy="9" r="1.2" fill="#FFFFFF"/>
        <path d="M10 13C11 14 13 14 14 13" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    );
  }

  // Laravel
  if (norm.includes('laravel') || norm.includes('blade')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#FF2D20" fillOpacity="0.15"/>
        <path d="M6 7L12 3.5L18 7V17L12 20.5L6 17V7Z" stroke="#FF2D20" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M12 3.5V20.5M6 7L18 14M18 7L6 14" stroke="#FF2D20" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 9.5C7.5 6.5 9.5 5 12.5 5C16.25 5 17 8 18.5 8.5C19.5 8.83 20.5 8 21.5 6C20.5 9 18.5 10.5 15.5 10.5C11.75 10.5 11 7.5 9.5 7C8.5 6.67 7.5 7.5 6.5 9.5ZM2.5 16.5C3.5 13.5 5.5 12 8.5 12C12.25 12 13 15 14.5 15.5C15.5 15.83 16.5 15 17.5 13C16.5 16 14.5 17.5 11.5 17.5C7.75 17.5 7 14.5 5.5 14C4.5 13.67 3.5 14.5 2.5 16.5Z" fill="#06B6D4"/>
      </svg>
    );
  }

  // C# / .NET
  if (norm.includes('c#') || norm.includes('csharp') || norm.includes('.net')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#512BD4" fillOpacity="0.2"/>
        <circle cx="12" cy="12" r="9" stroke="#9B4F96" strokeWidth="1.8" fill="#170F2E"/>
        <text x="12" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">C#</text>
      </svg>
    );
  }

  // Java
  if (norm.includes('java') && !norm.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#EA2D2E" fillOpacity="0.15"/>
        <path d="M10 18C12 19 15 19 17 18C16 17 14 17 12 17C10.5 17 9.5 17.5 10 18Z" fill="#EA2D2E"/>
        <path d="M8 15C11 16 15 16 18 15C16.5 13.5 13.5 14 11 14C9 14 7.5 14.5 8 15Z" fill="#5382A1"/>
        <path d="M12 4C14 6 10 8 12 10C14 12 11 13 11 13" stroke="#EA2D2E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 6C16.5 7.5 13.5 9 15 11" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }

  // Kotlin
  if (norm.includes('kotlin')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="kg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7F52FF"/>
            <stop offset="0.5" stopColor="#C711E1"/>
            <stop offset="1" stopColor="#E4485D"/>
          </linearGradient>
        </defs>
        <path d="M3 3H21L12 12L21 21H3V3Z" fill="url(#kg)"/>
        <path d="M3 3L12 12L3 21V3Z" fill="#7F52FF"/>
      </svg>
    );
  }

  // MySQL & MariaDB
  if (norm.includes('mysql') || norm.includes('mariadb')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#00758F" fillOpacity="0.2"/>
        <path d="M5 14C6 11 9 9 13 9C16.5 9 19 11 19.5 14C20 17 17 19 12 19C7 19 4 17 5 14Z" stroke="#F29111" strokeWidth="1.5" fill="#0B2538"/>
        <path d="M12 4V9M8 6L10 9M16 6L14 9" stroke="#00758F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }

  // AWS
  if (norm.includes('aws') || norm.includes('amazon')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#232F3E"/>
        <text x="12" y="11.5" fill="#FFFFFF" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">AWS</text>
        <path d="M6 15.5C9.5 18 14.5 18 18 15.5" stroke="#FF9900" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M18.5 14.5L18 16L16.5 15.5" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // Firebase
  if (norm.includes('firebase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 17.5L6.5 4.5L10 11.5L4.5 17.5Z" fill="#FFA000"/>
        <path d="M13.5 8L10 11.5L19.5 17.5L13.5 8Z" fill="#F57C00"/>
        <path d="M4.5 17.5L12 21.5L19.5 17.5L10 11.5L4.5 17.5Z" fill="#FFCA28"/>
      </svg>
    );
  }

  // Figma
  if (norm.includes('figma')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2H12V7H8C6.6 7 5.5 5.9 5.5 4.5C5.5 3.1 6.6 2 8 2Z" fill="#F24E1E"/>
        <path d="M12 2H16C17.4 2 18.5 3.1 18.5 4.5C18.5 5.9 17.4 7 16 7H12V2Z" fill="#FF7262"/>
        <path d="M12 7H16C17.4 7 18.5 8.1 18.5 9.5C18.5 10.9 17.4 12 16 12H12V7Z" fill="#1ABCFE"/>
        <path d="M8 7H12V12H8C6.6 12 5.5 10.9 5.5 9.5C5.5 8.1 6.6 7 8 7Z" fill="#A259FF"/>
        <path d="M8 12H12V17C12 18.4 10.9 19.5 9.5 19.5C8.1 19.5 7 18.4 7 17C7 15.6 8.1 12 8 12Z" fill="#0ACF83"/>
      </svg>
    );
  }

  // Git
  if (norm === 'git' || norm.includes('git &')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#F05032" fillOpacity="0.15"/>
        <path d="M19.5 10.5L13.5 4.5C12.7 3.7 11.3 3.7 10.5 4.5L4.5 10.5C3.7 11.3 3.7 12.7 4.5 13.5L10.5 19.5C11.3 20.3 12.7 20.3 13.5 19.5L19.5 13.5C20.3 12.7 20.3 11.3 19.5 10.5Z" fill="#F05032"/>
        <circle cx="10" cy="14" r="1.5" fill="#FFFFFF"/>
        <circle cx="14" cy="10" r="1.5" fill="#FFFFFF"/>
        <circle cx="10" cy="8" r="1.5" fill="#FFFFFF"/>
        <path d="M10 8V14M10 11L14 10" stroke="#FFFFFF" strokeWidth="1.2"/>
      </svg>
    );
  }

  // GitHub
  if (norm.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#FFFFFF" fillOpacity="0.1"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 15.9778 5.57778 19.3556 9.15556 20.5444C9.6 20.6222 9.76667 20.3556 9.76667 20.1222C9.76667 19.9111 9.75556 19.3556 9.75556 18.6111C7.25556 19.1556 6.73333 17.4111 6.73333 17.4111C6.32222 16.3667 5.73333 16.0889 5.73333 16.0889C4.92222 15.5333 5.8 15.5444 5.8 15.5444C6.7 15.6111 7.17778 16.4667 7.17778 16.4667C7.97778 17.8444 9.27778 17.4444 9.78889 17.2111C9.86667 16.6333 10.1 16.2333 10.3556 16.0111C8.35556 15.7889 6.25556 15.0111 6.25556 11.5667C6.25556 10.5889 6.6 9.78889 7.17778 9.16667C7.08889 8.93333 6.77778 8.02222 7.26667 6.81111C7.26667 6.81111 8.02222 6.56667 9.75556 7.74444C10.4778 7.54444 11.2444 7.44444 12 7.44444C12.7556 7.44444 13.5222 7.54444 14.2444 7.74444C15.9778 6.56667 16.7333 6.81111 16.7333 6.81111C17.2222 8.02222 16.9111 8.93333 16.8222 9.16667C17.4 9.78889 17.7444 10.5889 17.7444 11.5667C17.7444 15.0222 15.6333 15.7778 13.6222 16C13.9556 16.2889 14.2444 16.8556 14.2444 17.7222C14.2444 18.9667 14.2333 19.9667 14.2333 20.1222C14.2333 20.3556 14.4 20.6333 14.8444 20.5444C18.4222 19.3556 21 15.9778 21 12C21 7.02944 16.9706 3 12 3Z" fill="#F0F6FC"/>
      </svg>
    );
  }

  // Vite
  if (norm.includes('vite')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 4.5L12.5 20.5L3.5 6L11 4L19.5 4.5Z" fill="#646CFF" fillOpacity="0.2"/>
        <path d="M19.5 4.5L12 21L4.5 6L12 4.5L19.5 4.5Z" stroke="#646CFF" strokeWidth="1.5"/>
        <path d="M14.5 3.5L8.5 13H12.5L9.5 20.5L16.5 10H12.5L14.5 3.5Z" fill="#FFD62E"/>
      </svg>
    );
  }

  // HTML5
  if (norm.includes('html')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3L5.5 20L12 22L18.5 20L20 3H4Z" fill="#E34F26"/>
        <path d="M12 4.5V20.3L17.2 18.8L18.4 4.5H12Z" fill="#EF652A"/>
        <path d="M8 8H16L15.6 12H9.5L9.7 15L12 15.6L14.3 15L14.5 13H16.5L16.1 17L12 18.1L7.9 17L7.5 10.5H14.5L14.7 8.5H8V8Z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // CSS3
  if (norm.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3L5.5 20L12 22L18.5 20L20 3H4Z" fill="#1572B6"/>
        <path d="M12 4.5V20.3L17.2 18.8L18.4 4.5H12Z" fill="#33A9DC"/>
        <path d="M8 8H16L15.6 12H9.5L9.7 15L12 15.6L14.3 15L14.5 13H16.5L16.1 17L12 18.1L7.9 17L7.5 10.5H14.5L14.7 8.5H8V8Z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // Postman / API Testing
  if (norm.includes('postman') || norm.includes('api')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#FF6C37" fillOpacity="0.2"/>
        <circle cx="12" cy="12" r="8" stroke="#FF6C37" strokeWidth="1.5" fill="#20110B"/>
        <path d="M8 12H16M13 9L16 12L13 15" stroke="#FF6C37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // Airtable
  if (norm.includes('airtable')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#18BFFF" fillOpacity="0.15"/>
        <path d="M12 4L3 8.5L12 13L21 8.5L12 4Z" fill="#FCB400"/>
        <path d="M11 14.5L3 10.5V17L11 21V14.5Z" fill="#18BFFF"/>
        <path d="M13 14.5L21 10.5V17L13 21V14.5Z" fill="#ED3B3B"/>
      </svg>
    );
  }

  // Docker
  if (norm.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#2496ED" fillOpacity="0.2"/>
        <path d="M3 13C3.5 13 4 11 7 11C10 11 12 14 17 14C20 14 21 12 21.5 11.5C21.5 15.5 18 19 12 19C6 19 3 15 3 13Z" fill="#2496ED"/>
        <rect x="7" y="7" width="2" height="2" fill="#2496ED"/>
        <rect x="10" y="7" width="2" height="2" fill="#2496ED"/>
        <rect x="10" y="4.5" width="2" height="2" fill="#2496ED"/>
      </svg>
    );
  }

  // Next.js
  if (norm.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#000000" stroke="#FFFFFF" strokeWidth="1.2"/>
        <path d="M8 8V16M8 8L16 16M16 8V12" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    );
  }

  // Default fallback code icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
};
