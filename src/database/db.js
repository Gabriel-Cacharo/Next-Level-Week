const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {
//     //Criar uma tabela com comandos SQL

//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)    

//     //Inserir dados

//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
//         "Collectoria",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afteInsertData(err) {
//         if(err) {
//             return console.log(err) 
//         }

//         console.log("Cadastrado com sucesso !")
//         console.log(this)
//     }

//     // db.run(query, values, afteInsertData)

//     //Consultar dados
    
//     db.all(`SELECT * FROM places`, function(err, rows) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//     })
    
//     //Deletar dados da tabela
    
//     db.run(`DELETE FROM places WHERE id = ?`, [12], function(err) {
//         if(err) {
//             console.log(err)
//         }
        
//         console.log("Registro deletado com sucesso !")
//     })
// })