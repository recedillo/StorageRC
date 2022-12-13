mysql -u username -p

CREATE DATABASE database_name;

LOAD DATA INFILE 'cpeople.csv'
INTO TABLE data_table
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
(ts, fn, ln, pronouns, role);