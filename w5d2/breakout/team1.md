## Building an ERD 

### Example of ERD box

+------------+
| TITLE HERE |
+------------+
|            |
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship

### ERD describing the relationship

+--------------------------+   
| PERSON                   |
+--------------------------+
| PK: ID     (serial)      |
| first_name (text)        |
| last_name  (text)        |
| height     (float)       |
| weight     (float)       |
+--------------------------+
            +
            |
            M
+---------------------------------+
| APPEARANCE                      |
+---------------------------------+
| PK: ID (serial)                 |
| FK: photo_id (smallinteger)     |
| FK: person_id (smallinteger)    |
+---------------------------------+
            W
            |
            +
+----------------------------------+
| PHOTO                            |
+----------------------------------+
| PK: ID  (serial)                 |
| color (boolean)                  |
| how_many_people (smallinteger)   |
| place (varchar(200))             |
| date (date)                      |
+----------------------------------+