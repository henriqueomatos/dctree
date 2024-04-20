export default function GeneralForm({action, method, onSubmit, children}) {
  return (
    <form 
    action={action} 
    method={method} 
    onSubmit={onSubmit} 
    className="w-75">

      { children }
      
    </form>
  );
}
