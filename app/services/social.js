import db from '../../config/db';



export const services = {
    all(name) {
        /* insert your interaction & logic with db here */
        return db
            .run(`match (n: Social { name: "${name}" })-[r: Joined]-(b) return b`)
    }
}
