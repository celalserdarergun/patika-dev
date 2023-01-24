# SQL Ödev 1

## Yapılacaklar

1. film tablosunda bulunan title ve description sütunlarındaki verileri sıralayınız.

```sql
SELECT title, description FROM movie;
```

*LIMIT 5*

|title|description      |
|-----|-----------------|
|Chamber Italian|A Fateful Reflection of a Moose And a Husband who must Overcome a Monkey in Nigeria|
|Grosse Wonderful|A Epic Drama of a Cat And a Explorer who must Redeem a Moose in Australia|
|Airport Pollock|A Epic Tale of a Moose And a Girl who must Confront a Monkey in Ancient India|
|Bright Encounters|A Fateful Yarn of a Lumberjack And a Feminist who must Conquer a Student in A Jet Boat|
|Academy Dinosaur|A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies|



2. film tablosunda bulunan tüm sütunlardaki verileri film uzunluğu (length) 60 dan büyük VE 75 ten küçük olma koşullarıyla sıralayınız.

```sql
SELECT * FROM film WHERE length > 60 AND length < 75;
```

*LIMIT 5*

|film_id|title            |description                                                                              |release_year|language_id|rental_duration|rental_rate|length|replacement_cost|rating|last_update            |special_features               |fulltext                                                                                                                                                 |
|-------|-----------------|-----------------------------------------------------------------------------------------|------------|-----------|---------------|-----------|------|----------------|------|-----------------------|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
|98     |Bright Encounters|A Fateful Yarn of a Lumberjack And a Feminist who must Conquer a Student in A Jet Boat   |2006        |1          |4              |4.99       |73    |12.99           |PG-13 |2013-05-26 14:50:58.951|{Trailers}                     |'boat':20 'bright':1 'conquer':14 'encount':2 'fate':4 'feminist':11 'jet':19 'lumberjack':8 'must':13 'student':16 'yarn':5                             |
|7      |Airplane Sierra  |A Touching Saga of a Hunter And a Butler who must Discover a Butler in A Jet Boat        |2006        |1          |6              |4.99       |62    |28.99           |PG-13 |2013-05-26 14:50:58.951|{Trailers,"Deleted Scenes"}    |'airplan':1 'boat':20 'butler':11,16 'discov':14 'hunter':8 'jet':19 'must':13 'saga':5 'sierra':2 'touch':4                                             |
|10     |Aladdin Calendar |A Action-Packed Tale of a Man And a Lumberjack who must Reach a Feminist in Ancient China|2006        |1          |6              |4.99       |63    |24.99           |NC-17 |2013-05-26 14:50:58.951|{Trailers,"Deleted Scenes"}    |'action':5 'action-pack':4 'aladdin':1 'ancient':20 'calendar':2 'china':21 'feminist':18 'lumberjack':13 'man':10 'must':15 'pack':6 'reach':16 'tale':7|
|25     |Angels Life      |A Thoughtful Display of a Woman And a Astronaut who must Battle a Robot in Berlin        |2006        |1          |3              |2.99       |74    |15.99           |G     |2013-05-26 14:50:58.951|{Trailers}                     |'angel':1 'astronaut':11 'battl':14 'berlin':18 'display':5 'life':2 'must':13 'robot':16 'thought':4 'woman':8                                          |
|34     |Arabia Dogma     |A Touching Epistle of a Madman And a Mad Cow who must Defeat a Student in Nigeria        |2006        |1          |6              |0.99       |62    |29.99           |NC-17 |2013-05-26 14:50:58.951|{Commentaries,"Deleted Scenes"}|'arabia':1 'cow':12 'defeat':15 'dogma':2 'epistl':5 'mad':11 'madman':8 'must':14 'nigeria':19 'student':17 'touch':4                                   |


3. film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99 VE replacement_cost 12.99 VEYA 28.99 olma koşullarıyla sıralayınız.

```sql
SELECT * FROM film
WHERE rental_rate = 0.99
AND (replacement_cost = 12.99 OR replacement_cost = 28.99);
```

*LIMIT 5*

