"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import ButtonMain from "../buttonMain";
import { usePathname } from "next/navigation";

export default function MainBanner() {
  const pathname = usePathname()
  return (
    <>
    <div className={styles.heightDetail}  id="home" style={{marginTop: "160px"}}>
        <Image width={1500} height={70} src="/mainbgbannerTop.png" alt=""></Image>
    </div>
    <section className={styles.main} >
        <Image className={styles.bannerimg} width={1500} height={630} src="/mainbgbannerBottom.png" alt=""></Image>
        <div className={styles.mainContainer} style={{zIndex: 2}}>
            <div className={styles.contentH1}>
            {!pathname.includes("/Convert") ?
            <>
              <h1><span>Alto Padrão de</span><br />
              <strong>JARINU</strong></h1>
              <div className={styles.detail}></div>
              <p className={styles.description}>More no interior de São Paulo com muita qualidade de vida, segurança e elegância.</p>
              <div className={styles.mainIcons}>
                <div className={styles.Icon}>
                  <Image src="/piscinaIcon.svg" alt="Piscinas do Jarinu - Imob - Vantagens de morar em Jarin" height={40} width={40}></Image>
                  <p>Piscina Privativa</p>
                </div>
                <div className={styles.Icon}>
                  <Image src="/metragemIcon.svg" alt="580m2 Área Total - Imob - Vantagens de morar em Jarin" height={40} width={40}></Image>
                  <p>580m2 Área Total</p>
                </div>
                <div className={styles.Icon}>
                  <Image src="/arvoreIcon.svg" alt="Cercado de Área Verde - Imob - Vantagens de morar em Jarin " height={40} width={40}></Image>
                  <p>Cercado de Área Verde</p>
                </div>
                <div className={styles.Icon}>
                  <Image src="/carIcon.svg" alt="4 Vagas - Imob - Vantagens de morar em Jarinu" height={40} width={40}></Image>
                  <p>4 Vagas</p>
                </div>
              </div>
              </>
              :
              <>
              <h1><span>Obrigado pelo</span><br />
              <strong className={styles.strong}>CONTATO</strong></h1>
              <div className={styles.detail}></div>
              <p className={styles.description}>Estamos redirecionando você ! se preferir clique no botão abaixo.</p>
              <br />
              <Link target="_blank" href="https://api.whatsapp.com/send?phone=5511976946555&text=Ol%C3%A1,%20adorei%20o%20Jarinu%20-%20Alto%20padr%C3%A3o%20!%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20!">
                <div className={styles.whatsappButton}>                 
                  <Image src="/whatsapp.svg" width={35} height={35} alt='Whatsapp de contato para imobiliária - VilaSul. '></Image>               
                </div>
              </Link>
              </>
              }
            </div>
            <br />
            {!pathname.includes("/Convert") &&
            <ButtonMain textstring="Conheça o Empreendimento" key={1} />}
        </div>
    </section>~

    </>
  );
}
