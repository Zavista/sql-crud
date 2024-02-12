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
    const q =
      "INSERT INTO users(`name`, `email`, `phone`, `birthdate`) VALUES(?)";
  
    const values = [
      req.body.name,
      req.body.email,
      req.body.phone,
      req.body.birthdate,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      res.status(200).json("User has been successfully added.");
    });
  };

//UPDATEs a user
export const updateUser = (req, res) => {
    const sql = "UPDATE users SET `name` = ?, `email` = ?, `phone` = ?, `birthdate` = ? WHERE `id` = ?";

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.birthdate,
      ];
    
    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);
    
        res.status(200).json("User has been successfully updated.");
    });
}

//DELETEs a user
export const deleteUser = (req, res) => {
    const sql = "DELETE FROM users WHERE `id` = ?";
    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);
    
        res.status(200).json("User has been successfully deleted.");
    })
}