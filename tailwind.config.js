
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Status colors
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",

        // Primary
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-light": "rgb(var(--color-primary-light) / <alpha-value>)",
        "primary-dark": "rgb(var(--color-primary-dark) / <alpha-value>)",

        // Grays
        "gray-light": "rgb(var(--color-gray-light) / <alpha-value>)",

        // Typography & surfaces
        "text-dark": "rgb(var(--color-text-dark) / <alpha-value>)",
        "background-dark": "rgb(var(--color-background-dark) / <alpha-value>)",
        "background-light": "rgb(var(--color-background-light) / <alpha-value>)",
        'background': "rgb(var(--background) / <alpha-value>)",
        'foreground': "rgb(var(--foreground) / <alpha-value>)",
      },
      fontFamily: {
        // These keys become the utility names: font-header, font-body, font-code
        'header': 'var(--font-header)',
        'body': 'var(--font-body)',
        'code': 'var(--font-code)',
      },
    }
  }
}
