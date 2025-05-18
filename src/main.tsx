import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import TranslateProvider from './context/TranslateProvider.tsx'
import InputProvider from './context/InputProvider.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import TeacherProvider from './context/TeacherProvider.tsx'
import StudentProvider from './context/StudentProvider.tsx'
import { SearchProvider } from './context/SearchProvider.tsx'
import { UserProvider } from './context/UserProvider.tsx'
import { CountProvider } from './context/CountProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <TranslateProvider>
        <InputProvider>
          <TeacherProvider>
            <StudentProvider>
              <SearchProvider>
                <UserProvider>
                  <CountProvider>
                    <App />
                  </CountProvider>
                </UserProvider>
              </SearchProvider>
            </StudentProvider>
          </TeacherProvider>
        </InputProvider>
      </TranslateProvider>
    </BrowserRouter>
  </Provider>
)
