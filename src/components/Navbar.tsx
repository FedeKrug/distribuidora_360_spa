import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';



const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  //{ name: 'Categorías', href: '#', current: true },
  { name: 'Inicio', href: '/', current: false },
  { name: 'Tienda', href: '/tienda', current: false },
  { name: 'Sobre Nosotros', href: '/sobre-nosotros', current: false },
  { name: 'Contacto', href: '/contacto', current: false },
]
const userNavigation = [
  { name: 'Mi Perfil', href: '#' },
  { name: 'Configuración', href: '#' },
  { name: 'Cerrar Sesión', href: '#' },
]

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const initialFormState = {
  searchBarText: "",
}

export const Navbar = () => {

  const { onInputChange, searchBarText } = useForm(initialFormState);




  const handleSubmit = (event: any) => {
    console.log("formSubmit");
    event.preventDefault();
    window.location.href = "/buscar-productos";
  }

  // useEffect(() => {
  //   if (redirect) {
  //     return redirectDocument("/login");
  //   }
  // }, [redirect])


  return (
    <Disclosure as="header" className="bg-white shadow flex-1 w-full mx-auto z-10">
      {({ open }) => (
        <>
          <form onSubmit={handleSubmit}>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
              <div className="relative h-16 flex justify-between">
                <div className="relative z-10 px-2 flex lg:px-0">
                  <div className="py-2 flex items-center">
                    <Link to="/" className='flex items-center'>
                      <img
                        className=" h-10 lg:h-12 w-auto"
                        src="../../public/LogoDist_engranaje.png"
                        alt="Logo"
                      />
                      <img
                        className="hidden lg:block lg:ml-6 h-10 lg:h-12 w-auto"
                        src="../../public/texto_negro.png"
                        alt="Logo"
                      />

                    </Link>
                  </div>
                </div>
                <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Buscar Productos
                    </label>
                    <div className="relative">
                      <div className=" pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center" onClick={handleSubmit}>
                        <FaSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        className="block text-black w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm focus:outline-none focus:text-gray-900  focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Buscar Productos"
                        type="text"
                        value={searchBarText}
                        name="searchBarText"
                        onChange={onInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="relative z-10 flex items-center lg:hidden">
                  <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Abrir Menu</span>
                    {open ? (
                      <IoClose className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                  {/* <button
                  type="button"
                  className="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Ver Notificaciones</span>
                  <FaRegBell className="h-6 w-6" aria-hidden="true" />
                </button> */}

                  <Menu as="div" className="flex-shrink-0 relative ml-4">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Abrir menu de usuario</span>
                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block py-2 px-4 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                      'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </form>
          <form action="">
            <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="pt-2 pb-3 px-2 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                      'block rounded-md py-2 px-3 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3 flex flex-col items-center">
                <div className="px-4 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {/* <span className="sr-only">Ver Notificaciones</span> */}
                    {/* <FaRegBell className="h-6 w-6" aria-hidden="true" /> */}
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </form>
        </>
      )}
    </Disclosure>

  )
}
