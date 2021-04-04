import React from "react";
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import Dropdown from "../dropdown/index"

export default function Navbar({ fixed }) {
  const menu = [
    {
      'name': 'Anasayfa',
      'url' : '/',
    },
    {
      'name': 'Kurumsal',
      'url' : '#',
      'dropdown' : [
        {
          'name' : 'Hakkımızda',
          'url' : '/hakkimizda'
        },
        {
          'name' : 'Denem',
          'url' : '/dene'
        }
      ]
    },
    {
      'name': 'İletişim',
      'url' : '/iletisim',
    }
  ];

  const listMenu = menu.map(
    (m, index) => {
      return(m.dropdown 
        ?
        <Dropdown key={index} name={m.name} data={m.dropdown} />
        
        : <li className="nav-item" key={index}>
            <Link href={m.url}>
              <a className="px-3 py-2 flex items-center text-xs capitalize font-bold leading-snug text-white hover:opacity-75">
                {m.name}
              </a>
            </Link>
          </li>
          
      )}
  );
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center px-2 py-3 bg-gray-800 mb-3">
        <div className="container flex flex-wrap justify-between items-center">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:justify-start">
          
            <button
              className="text-white ml-auto cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none">
              {listMenu}
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}