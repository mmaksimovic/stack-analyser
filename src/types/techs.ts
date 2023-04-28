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
  | 'digitalocean'
  | 'docker'
  | 'elasticloud'
  | 'elasticsearch'
  | 'elixir'
  | 'eslint'
  | 'expodev'
  | 'express'
  | 'fastify'
  | 'flyio'
  | 'gce'
  | 'gcp'
  | 'github'
  | 'githubactions'
  | 'golang'
  | 'hotjar'
  | 'html'
  | 'httpd'
  | 'influxdb'
  | 'java'
  | 'javascript'
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
  | 'ruby'
  | 'rust'
  | 'scss'
  | 'sentry'
  | 'sequelize'
  | 'shell'
  | 'slack'
  | 'socketio'
  | 'sqreen'
  | 'stylelint'
  | 'swift'
  | 'tailwind'
  | 'terraform'
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
