# 14 Strings Methods Part 2 [string part 4] :

# A] [concept] : 
# Built-in functions/methods to deal with string datatypes   

# There are some General bult-in methods  :
# 1- var.split(splitter character value ,  splitting limit value) ->
  ##  spliting the given string into a [List] datatype  of splited string elements -> according to the assinged splitter parameter [special character] +  limit number  parameter 
  ## include (2) types of parameters  :
    ###  (par1) : splitter parameter       -> splitting between element according on this parametere value  [accept space or special character only ]           
    ###  (par2) : spliting limit paarmeter -> number of splitted element and  the rest of element will be the last element    

 
# 2- var.rsplit(splitter character value ,  splitting limit value) -> The same concept of the main method of the {split} , but the splitting process will start from right side  

# 3- var.center( length value[integer value] , 'special character' )  ->  Putting the given string center between assinged characters ,  by certain limit of length

# 4- var.count('string to count' ,   starting position value , ending  position value  )  ->    ->
  ##  counting the  number of assingdstring inside the main string    
  ##  (par1) : string to count -> the string value to count [letter case-sensitive ]     
  ##  (par2) : starting index position  of counting  ->  integer value      
  ##  (par3) : ending index position of counting -> integer value


# 5-  swapecase()   ->  shifiting the given string  in the opposite letter case     

# 6-  startswith('string' , # , #)   -> Testing if the given string staret with a certain string [letter case-sensitive ]
  ## (par1) : string to test [caseinsinsitive]
  ## (par2) : starting index position value [integer ]       
  ## (par3) : ending index position value [integer ]            
 
# 7-  endswith('string' , # , #)   -> Testing if the given string staret with a certain string [letter case-sensitive ]
  ## (par1) : string to test [caseinsinsitive]
  ## (par2) : starting index position value [integer ]       
  ## (par3) : ending index position value [integer ]            
 
  
# ===================================================
# B] Practical Exps: 

# Exp1 : [var.split()] :  Spliting the given string (ltr) into a [List] datatype of splited string elements ( according to the default parameter 'spaces' & '!'  & '@' ) [without using a limit parameter]     :
exp1 = '[var.split()]: Spliting the given string (ltr) into a [List] datatype of splited string elements ( according to the default parameter "spaces" & "!"  & "@" ) [without using a limit parameter]  '  + '\n' + '======================================' + '\n'
a = 'I love PL' 
b = 'I !lo!ve! P!L' 
c = 'I @lo@ve@ P@L'   

res1 = a.split()
res2 = b.split('!')
res3 = c.split('@')
    
print (exp1 +  '\n') 
print('Splitting string according to the default splitter  (empty space)  : '    )
print(  res1 )

print('Splitting string according to the custom splitter  (!)  : '   )
print(  res2 )

print('Splitting string according to the custom splitter  (@)  : '  )
print( res3 )

print(  '==========================================' )

# ========================================================

# Exp2 :  [var.split( '' , #)] : spliting the given string (ltr) into a [List] datatype of splited string elements ( according to the default parameter 'spaces' & '!'  & '@' ) [with using a limit parameter value ]  :
exp2 =  '\n' + ' [var.split( "" ,  #)] : Spliting the given string  (ltr) into a [List] datatype of splited string elements ( according to the default parameter "spaces" & "!"  & "@" ) [without using a limit parameter]  '  + '\n' + '======================================' + '\n' 
aa = 'I love PL' 
bb = 'I !lo!ve! P!L' 
cc = 'I @lo@ve@ P@L'   

res11 = aa.split(' ', 3)
res22 = bb.split('!' , 1 )
res33 = cc.split('@' , 2 )
    
print (exp2 +  '\n') 
print('Splitting string according to the default splitter  (empty space) + (3 limit splitting)  : '    )
print(   res11  )


print('Splitting string according to the custom splitter  (!) + (1 limit splitting)  : '   )
print(  res22 )

print('Splitting string according to the custom splitter  (@) + (2 limit splitting) : '  )
print( res33 )
print(  '==========================================' )

# ========================================================
  

# Exp3 : [var.rsplit()] spliting (from right side) the given string into a [List] datatype of splited string elements ( according to the default parameter 'spaces' & '!'  & '@' ) [with using a limit parameter value ]  :
exp3 =  '\n' + '[var.rsplit()]: Spliting the given string into a [List] datatype of splited string elements ( according to the default parameter "spaces" & "!"  & "@" ) [without using a limit parameter]  '  + '\n' + '======================================' + '\n' 

