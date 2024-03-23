"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import ButtonMain from "../buttonMain";
import { useEffect, useState } from "react";

export default function HomeForm() {
  const [render, setRender] = useState<boolean>(false);

  const [sucess, setSucess] = useState(false);
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Tel: '',
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sucess && null
    try {

      const response = await fetch('https://jarinu-website.vercel.app/api/email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: formData?.Name,
              company: "sua base de contatos",
              acting: "Contato via modal do site",
              tel: formData?.Tel,
              email: formData?.Email
          }),
      });
      console.log(response)

      if (response.ok) {
        const responseData = await response.json();
        setSucess(true)
        window.open('/Convert', '_blank')
      

      } else {
        console.error('Erro na solicitação:', response.status, response.statusText);
        // Lide com o erro conforme necessário
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      // Lide com o erro conforme necessário
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className={styles.main} id="Contato">
      <div className={styles.mainContainer}>
        <form onSubmit={handleSubmit}>
          <h4>
            Dê o próximo passo <br /> <strong>em direção ao seu sonho</strong>
          </h4>
          <div className={styles.formDiv}>
            <input type="text" placeholder="Nome" required={true} name='Name' 
                            value={formData.Name}
                            onChange={handleChange} />

            <input placeholder="Whatsapp"  type="tel" required={true}  name='Tel' 
                            value={formData.Tel}
                            onChange={handleChange} />
          </div>
          <input className={styles.inputemail}  placeholder="Email" type="email" required={true}  name='Email'
                            value={formData.Email}
                            onChange={handleChange} />
          <button className={styles.mainButton} style={{cursor: "pointer"}}>
            <div className={styles.texthere}>
             {!sucess ? <p><strong>Enviar meu contato</strong></p> : <p><strong>Enviado!</strong></p>}
            </div>
            <div className={styles.DetailMain}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="11"
                height="18"
                viewBox="0 0 11 18"
              >
                <image
                  width="11"
                  height="18"
                  data-name="Camada 31 copiar 4"
                  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAASCAYAAACNdSR1AAAAwklEQVQokXWSOQoCQRBFv/tyG48irswhvImJu4mIgafwHKbmgoE6Dhg9aXDQKaoLqqNXy//VJaAqaSqpKWki6a1YADN+sQDKgLwMT0YxtkA9BidAagqWQMWDQ46cCSug5sEhB8DTFKz/C+xeiTNhnov2VHsTNkG0axHQB67WpRgcnDgZOPPABrAzYFhr7IF7A6ZfHQWBLeBgwAfQs9aF89rRr++xCkdpOx3vQNc799HpOIx9pEtsRw/uAGfglqt2E/QBlcqBkLqnFQIAAAAASUVORK5CYII="
                ></image>
              </svg>
            </div>
        </button>
        </form>
      </div>
    </section>
  );
}
