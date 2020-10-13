## Building an ERD 

### Example of ERD box

+------------------------------+
| Movie                        |      
+------------------------------+
|  movie_id SERIAL PRIMARY KEY |
|  title    VARCHAR(255)       |
|  genre    VARCHAR(255)       |
|  Budget   INTEGER            |
|  Box_office_opening_$ INTEGER|
|  Date_released  DATE         |                
+------------------------------+

+--------------------------------+
| Actor                          |
+--------------------------------+
|  actor_id SERIAL PRIMARY KEY   |
|  name    VARCHAR(255)          |
|  nationality    VARCHAR(255)   |
|  gender VARCHAR(32)            |
|  Movie_most_known_for: movie_id|
|                                |                
+--------------------------------+

+------------------------------+
| Actor at movie               |
+------------------------------+
|  movie_id SERIAL FK          |
|  actor_id SERIAL FK          |
|  in_movie: BOOL              |              
+------------------------------+

### Description of your relationship


### ERD describing the relationship
Actor at movie -> Movie 
         Many ---> One 
