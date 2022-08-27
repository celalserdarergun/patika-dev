# Merge Sort Projesi

[16,21,11,8,12,22] -> Merge Sort  
* Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.  
* Big-O gösterimini yazınız.  

## [16,21,11,8,12,22] Merge Sort  

Adım 1 --> [16, 21, 11] - [8, 12, 22]  
Adım 2 --> [16, 21] - [11] - [8, 12] - [22]  
Adım 3 --> [16] - [21] - [11] - [8] - [12] - [22]  
Adım 4 --> [16 , 21] - [8, 11] - [12, 22]  
Adım 5 --> [8, 11, 16, 21] - [12, 22]  
Adım 6 --> [8, 11, 12, 16, 21, 22]  

Best Case = O(N*log(N))  
Average Case = O(N*log(N))  
Worst Case = O(N*log(N))  
