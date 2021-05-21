CREATE PROCEDURE "DBA"."US06"()

BEGIN
	SELECT count(resultat) AS nCasCovidAct FROM tbTests
END
