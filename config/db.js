import Config from './config';
import * as neo4j from 'neo4j-driver';
const ne4jDB = neo4j.v1;


let session;


const driver = ne4jDB.driver("bolt://localhost:7687", ne4jDB.auth.basic('neo4j', 'root'));
session = driver.session();

if(session) {
    console.log('Database Connected');
}







export default session;