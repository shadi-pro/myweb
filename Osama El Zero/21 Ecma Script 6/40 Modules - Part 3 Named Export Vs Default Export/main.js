// 40 Modules - Part 3 Named Export Vs Default Export :


/* Including following examples and functions :
  1- Creating exporting file and exporting elements using export ONLY {default exporting method} => { { export default element  } }
    a- [with using {Aliase name} in importing file]    -> { { import OriginalNameDefElem from './file.js'   } }
    b- [without using {Aliase name} in importing file] -> { { import AliaseNameDefElem from './file.js'   } }
  
  2- Creating exporting file and exporting elements using export BOTH {default exporting method} & {Named exporting method } => 
    a- [with using {Aliase name} in importing file]    -> { { import OriginalNameDefElem , {VarOne , VarTwo , Array , object } from './file.js'   } }
    b- [without using {Aliase name} in importing file] -> { { import AliaseNameDefElem, {VarOne , VarTwo , Array , object} from './file.js'   } }

*/


