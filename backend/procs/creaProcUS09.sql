CREATE PROCEDURE "DBA"."US09"(in idPers INTEGER, in codePostal INTEGER, in visite DATE)

BEGIN
	INSERT INTO tbVisites
    	(persId, codePost, dateVis)
    	VALUES 
    	(idPers, codePostal, visite)
END
