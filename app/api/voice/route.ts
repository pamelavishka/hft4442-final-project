// Paid speech is deliberately disabled for the free version.
export async function POST(){return Response.json({error:'This site uses free device voices. No paid speech service is enabled.'},{status:410});}
