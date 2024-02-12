// PASOS PARA CONFIGURAR VITE CON RESPECTO A REACT
// Importando la función defineConfig desde vite
import { defineConfig } from 'vite'
// Importando el plugin react desde vitejs
import react from '@vitejs/plugin-react'

// Definiendo el objeto de configuración para vite
export default defineConfig({ // El valor exportado por default del módulo es el objeto de configuración
  plugins: [ // El array de plugins se utiliza para configurar los plugins utilizados por vite
    react()// Se agrega el plugin react al array de plugins para habilitar el soporte para react
  ]
})
