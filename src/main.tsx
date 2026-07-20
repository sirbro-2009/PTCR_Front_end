import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n.js';
import App from './App.js'
import {BrowserRouter} from 'react-router-dom'
import {store} from '@/app/store'
import { Provider } from 'react-redux';
import { Toaster } from "@/components/ui/sonner" 
createRoot(document.getElementById('root') as HTMLDivElement).render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
        <Toaster position="top-center"/>
    </Provider>
    </BrowserRouter>
)
