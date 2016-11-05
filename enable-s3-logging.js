var aws = require('aws-sdk')
var fs = require('fs')
var sleep = require('sleep')
var lineReader = require('line-reader')
aws.config.region = 'us-east-1'
aws.config.update({
    signatureVersion: 'v4'
});
var s3 = new aws.S3();
lineReader.eachLine('./bucket_list.txt', function(line, last) {
    if (line.indexOf('None') > -1) {
        bucket = line.substring(0, line.indexOf(","))
        var params = {
            Bucket: bucket,
            BucketLoggingStatus: {
                LoggingEnabled: {
                    TargetBucket: 'logs-us-east-1',
                    TargetGrants: [{
                        Grantee: {
                            Type: 'Group',
                            URI: 'http://acs.amazonaws.com/groups/s3/LogDelivery'
                        },
                        Permission: 'FULL_CONTROL'
                    }],
                    TargetPrefix: bucket + '/'
                }
            }
        }
        s3.putBucketLogging(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data); // successful response
        });
    }
    if (line.indexOf('ap-south-1') > -1) {
        bucket = line.substring(0, line.indexOf(","))
        var params = {
            Bucket: bucket,
            BucketLoggingStatus: {
                LoggingEnabled: {
                    TargetBucket: 'logs-ap-south-1',
                    TargetGrants: [{
                        Grantee: {
                            Type: 'Group',
                            URI: 'http://acs.amazonaws.com/groups/s3/LogDelivery'
                        },
                        Permission: 'FULL_CONTROL'
                    }],
                    TargetPrefix: bucket + '/'
                }
            }
        }
        s3.putBucketLogging(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data); // successful response
        });
    }
    if (line.indexOf('ap-southeast-1') > -1) {
        bucket = line.substring(0, line.indexOf(","))
        var params = {
            Bucket: bucket,
            BucketLoggingStatus: {
                LoggingEnabled: {
                    TargetBucket: 'logs-ap-southeast-1',
                    TargetGrants: [{
                        Grantee: {
                            Type: 'Group',
                            URI: 'http://acs.amazonaws.com/groups/s3/LogDelivery'
                        },
                        Permission: 'FULL_CONTROL'
                    }],
                    TargetPrefix: bucket + '/'
                }
            }
        }
        s3.putBucketLogging(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data); // successful response
        });
    }
});
