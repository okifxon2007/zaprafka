import React, { useState } from 'react';
import Register from '../Register/Register';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav = useNavigate('')
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Tizimga kirish
          </h2>
        </div>
        
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              
              />
            </div>
            
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Parol
              </label>
              <input
                
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                
              />
            </div>
          </div>
          
         
          
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Kirish
            </button>
          </div>
         
          <div className="text-center text-sm">
            <span className="text-gray-600">Hisobingiz yo'qmi? </span>
            <a href='' onClick={() => nav('/register')} className="font-medium text-indigo-600 hover:text-indigo-500">
              Ro'yxatdan o'ting
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;