
 
#   10 : Concatenation And Training  :
# ----------------------------------------

# Exp1  : Concatenation between several  varables wihtin single line :    
# can concatenate between several  variables or  simple text  using  the  '+' sign
exp1 = 'Exp 1 : Concatenation between several  variables wihtin single line : \n '

msg = 'I  love '
lang  = 'Python'


print(msg +  '' + lang )


full = msg + lang 


print (exp1 +  full  + ' using merged variables \n  ==========================='  )
# ---------------------------------------------------------------------------------------

# Exp2  : Concatenation between several  variables wihtin  multiple  lines :
# by using  '\'  wihin the string value  => this will allow to write   string witin several lines , but will be printed within one line       
exp2 = 'Exp 2 :  Concatenation between several  variables within mulit lines in definition ,  but within  single lines for each variable :  \n '

var1 =  "shadi \
    sayed \
    ali   \
" 

var2 =  "1 \
    2 \
    3  \
" 

print( exp2  +  var1 +  '\n' + var2  +  ' \n ======================================') 

# ---------------------------------------------------------------------------------------


# Notes :
# Can NOT concatenate between different type of data types 
# in advaned lesson we will learn method to convert numbers into string      
# str  =  'text '
# num  =  211
 
#  print (str + num ) 







