import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const nav = useNavigate('')
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Ro'yxatdan o'tish
          </h2>
        </div>
        
        <form className="mt-8 space-y-6" >
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Foydalanuvchi nomi
              </label>
              <input
              
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
               
              />
            </div>
            
          
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email manzil
              </label>
              <input
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Familiya
              </label>
              <input
               
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                
              />
            </div>
            
          
            <div>
              <label htmlFor="selection" className="block text-sm font-medium text-gray-700">
                Tanlang
              </label>
              <select
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
               
              >
                <option value="">Tanlang...</option>
                <option value="option1">Variant 1</option>
                <option value="option2">Variant 2</option>
                <option value="option3">Variant 3</option>
              </select>
            </div>
            
            {/* Password field */}
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
            
            {/* Confirm Password field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Parolni tasdiqlang
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
              Ro'yxatdan o'tish
            </button>
          </div>
        </form>
        <div className="text-center text-sm">
            <span className="text-gray-600">Hisobingiz yo'qmi? </span>
            <a href=''  onClick={() => nav('/login')} className="font-medium text-indigo-600 hover:text-indigo-500">
              Login
            </a>
          </div>
      </div>
      
    </div>
  );
};

export default Register;