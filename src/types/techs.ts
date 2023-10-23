export type TechType =
  | 'analytics'
  | 'api'
  | 'app'
  | 'ci'
  | 'cloud'
  | 'db'
  | 'etl'
  | 'framework'
  | 'hosting'
  | 'language'
  | 'messaging'
  | 'monitoring'
  | 'network'
  | 'saas'
  | 'storage'
  | 'tool';

export type AllowedKeys =
  | 'adminer'
  | 'adobe'
  | 'adobecommercecloud'
  | 'adyen'
  | 'airbyte'
  | 'airtable'
  | 'algolia'
  | 'alibabacloud'
  | 'alpinejs'
  | 'amplitude'
  | 'angular'
  | 'ansible'
  | 'apache_airflow'
  | 'apache_cassandra'
  | 'apache_couchdb'
  | 'apache_flink'
  | 'apache_hadoop'
  | 'apache_hive'
  | 'apache_iceberg'
  | 'apache_kafka'
  | 'apache_solr'
  | 'apache_spark'
  | 'apache_storm'
  | 'apache_thrift'
  | 'apiplatform'
  | 'appveyor'
  | 'assemble'
  | 'astro'
  | 'atlasgo'
  | 'atlassian'
  | 'auth0'
  | 'aws.amplifyhosting'
  | 'aws.apigateway'
  | 'aws.athena'
  | 'aws.cloudformation'
  | 'aws.cloudfront'
  | 'aws.cloudsearch'
  | 'aws.cloudwatch'
  | 'aws.codebuild'
  | 'aws.documentdb'
  | 'aws.dynamodb'
  | 'aws.ebs'
  | 'aws.ec2'
  | 'aws.ecr'
  | 'aws.ecs'
  | 'aws.efs'
  | 'aws.eks'
  | 'aws.elasticache'
  | 'aws.fargate'
  | 'aws.glacier'
  | 'aws.glue'
  | 'aws.kafka'
  | 'aws.kinesis'
  | 'aws.kms'
  | 'aws.lambda'
  | 'aws.lightsail'
  | 'aws.memorydb'
  | 'aws.mq'
  | 'aws.neptune'
  | 'aws.opensearch'
  | 'aws.polly'
  | 'aws.rds'
  | 'aws.redshift'
  | 'aws.rekognition'
  | 'aws.s3'
  | 'aws.sagemaker'
  | 'aws.secretsmanager'
  | 'aws.sfn'
  | 'aws.sns'
  | 'aws.sqs'
  | 'aws.timestream'
  | 'aws.translate'
  | 'aws'
  | 'azure.aks'
  | 'azure.ci'
  | 'azure.cosmosdb'
  | 'azure.mariadb'
  | 'azure.mysql'
  | 'azure.postgres'
  | 'azure.redis'
  | 'azure.sql'
  | 'azure'
  | 'bash'
  | 'betterstack'
  | 'bigcommerce'
  | 'bitbucket'
  | 'blackfire'
  | 'blitzjs'
  | 'bootstrap'
  | 'box'
  | 'brevo'
  | 'browserstack'
  | 'bytebase'
  | 'c'
  | 'caddy'
  | 'checkov'
  | 'chef'
  | 'circleci'
  | 'cirrusci'
  | 'clickhouse'
  | 'cloudflare.pages'
  | 'cloudflare.workers'
  | 'cloudflare'
  | 'cockroachdb'
  | 'codecov'
  | 'codesandboxci'
  | 'commercetools'
  | 'consul'
  | 'contenful'
  | 'couchbase'
  | 'coveralls'
  | 'cplusplus'
  | 'cratedb'
  | 'crowdin'
  | 'csharp'
  | 'css'
  | 'cypressci'
  | 'd3js'
  | 'dart'
  | 'databricks'
  | 'datadog'
  | 'dataiku'
  | 'datastax'
  | 'deferrun'
  | 'deno'
  | 'denodeploy'
  | 'dependabot'
  | 'digitalocean'
  | 'discord'
  | 'discourse'
  | 'docker'
  | 'doctrinephp'
  | 'docusaurus'
  | 'docusign'
  | 'dropbox'
  | 'drupal'
  | 'dynatrace'
  | 'elasticcloud'
  | 'elasticsearch'
  | 'elasticstack'
  | 'electron'
  | 'eleventy'
  | 'elixir'
  | 'emberjs'
  | 'equinix'
  | 'esbuild'
  | 'eslint'
  | 'expodev'
  | 'expojs'
  | 'express'
  | 'fabric'
  | 'facebook'
  | 'fastify'
  | 'fastly'
  | 'figma'
  | 'firebase.firestore'
  | 'firebase'
  | 'flyio'
  | 'flyway'
  | 'gatsby'
  | 'gcp.aiplatform'
  | 'gcp.appengine'
  | 'gcp.artifactregistry'
  | 'gcp.bigquery'
  | 'gcp.bigtable'
  | 'gcp.cloudbuild'
  | 'gcp.cloudrun'
  | 'gcp.containerregistry'
  | 'gcp.dataflow'
  | 'gcp.dataproc'
  | 'gcp.datastore'
  | 'gcp.dialogflow'
  | 'gcp.dns'
  | 'gcp.functions'
  | 'gcp.gce'
  | 'gcp.gcs'
  | 'gcp.gke'
  | 'gcp.kms'
  | 'gcp.language'
  | 'gcp.logging'
  | 'gcp.maps'
  | 'gcp.memorystore'
  | 'gcp.pubsub'
  | 'gcp.secretmanager'
  | 'gcp.spanner'
  | 'gcp.speech'
  | 'gcp.sql'
  | 'gcp.tasks'
  | 'gcp.translate'
  | 'gcp.vision'
  | 'gcp'
  | 'ghost'
  | 'gitbook'
  | 'gitguardian'
  | 'github.actions'
  | 'github.pages'
  | 'github'
  | 'gitlab.ci'
  | 'gitlab'
  | 'goacmelego'
  | 'golang'
  | 'golangcilint'
  | 'googleanalytics'
  | 'grafana'
  | 'gridsome'
  | 'haproxy'
  | 'hashicorp_vault'
  | 'healthchecksio'
  | 'helm'
  | 'heroku'
  | 'hexojs'
  | 'hotjar'
  | 'html'
  | 'httpd'
  | 'hubspot'
  | 'huggingface'
  | 'hugo'
  | 'hyperdx'
  | 'hypertune'
  | 'ibmcloud'
  | 'iftt'
  | 'influxdb'
  | 'intercom'
  | 'intuit'
  | 'java'
  | 'javascript'
  | 'jekyll'
  | 'jenkins'
  | 'jest'
  | 'jira'
  | 'joomla'
  | 'kibana'
  | 'klarna'
  | 'klaviyo'
  | 'koa'
  | 'koalaanalytics'
  | 'kong'
  | 'kotlin'
  | 'koyeb'
  | 'kubernetes'
  | 'laravel'
  | 'launchdarkly'
  | 'lemonsqueezy'
  | 'lighthouse'
  | 'linear'
  | 'liquibase'
  | 'logrocket'
  | 'logsnag'
  | 'logstash'
  | 'magento'
  | 'mailchimp'
  | 'mailgun'
  | 'mailhog'
  | 'mailjet'
  | 'mariadb'
  | 'matomo'
  | 'meilisearch'
  | 'meilisearchcloud'
  | 'memcached'
  | 'meteorjs'
  | 'mithriljs'
  | 'mixpanel'
  | 'mongodb'
  | 'mongodbatlas'
  | 'mongoexpress'
  | 'mysql'
  | 'nats'
  | 'neo4j'
  | 'netlify'
  | 'newrelic'
  | 'nextcloud'
  | 'nextjs'
  | 'nginx'
  | 'nodejs'
  | 'notion'
  | 'nuxtjs'
  | 'okta'
  | 'onlineornot'
  | 'openai'
  | 'optimizely'
  | 'oraclecloud'
  | 'ovh.database'
  | 'ovh.dedicated'
  | 'ovh.kubernetes'
  | 'ovh.storage'
  | 'ovh.vps'
  | 'ovh'
  | 'pagerduty'
  | 'papertrail'
  | 'paypal'
  | 'percona'
  | 'php'
  | 'phppest'
  | 'phpstan'
  | 'phpunit'
  | 'pingdom'
  | 'pirschanalytics'
  | 'placekit'
  | 'planetscale'
  | 'platformsh'
  | 'plausible'
  | 'playwright'
  | 'postgresql'
  | 'posthog'
  | 'postman'
  | 'postmark'
  | 'powershell'
  | 'preactjs'
  | 'prestashop'
  | 'prettier'
  | 'prisma'
  | 'prismacloud'
  | 'puppeteer'
  | 'python'
  | 'qovery.cluster'
  | 'qovery.database'
  | 'qovery'
  | 'rabbitmq'
  | 'react'
  | 'reactemail'
  | 'redis'
  | 'redwoodjs'
  | 'relativeci'
  | 'render'
  | 'renovate'
  | 'replit.database'
  | 'replit.postgres'
  | 'replit'
  | 'resend'
  | 'rethinkdb'
  | 'rollbar'
  | 'rollup'
  | 'ruby'
  | 'rust'
  | 'salesforce'
  | 'sanity'
  | 'sap'
  | 'sas'
  | 'scaleway.container'
  | 'scaleway.database'
  | 'scaleway.documentdb'
  | 'scaleway.elasticmetal'
  | 'scaleway.function'
  | 'scaleway.kubernetes'
  | 'scaleway.mq'
  | 'scaleway.redis'
  | 'scaleway.secretmanager'
  | 'scaleway.storage'
  | 'scaleway'
  | 'scoutapm'
  | 'scss'
  | 'sendgrid'
  | 'sentry'
  | 'sequelize'
  | 'servicenow'
  | 'shopify.hydrogen'
  | 'shopify'
  | 'sitecore.xmlcloud'
  | 'sitecore'
  | 'slack'
  | 'snowflake'
  | 'snyk'
  | 'socketio'
  | 'solidjs'
  | 'sonarcloud'
  | 'sonarlint'
  | 'sonarqube'
  | 'splitio'
  | 'splunk'
  | 'sqlite'
  | 'sqreen'
  | 'squarespace'
  | 'squareup'
  | 'storybook'
  | 'strapi'
  | 'stripe'
  | 'styleci'
  | 'stylelint'
  | 'supabase.functions'
  | 'supabase.postgres'
  | 'supabase.realtime'
  | 'supabase.storage'
  | 'supabase'
  | 'sveltejs'
  | 'swift'
  | 'symfony'
  | 'tailscale'
  | 'tailwind'
  | 'teamcity'
  | 'teamspeak'
  | 'telegraf'
  | 'telegram'
  | 'tencentcloud'
  | 'tensorflow'
  | 'terraform'
  | 'terragrunt'
  | 'tinybird'
  | 'traefik'
  | 'travisci'
  | 'trufflesecurity'
  | 'twigphp'
  | 'twilio'
  | 'twitter'
  | 'typescript'
  | 'typesense'
  | 'typesensecloud'
  | 'upstash.kafka'
  | 'upstash.qstash'
  | 'upstash.redis'
  | 'upstash'
  | 'vale'
  | 'vercel.ai'
  | 'vercel.analytics'
  | 'vercel.blob'
  | 'vercel.edge'
  | 'vercel.kv'
  | 'vercel.postgres'
  | 'vercel'
  | 'veriff'
  | 'vialink'
  | 'vite'
  | 'vue'
  | 'webflow'
  | 'webpack'
  | 'wiz'
  | 'woocommerce'
  | 'wordpress'
  | 'yii2'
  | 'yii2'
  | 'yousign'
  | 'zapier'
  | 'zendesk'
  | 'zookeeper'
  | 'zoom'
  | 'zuora';

export interface TechItem {
  key: AllowedKeys;
  name: string;
  type: TechType;
}
