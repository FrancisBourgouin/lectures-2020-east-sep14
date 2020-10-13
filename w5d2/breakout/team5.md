## Building an ERD 

### Example of ERD box

+------------+
|    Brand   |
+------------+
| PK id      | SERIAL PRIMARY KEY
| name       | VARCHAR(100) NOT NULL
| logo       | BLOB (IMG) NOT NULL
| Motto      | TEXT
| HQ_adress  | TEXT NOT NULL
+------------+          
      |
      -
      |
      |
      ^
     /|\ 
+------------+
| Car Model  |
+------------+
|PK id       | SERIAL PRIMARY KEY
|color       | VARCHAR(30)
|year        | INTEGER
|name        | VARCHAR(255)
|type        | TEXT
|FK brand_id | INTEGER
+------------+

### Description of your relationship

Car brands and car models

### ERD describing the relationship



