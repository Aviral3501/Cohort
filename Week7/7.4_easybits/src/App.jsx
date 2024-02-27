import {RecoilRoot ,  useRecoilValue} from "recoil";
import {jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationsSelector} from "./atoms/atoms";

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
  const messagingAtomCount  = useRecoilValue(messagingAtom);
  const totalNotificationsCount = useRecoilValue(totalNotificationsSelector);

  return(
    <>
    <div>
      <button>Home </button>

      <button>My Network ({networkNotificationsCount >= 100 ? "99+":networkNotificationsCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount >=100?"99+":notificationsAtomCount})</button>
      
      <button >Me ({totalNotificationsCount})</button>
      
    </div>
    </>
  )

}
export default App
