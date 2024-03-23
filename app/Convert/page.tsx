"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MainBanner from "../components/homeBanner";
import Empreendimentos from "../components/carrouselEmpreendimentos";
import QuemSomos from "../components/quemSomos";
import HomeForm from "../components/homeForm";
import Depoimentos from "../components/depoimentos";
import { url } from "inspector";
import ModalLead from "../components/modalLead";
import { useEffect, useState } from "react";
import Status from "../Empreendimento/[slug]/components/status";
import Fotos from "../Empreendimento/[slug]/components/fotos";

export default function Convert() {
  setTimeout(() => {
    window.location.href='https://api.whatsapp.com/send?phone=5511976946555&text=Ol%C3%A1,%20adorei%20o%20Jarinu%20-%20Alto%20padr%C3%A3o%20!%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20!';
  }, 5000);
  return (
    <>
      <Navbar />
      <main className={styles.main} >
        <MainBanner />
        
      </main>
      <Footer/>
      <ModalLead />
    </>
  );
}
