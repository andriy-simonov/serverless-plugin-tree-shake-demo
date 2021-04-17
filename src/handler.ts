import * as ddb from './services/dynamo-db-service';

export async function loadToTable(event, context) {
    ddb.putObject({ id: 1, name: 'John', surname: 'Smith' }, 'customers')
}