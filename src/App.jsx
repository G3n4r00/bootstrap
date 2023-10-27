import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/menu'
import Aviso from './components/aviso'



function App() {

  return (
    <>

    <Menu/>
    <Aviso/>


    
      <h1>Aula Bootstrap</h1>
      <button className='btn btn-outline-primary m-4'>Olha Botão</button>
      <button className='btn btn-primary m-4'>Olha Botão</button>
      <button className='btn btn-secondary m-4'>Olha Botão</button>
      <button className='btn btn-danger m-4'>Olha Botão</button>
      <div className="row">
        {/* .col-3*4  */}
        <div className="col-md-6 col-lg-4 col-xl-3">Col-3</div>
        <div className="col-md-6 col-lg-4 col-xl-3">Col-3</div>
        <div className="col-md-6 col-lg-4 col-xl-3">Col-3</div>
        <div className="col-md-6 col-lg-4 col-xl-3">Col-3</div>
      </div>



      {/* Tudo que for para trabalhar com coisas estaticas consigo usar a documentação do bootstrap padrão 

      entretanto quando estamos pensando o que tiver interação com js temos que usar a biblioteca do bootstrap react */}



{/* margin utilizamos o m 

ai mx seria de pegar a direita e esquerda 
ai my seria de pegar em cima e embaixo 


mt margin top 
mb margin bottom 


ms margin start eh a direita 
me margin end eh a esquerda

o react ta sendo engolida pelo the wint 

o bootstrap eh basicamente varias variaveis, varias classes prontas



 */}




      {/* esse container deve pegar normalmente tudo, aqui faremos so para exemplo */}

    <div className="my-3 py-4 text-primary container border border-dark">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam non magni voluptas pariatur iste! Ab, consequatur quos quae quasi, ducimus in neque facilis similique labore cum laudantium animi esse quam, nostrum voluptatibus sint distinctio cupiditate soluta optio qui voluptatem mollitia. Nam explicabo libero voluptas voluptatum, itaque perspiciatis quo ipsa.
    </div>
    <div className="text-secondary container-sm border border-dark">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam non magni voluptas pariatur iste! Ab, consequatur quos quae quasi, ducimus in neque facilis similique labore cum laudantium animi esse quam, nostrum voluptatibus sint distinctio cupiditate soluta optio qui voluptatem mollitia. Nam explicabo libero voluptas voluptatum, itaque perspiciatis quo ipsa.
    </div>
    <div className=" text-success container-md border border-dark">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam non magni voluptas pariatur iste! Ab, consequatur quos quae quasi, ducimus in neque facilis similique labore cum laudantium animi esse quam, nostrum voluptatibus sint distinctio cupiditate soluta optio qui voluptatem mollitia. Nam explicabo libero voluptas voluptatum, itaque perspiciatis quo ipsa.
    </div>
    <div className="text-danger container-lg border border-dark">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam non magni voluptas pariatur iste! Ab, consequatur quos quae quasi, ducimus in neque facilis similique labore cum laudantium animi esse quam, nostrum voluptatibus sint distinctio cupiditate soluta optio qui voluptatem mollitia. Nam explicabo libero voluptas voluptatum, itaque perspiciatis quo ipsa.
    </div>
    <div className="text-warning container-xl border border-dark">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam non magni voluptas pariatur iste! Ab, consequatur quos quae quasi, ducimus in neque facilis similique labore cum laudantium animi esse quam, nostrum voluptatibus sint distinctio cupiditate soluta optio qui voluptatem mollitia. Nam explicabo libero voluptas voluptatum, itaque perspiciatis quo ipsa.
    </div>
    <div className="text-info container-xxl border border-dark">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam non magni voluptas pariatur iste! Ab, consequatur quos quae quasi, ducimus in neque facilis similique labore cum laudantium animi esse quam, nostrum voluptatibus sint distinctio cupiditate soluta optio qui voluptatem mollitia. Nam explicabo libero voluptas voluptatum, itaque perspiciatis quo ipsa.
    </div>
    <div className="text-dark container-fluid border border-dark">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam non magni voluptas pariatur iste! Ab, consequatur quos quae quasi, ducimus in neque facilis similique labore cum laudantium animi esse quam, nostrum voluptatibus sint distinctio cupiditate soluta optio qui voluptatem mollitia. Nam explicabo libero voluptas voluptatum, itaque perspiciatis quo ipsa.
    </div>

      <div className='bg-primary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      <div className='bg-secondary'>Corporis, fugit voluptate. Perspiciatis veritatis quis neque a.</div>
      <div className='bg-success'>Quae officiis a consequuntur harum sit, nemo illo?</div>
      <div className='bg-danger'>Vel itaque ipsa omnis suscipit sit aut nobis!</div>
      <div className='bg-warning'>Eaque repellendus sit ipsam, repudiandae nobis cum numquam.</div>
      <div className='bg-'>Non veritatis pariatur, aperiam harum ducimus dolorum! Incidunt?</div>
      <div className='bg-'>Mollitia dolore, ex cupiditate quaerat saepe dolorem praesentium!</div>
    
    
    </>
  )
}

export default App
