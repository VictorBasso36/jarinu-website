"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import ButtonMain from "../buttonMain";

export default function MainBanner() {
  return (
    <>
    <div className={styles.heightDetail} style={{marginTop: "160px"}}>
        <Image width={1500} height={70} src="/mainbgbannerTop.png" alt=""></Image>
    </div>
    <section className={styles.main}>
        <Image className={styles.bannerimg} width={1500} height={630} src="/mainbgbannerBottom.png" alt=""></Image>
        <div className={styles.mainContainer}>
            <div className={styles.contentH1}>
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
            </div>
        </div>
    </section>
    </>
  );
}
