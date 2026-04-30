import Header from './components/Header'
import LinkList from './components/LinkList'
import Footer from './components/footer'

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-purple-700 to-purple-950 flex flex-col items-center">
      
      <Header />
      <LinkList />
      <Footer />
      
    </div>
  )
}

export default App