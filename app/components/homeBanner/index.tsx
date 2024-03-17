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
              <p>More no interior de São Paulo com muita qualidade de vida, segurança e elegância.</p>
              <div className={styles.mainIcons}>

              </div>
            </div>
        </div>
    </section>
    </>
  );
}
