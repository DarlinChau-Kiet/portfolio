import PortfolioLayout from './components/pages/Portfolio'; // Đảm bảo đường dẫn này trỏ đúng file Portfolio.tsx của bạn
import './index.css';

function App() {
  return (
    // Bỏ cái main cũ đi, gọi thẳng PortfolioLayout vào đây
    <PortfolioLayout />
  );
}

export default App;