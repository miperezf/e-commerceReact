import {useForm} from 'react-hook-form'

const Contacto = () => {

    const {register, handleSubmit} = useForm();

    const enviar = (data) => {
        console.log(data);
    }



  return (
    <div>
      <div className="container">
        <h1 className="main-title">Contacto</h1>
        <form action="" className="formulario" onSubmit={handleSubmit(enviar)}>

          <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")}/>
          <input type="email" placeholder="Ingresa tu nombre" {...register("email")} />
          <input type="phone" placeholder="Ingresa tu telefono" {...register("telefono")} />

          <button className="enviar" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
