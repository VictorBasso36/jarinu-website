import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export interface Data{
 
    name?: string;
    company?: string;
    acting?: string;
    tel?: number;
    email?: number;
    

}

export async function POST(req: NextRequest, res: NextResponse) {
    const dataItems = await req.json();

    const items = dataItems;
    console.log(items)
    try {

        const transporter = nodemailer.createTransport({
            service: 'SMTP',
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.USR,
                pass: process.env.PASS
            }
        })
        console.log('logou', transporter)


        const mailOption = {
            from: 'Guilherme@luziac.com.br',
            to: 'Guilherme@luziac.com.br', ///aoki.alberto@gmail.com
            subject: `Contato via site - ${items?.name ||items?.data?.name } da ${items?.data?.company || items?.data?.acting || items?.acting } `,
            html: `
        <h3>Contato via site</h3>
        <li> Nome: ${items?.data?.name || items?.name}</li>
        <li> Empresa: ${items?.data?.company || items?.company}</li>
        <li> Telefone: ${items?.data?.tel || items?.tel}</li>
        <li> Atuação: ${items?.data?.acting || items?.acting}</li>
        <li> Email: ${items?.data?.email || items?.email}</li>
        `
        }

        console.log('mainlog', mailOption)
        await transporter.sendMail(mailOption)
      

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        console.log("n foi")

        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}

export async function GET() {
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
}