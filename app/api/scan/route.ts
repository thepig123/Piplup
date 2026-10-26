import {parseFinn} from '../../../lib/finn';
export async function POST(req:Request){
 try{
 const b:any=await req.json();const q=String(b.query||'').trim();
 if(!q||q.length>160)return Response.json({error:'Enter a search between 1 and 160 characters.'},{status:400});
 const pages=Math.max(1,Math.min(3,Number(b.pages)||1));const all=[];let scanned=0;let warning='';
 for(let page=1;page<=pages;page++){
 const u=new URL('https://www.finn.no/recommerce/forsale/search');u.searchParams.set('q',q);u.searchParams.set('sort','PUBLISHED_DESC');u.searchParams.set('page',String(page));
 const r=await fetch(u,{headers:{Accept:'text/html'},signal:AbortSignal.timeout(18000)});
 if(!r.ok){if(!scanned)return Response.json({error:`FINN returned ${r.status}. No results changed. Open the search on FINN instead.`},{status:502});warning=`Stopped at page ${page}: FINN returned ${r.status}.`;break;}
 const html=await r.text();const items=parseFinn(html);
 if(!items.length){warning='No structured listings were readable on the last page. This may mean no matches or a changed/blocked page.';break;}
 all.push(...items);scanned++;
 }
 return Response.json({items:[...new Map(all.map(x=>[x.id,x])).values()],scanned,checkedAt:new Date().toISOString(),warning,coverage:`Up to ${pages} search pages. Not a complete market history. Listing dates and shipping are unavailable.`});
 }catch(e){console.error('FINN scan failed',e);return Response.json({error:'FINN could not be reached or the response timed out. Your existing listings are unchanged.'},{status:502})}
}
