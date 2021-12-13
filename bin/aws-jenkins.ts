#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AwsJenkinsStack } from '../lib/aws-jenkins-stack';

const app = new cdk.App();
new AwsJenkinsStack(app, 'AwsJenkinsStack');
