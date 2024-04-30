1. "3" will be printed because the loop will run 3 times (0-2), incrementing 'i' one last time after it stops. Because 'i' is a var, it can be used outside the for loop.

2. "150" will be printed because the last time the loop runs, it will give discountedPrice a value of 150. Because 'discountedPrice' is a var, it can be used outside the for loop.

3. "150" will be printed because the last time the loop runs, it will give finalPrice a value of 150. Because 'discountedPrice' is a var, it can be used outside the for loop.

4. "[50, 100, 150]" will be returned. The function loops through 'prices' and takes off 50% of each price, and then returns the array.

5. Error: 'i' is declared with let as a part of the for loop, meaning that it can not be used outside of the for loop.

6. Error: 'discountedPrice' is declared with let inside the for loop, meaning that it can not be used outside of the for loop.

7. "150" will be printed because the last time the loop runs, it will give finalPrice a value of 150. Because 'discountedPrice' is a let that is declared outside the loop (given function-scope), it can be used outside the for loop.

8. "[50, 100, 150]" will be returned. The function loops through 'prices' and takes off 50% of each price, and then returns the array. The process would not be effected from the change in variable declaration.

9. Error: 'i' is declared with let as a part of the for loop, meaning that it can not be used outside of the for loop. 

10. "3" will be printed. There is no attempt to change the value of length(which is a const), which means there would be no error.

11. Error: 'discounted' is declared as a const, therefore when the for loop tries to change the value of the array it will cause an error.

12. A. student.name;
    B. student['Grad year'];
    C. student.greeting();
    D. student.['Favorite Teacher'].name;
    E. student.courseLoad[0];

13. A. '32' :The string value of 2 is used to combine the two as a string.
    B. 1 :'3' is converted to a sting to make it 3-1 = 1
    C. 3 :'null' is treated as '0'
    D. '3null' :null is converted to string 'null'
    E. 4 : true is treated as 1
    F. 0 : false and null are treated as 0
    G. '3undefined' : undefined is converted to sting
    H. NaN : undefined is not a number, so "Not-a-Number"(NaN) is returned

14. A. true : '2' is converted to int, which is greater than 1
    B. true : '12' is converted to int, which is greater than '2' converted to int
    C. true : '2' is converted to int before the comparison
    D. false : '===' checks for value and type. Different types = false
    E. false : 'true' is converted to 1, which is not equal to 2
    F. true : Boolean(2) is true because any non-zero num converted to a boolean is true. They are the same type(boolean).

15. "==" Does a type coercion to force a comparison, while "===" returns false if they are not the same type (does not force the comparison).

17. '[2, 4, 6]' is returned after the function call. The modifyArray function loops through the given input array, and for every element, calls the doSomething function on it and stores the result in newArr. The doSomething function multiplies the num by 2.

19. 1
    4
    3
    2