import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button 
        color={showAdd ? '#FE0000' : '#810089'} 
        text={showAdd ? 'Close Add Task Bar': 'Show Add Task Bar'} 
        onAdd={onAdd} 
      />
    </header>
  )
}

export default Header