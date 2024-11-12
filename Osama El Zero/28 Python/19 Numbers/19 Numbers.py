
# 19 Numbers [numbers part 1]    :

# A] [concept] : 
# Types and methods  of the numbers in the python    
# a] [Types] of  numbers in the python :
  ## 1- [integer] => the normal numbers  such as : [0 ,  + ,  -]  
  ## 2- [float] => Decimal numbers with flaoting point => such as  :  [100.50000 , -100.50 , 0.565 , -.0556  ]   
  ## 3- [Complex number] =>  consists of (2) parts , such as  :   [5 + 6j] 
    ###   first part :  real part   
    ###   second part: imaginary part  
    ###   each part of teh complex can be accessed seperatarey , using : [var.real] [var.imag]    
  ##  [integer] numeric dataytype can be converted to any other numeric datatype    
  ##  [float] numeric dataytype can be converted to any other numeric datatype    
  ##  But [complex] numeric datatype can NOT be converted to any other numeric datatype    
 
# b] [Nubmers methods] in the python :
  ## 1- Converting [integer] to [float] [float(intger)]    
  ## 2- Converting [integer] to [float] [complex(intger)]    
  ## 3- Converting [float] to [integer] [integer(float )]    
  ## 4- Converting [float] to [integer] [complex(float )]    
   

 
# ---------------------------------------------------
 

# ===================================================
# B] [Practical Exps] : 

# [1]  Get datatype of each number type [] :
# Exp1 : Printing the value and datqaytpe of each type of number using [placeholder formating]  &  [ type(numeric variable ) ]   : 
exp1 = ' Printing the  value and datqaytpe of each type of number using [placeholder formating]  &  [ type(numeric variable ) ] '  + '\n' + '======================================' + '\n'
print (exp1 +  '\n') 

intNum = 5     
floatNum = .5     
complexNum = 5+6j     

print('Printing all numbers variables using the [placeholder method] ,  as following  \n first number of [integer type] is  {} , second  number of [float type] is  {} , third  full  number of [complex  type] is  {} with first real part : {} and  second part of the imaginary {} \n '.format(intNum , floatNum , complexNum , complexNum.real , complexNum.imag ) ) 

print('Printing all previous numeric variables datatype , as following   : \n   ')

print(type(intNum))  
print(type(floatNum)  )
print(type(complexNum) )

 
print( '\n' + '---------------------------------' + '\n' )
print(  '==========================================' )

# ======================================================== 
# ======================================================== 
 
# [2]  Converting  both of [integer] & [float] number type to other datatype  :
# Exp2 :  Converting  both of [integer] & [float] number type to other datatype : 
exp2 = ' Printing the  value and datqaytpe of each type of number using [placeholder formating]  &  [ type(numeric variable ) ] '  + '\n' + '======================================' + '\n'
print (exp2 +  '\n') 

intNum = 5     
floatNum = 56.5     
complexNum = 5+6j     
  
print('[Integer number] {} after converting into [float number] is : \n '.format(intNum)  )
print( float(intNum) )

print('[Integer number] {} after converting into [complex  number] is : \n '.format(intNum)  )
print( complex(intNum) )
print('\n')

print('[Float number] {} after converting into [integer number] is : \n '.format(floatNum)   )
print( int(floatNum) )

print('[Float number] {} after converting into  [complex number] is : \n '.format(floatNum)   )
print( complex(floatNum) )
 
  
print( '\n' + '---------------------------------' + '\n' )
print(  '==========================================' )

# ======================================================== 
# ======================================================== 
 

# ========================================================
# Note:
  #   
   
