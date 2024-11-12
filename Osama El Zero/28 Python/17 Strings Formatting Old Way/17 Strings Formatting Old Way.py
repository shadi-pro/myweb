
# 17 Strings Formating Part 1 [string part 7]    :

# A] [concept] : 
#  The (old ways) used to format string datatypes value into another datatype 
#  Python uses the same formating method of the [C] progaming language      
# ---------------------------------------------------
 

 
# 1- Inline formating {placeholder} old method  [ '%s'  , '%d' , '%f'  ] +  %(var1 ,var2 , var3)  ->
  ##  To perform a concatenation between differnt datatype using placeholder flags as following :
    ### %s =>  placeholder of a string  value       
    ### %d =>  placeholder of a [digital integer] value     
    ### %f =>  placeholder of a [floating point  integer]  value      
  ## include assigned variables after placeholders inside a brackets  %()       



# 2- [ %.#s ] : truncatating (Removing a specific value from  a string)  :
    ## to slice a specific string value from the main string , by assign the count within the string placeholder        

# ===================================================
# B] [Practical Exps] : 

# Exp1 :  Concatenating  different datatype  using {placeholder}  [%s , %d , %f , %.#f  ]  : 
exp1 = '  Concatenating  different datatype  using [placeholder]  [%s , %d , %f , %.#f ]    '  + '\n' + '======================================' + '\n'
print (exp1 +  '\n') 
   
name = 'Shadi'
age = 30
level  = 10
  
print('My Name is : %s and Age is : %d and Level is : %f and with controled floating point  is : %.2f '  %(name, age ,level , level  ) )
 
print(  '==========================================' )

# ========================================================  

  
print( '\n' + '---------------------------------' + '\n' )
print(  '==========================================' )

# ======================================================== 
 
# Exp2 : [ %.#s ] : truncatating (Removing a specific value from  a string)  : 
exp2 = '[ %.#s  ] :  Removing a specific value from  a string : '  + '\n' + '======================================' + '\n'
print (exp2 +  '\n') 
   
s = 'This is along string to be modified by using the [%.#s] old method'
   
print( 'the basic string is : \n %s '  %s  + '\n' )

print( 'the modified string of [first 10 letters only ] is : \n  %.10s ' %s  )
 
print(  '==========================================' )

# ========================================================  

  
print( '\n' + '---------------------------------' + '\n' )
print(  '==========================================' )

# ======================================================== 
 


 

# ========================================================
# Note:
  #  

