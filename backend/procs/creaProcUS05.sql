ALTER PROCEDURE "DBA"."US05"(in test DATE, in exp DATE, in resul VARCHAR(20), in idPers INTEGER)
BEGIN
    INSERT INTO tbTests
    (dateTest, expiration, resultat, persId)
    VALUES 
    (test, exp, resul, idPers)
END
