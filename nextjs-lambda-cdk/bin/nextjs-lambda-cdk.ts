#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { NextjsLambdaCdkStack } from '../lib/nextjs-lambda-cdk-stack';

const app = new cdk.App();
new NextjsLambdaCdkStack(app, 'NextjsLambdaCdkStack',{
    env: {
        account : process.env.CDK_DEFAULT_ACCOUNT,
        region : 'us-east-1'
    }
});
