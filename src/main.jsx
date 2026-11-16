import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import './styles.css';

function Icon({name, ...props}) {
 const paths = {
 arrow: <path d="M5 12h14m-6-6 6 6-6 6"/>,
 home: <><path d="m3 10 9-7 9 7v11h-7v-8h-4v8H3z"/><path d="M7 7v-3"/></>,
 chart: <><path d="M4 3v17h17M8 16v-5m5 5V6m5 10v-8"/></>,
 users: <><circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m0-17a4 4 0 0 1 0 8m3 3a5 5 0 0 1 3 5"/></>,
 dollar: <><path d="M12 2v20m5-16H9a4 4 0 0 0 0 8h6a4 4 0 0 1 0 8H5" transform="translate(0 -2)"/></>,
 pulse: <path d="M2 12h5l3-9 4 18 3-9h5"/>,
 search: <><circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/></>,
 bell: <><path d="M5 17h14l-2-4V9a5 5 0 0 0-10 0v4zm5 4h4"/></>,
 close: <path d="m6 6 12 12M6 18 18 6"/>,
 trend: <path d="m3 16 6-6 4 4 8-9m-6 0h6v6"/>,
 };
 return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
function Logo(){return <a className="brand" href="#top" aria-label="Logo home"><span className="logo-mark"><svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="m20 4 4 10 10-5-5 11 7 5-12 1-4 10-4-10-12-1 8-5L7 9l10 5z" stroke="currentColor" strokeWidth="2.7" strokeLinejoin="round"/><path d="m20 13 2 6 6 1-6 2-2 6-2-6-6-2 6-1z" fill="currentColor"/></svg></span><span>LOGO</span></a>}
const stats=[['50K+','Teams worldwide'],['99.9%','Reliable uptime'],['4.8/5','Customer satisfaction']];
const metrics=[['Total Revenue','$67,432','+12.5%','dollar'],['Active Users','16,100','+8.3%','users'],['Conversion Rate','4.3%','+2.1%','pulse'],['Churn Rate','0.5%','−0.2%','users']];
function Dashboard(){return <section className="dashboard-frame" id="dashboard" aria-label="Product dashboard preview"><div className="dashboard"><aside className="sidebar"><div className="sidebar-title">SaaS Pro<Icon name="close"/></div><div className="side-links">{[['Overview','home'],['Analytics','chart'],['Users','users'],['Revenue','dollar'],['Performance','pulse']].map(([label,icon],i)=><div key={label} className={`side-link ${i===0?'selected':''}`}><Icon name={icon}/>{label}</div>)}</div></aside><div className="dashboard-content"><header className="dashboard-header"><div><h2>Overview</h2><p>Welcome back to your dashboard</p></div><div className="dashboard-tools"><div className="search"><Icon name="search"/><span>Search...</span></div><div className="notification"><Icon name="bell"/><span>3</span></div><div className="avatar">A</div></div></header><div className="metrics">{metrics.map(([title,value,change,icon])=><article className="metric" key={title}><div><h3>{title}</h3><strong>{value}</strong><p><Icon name="trend"/>{change} from last month</p></div><span className="metric-icon"><Icon name={icon}/></span></article>)}</div></div></div></section>}
function App(){return <main id="top"><div className="background" aria-hidden="true"><div className="grid"/><div className="orb orb-left"/><div className="orb orb-center"/><div className="orb orb-right"/><div className="hero-halo"/><div className="dashboard-glow"/></div><header className="navbar"><Logo/><nav aria-label="Main navigation"><a href="#dashboard">Product</a><a href="#dashboard">Solutions</a><a href="#stats">Pricing</a><a href="#stats">Pricing</a><a href="#dashboard">Resources</a></nav><a className="button gradient nav-trial" href="#dashboard">Free Trial<Icon name="arrow"/></a></header><section className="hero" aria-labelledby="hero-title"><div className="announcement"><span aria-hidden="true">✦</span> New: AI-driven workflow automation</div><h1 id="hero-title">Simplify how your<br className="desktop-break"/> Team gets work done</h1><p className="subtitle">A powerful collaboration platform designed to keep your team aligned and productive.</p><div className="actions"><a className="button gradient main-trial" href="#dashboard">Start your 14-day free trial<Icon name="arrow"/></a><a className="button demo" href="#dashboard"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3 21 12 7 21z" fill="currentColor"/></svg>Watch product demo</a></div><div className="stats" id="stats">{stats.map(([value,label])=><article className="stat" key={label}><strong>{value}</strong><span>{label}</span></article>)}</div></section><Dashboard/></main>}
createRoot(document.getElementById('root')).render(<App/>);
