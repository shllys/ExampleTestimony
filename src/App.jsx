import './App.css'
import Testimony from './Components/Testimony'

function App() {

  return (
    <>
      <div className="testimonies">
        <div className="description">
          <h4 className='title'>Testimonies</h4>
          <h1 className='subtitle'>Lo que dicen los clientes</h1>
          <p className="paragraph">Damos un gran valor a las relaciones solidas y hemos visto el beneficio que aporta a nuestro negocio. Los comentarios de los clientes son vitales para ayudarnos a hacerlo bien</p>
        </div>
        <div className="text-perfile">

          <Testimony 
          img='./src/images/nat.jpg' 
          userName='nat-reynolds' 
          comment='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis quae omnis libero nulla aperiam a, obcaecati fuga eveniet cupiditate nam rerum maxime, quod sequi aliquid? Exercitationem, voluptatum accusamus.' 
          name='Nat Reynolds' 
          for='Contador Jefe' />

          <Testimony 
          img='./src/images/celya.jpg' 
          userName='celia-almeda' 
          comment='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem repudiandae expedita quia maxime maiores voluptate, molestiae dolorem. Exercitationem, voluptatum accusamus.' 
          name='Celia Almeda' 
          for='Secretario' />

          <Testimony 
          img='./src/images/bob.jpg' 
          userName='bob-roberts' 
          comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, ipsam ab quisquam minus minima asperiores beatae eaque id! Autem voluptas necessitatibus distinctio earum iste officiis rem illo totam.' 
          name='Bob Roberts' 
          for='Gerente de Ventas' />

        </div>
      </div>
    </>
  )
}

export default App
