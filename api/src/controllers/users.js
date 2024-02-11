import { db } from "../config/db.js";


//SELECTs all users
export const getUsers = (req, res) => {
    const sql = "SELECT * FROM users";
        db.query(sql, (err, result) => {
            if (err) {
                res.status(500).json({message: err.message});
            }
            res.status(200).json(result);
    })
}


//ADDs a user
export const addUser = (req, res) => {
    let { name, email, phone, birthdate } = req.body;
    const sql = `INSERT INTO users('name', 'email', 'phone', 'birthdate') VALUES(${name}, ${email}, ${phone}, ${birthdate})`;

    db.query(sql, (err) => {
        if (err) {
            res.status(500).json({message: err.message});
        }
        res.status(200).json("User has been successfully created.");
    })


}