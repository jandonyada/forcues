import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "ForCues",
    description: 'Discover & share AI cues'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider> {/*This is used everywhere, so makes sense that it's in layout.jsx*/}
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;