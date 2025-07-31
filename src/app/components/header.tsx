'use client';

import { useState, Fragment } from 'react';
import Image from 'next/image';
import {
  Dialog,
  Disclosure,
  Popover,
  Transition,
} from '@headlessui/react';
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ChevronDownIcon,
  PlayCircleIcon,
  PhoneIcon,
  RectangleGroupIcon,
  AtSymbolIcon,
} from '@heroicons/react/24/outline';
import { FacebookIcon, InstagramIcon } from 'lucide-react';

const products = [
  { name: 'Repointing', description: 'Understand your walls', href: '#', icon: ChartPieIcon },
  { name: 'Brickwork', description: 'We lay it right', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Stonework', description: 'Craftsmanship in stone', href: '#', icon: FingerPrintIcon },
  { name: 'Cavity Works', description: 'Protective layering', href: '#', icon: SquaresPlusIcon },
  { name: 'Other Services', description: 'More than just bricks', href: '#', icon: SquaresPlusIcon },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'Services', href: '#', icon: RectangleGroupIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-10 bg-white">
      {/* Top bar - visible on large screens */}
      <div className="hidden lg:block bg-[#B72025] text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              <span>07841582767</span>
            </div>
            <div className="flex items-center gap-2">
              <AtSymbolIcon className="w-4 h-4" />
              <span>Repointingbrickwork@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FacebookIcon className="w-5 h-5" />
            {/* Removed invalid XIcon */}
            <InstagramIcon className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Repointing Brickwork</span>
            <Image
              src="/logo.jpeg"
              alt="Repointing Brickwork Logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
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
            {({ open }: { open: boolean }) => (
              <>
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
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
                      {products.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-4 rounded-lg p-3 hover:bg-gray-50 transition"
                          >
                            <Icon className="h-6 w-6 text-red-600" aria-hidden="true" />
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <a href="#" className="text-md font-semibold leading-6 text-gray-900">Projects</a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900">Portfolio</a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-1 text-lg  font-bold uppercase tracking-widest text-white bg-[#B72025] rounded-lg hover:bg-[#a51e20] transition-colors duration-300 whitespace-nowrap"
          >
            Contact
          </a>
        </Popover.Group>
      </nav>

      {/* Mobile Drawer */}
      <Dialog as={Fragment} open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="lg:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 z-40 bg-black/30" aria-hidden="true" />

          {/* Panel */}
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <Image
                  src="/logo.jpeg"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-gray-700 hover:text-red-600"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation */}
            <div className="mt-6">
              <Disclosure>
                {({ open }: { open: boolean }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-semibold text-gray-900 hover:bg-gray-100">
                      Services
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-1">
                      {[...products, ...callsToAction].map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              {/* Other Links */}
              <div className="mt-4 space-y-2">
                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100">
                  Projects
                </a>
                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100">
                  Portfolio
                </a>
                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100">
                  Contact
                </a>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}
