
# 18 Strings Formatting New Ways part 2 [string part 8]    :

# A] [concept] : 
#  The (new ways) used to format string datatypes value into another datatype 
#  Python uses the same formating method of the [C] progaming language      
# ---------------------------------------------------
 

 
# 1- [ {:FormatType} .format(value or variable) ] & [ {:s ||: d || :f} .format(value or variable) ] & [ {#} .format(value or variable) ]  & [(#:customformat FormatType   )] ->
  ##  To perform a concatenation between different datatype using placeholder unified flags {} as following :
    ### {} =>  placeholder of a any value datatype        
    ### {:s || :d || :f} =>  placeholder of a specified value datatype [non controled value ]
    ### {:.#s} => placeholder of a specified conrtroled custom value datatype [certain count of the letters]    
    ### {:,d} || {:_d} || {:-d} =>  placeholder of a specified controlled custom value datatype [custom numeric seperator after each (3) digits  ]
    ### {:.#f} =>  placeholder of a specified conrtroled custom value datatype [custom count of floating point] ]
    ### {#} =>  placeholder of a specified index from assigned varaibles


# 2- New [python 3.6+] formating method [similler to JS formating ] ->
  ##  To perform a concatenation between different datatype using placeholder unified prevoius operator of {f} as following :
  ##  This method is much more easier  from all previous methods 
    
# ===================================================
# B] [Practical Exps] : 
# [1]  First  method of new Flags   :
# Exp1 : [ {} .format(value or variable) ] with using the unified flags + specifed flags  : 
exp1 = ' [ { } .format(value or variable) ]  with using the unified flags: '  + '\n' + '======================================' + '\n'
print (exp1 +  '\n') 
    
name = 'shadi' 
age = 30 
level =  10


print('The concatenated different datatype variables by using unified placeholder flags  : \n ' )
print('My name is {} \n im {} years old \n my level is {} degree'.format(name ,  age , level) + '\n'  )


print('The concatenated different datatype variables by using specifed  placeholder flags : \n ' )
print('My name is {:s} \n im {:d} years old \n my level is {:.2f} degree'.format(name ,  age , level) + '\n'  )


print(  '==========================================' )

# ========================================================  

# Exp2 : using [ {} .format(value or variable) ] with using the  specifed  flags to truncate a string  : 
exp2 = '  using [ {} .format(value or variable) ] with using the  specifed  flags to truncate a string  : '  + '\n' + '======================================' + '\n'
print (exp2 +  '\n') 
    
    
str = 'This is a long string to be trunated  using controled  placeholder flag of new method  ' 
 

print('The Basic long string  is : \n {:s}'.format(str) + '\n -------------------- \n' )

print('The long string after slicing [first 10 letters] by using placeholder controled  :.#s flag is : \n  {:.10s} \n '.format(str) )

print(  '==========================================' )

# ========================================================  


# Exp3 : using [ {} .format(value or variable) ] with using the  specified  flags to custom formating a number   : 
exp3 = 'using [ { } .format(value or variable) ] with using the  specified  flags to custom formating a number    : '  + '\n' + '======================================' + '\n'
print (exp3 +  '\n') 
    
num = 55750156380  

print('The Basic long number is : \n {:d}'.format(num) )
print('The formated long number using "_" is : \n {:_d}'.format(num)  + '\n' )
print('The formated long number using "," is : \n {:,d}'.format(num)  + '\n' )
# print('The formated long number using "-" is : \n {:-d}'.format(num)  + '\n' )
 
 
print(  '==========================================' )

# ========================================================  

# Exp4 : custom arrangement of assinged varaiables [ {#} .format(value or variable) ] by assing the a ceratin number  index   : 
exp4 = 'using [ { } .format(value or variable) ] with using the  specified  flags to custom formating a number    : '  + '\n' + '======================================' + '\n'
print (exp4 +  '\n') 


name , age , level = 'shadi' , 30 , 10
 
  
print('The concatenated  defined variables with original arrangemnt as following  {} {} {} : \n '.format(name , age , level)   + '\n' )
print('The concatenated  defined variables with custom arrangemnt as following  {2} {0} {1} : \n '.format(name , age , level)   + '\n' )
  
print(  '==========================================' )

# ========================================================  


# Exp5 : custom arrangement of assinged varaiables + custom format  [ {#:flag.customFormat} .format(value or variable) ] by assing the a ceratin number  index   : 
exp5 = 'custom arrangement of assinged varaiables + custom format  [ {#:flag.customFormat} .format(value or variable) ] by assing the a ceratin number  index  : '  + '\n' + '======================================' + '\n'
print (exp5 +  '\n') 


name , age , level = 'Shadi Syaed Mohammed' , 30000000000 , 10
 
  
print('The concatenated defined variables with original arrangemnt and non customaizations as following : \n  {:s} {:d} {:f}  '.format(name , age , level)   + '\n' )
print('The concatenated defined variables with custom arrangemnt and non Format customizations as following : \n {2} {0} {1}  '.format(name , age , level)   + '\n' )
print('The concatenated defined variables with custom arrangemnt and Format customizations of [float: last index + 3 float points & string: first index + 5  truncate letters &  digit: second index +  , numeric seperator ] as following : \n {2:.3f} {0:.5s} {1:,d} '.format(name , age , level)  + '\n' )
   
print(  '==========================================' )

# ========================================================  
# [2]  Second new  method of { F } operator      :

# Exp6 : Custom Formating using the {f}    : 
exp6 = '  Custom Formating using the { f }  : '  + '\n' + '======================================' + '\n'
print (exp6 +  '\n') 

name , age , level = 'Shadi Syaed Mohammed' , 30 , 10
  
print(f'The concatenated defined variables with  new metod of the "f" operator  as following  : \n myname is : {name}  \n Im : {age}  \n My level is : {level} \n' )
    
print(  '==========================================' )

# ========================================================  

   
print( '\n' + '---------------------------------' + '\n' )
print(  '==========================================' )

# ======================================================== 
# ======================================================== 

# ========================================================
# Note:
  #  The new method of  [ {} .format(value or variable) ]  is just like the old method , but by replacing the {specified flag  %} with a (unified flag {}) 
  #  The new method of  [ {} .format(value or variable) ] include much more features and abilities  
  #  The new Formating method of  the previous operator  [f] => is similer to the javascript , and much more easier from all other methods    
  #  There is a imprtant refernce of the python formating methods =>  ['pyformat.info']   => include only indetailed informatoin about the all python formating methods    
   
