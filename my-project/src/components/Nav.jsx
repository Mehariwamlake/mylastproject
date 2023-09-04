import { useState, Fragment } from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Courses', href: '/courses', current: false },
  { name: 'Jobs', href: '/jobs', current: false },
  { name: 'Roadmaps', href: '/roadmaps', current: false },
  { name: 'Login/Signup', href: '/login', current: false },
]


export default function Navbar() {
  return(
    <Disclosure as = "nav" className= "bg-white-800"/>
    
  )
}