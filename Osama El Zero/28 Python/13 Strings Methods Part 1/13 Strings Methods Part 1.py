# 13 Strings Methods Part 1 [string part 3] :

# A] [concept] : 
# Built-in functions/methods to deal with string datatypes   

# Theree are some General bult-in methods  :
# 1- len() => return the length of the inner paratemer elements  
# 2- var.strip() & var.rstrip() & var.lstrip() => return the string without spaces (or without a custom character - as parameter -)  from the both sides , right side, left side  
# 3- tilte() => Capitalize the given string [first letter of the word  is capital] +  letter after numbers   
#     

 
# ===================================================
# B] Practical Exps: 
# Exp1 : Getting the length of a defined string variable :
exp1 = 'Getting the length of a defined string variable'  + '\n' + '=.=====================================' + '\n'
a  = 'string value ' 
b  = '   string value    '  
  
print( 'Length of the first varialbe = ' +   str(len(a))  )

print( 'Length of the second  varialbe (with extra spaces ) = ' + str(len(b))  +  '\n'  + '=============================='  + '\n' )
 
# ========================================================

exp2 = 'Getting the string variable value without spaces  : ' + '\n' + '======================================' + '\n' 

print( exp2  +  '\n'  +  'The value of  first varialbe without spaces from the both sides  = ' +  b.strip() +  ' => with lenght  : ' + str(len(b.strip()))   )
print('The value of  first varialbe without spaces from the right side only   = ' +  b.rstrip()  + ' => with length : '  + str(len(b.rstrip()))  )
print('The value of  first varialbe without spaces from the left side only   = ' +  b.lstrip() +  ' => with length : ' +  str(len(b.lstrip())) )
#=================================================================
 
exp3 = 'Getting the string variable value without single custom charcter : ' + '\n' + '======================================' + '\n' 
c  = '#####string value#####'  

print( exp3 +  '\n' + 'The main value of variable [before using the strip() method] : '  + c +   '\n' + ' => with length : ' +  str(len(c)) + '\n' + 
       'The value of varialbe  [after using the strip() method] without single  custom special characters [#] at the both sides : ' +  c.strip("#") + '\n' + 
        ' => with length : ' +  str(len(c.strip("#"))) + '\n' )
#  ===========================================================
 
exp4 = 'Getting the string variable value without multiple custom charcters : ' + '\n' + '======================================' + '\n' 
d  = '@#@#@#string value@#@#@#'  

print(    exp4 +   '\n' + 'The main value of variable [before using the strip() method] : '  + d +   '\n' + ' => with length : ' +  str(len(d)) + '\n' + 
       'The value of varialbe  [after using the strip() method] without multiple custom special characters [#] at the both sides : ' +  d.strip("@#") + '\n' + 
        ' => with length : ' +  str(len(d.strip("@#"))) + '\n' )
  
# =========================================================

exp4 = 'Getting the Capetalized string variable value   ' + '\n' + '======================================' + '\n' 
d  = '@#@#@#string value@#@#@#'  

print(    exp4 +   '\n' + 'The main value of variable [before using the strip() method] : '  + d +   '\n' + ' => with length : ' +  str(len(d)) + '\n' + 
       'The value of varialbe  [after using the strip() method] without multiple custom special characters [#] at the both sides : ' +  d.strip("@#") + '\n' + 
        ' => with length : ' +  str(len(d.strip("@#"))) + '\n' )
  
# =========================================================





# Note:
# The length method len() => will count empty spaces in the string value 
# The strip() => can be used by default to remove the empty spaces only [from both , right ,left ]    
# The strip() => can be be assinged a single custom special  character  or multiple special  Custom charters  to be removed  [from both , right ,left ]            
# The title() => can be be assinged  




