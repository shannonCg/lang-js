/*
* 0在js有+0和-0，大部分情況+0和-0是相等的，除了0被當分母的時候
*/
if( (1/+0) != (1/-0) ) // (1/+0) get '+Infinity' and (1/-0) get '-Infinity'
print('(1/+0) not equal (1/-0)');
print('\n');
/*
 * NaN:表示'非數字'，當無法得到正確的數值運算是會回傳NaN
 */
print("type of NaN: "+typeof NaN);
if(NaN !== NaN)
print("NaN is not equal NaN");
print('index of NaN in the array[NaN] is: '+[NaN].indexOf(NaN)); //因為indexOf內部採用===運算符
print('\n');