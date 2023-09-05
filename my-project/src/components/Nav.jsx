import { useState, Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Courses', href: '/courses', current: false },
  { name: 'Jobs', href: '/jobs', current: false },
  { name: 'Roadmaps', href: '/roadmaps', current: false },
  { name: 'Login/Signup', href: '/login', current: false },
]

function className(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const user = JSON.parse(localStorage.getItem('user'))
  const  token = localStorage.getItem('token')
  const [active, Setactive] = useState();

  useEffect(() =>{
    Setactive(navigation);
  }, [])
  
  return(
    <Disclosure as = "nav" className= "bg-white-800">
      {({ open }) => (
        <>
        <div className="mx-auto max-w-7xl">
          <div className="relative flex h-16 items-center justify-between">

            <div className="absolute inset-y-0 left-0 sm:hidden">
                
                
                {/*mobile menu */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>


            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    
                    {/*logo with link */}
                    <div className="flex flex-shrink-0">
                      <Link to={'/'} onClick={() => {
                        active.Foreach(element => {
                          element.current = false;
                        })
                        Setactive([...active]);
                      }
                    } className="text-2xl font-bold">talent</Link>

                    </div>


                    <div className=" sm:ml-6 sm:block flex item-cente">
                      <div className="flex space-x-4 items-center">
                        {active && active.map((item) => {
                          if (item.name == 'Login/Signup' && user && token) {
                            return null
                          }

                          return <Link
                        key={item.key}
                        to={item.href}
                        onClick={() => {  
                          active.forEach(element => {
                            element.current = false;
                          });
                          item.current = true;
                          Setactive([...active]);
                        }
                        }
                        className={className(
                          item.current ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                          
                        })}

                      </div>

                    </div>


            </div>


            <div className="absolute inset-y-0 right-0 flex items-center
            ">
              {/*drop down menu */}
              {user && token &&
              <Menu as='div' className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full">
                    <span className="sr-only">open user menu</span>
                    <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                  </Menu.Button>
                </div>
              </Menu>
              }


            </div>
          </div>
          
        </div>
        
        </>
        
      )}

    </Disclosure>
    
  )
}