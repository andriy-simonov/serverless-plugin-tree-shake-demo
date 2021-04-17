import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: 'etl',
  frameworkVersion: '2',
  variablesResolutionMode: '20210219',
  configValidationMode: 'warn',
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    lambdaHashingVersion: 20201221,
    logRetentionInDays: 3,
    deploymentBucket: {
      name: '${self:custom.deployment.bucket}',
      maxPreviousDeploymentArtifacts: 1
    },
    profile: 's3local',
    stage: '${opt:stage, "local"}',
    region: '${self:provider.environment.region}',
    stackName: '${self:service}-${opt:stage, self:provider.stage, "local"}',
    environment: { region: 'us-east-1' },
    versionFunctions: false
  },
  functions: {
    loadFromButcketToTable: {
      handler: 'src/handler.loadToTable'
    }
  },
  resources: {
    Resources: {}
  },
  custom: { deployment: { bucket: 'deployment-bucket' } },
  plugins: [
    'serverless-plugin-typescript',
    'serverless-plugin-tree-shake',
    'serverless-offline'
  ]
};

module.exports = serverlessConfiguration;