import { Form } from "./Form";
import { Carrito } from "./Carrito";

export const Card: React.FC = () => {
    return (
    <div className="max-w-[1280px] mx-auto my-8 p-6  rounded-lg border border-[--primary-color]">
        <img src="./src/assets/logo.jpg" className="w-[18em] py-8 rounded mx-auto" alt="logo_wallbit"></img>
        <Form />
        <Carrito />
    </div>
    );
};
  
