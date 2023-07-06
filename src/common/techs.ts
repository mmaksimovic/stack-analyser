import type { AllowedKeys, TechItem } from '../types/techs.js';

export const list: TechItem[] = [
  { key: 'algolia', name: 'Algolia', type: 'sass' },
  { key: 'alibabacloud', name: 'Alibaba Cloud', type: 'hosting' },
  { key: 'angular', name: 'Angular', type: 'language' },
  { key: 'appveyor', name: 'AppVeyor', type: 'ci' },
  { key: 'auth0', name: 'Auth0', type: 'sass' },
  { key: 'aws', name: 'AWS', type: 'hosting' },
  { key: 'azure', name: 'Azure', type: 'hosting' },
  { key: 'azure.ci', name: 'AzureCi', type: 'ci' },
  { key: 'bash', name: 'Bash', type: 'language' },
  { key: 'bootstrap', name: 'Bootstrap', type: 'tool' },
  { key: 'browserstack', name: 'Browserstack', type: 'ci' },
  { key: 'c', name: 'C', type: 'language' },
  { key: 'caddy', name: 'Caddy', type: 'app' },
  { key: 'cassandra', name: 'Cassandra', type: 'db' },
  { key: 'circleci', name: 'CircleCi', type: 'ci' },
  { key: 'cirrusci', name: 'CirrusCi', type: 'ci' },
  { key: 'couchbase', name: 'Couchbase', type: 'db' },
  { key: 'cockroachdb', name: 'CockroachDB', type: 'db' },
  { key: 'cloudflare', name: 'Cloudflare', type: 'hosting' },
  { key: 'codesandboxci', name: 'CodesandboxCI', type: 'ci' },
  { key: 'couchbase', name: 'Couchbase', type: 'db' },
  { key: 'cplusplus', name: 'C++', type: 'language' },
  { key: 'csharp', name: 'C#', type: 'language' },
  { key: 'css', name: 'CSS', type: 'language' },
  { key: 'cypressci', name: 'CypressCI', type: 'ci' },
  { key: 'dart', name: 'Dart', type: 'language' },
  { key: 'datadog', name: 'Datadog', type: 'sass' },
  { key: 'dependabot', name: 'Dependabot', type: 'ci' },
  { key: 'digitalocean', name: 'Digital Ocean', type: 'hosting' },
  { key: 'docker', name: 'Docker', type: 'tool' },
  { key: 'aws.dynamodb', name: 'DynamoDB', type: 'db' },
  { key: 'elasticloud', name: 'Elastic Cloud', type: 'sass' },
  { key: 'elasticsearch', name: 'Elasticsearch', type: 'db' },
  { key: 'elasticstack', name: 'ElasticStack', type: 'hosting' },
  { key: 'elixir', name: 'Elixir', type: 'language' },
  { key: 'esbuild', name: 'Esbuild', type: 'tool' },
  { key: 'eslint', name: 'Eslint', type: 'tool' },
  { key: 'expodev', name: 'Expo.dev', type: 'hosting' },
  { key: 'express', name: 'Express', type: 'tool' },
  { key: 'fastify', name: 'Fastify', type: 'tool' },
  { key: 'firebase', name: 'Firebase', type: 'hosting' },
  { key: 'flyio', name: 'Fly.io', type: 'hosting' },
  { key: 'gcp', name: 'GCP', type: 'hosting' },
  { key: 'gcp.bigquery', name: 'Big Query', type: 'db' },
  { key: 'gcp.cloudrun', name: 'Cloud Run', type: 'hosting' },
  { key: 'gcp.pubsub', name: 'PubSub', type: 'messaging' },
  { key: 'gcp.gce', name: 'Compute Engine', type: 'hosting' },
  { key: 'gcp.gcs', name: 'Cloud Storage', type: 'hosting' },
  { key: 'gcp.gke', name: 'GKE', type: 'hosting' },
  { key: 'gcp.sql', name: 'Cloud SQL', type: 'db' },
  { key: 'gitlab', name: 'Gitlab', type: 'tool' },
  { key: 'gitlab.ci', name: 'Gitlab CI', type: 'ci' },
  { key: 'github', name: 'Github', type: 'sass' },
  { key: 'github.actions', name: 'Github Actions', type: 'ci' },
  { key: 'github.pages', name: 'Github Pages', type: 'hosting' },
  { key: 'golang', name: 'Go', type: 'language' },
  { key: 'helm', name: 'Helm', type: 'tool' },
  { key: 'heroku', name: 'Heroku', type: 'hosting' },
  { key: 'hotjar', name: 'Hotjar', type: 'sass' },
  { key: 'html', name: 'HTML', type: 'language' },
  { key: 'httpd', name: 'Httpd', type: 'app' },
  { key: 'influxdb', name: 'Influxdb', type: 'db' },
  { key: 'java', name: 'Java', type: 'language' },
  { key: 'javascript', name: 'JavaScript', type: 'language' },
  { key: 'jenkins', name: 'Jenkins', type: 'ci' },
  { key: 'jest', name: 'Jest', type: 'tool' },
  { key: 'jira', name: 'Jira', type: 'sass' },
  { key: 'kibana', name: 'Kibana', type: 'app' },
  { key: 'koa', name: 'Koa', type: 'tool' },
  { key: 'kotlin', name: 'Kotlin', type: 'language' },
  { key: 'kubernetes', name: 'Kubernetes', type: 'hosting' },
  { key: 'logrocket', name: 'LogRocket', type: 'sass' },
  { key: 'mailchimp', name: 'Mailchimp', type: 'sass' },
  { key: 'mailjet', name: 'Mailjet', type: 'sass' },
  { key: 'mariadb', name: 'MariaDB', type: 'db' },
  { key: 'memcached', name: 'Memcached', type: 'db' },
  { key: 'mongodb', name: 'MongoDB', type: 'db' },
  { key: 'mongodbatlas', name: 'MongoDB Atlas', type: 'db' },
  { key: 'mysql', name: 'Mysql', type: 'db' },
  { key: 'neo4j', name: 'Neo4J', type: 'tool' },
  { key: 'netlify', name: 'Netlify', type: 'hosting' },
  { key: 'newrelic', name: 'New Relic', type: 'sass' },
  { key: 'nginx', name: 'Nginx', type: 'app' },
  { key: 'nodejs', name: 'NodeJS', type: 'language' },
  { key: 'oraclecloud', name: 'Oracle Cloud', type: 'hosting' },
  { key: 'ovh', name: 'OVH', type: 'hosting' },
  { key: 'pagerduty', name: 'Pagerduty', type: 'tool' },
  { key: 'percona', name: 'Percona', type: 'db' },
  { key: 'php', name: 'PHP', type: 'language' },
  { key: 'pingdom', name: 'Pingdom', type: 'sass' },
  { key: 'platformsh', name: 'Platform.sh', type: 'hosting' },
  { key: 'postgresql', name: 'Postgresql', type: 'db' },
  { key: 'powershell', name: 'Powershell', type: 'language' },
  { key: 'prettier', name: 'Prettier', type: 'tool' },
  { key: 'prisma', name: 'Prisma', type: 'tool' },
  { key: 'prismacloud', name: 'PrismaCloud', type: 'tool' },
  { key: 'python', name: 'Python', type: 'language' },
  { key: 'rabbitmq', name: 'RabbitMQ', type: 'messaging' },
  { key: 'react', name: 'React', type: 'language' },
  { key: 'reactemail', name: 'React Email', type: 'tool' },
  { key: 'redis', name: 'Redis', type: 'db' },
  { key: 'relativeci', name: 'RelativeCI', type: 'ci' },
  { key: 'render', name: 'Render', type: 'hosting' },
  { key: 'renovate', name: 'Renovate', type: 'ci' },
  { key: 'rollup', name: 'Rollup', type: 'tool' },
  { key: 'ruby', name: 'Ruby', type: 'language' },
  { key: 'rust', name: 'Rust', type: 'language' },
  { key: 'scss', name: 'SCSS', type: 'language' },
  { key: 'scaleway', name: 'Scaleway', type: 'hosting' },
  { key: 'sentry', name: 'Sentry', type: 'sass' },
  { key: 'sequelize', name: 'Sequelize', type: 'tool' },
  { key: 'shell', name: 'Shell', type: 'language' },
  { key: 'snowflake', name: 'Snowflake', type: 'db' },
  { key: 'snyk', name: 'Snyk', type: 'sass' },
  { key: 'slack', name: 'Slack', type: 'sass' },
  { key: 'socketio', name: 'Socket.io', type: 'tool' },
  { key: 'sqreen', name: 'Sqreen', type: 'sass' },
  { key: 'sqlite', name: 'Sqlite', type: 'db' },
  { key: 'storybook', name: 'Storybook', type: 'tool' },
  { key: 'strapi', name: 'Strapi', type: 'tool' },
  { key: 'styleci', name: 'StyleCi', type: 'ci' },
  { key: 'stylelint', name: 'Stylelint', type: 'tool' },
  { key: 'swift', name: 'Swift', type: 'language' },
  { key: 'tailwind', name: 'Tailwind', type: 'tool' },
  { key: 'teamcity', name: 'TeamCity', type: 'ci' },
  { key: 'terraform', name: 'Terraform', type: 'tool' },
  { key: 'terragrunt', name: 'Terragrunt', type: 'tool' },
  { key: 'traefik', name: 'Traefik', type: 'tool' },
  { key: 'travisci', name: 'TravisCI', type: 'ci' },
  { key: 'typescript', name: 'Typescript', type: 'language' },
  { key: 'vault', name: 'Vault', type: 'db' },
  { key: 'vercel', name: 'Vercel', type: 'hosting' },
  { key: 'vite', name: 'Vite', type: 'tool' },
  { key: 'vue', name: 'Vue', type: 'language' },
  { key: 'webpack', name: 'Webpack', type: 'tool' },
  { key: 'zapier', name: 'Zapier', type: 'sass' },
  { key: 'zookeeper', name: 'Zookeeper', type: 'app' },
  { key: 'zoom', name: 'Zoom', type: 'sass' },
];

export const listIndexed: Record<AllowedKeys, TechItem> = {} as any;
Object.values(list).forEach((v) => {
  listIndexed[v.key] = v;
});

export const nameToKey: Record<string, AllowedKeys> = {} as any;
Object.values(list).forEach((v) => {
  nameToKey[v.name] = v.key;
});
