import * as dotenv from 'dotenv';
dotenv.config()
const AWS_ACCESS_KEY_ID = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
//const AWS_S3_BUCKET = process.env.REACT_APP_AWS_S3_BUCKET;
const AWS_S3_REGION = process.env.REACT_APP_AWS_S3_REGION;
var AWS = require('aws-sdk');
AWS.config.update({
  region: AWS_S3_REGION,
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

export function getMenuItemsByRestaurant(restaurantId: string){
    const dynamoDB = new AWS.DynamoDB.DocumentClient()
    return dynamoDB.query({
        TableName:'MenuItems',
        IndexName:'restaurantId-index',
        KeyConditionExpression: 'restaurantId = :restaurantId',
        ExpressionAttributeValues:{
            ':restaurantId': restaurantId
        }
    }).promise().then((menuItems) =>{
        return menuItems.Items;
    }).catch(console.error);
}

export function getMenuItemsByCategory(restaurantId: string, category: string){
    const dynamoDB = new AWS.DynamoDB.DocumentClient()
    return dynamoDB.query({
        TableName:'MenuItems',
        IndexName:'restaurantId-index',
        KeyConditionExpression: 'restaurantId = :restaurantId',
        ExpressionAttributeValues:{
            ':restaurantId': restaurantId
        }
    }).promise().then((menuItems) =>{
        let allItems=menuItems.Items;
        let matchingCategoryItems=[];
        for (var item of allItems){
            if (item.category == category){
                console.log("matching item:", item)
                matchingCategoryItems.push(item);        
            }
        }    
        return matchingCategoryItems    
    }).catch(console.error);
}

export function getMenuItemsByItemType(restaurantId: string, itemType:string){
    const dynamoDB = new AWS.DynamoDB.DocumentClient()
    return dynamoDB.query({
        TableName:'MenuItems',
        IndexName:'restaurantId-index',
        KeyConditionExpression: 'restaurantId = :restaurantId',
        ExpressionAttributeValues:{
            ':restaurantId': restaurantId
        }
    }).promise().then((menuItems) =>{
        let allItems=menuItems.Items;
        let matchingItemType=[];
        for (var item of allItems){
            if (item.itemType == itemType){
                matchingItemType.push(item);    
            }        
        }
        return matchingItemType    
    }).catch(console.error);
}
