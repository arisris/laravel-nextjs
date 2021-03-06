import Link from "next/link"
import clsx from "clsx"
import SVGRaw from "@/components/Icon/SVGRaw"
import { useState } from "react"
import { Button } from "konsta/react"

export default function FrontPageAuthMenu({ user }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        type="button"
        className="hover:bg-gray-100 p-1 lg:hidden"
        onClick={() => setOpen(!open)}>
        <SVGRaw d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </button>
      <div
        className={clsx(
          "w-48 lg:flex gap-0 lg:gap-2 items-center absolute lg:relative flex-col lg:flex-row right-0 lg:inset-x-auto bg-white lg:bg-transparent rounded-md lg:rounded-none",
          {
            hidden: !open,
            flex: open,
          },
        )}>
        <Link href="/auth/register">
          <Button component="a" small>
            Register
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button
            component="a"
            colors={{
              text: "text-red-500",
              border: "border-red-500",
              bg: "bg-red-500",
              activeBg: "active:bg-red-500",
              activeBgDark: "active:bg-red-600",
            }}
            small>
            Login
          </Button>
        </Link>
      </div>
    </div>
  )
}
