
import { useSelector, useDispatch } from 'react-redux';
import { addToList, getName, removeName } from './redux/AddSlice';
import "./App.css"
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {

  const name = useSelector(state=>state.user.user)
  const list = useSelector(state=>state.user.list)

  const dispatch = useDispatch();

  const Name =(e)=>{
    dispatch(getName(e.target.value))
  }

  const add = ()=>{
    dispatch(addToList());
    dispatch(removeName());
  } 

  return (
    <div className="App">
      <div className='input-and-button'>
      <TextField id="outlined-basic" label="write something to do" variant="outlined" className='text' type="text"  onChange={(e)=>Name(e)} value={name} />
      <Button className='button' color="primary" size="large" sx={{ mt: 2 }} type="submit" onClick={add} variant="contained">Add</Button>
      </div>
      <div className='todolist' >
        <h1>TODO LIST</h1>
        {
          list.map((item,i)=>(
            <p key={i}>{item}<Button variant="outlined" sx={{ml:2}} color="error" startIcon={<DeleteIcon />}>Delete</Button></p>
          ))
        }
      </div>
      
    </div>
  );
}

export default App;
