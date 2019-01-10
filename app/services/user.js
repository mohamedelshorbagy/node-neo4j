import db from '../../config/db';



export const services = {
    all(name) {
        return db.run(`match (n:Person { name: "${name}" })-[r]-(b) return b,r`);
    }
}

