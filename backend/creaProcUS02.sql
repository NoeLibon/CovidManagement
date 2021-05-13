CREATE PROCEDURE "DBA"."US02"(in codepostal INTEGER, in nomville VARCHAR(50))
BEGIN
    INSERT INTO tbVilles (code, lib)
    VALUES (codepostal, nomville)
END
