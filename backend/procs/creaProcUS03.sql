CREATE PROCEDURE "DBA"."US03"()

BEGIN
	SELECT tbPers.persId, prenom, nom, naiss, dateTest, expiration, resultat FROM tbPers
    NATURAL FULL JOIN tbTests
END
