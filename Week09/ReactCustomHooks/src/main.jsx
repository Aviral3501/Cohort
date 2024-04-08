import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import FunctionHook from './FunctionHook'
// import ClassBasedHook from './ClassBasedHook'
// import LifeCycleFunction from './LifeCycleFunction'
// import LifeCycleClass from './LifeCycleClass'
import DataFetching from '../CustomHooks/DataFetching'
import CustomDataFetching from '../CustomHooks/CustomDataFetchinfHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 
    {/* <FunctionHook/>
    <ClassBasedHook/>

    <div>LIfeccyle here ----  </div>
    <LifeCycleFunction/>
    <LifeCycleClass/> */}




    <DataFetching/>
    <div>--------------------------------------</div>
    <CustomDataFetching/>



    </>
    
)
