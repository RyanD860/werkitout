INSERT INTO weight (userid, weight) VALUES ($1, $2);
SELECT * FROM weight WHERE userid = $1 ORDER BY id DESC;