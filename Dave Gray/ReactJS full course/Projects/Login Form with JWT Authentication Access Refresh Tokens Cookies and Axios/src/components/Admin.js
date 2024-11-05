//  The [Admin Form]  to be displayed only for Admin  [protected route ]   :

import {Link} from 'react-router-dom';

import  Users from './Users';
 

const Admin = () => {
  return (
    <section> 
      
      <h1>  Admin page  </h1>
      <br />

      <Users />   

       <div clasaName = 'flexGrow'>       

          <Link to='/' >  Return Home     </Link>

       </div>
    </section>
  )
}

export default Admin
