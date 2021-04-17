import { DynamoDBClient, DynamoDBClientConfig,
         PutItemCommand, PutItemInput } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';


export async function putObject(obj: any, tableName: string): Promise<void> {
  const command = {
    TableName: tableName,
    Item: marshall(obj),
  } as PutItemInput;
  await dbclient.send(new PutItemCommand(command));
}
  
  const config = { region: 'us-east-1'} as DynamoDBClientConfig;
  const dbclient = new DynamoDBClient(config);
