** Answers for the questions


1.Answer: A or {}
Explanation: Because greeting and greetign are different variables as they have different spelling , there is no connection between them . First greeting is declared as a let variable and again another completely different variable greetign is declared as an empty object, there is nothing in common between greeting and greetign . That is why the correct answer for console.log(greetign) is empty object.


2.Answer: C or "12"
Explanation : If any of the variable passed as argument is string , the '+' operator will work as a concatenator or it will not give the actual sum as one variable is string . To actually have the sum both of them have to be a number variable. As here one variable is number which is 1 and the second one is a string as "2" the + will only join them together which will result in "12"


3.Answer:A 
Explanation : The food has 4 element in it which is an array and info is another object that includes a property name fovoriteFood and the first element of the food variable, and when again the value of property name in info is reassigned, it has no relevance to the first array names food, only the property named favoriteFood in info object will get altered , that is why food will remain the same as it was declared in the first place.


4. B or Hi there, undefined 

Explanation : The function sayHi has to be provided with a argument. When we are calling a function without providing the appropriate parameter it wants as an argument  , it will give undefined. Here when the function is declared with a parameter "name" which is used inside the template string and when the function was called , it does not have the expected argument it wants , that is why it will return ,Hi there,undefined.


5. C or 3
Explanation : forEach checks each element inside the nums array and sees if it matches the condition , where condition says if the num exists then the count will increase by 1, but as count itself has the value of 0 and the condition returns a falsy value thus the count remains unchanged. As it further goes to 1,2,3 , the count increases to 3 because 1 , 2 ,3 are truthy values.
