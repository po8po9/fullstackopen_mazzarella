const Form_Search =({query, handler})=>{

   return(<div>search: <input id='search_input' value={query} onChange={handler}/></div>)
}

export default Form_Search

