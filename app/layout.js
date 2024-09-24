import { AuthProvider } from '../app/libs/AuthContext'; // Ensure the path is correct
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Your metadata here */}
      </head>
      <body>
        <AuthProvider>
          <Navbar />{/* Navbar now has access to AuthContext */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
