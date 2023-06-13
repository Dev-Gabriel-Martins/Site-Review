import sqlite3 from 'sqlite3'
//import { openDb } from '../configDB.js';


let db = new sqlite3.Database('database.db');


export async  function login(req, res) {

    const user = req.body;
    const query = 'SELECT * FROM user WHERE nickname = ? AND senha = ?';
    
    
        // openDb().then(db=>{
        //     db.all('SELECT * FROM user WHERE nickname = ? AND senha = ?', [user.nickname, user.senha])
        //     .then(user=> res.json(user) );
        // });
    



     db.get(query, [user.nickname, user.senha], (err, row) => {

        if (err) {
            res.status(500);
            res.json({
                "statusCode": 500,
                "msg":"Erro no servidor"
            })

        } else if (!row) {
            res.status(401);
            res.json({
                "statusCode": 401,
                "msg":"Credenciais inválidas"
            })
        } else {
            res.status(200);
            let verificador = true
            res.json({
                "statusCode": 200,
                "msg":"Login bem-sucedido"
            })
        }
    });
            
}
