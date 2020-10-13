## Building an ERD 

### Example of ERD box

+------------+
|   ARTIST   |
+------------+
|PK - id     |.                
|GENDER      |
|GENRE       |
|NAME        |
|COUNTRY     |
|            |
+------------+ 
    |
    |
    |
+------------+
|   SONG     |
+------------+
| PK - id    |.                
| title      |
| lyrics     |
| length     |
| genre      |
| artist_id (FK)|
+------------+ 
      |
      |
      |
      |

+------------+
|  LISTENER  |
+------------+
| PK - id    |
| Favorite song_id (FK)          |
|            |
|favorite artist           |
|favorite genre           |
|            |
+------------+





### Description of your relationship


### ERD describing the relationship
