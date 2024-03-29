# SQL Ödev 4

## Yapılacaklar

1. film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.

```sql
SELECT DISTINCT replacement_cost FROM film;
```

_LIMIT 5_

| replacement_cost |
| ---------------- |
| 19.99            |
| 25.99            |
| 13.99            |
| 10.99            |
| 23.99            |

2. film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?

```sql
SELECT COUNT(DISTINCT replacement_cost) FROM film;
```

| count |
| ----- |
| 21    |

3. film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?

```sql
SELECT COUNT(DISTINCT title) FROM film
WHERE title LIKE 'T%'
AND rating = 'G';
```

| count |
| ----- |
| 9     |

4. country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?

```sql
SELECT COUNT(country) FROM country
WHERE country LIKE '_____';
```

| count |
| ----- |
| 13    |

5. city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?

```sql
SELECT COUNT(city) FROM city
WHERE city LIKE '%R'
OR city LIKE '%r';
```

| count |
| ----- |
| 33    |
