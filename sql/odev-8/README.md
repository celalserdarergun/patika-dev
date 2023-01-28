# SQL Ödev 8

## Yapılacaklar

1. test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.

```sql
CREATE TABLE employee (
	id INTEGER,
	name VARCHAR(50),
	birthday DATE,
	email VARCHAR(100)
);
```

2. Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.

```sql
INSERT INTO employee (id, name, birthday, email) VALUES (1, 'Augy Duly', '6/4/2022', 'aduly0@cmu.edu');
INSERT INTO employee (id, name, birthday, email) VALUES (2, 'Leese Rockliffe', '11/19/2022', 'lrockliffe1@engadget.com');
INSERT INTO employee (id, name, birthday, email) VALUES (3, 'Angelia Neumann', '3/11/2022', 'aneumann2@nps.gov');
INSERT INTO employee (id, name, birthday, email) VALUES (4, 'Annabela Gullberg', '5/11/2022', 'agullberg3@wp.com');
INSERT INTO employee (id, name, birthday, email) VALUES (5, 'Hyacinthie Churchlow', '9/18/2022', 'hchurchlow4@addtoany.com');
```

3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.

```sql
UPDATE employee
SET name = 'Harry Poter',
	email = 'harry@poter.com'
WHERE id = 1;

UPDATE employee
SET name = 'Hermione Granger',
	email = 'hermione@granger.com'
WHERE id = 2;

UPDATE employee
SET name = 'Ron Weasley',
	email = 'ron@weasley.com'
WHERE id = 3;
```

| id  | name             | birthday   | email                |
| --- | ---------------- | ---------- | -------------------- |
| 1   | Harry Poter      | 2022-06-04 | harry@poter.com      |
| 2   | Hermione Granger | 2022-11-19 | hermione@granger.com |
| 3   | Ron Weasley      | 2022-03-11 | ron@weasley.com      |

4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

```sql
DELETE FROM employee
WHERE name LIKE 'Harry%'
```
