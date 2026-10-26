export type Listing = {id:string;source:string;title:string;url:string;image:string;price:number|null;currency:string;firstSeen?:string;lastSeen?:string;saved?:boolean;dismissed?:boolean;seen?:boolean;previousPrice?:number|null};
export function parseFinn(html:string):Listing[]{
 const out:Listing[]=[];
 for(const m of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)){
  let doc;try{doc=JSON.parse(m[1])}catch{continue}
  const walk=(v:any)=>{if(!v||typeof v!=='object')return;if(v['@type']==='Product'&&typeof v.url==='string'&&/^https:\/\/www\.finn\.no\/recommerce\/forsale\/item\/\d+/.test(v.url)){
   const p=Number(v.offers?.price);out.push({id:'finn-'+v.url.match(/item\/(\d+)/)?.[1],source:'FINN',title:String(v.name||v.description||'Untitled listing'),url:v.url,image:typeof v.image==='string'?v.image:'',price:v.offers?.price!=null&&Number.isFinite(p)?p:null,currency:'NOK'});
  } for(const val of Object.values(v))if(typeof val==='object')Array.isArray(val)?val.forEach(walk):walk(val);};walk(doc);
 }
 return [...new Map(out.map(x=>[x.id,x])).values()];
}
