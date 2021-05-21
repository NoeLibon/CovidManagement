CREATE PROCEDURE "DBA"."US05_bis"()

BEGIN
	SELECT persId, prenom, nom
    	FROM tbPers
	ORDER BY nom
END
