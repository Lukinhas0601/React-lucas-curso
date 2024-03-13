import './styles.css'

export const TextInput = ({ searchValue, handelChange }) => {
  return (
    <input 
        className="text-input"
        onChange={handelChange} 
        value={searchValue} 
        type="search"
        placeholder='Type your search'
    />
  );
};
