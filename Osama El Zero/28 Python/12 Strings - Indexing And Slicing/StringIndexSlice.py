#  12 Strings - Indexing And Slicing methods  (part 2) :
 

# Concept :
# All Datatypes in python  is object 
# Object include a single or more elements 
# each element in the object has an index 
# Index in python is [zero-based type] (starting with zero)  
# Index in python syntax via using []
# To access partial [string] , [Tuple] , [List]  from the main string we use index    

# =========================================


# Practical Examples : 
# A] Indexing : 
#  [Concept] : Accessing a certain single element form a variable        

# [Practcial Examples] : 
# Exp 1 :  Access certain element from the string variable using positive index value (counting  from left to right)   :
exp1 = 'Indexing :  Access certain element from the string variable using positive index value (counting  from left to right) ' +  '\n' 

str  = 'I love PL'
 
print('The first element in the string (from left) [using positive index value]  : ' +  str[0])
print('The element with index 9 (from left) [using positive index value] : ' +  str[5] )
print('The element with index 9 (from left) [using positive index value] : ' +  str[8] ) 
# ====================================
 
# Exp 2 :  Access certain element from the string variable using negative index value (counting from right to left)   :

exp2 = 'Indexing : Access certain element from the string variable using negative index value (counting from right to left ) '  +  '\n' 
print(  'The first element (from  right) [using negatvie index value] from the string is : '  +   str[-1]) 
print(  'The element with index -5 (from  right) [using negatvie index value] from the string is : '  +   str[-5]) 

# =======================================================================
# =======================================================================


# ] B] Slicing  :
#  Concept: Accessing a certain sequence of elements form a variable        
# [Practical Examples] :

# Exp1 : Slicing using [starting index] & [ending index] :
print ( 'Slicing  using a first index and ending index [0 -> 5] : ' +   str[0:5] )

# Exp2 : Slicing using [No starting index] & [ending index] :
print ( 'Slicing  using No first index and ending index [ -> 5] : ' +   str[:5] ) 

# Exp3 : Slicing using [starting index] & [No ending index] :
print ( 'Slicing  using first index and NO ending index [ 5 ->   ] : ' +   str[5:] ) 

# Exp4 : Slicing using [No starting index] & [No ending index] :
print ( 'Slicing  using No first index and NO ending index [  ->   ] (Slice the full string ) : ' +   str[:] ) 

# Exp5  : Slicing using tripple index value  [using 3 empty values ]   :
print ( 'Slicing  using tripple index value (using 3 empty values)   [Slice the full string  ] : ' +   str[::] ) 

# Exp6  : Slicing using tripple index value  [using empty:empty:1 ]  :
print ( 'Slicing  using tripple index value [using empty:empty:1 ]   [Slice the full string  ] : ' +   str[::1] ) 

# Exp7  : Slicing using tripple index value  [using empty:empty:2 ]  :
print ( 'Slicing  using tripple index value [using empty:empty:2 ]   [Slice the  string with skipping inbetween one character ] : ' +   str[::2] ) 

# Exp8  : Slicing using tripple index value  [using empty:empty:3 ]  :
print ( 'Slicing  using tripple index value [using empty:empty:3 ]   [Slice the  string with skipping inbetween two characters ] : ' +   str[::3] ) 




# ========================================================================






#=============================================================================   
# Notes:
# we can use the single index value to access a certain single element from the string 
# we can use the ranged index values to access a certain sliced string part  
# we can use a customized ranged of 3 indexes values to access a certain sliced string part with skipped inbetween  characters  







