import React from 'react'
import { Box, Button, Dropdown, Modal, useModal } from 'zewide'

const App: React.FC = () => {
  const [onPresent] = useModal(<Modal title='hhhh'>xixixix</Modal>)

  return (
    <div>
      <Button onClick={onPresent}>onPresent</Button>
      <Dropdown target={<Button>left</Button>}>
        <Box p='20px' backgroundColor='red'>
          Dropdown content
        </Box>
      </Dropdown>
      <Dropdown target={<Button>right</Button>} placement='right'>
        <Box p='20px' backgroundColor='red'>
          Dropdown content
        </Box>
      </Dropdown>
    </div>
  )
}

export default App
