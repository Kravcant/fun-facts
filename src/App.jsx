import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import FunFactCard from './FunFactCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="main">
      <Header />
      <div id="facts">
      <FunFactCard fact="Rabbits cannot vomit." />
      <FunFactCard fact="I frew up." />
      <FunFactCard fact="Ḧ̵̡̡͓̥͕̭̠͖̖̠͗̍͊̅̏̇e̶͚̜̖̩̙̗̬̱̐́̔͋ĺ̶͎̹͓̻̥͉̻̔̀̈́̋͋̄l̴̢̢̪͖̗̞͈̦̰͍̦̱̐̽͗ơ̵͖̩̠̑̈̽̄̎̏ ̸̨̛̠̺̭̲͓͓̦͕͖̋̓ͅh̶̛̻͈̩̹̓̒̈́ȋ̶̦̰̣͇͔̦̣̮͒̎̈͘͠ ̴̢̡̢̻̺͍̜͙͉̞̲͈͓̝̹̌̎̈̊̾̃͆I̷̛̛̯̝͉̒̃̑͒͋͛́͑́͛̏ ̵͇̦̜̲̲̖͇́́̅̍̂̔͗͋h̵̛̛̯̺̩͚̱͈̟̄̌͊̃́͂̀̓̄̃͘͜ư̷̼̗͍̬̩̯̔̈́͂͌̑̐̿͊̐͌͆̑͝m̶̨͇̫̖̳̹̗͐͆͜͠a̷̧̹͖̹̗̜͉͇͕̝̹̹̬͙̽n̷̖̼̠͎̙͌̈͌̃͂̋̐̆̽̊͂̔̃͑͝" />
      <FunFactCard fact="This is a fun fact [citation needed]." />
      <FunFactCard fact="Do not eat the spiderman burger from Burger King." />
      </div>
    </div>
  )
}

function Header() {
  return (
    <h1>
      Facts that are Fun !!
    </h1>
  );
}

export default App
