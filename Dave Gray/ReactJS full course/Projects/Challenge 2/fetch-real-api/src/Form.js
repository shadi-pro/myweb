
// {App.js} => {Form.js} => {Button.js}

/* {Form} first main parent component , with following properties :
  - This component is about a form element ,  with deactivate the default submiting feature => by using e.target.preventDefault()]  
  - [props] : [reqType, setReqType] will be used inside each called [Button] component , to be assigned when being called inside the main {App} component     
  - Returned {Button} a reusable component will be used as serveral called elements with props of { buttonText : to be assinged here  & [reqType, setReqType] : to be assigned inside the main App component }  
 
*/


import Button from './Button';

const From = ({ reqType, setReqType }) => {

  return (
    <form onSubmit={(e) => e.target.preventDefault()} >

      <Button
        buttonText='users'
        reqType={reqType}
        setReqType={setReqType}
      />

      <Button
        buttonText='comments'
        reqType={reqType}
        setReqType={setReqType}
      />

      <Button
        buttonText='posts'
        reqType={reqType}
        setReqType={setReqType}
      />

    </form>

  )
}


export default From;  