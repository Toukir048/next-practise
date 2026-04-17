'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const DashboardLayout = ({ children }) => {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="drawer lg:drawer-open min-h-screen bg-base-100">
            <input
                id="my-drawer-3"
                type="checkbox"
                className="drawer-toggle"
                checked={open}
                onChange={() => setOpen(!open)}
            />

            <div className="drawer-content relative flex min-h-screen flex-col bg-base-100">
                {!open && (
                    <label
                        htmlFor="my-drawer-3"
                        onClick={() => setOpen(true)}
                        className="fixed right-4 top-16 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-base-300 bg-base-100/90 shadow-md backdrop-blur transition hover:bg-base-200 lg:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            <span className="block h-[2px] w-5 rounded-full bg-base-content"></span>
                            <span className="block h-[2px] w-5 rounded-full bg-base-content"></span>
                            <span className="block h-[2px] w-5 rounded-full bg-base-content"></span>
                        </div>
                    </label>
                )}

                <div className="w-full p-6 pt-24 lg:p-8 lg:pt-8">
                    {children}
                </div>
            </div>

            <div className="drawer-side z-40">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                    onClick={handleClose}
                ></label>

                <aside className="min-h-full w-80 border-r border-base-300 bg-base-200/95 backdrop-blur-md">
                    <div className="border-b border-base-300 px-5 py-5">
                        <h2 className="text-xl font-bold tracking-wide">Dashboard</h2>
                        <p className="mt-1 text-sm text-base-content/70">
                            Manage your account and overview
                        </p>
                    </div>

                    <ul className="menu p-4 text-base-content">
                        <li className="mb-2">
                            <Link
                                href="/dashboard"
                                onClick={handleClose}
                                className="rounded-xl px-4 py-3 font-medium transition hover:bg-base-300"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link
                                href="/dashboard/profile"
                                onClick={handleClose}
                                className="rounded-xl px-4 py-3 font-medium transition hover:bg-base-300"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/revenue"
                                onClick={handleClose}
                                className="rounded-xl px-4 py-3 font-medium transition hover:bg-base-300"
                            >
                                Revenue
                            </Link>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    )
}

export default DashboardLayout