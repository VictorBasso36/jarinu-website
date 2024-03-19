"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MainBanner from "./components/homeBanner";
import Empreendimentos from "./components/carrouselEmpreendimentos";
import QuemSomos from "./components/quemSomos";
import HomeForm from "./components/homeForm";
import Depoimentos from "./components/depoimentos";
import { url } from "inspector";
import ModalLead from "./components/modalLead";
import { useEffect, useState } from "react";
import Status from "./Empreendimento/[slug]/components/status";
import Fotos from "./Empreendimento/[slug]/components/fotos";

interface Foto {
  description?: string;
  url?: string;
}

interface Progresso {
  name?: string;
  percent?: string;
}

export interface PropsGet {
  type?: string;
  slug?: string;
  titulo?: string;
  size?: string;
  vagas?: string;
  imovel?: string;
  quartos?: number;
  simpleName?: number;
  contrato?: string;
  img?: string;
  description?: string;
  endereco?: string;
  enderecoMaps?: string;
  fotos?: Foto[];
  progresso?: Progresso[];
}

async function getData(): Promise<PropsGet[]> {
  const slugMetadata = await (await fetch('/api/Empreendimentos')).json();
  if(!slugMetadata) return []
  const data: PropsGet[] = slugMetadata;
  return data;
}

export default function Home() {
  const [finalData, setFinalData] = useState<PropsGet[]>([]);
  const search = 'Jarinu';

  useEffect(() => {
    getData().then((data) => {
      setFinalData(data);
    });
  }, []);

  const content = finalData.find((objeto: any) => objeto.slug === search.toString());
  if(!content) return null
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        
        <MainBanner />
        <div className={styles.detailsDiv} id="Local">
       
        </div>
        <div className={styles.quemSomosImage} style={{backgroundImage: 'url("/responsivoForms.png")', marginBottom: '0px' }} ></div>
          
          <div className={styles.gradientHere} >
          <iframe className={styles.mainIframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.8338738524317!2d-46.6888852!3d-23.0665513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ced00ca6fad2a3%3A0x10243352ff9fe8f8!2sRes.%20Lagos%20de%20Jarinu%20-%20Machadinho%2C%20Jarinu%20-%20SP%2C%2013240-000!5e0!3m2!1spt-BR!2sbr!4v1710807623302!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         {
              content?.fotos && <Fotos data={content?.fotos} />
            }
            {
              content?.progresso && <Status data={content?.progresso} key={1}/>
            }
            <br />
            <br />
            <br />
            <br />
            <br />
            <HomeForm />
          </div>
        
      </main>
      <Footer/>
      <ModalLead />
    </>
  );
}
