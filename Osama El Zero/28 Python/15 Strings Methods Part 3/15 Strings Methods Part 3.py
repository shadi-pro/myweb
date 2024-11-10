# 15 Strings Methods Part 3 [string part 5] :

# A] [concept] : 
# Built-in functions/methods to deal with string datatypes   

# There are some General built-in methods  :
# 1- [var.index(subStr, starting index , ending index)]   ->
  ##  Get the index of a certain substring inside a given string ( of the first ) 
  ## include (3) types of parameters  :
    ###  (par1) :  the substring to be search for its index  [ sentive-case letter] {obl}     
    ###  (par2) :  starting position 
    ###  (par3) :  ending position 

# 2- [var.find(subStr, starting index , ending index)]   -> 
#  To find a certain substring within a the assigned string => [without througing error if it not found in the assigned range ]     
#  Include the same parameters of the {index()} method       

# 3- [ var.rjust(  # number of added characters on the right/after , 'character to be added ' ) ]   -> 
#  To justiy a string by addding a certain character after the string [right]       
#  Include the (2) parameters  :
   ### (par1) :  # number of added characters on the right => [integer]        
   ### (par2) :  character to be added [character ]

# 4- [ var.ljust(  # number of added characters on the left/before   , 'character to be added ' ) ]   -> 
#  To justiy a string by addding a certain character before the string [left]       
#  Include the (2) parameters  :
   ### (par1) :  # number of added characters on the right => [integer]        
   ### (par2) :  character to be added [character ]

# 5- [ var.splitlines() ]   -> 
#  To split the multiple lines string defined variable [whether the defined by using  the triple quotes or line scaping oprator ] and return a List datatype variable instead string varialble :         
#  Include the ( ) parameters  :
   ### (par1) :  

     
# 6- [ var.expandtabs(#) ]   -> 
#  To turn the main defined string value [that including tabs in-between] into string with controlled tabs count : 
#  Include the one parameter of tabs count  :
   ### (#) :  count of the desired count of the tabs value  [# integer] 
     

# 7- [ var.istitle() ]   -> 
#  To check about if the given string is a type of 'title' , by return a boolean value     
#  Has NO  parameter  
    
     
# 8- [ var.isspace() ]   -> 
#  To check about if the given string  is an 'empty space' or not   , by return a boolean value     
#  Has NO  parameter
      
# 9- [ var.islower() ]   -> 
#  To check about if the given string if it  is all wihtin a lower case or not   , by return a boolean value     
#  Has NO  parameter

# 10- [ var.isidentifier() ]   -> 
#  To check about if the given  is a proper variable or not , by return a boolean value     
#  Has NO  parameter
      
# 11- [ var.isalpha() ]   -> 
#  To check about if the given variable is only consist of letters only  or not , by return a boolean value     
#  Has NO  parameter
  
# ===================================================
# B] [Practical Exps] : 

# Exp1 : [var.index( "substring" , # , # )] Get the index of the assinged sub-string  inside the  whole  string : 
exp1 = '[var.index( "substring" , # , # )] Get the index of the assinged sub-string]  inside the  whole  string  :   '  + '\n' + '======================================' + '\n'
a = 'I love PL LL' 
 
print (exp1 +  '\n') 

print('The index of  the "L" inside the whole  given string is  '  +  '\n'  )
print( a.index('L')  )

print('The index of  the "L" inside the  (certain slice [ form  0  ->  10 ] of the string) : '  +  '\n'  )
print( a.index('L', 0 , 10)  )

print(  '==========================================' )

# ======================================================== 

# Exp2 : [var.find("substring" , # , # )] Get the index of the assinged sub-string  inside the  whole  string : 
exp2 = '[var.find("substring" , # , # )] Get the index of the assinged sub-string]  inside the  whole  string  :   '  + '\n' + '======================================' + '\n'
  
print (exp2 +  '\n') 

print('The index of  the "L" inside the whole  given string is  '  +  '\n'  )
print( a.find('L')  )

