const PrimaryButton = ({ children }) => (
    <button className="primary-button" onClick={(e)=>(e.preventDefault())}>
      {children}
    </button>
  );
  
  export default PrimaryButton;
  