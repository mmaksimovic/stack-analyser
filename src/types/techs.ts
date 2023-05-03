export type TechType =
  | 'app'
  | 'ci'
  | 'db'
  | 'hosting'
  | 'language'
  | 'messaging'
  | 'network'
  | 'sass'
  | 'tool';

export type AllowedKeys =
  | 'algolia'
  | 'alibabacloud'
  | 'angular'
  | 'aws'
  | 'azure'
  | 'bash'
  | 'bootstrap'
  | 'browserstack'
  | 'c'
  | 'caddy'
  | 'cassandra'
  | 'circleci'
  | 'codesandboxci'
  | 'couchbase'
  | 'cplusplus'
  | 'csharp'
  | 'css'
  | 'cypressci'
  | 'dart'
  | 'datadog'
  | 'dependabot'
  | 'digitalocean'
  | 'docker'
  | 'elasticloud'
  | 'elasticsearch'
  | 'elasticstack'
  | 'elixir'
  | 'esbuild'
  | 'eslint'
  | 'expodev'
  | 'express'
  | 'fastify'
  | 'flyio'
  | 'gce'
  | 'gcp'
  | 'github'
  | 'githubactions'
  | 'githubpages'
  | 'golang'
  | 'helm'
  | 'hotjar'
  | 'html'
  | 'httpd'
  | 'influxdb'
  | 'java'
  | 'javascript'
  | 'jenkins'
  | 'jest'
  | 'jira'
  | 'kibana'
  | 'koa'
  | 'kotlin'
  | 'kubernetes'
  | 'logrocket'
  | 'mailchimp'
  | 'mailjet'
  | 'mariadb'
  | 'memcached'
  | 'mongodb'
  | 'mongodbatlas'
  | 'mysql'
  | 'neo4j'
  | 'netlify'
  | 'newrelic'
  | 'nginx'
  | 'nodejs'
  | 'oraclecloud'
  | 'ovh'
  | 'percona'
  | 'php'
  | 'pingdom'
  | 'postgresql'
  | 'powershell'
  | 'prettier'
  | 'prisma'
  | 'pubsub'
  | 'python'
  | 'rabbitmq'
  | 'react'
  | 'redis'
  | 'relativeci'
  | 'render'
  | 'renovate'
  | 'rollup'
  | 'ruby'
  | 'rust'
  | 'scss'
  | 'sentry'
  | 'sequelize'
  | 'shell'
  | 'slack'
  | 'socketio'
  | 'sqreen'
  | 'storybook'
  | 'strapi'
  | 'stylelint'
  | 'swift'
  | 'tailwind'
  | 'teamcity'
  | 'terraform'
  | 'terragrunt'
  | 'traefik'
  | 'travisci'
  | 'typescript'
  | 'vault'
  | 'vercel'
  | 'vite'
  | 'vue'
  | 'webpack'
  | 'zapier'
  | 'zookeeper'
  | 'zoom';

export interface TechItem {
  key: AllowedKeys;
  name: string;
  type: TechType;
}
