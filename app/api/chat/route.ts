import {answer,type Message} from '@/lib/concierge';
// Intentionally free: never invokes a paid provider, even if a key is present.
export async function POST(request:Request){
 try{
  const raw=await request.text();if(raw.length>30000)return Response.json({error:'Message too long.'},{status:413});
  const body=JSON.parse(raw) as {messages?:Message[]};
  if(!Array.isArray(body.messages)||body.messages.length>25)return Response.json({error:'Invalid conversation.'},{status:400});
  const messages:Message[]=body.messages.filter(m=>m&&['user','assistant'].includes(m.role)&&typeof m.content==='string').map(m=>({role:m.role,content:m.content.slice(0,2500)}));
  const last=messages.at(-1);if(!last||last.role!=='user')return Response.json({error:'Please enter a message.'},{status:400});
  return Response.json({...answer(last.content,messages.slice(0,-1)),mode:'Free resort guide'});
 }catch{return Response.json({error:'Please try a shorter message.'},{status:400})}
}
