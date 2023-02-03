-- SQLite
-- SELECT * FROM users;
-- DELETE FROM creditCards;
SELECT * FROM creditCards;

-- INSERT INTO users (name, email, password)
-- VALUES ("Ivirson Daltro", "ivi.daltro@gmail.com", "123456");


UPDATE users SET avatar = null WHERE id = "f7cddfb1-d55e-45bc-bde0-14041142301c"

-- DROP TABLE IF EXISTS creditCards;
-- DROP TABLE IF EXISTS flags;

-- INSERT INTO flags (imageName, createdAt, updatedAt)
-- VALUES 
--     ("american-express", "2023-02-02 19:33:32.602 +00:00", "2023-02-02 19:33:32.602 +00:00"),
--     ("elo", "2023-02-02 19:33:32.602 +00:00", "2023-02-02 19:33:32.602 +00:00"),
--     ("hipercard", "2023-02-02 19:33:32.602 +00:00", "2023-02-02 19:33:32.602 +00:00"),
--     ("mastercard", "2023-02-02 19:33:32.602 +00:00", "2023-02-02 19:33:32.602 +00:00"),
--     ("visa", "2023-02-02 19:33:32.602 +00:00", "2023-02-02 19:33:32.602 +00:00");