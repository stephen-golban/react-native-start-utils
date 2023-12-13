import { join } from 'path';
import * as fs from 'fs';

interface CompilerOptions {
  baseUrl: string;
  paths: { [key: string]: string[] };
}

interface TsConfig {
  compilerOptions: CompilerOptions;
}

const configPath = join(__dirname, 'tsconfig.json');
const configJson = fs.readFileSync(configPath, 'utf8');
const config: TsConfig = JSON.parse(configJson);

const { baseUrl, paths } = config.compilerOptions;

/**
 * Creates an alias mapping based on the paths defined in tsconfig.json.
 * This is useful for setting up module resolution in environments
 * that don't natively support TypeScript's path mapping.
 *
 * @returns {Object} An object where keys are aliases and values are the respective paths.
 *
 * @example
 * // Assuming tsconfig.json has:
 * // "compilerOptions": {
 * //   "baseUrl": "./src",
 * //   "paths": {
 * //     "@api/*": ["api/*"]
 * //   }
 * // }
 * // This function will return:
 * // { "@api": "/absolute/path/to/project/src/api" }
 */
const getAliases = (): { [key: string]: string } => {
  return Object.entries(paths).reduce((aliases, [key, value]) => {
    const formattedKey = key.replace('/*', '');
    const formattedValue = join(__dirname, baseUrl, value[0]!.replace('*', ''));
    return {
      ...aliases,
      [formattedKey]: formattedValue,
    };
  }, {});
};

const module_resolver = [
  'module-resolver',
  {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
    alias: getAliases(),
  },
];

export { module_resolver };
