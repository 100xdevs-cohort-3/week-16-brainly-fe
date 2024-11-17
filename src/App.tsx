import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button 
        variant={"primary"}
        startIcon={<PlusIcon />} 
        endIcon={<ShareIcon />} 
        size="sm" 
        title={"Share"}
      ></Button>

<Button 
        variant={"secondary"}
        startIcon={<PlusIcon />} 
        endIcon={<ShareIcon  />} 
        size="md" 
        title={"Share"}
      ></Button>


      <Button 
        variant={"primary"}
        startIcon={<PlusIcon/>} 
        endIcon={<ShareIcon />} 
        size="lg" 
        title={"Share"}
      ></Button>
    </>
  ) 
}

export default App
