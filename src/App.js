import SearchBar from "./components/SearchBar";
import Blogcard from "./components/blogcard";
import "./style.css";
function App() {

  // const dispatch = useDispatch();
  // const state = useSelector((state)=>state);
  // useEffect(
  //   ()=>{
  //     dispatch(postSlice());
  //   }
  // ,[])
  
  return (
    <>
    <SearchBar/>
    <Blogcard/> 
   
    </>
  );
}

export default App;
