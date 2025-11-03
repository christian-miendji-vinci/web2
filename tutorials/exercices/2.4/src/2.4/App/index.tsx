
import './App.css'
import Header from '../Header';
import Footer from '../Footer';

const App =() => {
   return(
     <Footer footerText="On Essaie Juste">
        <Header
          image="Nik Korba" 
          url="https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
          
        >
         <p>Publiéé le 24 aout 2021</p>
        </Header>
        <Header
          image="Nik Korba"
          url="https://images.unsplash.com/photo-1703248184387-f6b2cbe1c981?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
        >
          <p>Publiee le 30 Decembre 2019</p>
       </Header>
     </Footer>
   ) ;
}

export default App ;