print('The index of  the "L" inside the  (certain slice [ form  0  ->  10 ] (in range) of the string) : '  +  '\n'  )
print( a.find('L', 0 , 10)  )

print('The index of  the "L" inside the  (certain slice [ form  0  ->  5 ] (out  range)  of the string ) : '  +  '\n'  )
print( a.find('L', 0 , 5)  )

print(  '==========================================' )

# ======================================================== 

# Exp3 : [var.rjust( #added chars , "chars"   )]   : 
exp3 = '[var.rjust( #added chars, "chars")] Get the index of the assinged sub-string]  inside the  whole  string  :   '  + '\n' + '======================================' + '\n'
  
print (exp3 +  '\n') 

b = 'shadi'

print('The string after using right (after) justifying  with adding  [10] chars '  +  '\n'  )
print( b.rjust(  10 , '@' )  )
 
print(  '==========================================' )

# ======================================================== 

# Exp4 : [var.ljust( #added chars , "chars"   )]   : 
exp4 = '[var.ljust( #added chars, "chars")] Get the index of the assinged sub-string]  inside the  whole  string  :   '  + '\n' + '======================================' + '\n'
  
print (exp4 +  '\n') 

print('The string after using left (before)  justifying  with adding  [10] chars '  +  '\n'  )
print( b.ljust( 10 , '#')  )
 
print(  '==========================================' )

# ======================================================== 

# Exp5 : [var.splitlines()]   : 
exp5 = '[var.splitlines() ] to turn the main form of string value inside the multiple linses defined variable in to a [List]  form :   '  + '\n' + '======================================' + '\n'  

print (exp5 +  '\n') 
 
c = '''  The first line
  The second line
  The Third  line
'''

c1  = 'The first line \n  The second  line \n The third line'

print('The List form of the multiple lines defined string variable "by using triple quotes" as following :  '  +  '\n'  )
print( c.splitlines()  )
print( '\n' +  'The datatype of the returned string variable "that using the triple quotes is :  ' ) 
print (type(c.splitlines()) )
print ( '--------------------\n' )

 
print('The List form of the multiple lines defined string variable "by using line scaping operator " as following :  '  +  '\n'  )
print( c1.splitlines()  )
print( '\n' +  'The datatype of the returned string variable "that using the scaping oprator is :  ' ) 
print (type(c1.splitlines())  )
 
print(  '==========================================' )

# ======================================================== 

# Exp6 : [var.expandtabs(#)]   : 
exp6 = '[var.expandtabs() ] to turn the main string value [that including tabs]  into string with controlled tabs count   :   '  + '\n' + '======================================' + '\n'  

print (exp6 +  '\n') 
  
e  = ' Hello\tLove\tPython\tlanguage'

print('The defined string variable [that inlcuding inner default tabs] without using expaned tabs method   as following :  '  +  '\n'  )
print( e + '\n' )

print('The defined string variable [that inlcuding inner default tabs] after using expaned tabs method "expandtabs(2)"  with controlled tabs count of [2] as following :  '  +  '\n'  )
print( e.expandtabs(2) + '\n' )
  
print('The defined string variable [that inlcuding inner default tabs] after using expaned tabs method "expandtabs(10)"  with controlled tabs count of [10] as following :  '  +  '\n'  )
print( e.expandtabs(10)  )
  
  
print(  '==========================================' )

# ======================================================== 

# Exp7 : [var.istitle()]   : 
exp7 = '[var.istitle() ]   check about the given string or variable if t is a title type  :   '  + '\n' + '======================================' + '\n'  

print (exp7 +  '\n') 
  
f  = 'Hello Python 5G'
f1  = 'Hello Python 5g'

print(' The  result of checking about the  string if it is a "title" type or not  ,   as following :  '  +  '\n'  )
print( f.istitle()   )

print(' The result of checking about the  string if it is a "title" type or not  ,   as following :  '  +  '\n'  )
print( f1.istitle()  )


print(  '==========================================' )

# ======================================================== 