aaa = 'I love PL' 
bbb = 'I !lo!ve! P!L' 
ccc = 'I @lo@ve@ P@L'   

res111 = aaa.rsplit(' ', 3)
res222 = bbb.rsplit('!' , 1 )
res333 = ccc.rsplit('@' , 2 )

res0 = aaa.rsplit() 
res00 = bbb.rsplit() 
res000 = ccc.rsplit() 

print (exp3 +  '\n')     
print('Splitting (from right side) string according to the default splitter  (empty space) + (3 limit splitting)  : '    )
print(   res111  )


print('Splitting (from right side) string according to the custom splitter  (!) + (1 limit splitting)  : '   )
print(  res222 )

print('Splitting (from right side) string according to the custom splitter  (@) + (2 limit splitting) : '  )
print( res333 )

print(  '==========================================' )
# ========================================================


# Exp4 : Putting  the string Centralized between specific characters + with certain assigned  length    :
exp4 =  '\n' + '[var.center(# , "!@#$%-+" )] : Putting  the string Centralized between specific characters + with certain length  '  + '\n' + '======================================' + '\n' 

d = 'I love PL' 
   

print (exp4 +  '\n')   
print('Putting  the string Centralized between specific characters "-" + with total length  "20"   : '    )
print( d.center( 20 , '-'  )  )

print(  '==========================================' )

# ========================================================

# Exp5 : Counting for the assinged string number inside a given string , with  assigned  length  of the main string      :
exp5 = '\n' + '[var.count("" , #start  , #end  )] Counting for the assinged string number inside a given string , with  assigned  length  of the main string '  + '\n' + '=====================================' + '\n' 

e = 'I love Pl l' 
   
 
print (exp5 +  '\n')  
print( 'The count of the assined string without using a position value  : ' +  '\n'  )
print( e.count( 'l' )  )

print( 'The count of the assined string with using a starting position value only : ' +  '\n'  )
print( e.count( 'l' , 2 )  )

print( 'The count of the assined string with using both of startig and ending position values  : ' +  '\n'  )
print( e.count( 'l' , 2  , 5 )  )

print(  '==========================================' ) 
# ========================================================

# Exp6 : Swapping a given string :
exp6 =  '\n' + '[var.swapecase()] : shifting the letter cases of the given string  into the oppistite '  + '\n' + '======================================' + '\n' 

f1 = 'i love pl' 
f2 = 'I LOVE PL' 
f3 = 'I love PL' 
   

print (exp6 +  '\n')  
print( 'The swaped case of the given string   : ' +  '\n'  )
print( f1.swapcase() )

print( 'The swaped case of the given string   : ' +  '\n'  )
print( f2.swapcase() )

print( 'The swaped case of the given string   : ' +  '\n'  )
print( f3.swapcase() )

print(  '==========================================' )
# ========================================================

# Exp7: [var.endswith("string")] Testing if the given string end  with a certain  string [letter case-sensitive ]   :
exp7 = '\n' + '[var.endswith("string")] :  Testing if the given string end with a certain string [letter case-sensitive ]  '  + '\n' + '======================================' + '\n' 

g = 'i love pl lll' 
 
  
print(  exp6 +  '\n'  )
print( 'Testing if the given string starts with "i"   : ' +  '\n'  )
print( g.startswith('i') )
 
 
print( 'Testing if the given string starts with "I"   : ' +  '\n'  )
print( g.startswith('I') )

print(  '==========================================' ) 
# ========================================================
 
# Exp7 : [var.startswith("string")] Testing if the given string staret with a certain  string [letter case-sensitive ]   :
exp7 = '\n' +  '[var.startswith("string")] :  Testing if the given string staret with a certain string [letter case-sensitive ]  '  + '\n' + '======================================' + '\n' 

g1 = 'i love pl i' 
 
  
print(  exp7 +  '\n'  )
print( 'Testing if the given string ends with "i"   : ' +  '\n'  )
print( g1.endswith('i') )
 
 
print( 'Testing if the given string ends with "I"   : ' +  '\n'  )
print( g1.endswith('I') )
 
print(  '==========================================' )
# ========================================================
 
# Note:
# 



