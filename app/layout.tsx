import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Go Gator Resort & Spa | Meet Ollie',description:'Find your slower pace. Explore a fictional resort and meet Ollie, your friendly gator concierge.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
