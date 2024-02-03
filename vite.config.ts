import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { checker } from 'vite-plugin-checker'
import dynamicImport from 'vite-plugin-dynamic-import'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [checker({ typescript: true }), dynamicImport(), react(), svgr(), tsconfigPaths(), visualizer()],
    test: {
      environment: 'jsdom',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html']
      }
    },
    server: {
      port: 3005
    },
    define: {
      'process.env': env
    },
    css: {
      devSourcemap: true
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
        '@assets': `${path.resolve(__dirname, './src/assets/')}`,
        '@components': `${path.resolve(__dirname, './src/components/')}`,
        '@constants': `${path.resolve(__dirname, './src/constants/')}`,
        '@layouts': `${path.resolve(__dirname, './src/layouts/')}`,
        '@types': `${path.resolve(__dirname, './src/types/')}`,
        '@utils': `${path.resolve(__dirname, './src/utils/')}`,
        '@pages': `${path.resolve(__dirname, './src/pages/')}`,
        '@hooks': `${path.resolve(__dirname, './src/hooks/')}`
      }
    }
  }
})
