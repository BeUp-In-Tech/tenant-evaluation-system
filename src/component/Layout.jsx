import { useSidebar } from '../contexts/SidebarContext.jsx';

export default function Layout({ children }) {
  const { isCollapsed } = useSidebar();

  return (
    <main className={`pt-14 p-6 transition-all duration-300 ${isCollapsed ? 'ml-16' : 'ml-52'}`}>
      {children}
    </main>
  );
}
