# Hayvanat Bahçesi Yönetim Sistemi

Bir hayvanat bahçesindeki hayvanlar hakkındaki bilgileri takip etmek için bir sistem tasarlıyorsunuz.

1. Hayvanlar:
2. Atlar (atlar, zebralar, eşekler vb.),
3. Kedigiller (kaplanlar, aslanlar vb.),
4. Kemirgenler (sıçanlar, kunduzlar vb.) gibi gruplardaki türlerle karakterize edilir.
5. Hayvanlar hakkında depolanan bilgilerin çoğu tüm gruplamalar için aynıdır.
6. tür adı, ağırlığı, yaşı vb.
7. Sistem ayrıca her hayvan için belirli ilaçların dozajını alabilmeli => getDosage ()
8. Sistem Yem verme zamanlarını hesaplayabilmelidir => getFeedSchedule ()

Sistemin bu işlevleri yerine getirme mantığı, her gruplama için farklı olacaktır. Örneğin, atlar için yem verme algoritması farklı olup, kaplanlar için farklı olacaktır.

Polimorfizm modelini kullanarak, yukarıda açıklanan durumu ele almak için bir sınıf diyagramı tasarlayın.

![hayvan drawio](https://github.com/celalserdarergun/patika-dev/assets/89193973/93d5adce-7018-44da-98ce-ccc0a22e0e70)
