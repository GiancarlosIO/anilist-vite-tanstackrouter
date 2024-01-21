import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://graphql.anilist.co',
  documents: './src/**/*.graphql',
  generates: {
    'src/__generated__/types.ts': { plugins: ['typescript'] },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: '__generated__/types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
