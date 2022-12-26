export const ContactList = function ( {contacts, onClick, filter} ) {
  
  const arrayFilter = contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()))
  
  return (
      <>
      <ul>
        { arrayFilter.map(({id, ...contacts }) => (
          <li key={id}>
            <p>{contacts.name}:{contacts.number}</p>
            <button type="button"  onClick = {() => onClick(id)}>Delete</button>
          </li> 
        ))}
      </ul>
      </>
  );
}