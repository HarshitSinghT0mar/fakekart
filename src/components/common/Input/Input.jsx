const Input = ({ label, type, id, name, placeholder }) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} />
    </div>
  );
  
  export default Input;
  