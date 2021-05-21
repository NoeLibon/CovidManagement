CREATE PROCEDURE "DBA"."US07"()

BEGIN
	  SELECT count(resultat) AS nTestsRecents FROM tbTests
    WHERE expiration >= getdate()
END
