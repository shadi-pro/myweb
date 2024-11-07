#  11 : String (part1) :

# This lesson will start talking deeply about the data types in python  => starting  with  [string]   
  #==============================================================

exp1  = 'Using different sign of  the quotes inside the same variable ' +  '\n' 

var1 = 'string with  "Single quotes " '
var2 = "string with  'Doubled quotes' "

print (exp1 + var1 +  '\n'  + var2 + '\n' + '===========================================' + '\n'   )  

#=========================================================

exp2  = ' using tripple "Single quotes " or "Doubled quotes"  to allow  write multiple lines with  the string value ' +  '\n'

var3 = ''' 
  This string worte using the
      'tripple single' \ quotes sign 
'''

var4 = """
  This string worte using the 
      "tripple double" \\ quotes sign   
""" 

var5 = """
  This string worte using the 
      "tripple double" \\\ quotes sign   
""" 

print (exp2 + var3 +  '\n' + '===========================================' + '\n' 
       + var4 +  '\n' + '===========================================' + '\n'  
       + var5 +  '\n' + '===========================================' + '\n'  
         )  
 
#=========================================================
# Notes : 
# string value can be written using single or double quotes ''  || "" 
# you can use different sing of qoutes  in single string by using  different other of qoutes sign    
# you can use  tripple  quotes [using single or  Doubled qoutes]  to apply writing multiple lines inside the same string variable      
# The Tripple  quotes is  alteranative method of using the '\n'  new line opertator  
# using  tripple  quotes is skapping using the same type of quote inside the same variable    
# using  tripple  quotes is skapping the '\' skapping opertator and read as a text  
# using  tripple  quotes will implement  '\\'  in between line as a  skape operator   , also will implement as  '\' as a  skape  operator  if it was at the end of line  
# using  tripple  quotes will deal  with '\\\' as a one skape sign  and anther as a text   
 

