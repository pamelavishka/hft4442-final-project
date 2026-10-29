// Free local speech recognition. Model assets download; recordings stay on device.
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/dist/transformers.min.js';
env.allowLocalModels = false;
env.backends.onnx.wasm.numThreads = 1;
let transcriber;
function prepare(){
 if(!transcriber) transcriber=pipeline('automatic-speech-recognition','Xenova/whisper-tiny.en',{
  device:'wasm',dtype:'q8',progress_callback:(event)=>{
   if(event.status==='progress')self.postMessage({type:'progress',text:`Downloading speech model${event.progress?` · ${Math.round(event.progress)}% of ${event.file||'file'}`:''}. First use can take a minute.`});
  }
 }).catch(error=>{transcriber=null;throw error});
 return transcriber;
}
self.onmessage=async({data})=>{
 try{
  if(data.type==='load'){await prepare();self.postMessage({type:'ready'});return}
  if(data.type==='transcribe'){
   const model=await prepare();self.postMessage({type:'working',id:data.id});
   const result=await model(data.audio,{chunk_length_s:30,stride_length_s:5,return_timestamps:false});
   self.postMessage({type:'result',id:data.id,text:result.text||''});
  }
 }catch{self.postMessage({type:'error',id:data.id,text:'The local speech model could not load or transcribe. Check your connection for the first model download, then retry. You can also select Browser speech in Voice settings.'})}
};
