USE premex_db;

INSERT INTO product_types VALUES (
	NULL, 'Mineral'),
	(NULL, 'Vitamina'),
    (NULL, 'Premezcla'),
    (NULL, 'Producto terminado');
    
INSERT INTO packaging_types VALUES (
	NULL, 'Bulto de 25KG'),
	(NULL, 'Bulto de 10KG'),
    (NULL, 'Tarro de 2KG'),
    (NULL, 'Liquido 100ml');
    
INSERT INTO employees VALUES (
	NULL, 'Diego', 'Gonzalez Calle', 'diego.gonzalez@iluma.bio', 'admin'),
	(NULL, 'María Herlandia', 'Copete Perea', 'maria.copete@iluma.bio', 'admin');
    
INSERT INTO products VALUES (
	NULL, 'AlphaD3', 2, DEFAULT, 1, '00:15:00', 1),
    (NULL, 'Prokel', 3, DEFAULT, 1, '00:20:00', 2),
    (NULL, 'Liprex', 3, DEFAULT, 2, '00:10:00', 2);