import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
export default defineConfig({
    plugins: [],
    test: {
        globals: true,
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'json', 'html']
        }
    },
    resolve: {
        alias: {
            'modules/config': resolve(__dirname, './packages/index.ts'),
        }
    }
});
