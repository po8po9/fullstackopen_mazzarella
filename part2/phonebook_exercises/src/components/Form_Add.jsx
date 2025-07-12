const Form_Add = ({handler, adder, name, number}) =>{
    
    
    return(
    <form onSubmit={adder}>
        <div>
          <div>name: <input id='name_input' value={name} onChange={handler}/></div>
          <div>number: <input id='number_input'value={number} onChange={handler}/></div>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>  
      
    )
}

export default Form_Add