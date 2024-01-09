import {Pool} from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'thathat-its',
    password: 'secret',
    port: 5432
})

export default async function dbConnect(){
    console.log("in dbConnect function")
    await pool.connect((err, client, release) => {
        if(err){
            console.error("Error in connection: ", err.stack)
        }
        client.query("SELECT * from todo", (err, result)=>{
            release();
            if(err){
                return console.error("Error in execution", err.stack)
            }
            console.log("Data recieved: ", result.rows)
        })

    })
}