import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Piplup Scout · Your next great find',description:'A personal card-hunting dashboard. Track wanted cards, scan FINN and collect your favourite finds.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
