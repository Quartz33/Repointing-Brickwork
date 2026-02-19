'use client';

import { useState, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  Disclosure,
  Popover,
  Transition,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
  AtSymbolIcon,
} from '@heroicons/react/24/outline';
import { 
  FacebookIcon, 
  InstagramIcon, 
  ArrowBigRight, 
  Cuboid, 
  Pickaxe, 
  BrickWall, 
  Ellipsis 
} from 'lucide-react';

const products = [
  { name: 'Repointing', description: 'Understand your walls', href: '/services/repointing', icon: ArrowBigRight },
  { name: 'Brickwork', description: 'We lay it right', href: '/services/bricklaying', icon: Cuboid },
  { name: 'Stonework', description: 'Craftsmanship in stone', href: '/services/stonework', icon: Pickaxe },
  { name: 'Cavity Works', description: 'Protective layering', href: '/services/cavity-walls', icon: BrickWall },
  { name: 'Other Services', description: 'More than just bricks', href: '/services/other-services', icon: Ellipsis },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-10 bg-white">
      {/* Top bar - visible on large screens */}
      <div className="hidden lg:block bg-[#B72025] text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:07841582767" className="flex items-center gap-2 hover:text-gray-200 transition">
              <PhoneIcon className="w-4 h-4" />
              <span>07841582767</span>
            </a>
            <a href="mailto:repointingbrickwork.iow@gmail.com" className="flex items-center gap-2 hover:text-gray-200 transition">
              <AtSymbolIcon className="w-4 h-4" />
              <span>repointingbrickwork.iow@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/repointingbrickwork" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon className="w-5 h-5 hover:text-gray-200 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Repointing Brickwork</span>
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={144}
              height={144}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6 w-6 text-red-700" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <Popover.Group className="hidden lg:flex lg:gap-x-6 items-center">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:outline-none">
                  Services
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform mt-1 ${open ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 -translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-2"
                >
                  <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-200">
                    <div className="p-4">
                      {products.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-start gap-4 rounded-lg p-3 hover:bg-gray-50 transition"
                        >
                          <item.icon className="h-6 w-6 text-red-600" aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Link href="/projects" className="text-md font-semibold leading-6 text-gray-900 hover:text-red-700 transition">
            Projects
          </Link>
          <Link
            href="/#contactus"
            className="inline-flex items-center px-4 py-1 text-lg font-bold uppercase tracking-widest text-white bg-[#B72025] rounded-lg hover:bg-[#a51e20] transition-colors duration-300 whitespace-nowrap"
          >
            Contact
          </Link>
        </Popover.Group>
      </nav>

      {/* Mobile Drawer */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-40 bg-black/30" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-700 hover:text-red-600"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100">
                        Services
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-1">
                        {products.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-md px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
                >
                  Projects
                </Link>
                <Link
                  href="/#contactus"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}