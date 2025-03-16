import './App.css';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import LandingPage from './components/LandingPage';
import JobCategoriesSection from './components/JobCategorySection';
import LocalStatsSection from './components/LocalStatsSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import QuickApplyProcess from './components/QuickApplyProcess';
import PrivacyPolicy from './components/Privacypolicy';
import TermsAndConditions from './components/Termsandservices';


function App() {

  
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><LandingPage/></>
    },{
      path:"/privacypolicy",
      element:<><PrivacyPolicy/></>
    },{
      path:"/tos",
      element:<><TermsAndConditions/></>
    },{
      path:"/SuccessStories",
      element:<><SuccessStoriesSection/></>
    }
    ,{
      path:"/QuickApply",
      element:<><QuickApplyProcess/></>
    }
    ,{
      path:"/Settings",
      element:<></>
    }
  ])
 
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;