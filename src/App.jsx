import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';

import styles from './App.module.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return <div className={styles.calculator}>
    <Display></Display>
    <ButtonContainer></ButtonContainer>

  </div>
  
}

export default App
