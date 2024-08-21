import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(()=>{
  return {
    server:{
      host:true,
      port:8888,
      strictPrt:false,
      open:true,
      proxy:{
        //        
      },
      headers:{}
      },
    plugins: [vue()],
  }
})
