# SQL Ödev 7

## Yapılacaklar

1. film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.

```sql
SELECT rating, COUNT(*) FROM film
GROUP BY rating;
```

| rating | count |
| ------ | ----- |
| PG     | 194   |
| R      | 195   |
| NC-17  | 210   |
| PG-13  | 223   |
| G      | 178   |

2. film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.

```sql
SELECT replacement_cost, COUNT(*) FROM film
GROUP BY replacement_cost
HAVING COUNT(*) > 50;
```

| replacement_cost | count |
| ---------------- | ----- |
| 13.99            | 55    |
| 20.99            | 57    |
| 27.99            | 53    |
| 29.99            | 53    |
| 12.99            | 55    |
| 14.99            | 51    |
| 22.99            | 55    |
| 21.99            | 55    |

3. customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir?

```sql
SELECT store_id, COUNT(*) FROM customer
GROUP BY store_id;
```

| store_id | count |
| -------- | ----- |
| 1        | 326   |
| 2        | 273   |

4. city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.

```sql
SELECT country_id, COUNT(city) FROM city
GROUP BY country_id
ORDER BY COUNT(city) DESC
LIMIT 1;
```

| country_id | count |
| ---------- | ----- |
| 44         | 60    |
