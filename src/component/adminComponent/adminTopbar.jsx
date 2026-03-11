import { useState } from 'react';
import { useSidebar } from '../../contexts/SidebarContext.jsx';

export default function Topbar() {
  const { isCollapsed } = useSidebar();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    { id: 1, message: 'System backup completed successfully', time: '2 min ago', read: false },
    { id: 2, message: 'New user registration requires approval', time: '15 min ago', read: false },
    { id: 3, message: 'Security scan completed', time: '1 hour ago', read: true },
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const markAsRead = (id) => {
    // Mark notification as read
    console.log('Marking notification as read:', id);
  };

  return (
    <header className={`fixed top-0 right-0 h-14 bg-white border-b border-gray-100 flex items-center px-6 gap-4 z-20 transition-all duration-300 ${isCollapsed ? 'left-16' : 'left-52'}`}>
      {/* Search */}
      <div className="flex-1 relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          width="15" height="15" fill="none" viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        <input
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-md pl-9 pr-4 py-2 text-[13px] bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:bg-white transition-all"
          placeholder="Search reports, tenants, logs..."
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Role View */}
        {/* <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
          <span className="text-[11px] text-gray-500 font-medium">ROLE VIEW:</span>
          <span className="text-[13px] font-semibold text-gray-800">Super Admin</span>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div> */}

        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={toggleNotifications}
            className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#6b7280" strokeWidth="1.8"/>
              <path d="M13.73 21a2 2 0 01-3.46 0" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            {notifications.filter(n => !n.read).length > 0 && (
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"/>
            )}
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm text-gray-800">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500 text-sm">
                    No notifications
                  </div>
                )}
              </div>
              <div className="p-3 border-t border-gray-100">
                <button className="text-sm text-blue-500 hover:underline w-full text-center">
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-[13px] font-semibold text-gray-800 leading-tight">Alex Johnson</div>
            <div className="text-[11px] text-gray-400">Super Admin</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[12px] font-bold">
            AJ
          </div>
        </div>
      </div>
    </header>
  );
}