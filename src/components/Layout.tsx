import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { LogOut, FileText, Home, PlusCircle } from 'lucide-react';

export function Layout() {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900">
                <Home className="h-5 w-5 mr-1" />
                <span>Home</span>
              </Link>
              {isAuthenticated && (
                <>
                  <Link to="/invoices" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900 ml-4">
                    <FileText className="h-5 w-5 mr-1" />
                    <span>Invoices</span>
                  </Link>
                  <Link to="/invoices/new" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900 ml-4">
                    <PlusCircle className="h-5 w-5 mr-1" />
                    <span>New Invoice</span>
                  </Link>
                </>
              )}
            </div>
            <div className="flex items-center">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              ) : (
                <Link to="/login" className="text-gray-700 hover:text-gray-900">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}