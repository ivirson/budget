-- SQLite
-- SELECT * FROM users;
-- DELETE FROM creditCards;
SELECT * FROM creditCards;

-- INSERT INTO users (name, email, password)
-- VALUES ("Ivirson Daltro", "ivi.daltro@gmail.com", "123456");


UPDATE users SET avatar = null WHERE id = "f7cddfb1-d55e-45bc-bde0-14041142301c"

-- DROP TABLE IF EXISTS creditCards;
-- DROP TABLE IF EXISTS flags;

-- INSERT INTO flags (id, imageName, name, createdAt, updatedAt)
-- VALUES 
--     ("64bedb1a-1041-42b8-92db-646b17253465", "american-express", "AmEx", "2023-02-02 19:33:32.602 +00:00", "2023-02-02 19:33:32.602 +00:00"),
--     ("546ced0b-5f71-498b-9d5e-c3daf350c576", "elo", "Elo", "2023-02-02 19:33:32.602 +00:00", "2023-02-02 19:33:32.602 +00:00"),
--     ("dc185337-28e5-4724-aad6-39a443c01c41", "hipercard", "Hipercard", "2023-02-02 19:33:32.602 +00:00", "2023-02-02 19:33:32.602 +00:00"),
--     ("8225b3c0-f7c5-415b-af3a-97f85b14668e", "mastercard", "Mastercard", "2023-02-02 19:33:32.602 +00:00", "2023-02-02 19:33:32.602 +00:00"),
--     ("005afc92-0ba5-4d52-a6e5-787a4f9e5e2f", "visa", "Visa", "2023-02-02 19:33:32.602 +00:00", "2023-02-02 19:33:32.602 +00:00");