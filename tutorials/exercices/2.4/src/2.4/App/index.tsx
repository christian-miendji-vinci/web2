
import './App.css'
import Header from '../Header';
import Footer from '../Footer';

const App =() => {
   return(
     <Footer footerText="On Essaie Juste">
        <Header
          image="Nik Korba" 
          url="https://unsplash.com/fr/photos/jouet-en-plastique-jaune-rouge-et-vert-3WceTBlUoMs"
          
        >
         <p>Publiéé le 24 aout 2021</p>
        </Header>
        <Header
          image="Nik Korba"
          url="https://unsplash.com/fr/photos/rouge-sony-ps-dualshock-4-YsPnamiHdmI"
          
        >
          <p>Publiee le 30 Decembre 2019</p>
       </Header>
     </Footer>
   ) ;
}

export default App ;
