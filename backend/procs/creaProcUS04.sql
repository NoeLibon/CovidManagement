CREATE PROCEDURE "DBA"."US04"(in firstName VARCHAR(50), in lastName VARCHAR(50), in born DATE, in sex CHAR(1))
BEGIN
    INSERT INTO tbPers (prenom, nom, naiss, sexe)
    VALUES (firstName, lastName, born, sex)
END
