import { register } from '../../rules.js';

register({
  tech: 'postgresql',
  dependencies: [
    { type: 'npm', name: 'pg' },
    { type: 'npm', name: /postgres/, example: '@mikro-orm/postgresql' },
    { type: 'docker', name: /postgres/, example: 'postgres:0.0.0' },
    { type: 'rust', name: 'postgres' },
    { type: 'ruby', name: 'pg' },
    {
      type: 'deno',
      name: /\/x\/postgres@/,
      example: 'https://deno.land/x/postgres@v0.17.0/mod.ts',
    },
  ],
});