|film_id|title            |description                                                                                                               |release_year|language_id|rental_duration|rental_rate|length|replacement_cost|rating|last_update            |special_features                               |fulltext                                                                                                                                                 |
|-------|-----------------|--------------------------------------------------------------------------------------------------------------------------|------------|-----------|---------------|-----------|------|----------------|------|-----------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
|27     |Anonymous Human  |A Amazing Reflection of a Database Administrator And a Astronaut who must Outrace a Database Administrator in A Shark Tank|2006        |1          |7              |0.99       |179   |12.99           |NC-17 |2013-05-26 14:50:58.951|{"Deleted Scenes","Behind the Scenes"}         |'administr':9,18 'amaz':4 'anonym':1 'astronaut':12 'databas':8,17 'human':2 'must':14 'outrac':15 'reflect':5 'shark':21 'tank':22                      |
|36     |Argonauts Town   |A Emotional Epistle of a Forensic Psychologist And a Butler who must Challenge a Waitress in An Abandoned Mine Shaft      |2006        |1          |7              |0.99       |127   |12.99           |PG-13 |2013-05-26 14:50:58.951|{Trailers,Commentaries}                        |'abandon':20 'argonaut':1 'butler':12 'challeng':15 'emot':4 'epistl':5 'forens':8 'mine':21 'must':14 'psychologist':9 'shaft':22 'town':2 'waitress':17|
|160    |Club Graffiti    |A Epic Tale of a Pioneer And a Hunter who must Escape a Girl in A U-Boat                                                  |2006        |1          |4              |0.99       |65    |12.99           |PG-13 |2013-05-26 14:50:58.951|{Trailers,"Deleted Scenes"}                    |'boat':21 'club':1 'epic':4 'escap':14 'girl':16 'graffiti':2 'hunter':11 'must':13 'pioneer':8 'tale':5 'u':20 'u-boat':19                              |
|245    |Double Wrath     |A Thoughtful Yarn of a Womanizer And a Dog who must Challenge a Madman in The Gulf of Mexico                              |2006        |1          |4              |0.99       |177   |28.99           |R     |2013-05-26 14:50:58.951|{Trailers,"Deleted Scenes","Behind the Scenes"}|'challeng':14 'dog':11 'doubl':1 'gulf':19 'madman':16 'mexico':21 'must':13 'thought':4 'woman':8 'wrath':2 'yarn':5                                    |
|306    |Feathers Metal   |A Thoughtful Yarn of a Monkey And a Teacher who must Find a Dog in Australia                                              |2006        |1          |3              |0.99       |104   |12.99           |PG-13 |2013-05-26 14:50:58.951|{Trailers,"Deleted Scenes"}                    |'australia':18 'dog':16 'feather':1 'find':14 'metal':2 'monkey':8 'must':13 'teacher':11 'thought':4 'yarn':5                                           |


4. customer tablosunda bulunan first_name sütunundaki değeri 'Mary' olan müşterinin last_name sütunundaki değeri nedir?

```sql
SELECT last_name FROM customer
WHERE first_name='Mary';
```

|last_name|
|---------|
|Smith    |


5. film tablosundaki uzunluğu(length) 50 ten büyük OLMAYIP aynı zamanda rental_rate değeri 2.99 veya 4.99 OLMAYAN verileri sıralayınız.

```sql
SELECT * FROM film
WHERE NOT length > 50
AND NOT (rental_rate = 2.99 OR rental_rate = 4.99);
```

*LIMIT 5*

|film_id|title          |description                                                                                                 |release_year|language_id|rental_duration|rental_rate|length|replacement_cost|rating|last_update            |special_features                           |fulltext                                                                                                                                             |
|-------|---------------|------------------------------------------------------------------------------------------------------------|------------|-----------|---------------|-----------|------|----------------|------|-----------------------|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
|247    |Downhill Enough|A Emotional Tale of a Pastry Chef And a Forensic Psychologist who must Succumb a Monkey in The Sahara Desert|2006        |1          |3              |0.99       |47    |19.99           |G     |2013-05-26 14:50:58.951|{Trailers,Commentaries,"Deleted Scenes"}   |'chef':9 'desert':22 'downhil':1 'emot':4 'enough':2 'forens':12 'monkey':18 'must':15 'pastri':8 'psychologist':13 'sahara':21 'succumb':16 'tale':5|
|407    |Hawk Chill     |A Action-Packed Drama of a Mad Scientist And a Composer who must Outgun a Car in Australia                  |2006        |1          |5              |0.99       |47    |12.99           |PG-13 |2013-05-26 14:50:58.951|{"Behind the Scenes"}                      |'action':5 'action-pack':4 'australia':21 'car':19 'chill':2 'compos':14 'drama':7 'hawk':1 'mad':10 'must':16 'outgun':17 'pack':6 'scientist':11   |
|430    |Hook Chariots  |A Insightful Story of a Boy And a Dog who must Redeem a Boy in Australia                                    |2006        |1          |7              |0.99       |49    |23.99           |G     |2013-05-26 14:50:58.951|{Trailers,Commentaries,"Behind the Scenes"}|'australia':18 'boy':8,16 'chariot':2 'dog':11 'hook':1 'insight':4 'must':13 'redeem':14 'stori':5                                                  |
|504    |Kwai Homeward  |A Amazing Drama of a Car And a Squirrel who must Pursue a Car in Soviet Georgia                             |2006        |1          |5              |0.99       |46    |25.99           |PG-13 |2013-05-26 14:50:58.951|{Trailers,Commentaries}                    |'amaz':4 'car':8,16 'drama':5 'georgia':19 'homeward':2 'kwai':1 'must':13 'pursu':14 'soviet':18 'squirrel':11                                      |
|753    |Rush Goodfellas|A Emotional Display of a Man And a Dentist who must Challenge a Squirrel in Australia                       |2006        |1          |3              |0.99       |48    |20.99           |PG    |2013-05-26 14:50:58.951|{"Deleted Scenes"}                         |'australia':18 'challeng':14 'dentist':11 'display':5 'emot':4 'goodfella':2 'man':8 'must':13 'rush':1 'squirrel':16                                |
