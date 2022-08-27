# Insertion Sort Projesi

[22,27,16,2,18,6] -> Insertion Sort

* Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

* Big-O gösterimini yazınız.

* Time Complexity:  
	* Average case: Aradığımız sayının ortada olması  
	* Worst case: Aradığımız sayının sonda olması  
	* Best case: Aradığımız sayının dizinin en başında olması.  

* Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

* [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

## 1) [22,27,16,2,18,6] Insertion Sort

Adım 1 --> 22 ve 27 sıralı --> [22, 27, 16, 2, 18, 6]  
Adım 2 --> 16 27den kucuk, 22den kucuk --> [16, 22, 27, 2, 18, 6]  
Adım 3 --> 2 basa gecer --> [2, 16, 22, 27, 18, 6]  
Adım 4 --> 18 16dan buyuk, 22den kucuk --> [2, 16, 18, 22, 27, 6]  
Adım 5 --> 6 2den buyuk, 16dan kucuk -->  [2, 6, 16, 18, 22, 27]  

## 2) BigO: O(n^2)  

## 3) Time Complexity  
Average Case: O(N^2) = O(6^2) = O(36)  
Worst Case: O(N^2) = O(6^2) = O(36)  
Best Case: O(N) = O(6)  

18 sayısı average case kapsamına girer  

## 4) [7,3,5,8,2,9,4,15,6] Insertion Sort - Ilk 4 adım  

Adım 1 --> [3, 7, 5, 8, 2, 9, 4, 15, 6]  
Adım 2 --> [3, 5, 7, 8, 2, 9, 4, 15, 6]  
Adım 3 --> [3, 5, 7, 8, 2, 9, 4, 15, 6]  
Adım 4 --> [2, 3, 5, 7, 8, 9, 4, 15, 6]  

