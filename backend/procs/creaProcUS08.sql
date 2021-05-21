CREATE PROCEDURE "DBA"."US08"()

BEGIN
	  SELECT code, lib, count(resultat) AS nCasCovid FROM tbTests
    JOIN tbPers
    ON tbTests.persId = tbPers.persId
    JOIN tbVisites
    ON tbPers.persId = tbVisites.persId
    JOIN tbVilles
    ON tbVisites.codePost = tbVilles.code
    WHERE resultat = 'positif' AND expiration >= getdate() AND dateVis < getdate()
    GROUP BY code, lib
    HAVING nCasCovid > 1
END
