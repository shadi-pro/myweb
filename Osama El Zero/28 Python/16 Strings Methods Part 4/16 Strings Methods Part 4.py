
# 16 Strings Methods Part 4 [string part 6]  the last lesson in the string   :

# A] [concept] : 
# Built-in functions/methods to deal with string datatypes   
 
# 1- [replace(old string , new string , count of replacement  ) ]  ->
  ##  To replcae a certain string with new string by specifc count of replancement   
  ## include ( 3 ) types of parameters  :
    ###  (par1) : old  sub string  [string ]  
    ###  (par2) :  new  sub string [string ]    
    ###  (par3) :  count of replacment [integer]     
    
# 2- [ 'Custom Seperator string'.join(iterable obj) ]  ->
  ##  to join between an iterable object elements to perform one new string joined based on custom string seperator         
  ## include ( 1 ) type of parameter  :
    ###  (par1) :  iterable object  [list , tuple , array  , dictionary  ] 
     
# ===================================================
# B] [Practical Exps] : 

# Exp1 : [replace( old str, new str  , #count ) ] Replcae a certain string with new string by specifc count of replacement : 
exp1 = '[ replace( old str, new str  , #count )  ] perform a replacment of  certain string with by certain numbers :   '  + '\n' + '======================================' + '\n'
print (exp1 +  '\n') 
   
str = 'Hello the first string second string third string '

print('The old string is : ' + '\n'  + str  + '\n' )

print( 'The new string after replacement [with all values]  is ' +  '\n'  + str.replace('string' , 'text') + '\n'   )
print( 'The new string after replacement [with one first value only ]  is ' +  '\n'  + str.replace('string' , 'text'  , 1 ) + '\n'   )
print( 'The new string after replacement [with two first values only ]  is ' +  '\n'  + str.replace('string' , 'text'  , 2 ) + '\n'   )
 

print(  '==========================================' )

# ========================================================  

# Exp2 : [join( 'Custom sep' ,  iterable object ) ]  : 
exp2 = '[ replace(  "Custom sep" ,  iterable object )  ] perform a joining operation with using custom seperator  :   '  + '\n' + '======================================' + '\n'
print (exp2 +  '\n') 
   
newIter = ('shadi' , 'sayed' ,'mohammed')
newIter1 = ['shadi' , 'sayed' ,'mohammed'] 
# newIter2 = ['shadi' , 'sayed' ,'mohammed'] 

print( 'The datatype of the first Iterable object used in  joining is : \n' )
print( type(newIter))
print( 'The datatype of the second Iterable object used in  joining is : \n' )
print( type(newIter1))


print('The old  ieterable object [tuple] is  : ' + '\n' )
print( newIter )
print( '\n' + '---------------------------------' + '\n' )

print( 'The new string after joining the [tuple] using " " empty space is ' +  '\n')
print (' '.join(newIter) )
print ('\n--------------\n'  )


print('The old  ieterable object [list] is  : ' + '\n' )
print( newIter1 )
print( '\n' + '---------------------------------' + '\n' )

print( 'The new string after joining the [list] using "-" is ' +  '\n')
print ('-'.join(newIter1) )
print ('\n--------------\n'  )


# print( 'The new string after joining using "," is ' +  '\n')
# print (','.join(newIter) )


print( 'The datatype of the new joined Iterable object  is :  \n'  )
print(type('-'.join(newIter)))
print(type(' '.join(newIter1)))
# print(type(','.join(newIter)))


print( '\n' + '---------------------------------' + '\n' )
  

print(  '==========================================' )

# ======================================================== 
 


 

# ========================================================
# Note:
  #  

