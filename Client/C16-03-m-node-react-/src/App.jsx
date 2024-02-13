import './App.css'
import TextInput from './components/TextInput/TextInput'
import MainContainer from './components/mainContainer/mainContainer'
import Button from './components/button'
function App() {

  return (
    <>
      <div>
        <TextInput />
        <MainContainer />
        <Button text={"Registrate"} />
      </div>
 
    </>
  )
}

export default App
