import Image from 'next/image';
import DarkStatus from './DarkStatus';
import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { switchLight } from '../reducers/dark';

function Home() {
  const dispatch = useDispatch()
   
  let status = useSelector(states => states.dark.value)
  let src
  let alt
  let containerStyle = {}
  
  if (status) {
    src = '/light.png'
    alt = "Light"
    containerStyle = {"background-color": "white"}
  } else {
    src= '/dark.png'
    alt = "Dark"
    containerStyle = {"background-color": "black"}
  }
  
  return (
    <div className={styles.container} style={containerStyle}>
      <Image onClick={() => dispatch(switchLight())} src={src} alt={alt} width={128} height={128} id="switch" className={styles.switch}/>
      <DarkStatus />
    </div>
  );
}

export default Home;
