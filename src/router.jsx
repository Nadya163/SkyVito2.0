import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./pages/Main/Main";
import Article from "./pages/Article/Article";
import Profile from "./pages/Profile/Profile";
import SellerProfile from "./pages/SellerProfile/SellerProfile";
import Signin from "./pages/Signin/login";
import Signup from "./pages/Signup/Signup";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import MyArticle from "./pages/MyArticle/MyArticle";

function AppRoutes({ user }) {
    return (
        <Routes>
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="/article/:id" element={<Article />} />
                <Route path="/sellerprofile/:id" element={<SellerProfile />} />
                <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                    <Route path="/myarticle/:id" element={<MyArticle />} />
                    <Route path="/profile" element={<Profile user={user} />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default AppRoutes;
