# SQL Ödev 2

## Yapılacaklar

1. film tablosunda bulunan tüm sütunlardaki verileri replacement cost değeri 12.99 dan büyük eşit ve 16.99 küçük olma koşuluyla sıralayınız ( BETWEEN - AND yapısını kullanınız.)

```sql
SELECT * FROM film
WHERE replacement_cost BETWEEN 12.99 AND 16.99;
```

*LIMIT 5*

|film_id|title            |description                                                                                         |release_year|language_id|rental_duration|rental_rate|length|replacement_cost|rating|last_update            |special_features                  |fulltext                                                                                                                              |
|-------|-----------------|----------------------------------------------------------------------------------------------------|------------|-----------|---------------|-----------|------|----------------|------|-----------------------|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
|133    |Chamber Italian  |A Fateful Reflection of a Moose And a Husband who must Overcome a Monkey in Nigeria                 |2006        |1          |7              |4.99       |117   |14.99           |NC-17 |2013-05-26 14:50:58.951|{Trailers}                        |'chamber':1 'fate':4 'husband':11 'italian':2 'monkey':16 'moos':8 'must':13 'nigeria':18 'overcom':14 'reflect':5                    |
|8      |Airport Pollock  |A Epic Tale of a Moose And a Girl who must Confront a Monkey in Ancient India                       |2006        |1          |6              |4.99       |54    |15.99           |R     |2013-05-26 14:50:58.951|{Trailers}                        |'airport':1 'ancient':18 'confront':14 'epic':4 'girl':11 'india':19 'monkey':16 'moos':8 'must':13 'pollock':2 'tale':5              |
|98     |Bright Encounters|A Fateful Yarn of a Lumberjack And a Feminist who must Conquer a Student in A Jet Boat              |2006        |1          |4              |4.99       |73    |12.99           |PG-13 |2013-05-26 14:50:58.951|{Trailers}                        |'boat':20 'bright':1 'conquer':14 'encount':2 'fate':4 'feminist':11 'jet':19 'lumberjack':8 'must':13 'student':16 'yarn':5          |
|2      |Ace Goldfinger   |A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China|2006        |1          |3              |4.99       |48    |12.99           |G     |2013-05-26 14:50:58.951|{Trailers,"Deleted Scenes"}       |'ace':1 'administr':9 'ancient':19 'astound':4 'car':17 'china':20 'databas':8 'epistl':5 'explor':12 'find':15 'goldfing':2 'must':14|
|11     |Alamo Videotape  |A Boring Epistle of a Butler And a Cat who must Fight a Pastry Chef in A MySQL Convention           |2006        |1          |6              |0.99       |126   |16.99           |G     |2013-05-26 14:50:58.951|{Commentaries,"Behind the Scenes"}|'alamo':1 'bore':4 'butler':8 'cat':11 'chef':17 'convent':21 'epistl':5 'fight':14 'must':13 'mysql':20 'pastri':16 'videotap':2     |

2. actor tablosunda bulunan first_name ve last_name sütunlardaki verileri first_name 'Penelope' veya 'Nick' veya 'Ed' değerleri olması koşuluyla sıralayınız. ( IN operatörünü kullanınız.)

```sql
SELECT first_name, last_name FROM actor
WHERE first_name IN ('Penelope', 'Nick', 'Ed');
```

*LIMIT 5*

|first_name|last_name        |
|----------|-----------------|
|Penelope  |Guiness          |
|Nick      |Wahlberg         |
|Ed        |Chase            |
|Nick      |Stallone         |
|Penelope  |Pinkett          |

3. film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99, 2.99, 4.99 VE replacement_cost 12.99, 15.99, 28.99 olma koşullarıyla sıralayınız. ( IN operatörünü kullanınız.)

```sql
SELECT * FROM film
WHERE rental_rate IN (0.99, 2.99, 4.99)
AND replacement_cost IN (12.99, 15.99, 28.99);
```

*LIMIT 5*

|film_id|title            |description                                                                                         |release_year|language_id|rental_duration|rental_rate|length|replacement_cost|rating|last_update            |special_features           |fulltext                                                                                                                              |
|-------|-----------------|----------------------------------------------------------------------------------------------------|------------|-----------|---------------|-----------|------|----------------|------|-----------------------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
|8      |Airport Pollock  |A Epic Tale of a Moose And a Girl who must Confront a Monkey in Ancient India                       |2006        |1          |6              |4.99       |54    |15.99           |R     |2013-05-26 14:50:58.951|{Trailers}                 |'airport':1 'ancient':18 'confront':14 'epic':4 'girl':11 'india':19 'monkey':16 'moos':8 'must':13 'pollock':2 'tale':5              |
|98     |Bright Encounters|A Fateful Yarn of a Lumberjack And a Feminist who must Conquer a Student in A Jet Boat              |2006        |1          |4              |4.99       |73    |12.99           |PG-13 |2013-05-26 14:50:58.951|{Trailers}                 |'boat':20 'bright':1 'conquer':14 'encount':2 'fate':4 'feminist':11 'jet':19 'lumberjack':8 'must':13 'student':16 'yarn':5          |
|2      |Ace Goldfinger   |A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China|2006        |1          |3              |4.99       |48    |12.99           |G     |2013-05-26 14:50:58.951|{Trailers,"Deleted Scenes"}|'ace':1 'administr':9 'ancient':19 'astound':4 'car':17 'china':20 'databas':8 'epistl':5 'explor':12 'find':15 'goldfing':2 'must':14|
|7      |Airplane Sierra  |A Touching Saga of a Hunter And a Butler who must Discover a Butler in A Jet Boat                   |2006        |1          |6              |4.99       |62    |28.99           |PG-13 |2013-05-26 14:50:58.951|{Trailers,"Deleted Scenes"}|'airplan':1 'boat':20 'butler':11,16 'discov':14 'hunter':8 'jet':19 'must':13 'saga':5 'sierra':2 'touch':4                          |
|25     |Angels Life      |A Thoughtful Display of a Woman And a Astronaut who must Battle a Robot in Berlin                   |2006        |1          |3              |2.99       |74    |15.99           |G     |2013-05-26 14:50:58.951|{Trailers}                 |'angel':1 'astronaut':11 'battl':14 'berlin':18 'display':5 'life':2 'must':13 'robot':16 'thought':4 'woman':8                       |
