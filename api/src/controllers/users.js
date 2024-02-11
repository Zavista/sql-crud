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