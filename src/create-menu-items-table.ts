import { v4 as uuidv4 } from 'uuid';
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

function createMenuItemsTable() {
  const dynamoClient = new AWS.DynamoDB({ region: AWS_S3_REGION })
  const table = {
    TableName: 'MenuItems',
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      },
    ],
    BillingMode: 'PAY_PER_REQUEST',
  };
  dynamoClient.createTable(table, function (err, data) {
    if (err) {
      console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
    }
  });
}

function addMenuItemsForSampleResturant() {
  let restaurantId=uuidv4().substring(0,4);
  console.log('resturantId:', restaurantId)
  const dynamoClient = new AWS.DynamoDB.DocumentClient({ region: AWS_S3_REGION })
  dynamoClient.batchWrite({
    RequestItems: {
      MenuItems: [{
        PutRequest: {
          Item: {
            name: 'sesame chicken',
            imagePath: 'imagePath1.jpg',
            id: uuidv4().substring(0,4),
            description: 'Chicken breast with savory sweet soy sauce glaze topped with sesame seeds.',
            price: 11.99,
            ingredients: [
              {
                name: 'chicken',
                qty: 0.5,
                unit: 'lb',
                ingredientId: 1,
              },
            ],
            itemType: 'entree',
            category: 'poultry',
            notes: 'Specialty item of the restaurant, frequenty goes out of stock, seasonal item',
            ranking: 1,
            restaurantName: 'Sample Resturant',
            restaurantId: restaurantId,
            visible: true,
          }
        }
      },
      {
        PutRequest: {
          Item: {
            name: 'lemon chicken',
            imagePath: 'imagePath2.jpg',
            id: uuidv4().substring(0,4),
            description: 'Chicken breast seasoned with lemons.',
            price: 11.99,
            ingredients: [
              {
                name: 'chicken',
                qty: 0.5,
                unit: 'lb',
                ingredientId: 1,
              },
              {
                name: 'lemons',
                qty: 1,
                unit: 'ea',
                ingredientId: 2,
              },
            ],
            itemType: 'entree',
            category: 'poultry',
            notes: 'Lemons are fanstastic. Allergies to peanuts',
            ranking: 2,
            restaurantName: 'Sample Restaurant',
            restaurantId: restaurantId,
            visible: true,
          }
        }
      },
      {
        PutRequest: {
          Item: {
            name: 'kentucky fried chicken',
            imagePath: 'imagePath3.jpg',
            id: uuidv4().substring(0,4),
            description: 'Oven fried chicken, crunchy',
            price: 13.99,
            ingredients: [
              {
                name: 'chicken',
                qty: 0.5,
                unit: 'lb',
                ingredientId: 1,
              },
            ],
            itemType: 'entree',
            category: 'poultry',
            notes: 'fried, spicy',
            ranking: 3,
            restaurantName: 'Sample Resturant',
            restaurantId: restaurantId,
            visible: true,
          }
        }
      },
      {
        PutRequest: {
          Item: {
            name: 'buffalo wild wings',
            imagePath: 'imagePath4.jpg',
            id: uuidv4().substring(0,4),
            description: 'fried chicken wings seasoned with uber spicy sauce',
            price: 12.99,
            ingredients: [
              {
                name: 'chicken wings',
                qty: 0.5,
                unit: 'lb',
                ingredientId: 7,
              },
            ],
            itemType: 'entree',
            category: 'poultry',
            notes: 'spicy',
            ranking: 8,
            restaurantName: 'Sample Restaurant',
            restaurantId: restaurantId,
            visible: true,
          }
        }
      },
      {
        PutRequest: {
          Item: {
            name: 'egg foo yung',
            imagePath: 'imagePath5.jpg',
            id: uuidv4().substring(0,4),
            description: 'egg with cucumbers. No meat, Soy sauce flavoring',
            price: 9.99,
            ingredients: [
              {
                name: 'eggs',
                qty: 4,
                unit: 'ea',
                ingredientId: '3',
              },
              {
                name: 'cucumbers',
                qty: 3,
                unit: 'ea',
                ingredientId: 4,
              },
            ],
            itemType: 'entree',
            category: 'vegetarian',
            notes: 'vegetarian',
            ranking: 2,
            restaurantName: 'Sample Restaurant',
            restaurantId: restaurantId,
            visible: true,
          }
        }
      },
      {
        PutRequest: {
          Item: {
            name: 'eggplant with fish sauce',
            imagePath: 'imagePath10.jpg',
            id: uuidv4().substring(0,4),
            price: 10.99,
            description: 'eggplant with fish sauce, soy sauce, sweet and savory',
            ingredients: [
              {
                name: 'eggplant',
                qty: 3,
                unit: 'ea',
                ingredientId: '11',
              },
            ],
            itemType: 'entree',
            category: 'vegetarian',
            notes: 'vegetarian',
            ranking: 1,
            restaurantName: 'Sample Restaurant',
            restaurantId: restaurantId,
            visible: true,
          }
        }
      },
      {
        PutRequest: {
          Item: {
            name: 'ceasar salad',
            imagePath: 'imagePath6.jpg',
            id: uuidv4().substring(0,4),
            description:
              'Spinach and lettuce salad with grilled chicken. Ceasar dressing',
            price: 10.99,
            ingredients: [
              {
                name: 'chicken',
                qty: 0.25,
                unit: 'lb',
                ingredientId: 1,
              },
              {
                name: 'lettuce',
                qty: 0.25,
                unit: 'lb',
                ingredientId: 5,
              },
              {
                name: 'spinach',
                qty: 0.25,
                unit: 'lb',
                ingredientId: 6,
              },
            ],
            itemType: 'entree',
            category: 'salad',
            notes: 'healthy',
            ranking: 1,
            restaurantName: 'Sample Restaurant',
            restaurantId: restaurantId,
            visible: true,
          }
        }
      },
      {
        PutRequest: {
          Item: {
            name: 'mediterranean salad',
            imagePath: 'imagePath7.jpg',
            id: uuidv4().substring(0,4),
            description:
              'Spinach and lettuce salad with chicken. mediterranean items added. olives, pickles, grapes',
            price: 10.99,
            ingredients: [
              {
                name: 'chicken',
                qty: 0.25,
                unit: 'lb',
                ingredientId: 1,
              },
              {
                name: 'lettuce',
                qty: 0.25,
                unit: 'lb',
                ingredientId: 5,
              },
              {
                name: 'spinach',
                qty: 0.25,
                unit: 'lb',
                ingredientId: 6,
              },
              {
                name: 'grapes',
                qty: 0.1,
                unit: 'lb',
                ingredientId: 7,
              },
            ],
            itemType: 'entree',
            category: 'salad',
            notes: 'healthy',
            ranking: 3,
            restaurantName: 'Sample Restaurant',
            restaurantId: restaurantId,
            visible: true,
          }
        }
      },
      {
        PutRequest: {
          Item: {
            name: 'ban mi',
            imagePath: 'imagePath8.jpg',
            id: uuidv4().substring(0,4),
            description: 'korean sandwich with pork belly and lettuce',
            price: 13.99,
            ingredients: [
              {
                name: 'pork belly',
                qty: 0.25,
                unit: 'lb',
                ingredientId: 8,
              },
              {
                name: 'lettuce',
                qty: 0.25,
                unit: 'lb',
                ingredientId: 5,
              },
              {
                name: 'bread',
                qty: 1,
                unit: 'bun',
                ingredientId: 9,
              },
            ],
            itemType: 'entree',
            category: 'sandwich',
            notes: 'korean',
            ranking: 3,
            restaurantName: 'Sample Restaurant',
            restaurantId: restaurantId,
            visible: true,
          }
        }
      },
      {
        PutRequest: {
          Item: {
            name: 'hot dog',
            imagePath: 'imagePath11.jpg',
            id: uuidv4().substring(0,4),
            description: 'hot dog',
            price: 5.99,
            ingredients: [
              {
                name: 'hot dog',
                qty: 1,
                unit: 'ea',
                ingredientId: 12,
              },
              {
                name: 'bread',
                qty: 1,
                unit: 'bun',
                ingredientId: 9,
              },
            ],
            itemType: 'entree',
            category: 'sandwich',
            notes: 'kids meal',
            ranking: 6,
            restaurantName: 'Sample Restaurant',
            restaurantId: restaurantId,
            visible: true,
          }
        }
      },
      {
        PutRequest: {
          Item: {
            name: 'steak',
            imagePath: 'imagePath9.jpg',
            id: uuidv4().substring(0,4),
            description: 'medium rare steak flavored with chicago seasoning',
            price: 19.99,
            ingredients: [
              {
                name: 'steak',
                qty: 0.5,
                unit: 'lb',
                ingredientId: 10,
              },
            ],
            itemType: 'entree',
            category: 'beef',
            notes: 'good stuff',
            ranking: 1,
            restaurantName: 'Sample Restaurant',
            restaurantId: restaurantId,
            visible: true,
          }
        }
      }]
    }
  }).promise()
    .then(data => console.log('data attributes: ', data.Attributes))
    .catch(console.error);
}

const run = async function () {
  console.log('aws_region:', AWS_S3_REGION);
  //addMenuItemsForSampleResturant();
}
run();