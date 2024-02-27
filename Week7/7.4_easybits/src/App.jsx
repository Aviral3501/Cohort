import {RecoilRoot , useRecoilState, useRecoilValue} from "recoil";
import {jobsAtom, messagingAtom, networkAtom, notificationsAtom} from "./atoms/atoms";

const App = () => {
  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}


const MainApp =()=>{

  const networkNotificationsCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const [messagingAtomCount , setMessagingAtomCount] = useRecoilState(messagingAtom);

  return(
    <>
    <div>
      <button>Home </button>

      <button>My Network ({networkNotificationsCount >= 100 ? "99+":networkNotificationsCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount >=100?"99+":notificationsAtomCount})</button>
      
      <button onClick={()=>{
        setMessagingAtomCount(messagingAtomCount + 1);
      }}>Me</button>
      
    </div>
    </>
  )

}
export default App
