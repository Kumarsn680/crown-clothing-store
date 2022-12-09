import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import {  Route,Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUpForm from './components/SignUpForm';
import Shop from './components/Shop';
import Checkout from './components/Checkout';

function App() {

  const categories = [
    {
      id: 1,
      title: "Hats",
      image:
        "https://media.istockphoto.com/id/1184522745/photo/rodeo-horse-rider-wild-west-culture-americana-and-american-country-music-concept-theme-with-a.jpg?s=612x612&w=0&k=20&c=nQ5A-1FOuIvujY6AObkJ9xntyhfASTBG1zkh2-9yGg0=",
    },
    {
      id: 2,
      title: "Jackets",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRUnaHunvKuesexyIflPjfTjp-A9be81HJQ&usqp=CAU",
    },
    {
      id: 3,
      title: "Sneakers",
      image:
        "https://thumbs.dreamstime.com/z/sneakers-white-background-black-isolated-53434255.jpg",
    },
    {
      id: 4,
      title: "Womens",
      image:
        "https://img.freepik.com/free-photo/joyful-curly-girl-with-cute-hairstyle-playfully-posing-while-trying-new-stylish-dress-slim-young-woman-trendy-vintage-attire-dancing-isolated-white-background_197531-3621.jpg?w=2000",
    },
    {
      id: 5,
      title: "Mens",
      image:
        "https://i.pinimg.com/736x/d2/71/5b/d2715b76402be9a563a47326fc7a7989.jpg",
    },
  ];






  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home categories={categories} />}></Route>
          <Route path="shop/*" element={<Shop />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUpForm />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
