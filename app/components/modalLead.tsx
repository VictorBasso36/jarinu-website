"use client"
import Link from 'next/link'
import styles from './modalLead.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useOpen } from '../providers/modalProvider'


export default function ModalLead() {
    const { open, setOpen } = useOpen()
    const [render, setRender] = useState<boolean>(false);

    useEffect(() => {
        if(open === 'whatsapp'){
            setRender(true)
        } else if(open === 'true'){
            setRender(false)
        }
        else{
            setRender(false)
        }
    }, [open])

    
    function setClose() {
      setOpen('false')
    }
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

        const response = await fetch('http://localhost:3000/api/email', {
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
          window.open('https://api.whatsapp.com/send?phone=5511976946555&text=Ol%C3%A1,%20adorei%20o%20Jarinu%20-%20Alto%20padr%C3%A3o%20!%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20!', '_blank')

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
      if (!render) {
        return null;
      }
    return (
    <>  
        <section className={styles.main}>
            <div className={styles.container} >
                <div className={styles.modal}>
                    <p className={styles.Close} onClick={setClose}><strong>X</strong></p>
                    <h1>CONVERSE VIA <span><br />WHATSAPP</span></h1>
                    
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Name">
                            <p>Como você gostaria de ser chamado?</p>
                            <input type="text" required={true} name='Name' 
                            value={formData.Name}
                            onChange={handleChange}
                            />
                            
                        </label>
                        <label htmlFor="Tel">
                            <p>Seu zap ou telefone:</p>
                            <input type="tel" required={true}  name='Tel' 
                            value={formData.Tel}
                            onChange={handleChange} />
                        </label>
                        <label htmlFor="Email">
                            <p>E por último, seu melhor e-mail:</p>
                            <input type="email" required={true}  name='Email'
                            value={formData.Email}
                            onChange={handleChange} />
                        </label><br />
                       
                          <button className={styles.mainButton}>
                          {!sucess ? <p>INICIAR <span>CONVERSA</span>{' >'}</p> : <p>CONTATO <span>ENVIADO!</span></p>}
                          </button>
                        
                    </form> 
                    
                    
                </div>
            </div>
        </section>
    </>
  )
}