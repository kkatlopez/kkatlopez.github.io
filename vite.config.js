import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/',
    esbuild: {
        loader: 'jsx',
        include: [
            'src/**/*.jsx',
            'node_modules/**/*.jsx',
            'node_modules/**/*.tsx',
            // Add these lines to allow all .js files to contain JSX
            'src/**/*.js',
            'node_modules/**/*.js',
        ],
    },
});
