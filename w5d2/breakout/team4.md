where am i ## Building an ERD 

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
Bandmember = id, name, instrument, nickname, band_id (FK)
Band = id, name, genre, date_formed
Set = id, band_id (FK), set_time, gig_id (FK)
Gig = id, set_id (FK), date, venue

### ERD describing the relationship

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