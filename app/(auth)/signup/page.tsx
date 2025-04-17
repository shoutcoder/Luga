import Image from "next/image"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import LoginPageImg from "@/public/LoginPageImg.png"

export default function page() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* Left side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="space-y-2 mb-7">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-gray-700">Enter your details to create your account</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-1.5">
              <label htmlFor="name" className="block font-medium">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-[#d9d9d9] rounded-md"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block font-medium">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-[#d9d9d9] rounded-md"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full border border-[#d9d9d9] rounded-md"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm">
                I agree to the <span className="text-[#1976d2]">Terms and Conditions</span>
              </label>
            </div>

            <button type="submit" className="w-full bg-[#3a5b22] text-white py-3 rounded-md font-medium">
              Sign Up
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="space-y-4">
            <button className="w-full border border-[#d9d9d9] rounded-md py-2 flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Sign up with Google</span>
            </button>
          </div>

          <div className="mt-7 text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-[#1976d2] font-medium">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 rounded-l-[2rem]">
        <div className="h-full w-full relative">
          <Image
            className="object-fit rounded-l-[2rem]"
            src={LoginPageImg}
            alt="Decorative plant leaves"
            fill
            priority
          />
        </div>
      </div>
    </div>
  )
}