# Exp8 : [var.isspace()]   : 
exp8 = '[var.isspace() ]  check about the given string or variable  is about an empty space or not  :   '  + '\n' + '======================================' + '\n'  

print (exp8 +  '\n') 
  
g  = 'string'
g1  = ' '

print(' The  result of checking about the string if it is an empty space or not ,   as following :  '  +  '\n'  )
print( g.isspace()  )

print(' The result of checking about the  string if it is an empty space or not ,   as following :  '  +  '\n'  )
print( g1.isspace() )


print(  '==========================================' )

# ======================================================== 

# Exp9 : [var.islower()]   : 
exp9 = '[var.islower() ]  check about the given string or variable if is  in a lower case or not   :   '  + '\n' + '======================================' + '\n'  

print (exp9 +  '\n') 
  
h = 'this is a lower case string '
h1 = 'This is Not a Lower case string '
 
print(' The  result of checking about the string if it is an lower-case or not ,   as following :  '  +  '\n'  )
print( h.islower()  )

print(' The result of checking about the string if it is an lower-case  or not ,   as following :  '  +  '\n'  )
print( h1.islower() )


print(  '==========================================' )

# ======================================================== 

# Exp10 : [var.isidentifier() ]   : 
exp10 = '[var.isidentifier() ]  check about the given variable if is a varilable or not  :   '  + '\n' + '======================================' + '\n'  

print (exp10 +  '\n') 
  
newvar = 'this is a variable'

print(' The  result of checking about the given varialble is a proper variable or not , as following :  '  +  '\n'  )
print(newvar.isidentifier())
 

print(  '==========================================' )

# ======================================================== 

# Exp11 : [var.isalpha() ]   : 
exp11 = '[var.isalpha() ]  check about the given string varilable consissst of only letter or not  :   '  + '\n' + '======================================' + '\n'  

print (exp11 +  '\n') 
  
x  = 'aaAabbAbbljd'
y  = 'this is an Not alpah variable11'
z  = 'aaaabbbkkd1'

print(' The  result of checking about the given variable ' +  x + 'is  alpha type [contains only on letters] or not , as following :  '  +  '\n'  )
print(x.isalpha())

print(' The  result of checking about the given varialble ' + y +  ' is  alpha type [contains only on letters] or not , as following :  '  +  '\n'  )
print(y.isalpha())
 
print(' The  result of checking about the given varialble ' + z +  ' is  alpha type [contains only on letters] or not , as following :  '  +  '\n'  )
print(z.isalpha())
 

print(  '==========================================' )

# ======================================================== 
 

# Exp12 : [var.isalnum() ]   : 
exp12 = '[var.isalnum() ]  check about the given string varilable consist of letter OR number OR both  , or not  :   '  + '\n' + '======================================' + '\n'  

print (exp12 +  '\n') 
  
x1  = 'aaAabbAbbljd'
y1  = 'afsadfsadf 11'
z1  = 'aaaabbbkkd1'

print(' The  result of checking about the given variable ' +  x1 + 'is   alnum [contains alpha or number or both] or not , as following :  '  +  '\n'  )
print(x1.isalnum())

print(' The  result of checking about the given varialble ' + y1 +  ' is alnum  type [contains alpha or number or both] or not , as following :  '  +  '\n'  )
print(y1.isalnum())
 
print(' The  result of checking about the given varialble ' + z1 +  ' is  alnum  type [contains alpha or number or both] or not , as following :  '  +  '\n'  )
print(z1.isalnum())
 

print(  '==========================================' )

# ======================================================== 
 
# ========================================================


# Note:
# [var.index()] -> when using outrange of index position value => will result an error ('substring not found')  => so we can use a [find()] method     
# [var.find()] -> when using outrange of index position value => will  a negative value (-1) , instead of  [error]     
# [var.splitlines()] -> is being used with the mulitple lines string varialble only to return the main form of the string value           
# [var.isspace()] -> is checking about if the given value or variable is an empty space [not empty value]           
# [var.isalpha()] & [var.isalnum()] -> is consideritng spaces are NOT a letter and not a number               
 
