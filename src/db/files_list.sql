DROP DATABASE IF EXISTS test_trans_telematika;
CREATE DATABASE test_trans_telematika;

\c test_trans_telematika;

CREATE TABLE files_list (
	id serial PRIMARY KEY,
	title VARCHAR(50),
	secret VARCHAR,
	pdf_data bytea
);

INSERT INTO files_list (title, secret, pdf_data) VALUES
	('File_1', 'Link_1', 'Data_1'),
	('File_2', 'Link_2', 'Data_2'),
	('File_3', 'Link_3', 'Data_3'),
	('File_4', 'Link_4', 'Data_4'),
	('File_5', 'Link_5', 'Data_5');
