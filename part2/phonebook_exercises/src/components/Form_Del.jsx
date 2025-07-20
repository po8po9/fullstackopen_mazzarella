const Form_Del = ({handler, popper, name}) =>{
    
    
    return(
    <form onSubmit={popper}>
        <div>
          <div>name: <input id='del_input' value={name} onChange={handler}/></div>
         
        </div>
        <div>
          <button type="submit" >delete</button>
        </div>
      </form>  
      
    )
}

export default Form_Del