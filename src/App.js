import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import Category from './pages/Category';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import CreateListing from './pages/CreateListing';
import Listing from './pages/Listing';
import Contact from './pages/Contact';
import EditListing from './pages/EditListing';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />

          {/* http://localhost:3000/category/rent/O78lZcaVGKTet5TGgybo */}
          <Route path='/category/:categoryName' element={<Category />} />

          <Route
            path='/category/:categoryName/:listingId'
            element={<Listing />}
          />

          {/* ovaj način je jednostavniji za skužit */}
          <Route
            path='/profile'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          {/* //Ovaj način je korištenjem outleta
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route> */}

          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/create-listing' element={<CreateListing />} />

          {/* http://localhost:3000/edit-listing/DKaz6vFTJj0JDW8vhfdf */}
          <Route path='/edit-listing/:listingId' element={<EditListing />} />

          {/*                        contact/landlordId?listingName */}
          {/* http://localhost:3000/contact/8fPh7awdad3?listingName=Moder */}
          <Route path='/contact/:landlordId' element={<Contact />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
