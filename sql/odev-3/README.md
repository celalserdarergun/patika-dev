# SQL Ödev 3

## Yapılacaklar

1. country tablosunda bulunan country sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.

```sql
SELECT * FROM country
WHERE country LIKE 'A%a';
```

*LIMIT 5*

|country|
|-------|
|Algeria|
|American Samoa|
|Angola |
|Anguilla|
|Argentina|

2. country tablosunda bulunan country sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.

```sql
SELECT * FROM country
WHERE country LIKE '%_____n';
```

*LIMIT 5*

|country|
|-------|
|Afghanistan|
|Azerbaijan|
|Bahrain|
|Cameroon|
|Kazakstan|

3. film tablosunda bulunan title sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren film isimlerini sıralayınız.

```sql
SELECT title FROM film
WHERE title 
ILIKE '_%T%__';
```

*LIMIT 5*

|title|
|-----|
|Chamber Italian|
|Airport Pollock|
|Bright Encounters|
|Adaptation Holes|
|Agent Truman|

4. film tablosunda bulunan tüm sütunlardaki verilerden title 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental_rate 2.99 olan verileri sıralayınız.

```sql
SELECT * FROM film
WHERE title LIKE 'C%'
AND length > 90
AND rental_rate = 2.99;
```

*LIMIT 5*

|film_id|title          |description                                                                                                            |release_year|language_id|rental_duration|rental_rate|length|replacement_cost|rating|last_update            |special_features                                   |fulltext                                                                                                                                                            |
|-------|---------------|-----------------------------------------------------------------------------------------------------------------------|------------|-----------|---------------|-----------|------|----------------|------|-----------------------|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|115    |Campus Remember|A Astounding Drama of a Crocodile And a Mad Cow who must Build a Robot in A Jet Boat                                   |2006        |1          |5              |2.99       |167   |27.99           |R     |2013-05-26 14:50:58.951|{"Behind the Scenes"}                              |'astound':4 'boat':21 'build':15 'campus':1 'cow':12 'crocodil':8 'drama':5 'jet':20 'mad':11 'must':14 'rememb':2 'robot':17                                       |
|121    |Carol Texas    |A Astounding Character Study of a Composer And a Student who must Overcome a Composer in A Monastery                   |2006        |1          |4              |2.99       |151   |15.99           |PG    |2013-05-26 14:50:58.951|{Trailers,"Behind the Scenes"}                     |'astound':4 'carol':1 'charact':5 'compos':9,17 'monasteri':20 'must':14 'overcom':15 'student':12 'studi':6 'texa':2                                               |
|129    |Cause Date     |A Taut Tale of a Explorer And a Pastry Chef who must Conquer a Hunter in A MySQL Convention                            |2006        |1          |3              |2.99       |179   |16.99           |R     |2013-05-26 14:50:58.951|{Commentaries,"Deleted Scenes","Behind the Scenes"}|'caus':1 'chef':12 'conquer':15 'convent':21 'date':2 'explor':8 'hunter':17 'must':14 'mysql':20 'pastri':11 'tale':5 'taut':4                                     |
|136    |Chaplin License|A Boring Drama of a Dog And a Forensic Psychologist who must Outrace a Explorer in Ancient India                       |2006        |1          |7              |2.99       |146   |26.99           |NC-17 |2013-05-26 14:50:58.951|{"Behind the Scenes"}                              |'ancient':19 'bore':4 'chaplin':1 'dog':8 'drama':5 'explor':17 'forens':11 'india':20 'licens':2 'must':14 'outrac':15 'psychologist':12                           |
|146    |Chitty Lock    |A Boring Epistle of a Boat And a Database Administrator who must Kill a Sumo Wrestler in The First Manned Space Station|2006        |1          |6              |2.99       |107   |24.99           |G     |2013-05-26 14:50:58.951|{Commentaries}                                     |'administr':12 'boat':8 'bore':4 'chitti':1 'databas':11 'epistl':5 'first':21 'kill':15 'lock':2 'man':22 'must':14 'space':23 'station':24 'sumo':17 'wrestler':18|
